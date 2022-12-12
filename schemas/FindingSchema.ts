import mongoose from "mongoose";

const FindingSchema = new mongoose.Schema({
    type: String,
    name: String,
    description: String,
    published: Boolean,
    contest: {
        data: String,
        name: String,
    },
});

export const Finding = mongoose.models.Findings || mongoose.model("Findings", FindingSchema);
