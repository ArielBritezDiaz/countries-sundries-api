import { pool } from '../../../db.js';
import path from 'path'
import { fileURLToPath } from 'url'

import { PROTOCOL, HOST_SERVER, PORT_SERVER } from '../../../config.js'

export const getAllCountries = async (req, res) => {
    try {

        let countries = []

        const [ rows ] = await pool.query(`
            SELECT
                Country.id_country,
                Country.name,
                Country.official_name,
                Country.abbr,
                Country.internet_tld,
                Country.motto,
                Country.anthem,
                Country.capital,
                Country.official_language,
                Country.population,
                Country.iso_3166_1_alpha_2,
                Country.iso_3166_1_alpha_3,
                Country.calling_code,
                Country.timezone,
                JSON_OBJECT(
                    'id_region', Region.id_region,
                    'name_region', Region.name
                ) AS Region,
                JSON_OBJECT(
                    'id_sub_region', Sub_Region.id_sub_region,
                    'name', Sub_Region.name
                ) AS Sub_Region,
                JSON_OBJECT(
                    'id_date_format', Date_Format.id_date_format,
                    'format', Date_Format.format
                ) AS Date_Format,
                JSON_OBJECT(
                    'id_currency', Currency.id_currency,
                    'abbr', Currency.abbr,
                    'name', Currency.name,
                    'symbol', Currency.symbol
                ) AS Currency,
                JSON_OBJECT(
                    'id_flag', Flag.id_flag,
                    'name', Flag.name,
                    'type', Flag.type,
                    'url', CONCAT('${PROTOCOL}://${HOST_SERVER}:${PORT_SERVER}/flag/', Flag.id_flag)
                ) AS Flag,
                JSON_OBJECT(
                    'id_coat_of_arms', Coat_Of_Arms.id_coat_of_arms,
                    'name', Coat_Of_Arms.name,
                    'type', Coat_Of_Arms.type,
                    'url', CONCAT('${PROTOCOL}://${HOST_SERVER}:${PORT_SERVER}/coat-of-arms/', Coat_Of_Arms.id_coat_of_arms)
                ) AS Coat_Of_Arms
            FROM Country
            JOIN Region ON Country.id_region = Region.id_region
            JOIN Sub_Region ON Country.id_sub_region = Sub_Region.id_sub_region
            JOIN Date_Format ON Country.id_date_format = Date_Format.id_date_format
            JOIN Currency ON Country.id_currency = Currency.id_currency
            JOIN Flag ON Country.id_flag = Flag.id_flag
            JOIN Coat_Of_Arms ON Country.id_coat_of_arms = Coat_Of_Arms.id_coat_of_arms
        `)

        // console.log(rows)
        if(rows && rows.length > 0) {
            countries = rows
        }

        console.log("data countries:", countries)

        return res.status(200).json({
            countries
        })
    } catch(error) {
        console.log(error)
        return res.send({
            "error": error.message
        })
    }
}