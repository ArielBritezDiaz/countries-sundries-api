import { pool } from '../../../db.js';
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'

export const getViewFlag = async (req, res) => {
    try {
        const idFlag = parseInt(req.params.idFlag)
        let data = []

        const [ rows ] = await pool.query(`SELECT url FROM Flag WHERE id_flag = ?`, [idFlag])

        if(rows && rows.length > 0) {
            data = rows
            console.log(data)
            const urlImage  = data[0].url
            const resImage = '../../assets/flag/' + urlImage

            const __filename = fileURLToPath(import.meta.url);
            const __dirname = dirname(__filename);
            const routeImage = path.join(__dirname, resImage)
            console.log(__dirname)
            return res.sendFile(routeImage)
        } else {
            return res.status(404).json({
                "message": "The id flag doesn't exist"
            })
        }

    } catch(error) {
        console.log(error)
        return res.status(500).send({
            "error": error.message
        })
    }
}