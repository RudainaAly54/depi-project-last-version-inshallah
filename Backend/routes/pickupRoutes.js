import express from "express";
import Pickup from "../models/pickupModel.js";
import userModel from "../models/userModel.js";
import authMiddleware from "../middleware/authMiddleware.js";
import roleAuth from "../middleware/roleAuth.js";
import Center from "../models/centerModel.js";

const router = express.Router();

// // 🧾 Get all pickups (Admin only)

router.get("/", authMiddleware, roleAuth("admin"), async (req, res) => {
  try {
    const pickups = await Pickup.find()
      .populate("userId", "name email")     // ✅ populate user info
      .populate("centerId", "name location") // ✅ populate center info
      .populate("deliveryAgentId", "name email role")
      .sort({ createdAt: -1 });

    res.json({ success: true, pickups });
  } catch (error) {
    console.error("Error fetching pickups:", error.message);
    res.status(500).json({ success: false, message: error.message });
  }
});


// ♻️ Create a new pickup (user only)
router.post("/", authMiddleware, async (req, res) => {
  try {
    const { items } = req.body;
    if (!items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ success: false, message: "Items required" });
    }

    const user = await userModel.findById(req.userId);
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    const pickup = await Pickup.create({
      userId: user._id,
      userName: user.name,
      items,
      status: "pending",
    });

    res.json({ success: true, pickup });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// 👤 Get current user's pickups (user)
router.get("/my", authMiddleware, async (req, res) => {
  try {
    const pickups = await Pickup.find({ userId: req.userId }).sort({ createdAt: -1 });
    res.json({ success: true, pickups });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// 🚚 Assign pickup to agent (admin)
router.put("/:id/assign", authMiddleware, roleAuth("admin"), async (req, res) => {
  try {
    const { id } = req.params;
    const { deliveryAgentId, pickupTime } = req.body;

    const pickup = await Pickup.findById(id);
    if (!pickup) return res.status(404).json({ success: false, message: "Pickup not found" });

    pickup.deliveryAgentId = deliveryAgentId;
    pickup.pickupTime = pickupTime ? new Date(pickupTime) : new Date();
    pickup.status = "assigned";
    await pickup.save();

    res.json({ success: true, pickup });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// ✅ Mark pickup as completed (admin or assigned agent)
router.put("/:id/complete", authMiddleware, async (req, res) => {
  try {
    const { id } = req.params;
    const pickup = await Pickup.findById(id);
    if (!pickup) return res.status(404).json({ success: false, message: "Pickup not found" });

    if (
      req.userRole !== "admin" &&
      pickup.deliveryAgentId?.toString() !== req.userId
    ) {
      return res.status(403).json({ success: false, message: "Not authorized" });
    }

    if (pickup.status === "completed") {
      return res.status(400).json({ success: false, message: "Already completed" });
    }

    // Calculate points
    const POINTS_PER_KG = {
      Plastic: 10,
      Paper: 8,
      Metal: 15,
      Glass: 6,
      "E-Waste": 20,
    };
    const totalPoints = pickup.items.reduce((acc, item) => {
      const perKg = POINTS_PER_KG[item.category] || 0;
      return acc + perKg * (item.weight || 0);
    }, 0);

    pickup.status = "completed";
    pickup.awardedPoints = totalPoints;
    await pickup.save();

    // Update user points
    await userModel.findByIdAndUpdate(pickup.userId, {
      $inc: { points: totalPoints },
    });

    res.json({ success: true, pickup, awardedPoints: totalPoints });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;
