import mongoose from "mongoose";

const centerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    location: { type: String, default: "" },
    phone: { type: String, default: "" },
  },
  { timestamps: true }
);

export default mongoose.model("Center", centerSchema);
