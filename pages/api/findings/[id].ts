import { NextApiRequest, NextApiResponse } from "next";
import { connect } from "../../../utils/connection";
import { ResponseFuncs } from "../../../utils/types";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const method: keyof ResponseFuncs = req.method as keyof ResponseFuncs;

    const catcher = (error: Error) => res.status(400).json({ error });

    const id: string = req.query.id as string;

    const handleCase: ResponseFuncs = {
        GET: async (req: NextApiRequest, res: NextApiResponse) => {
            const { Finding } = await connect(); // connect to database
            res.json(await Finding.findById(id).catch(catcher));
        },

        PUT: async (req: NextApiRequest, res: NextApiResponse) => {
            const { Finding } = await connect(); // connect to database

            const wardens = req.body.wardensRaw.split(", ");

            res.json(await Finding.findByIdAndUpdate(id, {...req.body, wardens}, { new: true }).catch(catcher));
        },

        DELETE: async (req: NextApiRequest, res: NextApiResponse) => {
            const { Finding } = await connect(); // connect to database
            res.json(await Finding.findByIdAndRemove(id).catch(catcher));
        },
    };

    const response = handleCase[method];
    if (response) response(req, res);
    else res.status(400).json({ error: "No Response for This Request" });
};

export default handler;
