import database from "../../utils/Database";

export default async function handler(req,res) {


        await database.connectDatabase();
        await database.disconnectFromDB();

        res.status(200).json({

             name:'Tijani Abdellatif'
        })
}