import Pickup from "../models/Pickup.js";

/**
 * GET /api/pickups
 * Fetch all pickups (populated with user & center)
 */
export const getAllPickups = async (req, res) => {
  try {
    const pickups = await Pickup.find()
      .populate("userId", "name email")
      .populate("centerId", "name location")
      .sort({ createdAt: -1 });

    res.json({ success: true, pickups });
  } catch (error) {
    console.error("Error fetching pickups:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

/**
 * PUT /api/pickups/:id
 * Update pickup (status or schedule)
 */
export const updatePickup = async (req, res) => {
  try {
    const { id } = req.params;
    const { pickup_status, scheduled_date } = req.body;

    const updated = await Pickup.findByIdAndUpdate(
      id,
      { pickup_status, scheduled_date },
      { new: true }
    )
      .populate("userId", "name email")
      .populate("centerId", "name location");

    if (!updated)
      return res
        .status(404)
        .json({ success: false, message: "Pickup not found" });

    res.json({ success: true, pickup: updated });
  } catch (error) {
    console.error("Error updating pickup:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
