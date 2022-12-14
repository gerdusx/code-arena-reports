import mongoose from "mongoose";

const FindingDescriptionSectionSchema = new mongoose.Schema({
    sectionType: String,
}, {id: false});

const FindingSchema = new mongoose.Schema({
    type: String,
    name: String,
    description: String,
    published: Boolean,
    wardensRaw: String,
    wardens: Array,
    contest: {
        data: String,
        name: String,
    },
    descriptionSections: [FindingDescriptionSectionSchema],
});

export const Finding = mongoose.models.Findings || mongoose.model("Findings", FindingSchema);
