import mongoose from "mongoose";

const ContestSchema = new mongoose.Schema({
    name: String,
});

export const Contest = mongoose.models.Contests || mongoose.model("Contests", ContestSchema);
