//IMPORT MONGOOSE
import mongoose from 'mongoose';
import { Finding } from "../schemas/FindingSchema";

const { DATABASE_URL } = process.env;

// connection function
export const connect = async () => {
	const conn = await mongoose.connect(DATABASE_URL as string).catch((err) => console.log(err));
	console.log('Mongoose Connection Established');

	return { conn, Finding };
};