import mongoose from "mongoose";

const FindingSchema = new mongoose.Schema({
    type: String,
    name: String,
    published: Boolean,
});

export const Finding = mongoose.models.Findings || mongoose.model("Findings", FindingSchema);