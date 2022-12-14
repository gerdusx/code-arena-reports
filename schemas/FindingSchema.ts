import mongoose from "mongoose";

const FindingDescriptionSectionSchema = new mongoose.Schema(
    {
        sectionType: String,
        content: String,
        href: String
    },
    { id: false }
);

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
    descriptionSections: [
        {
            sectionType: String,
            content: String,
            href: String,
        },
    ],
});

export const Finding = mongoose.models.Findings || mongoose.model("Findings", FindingSchema);
