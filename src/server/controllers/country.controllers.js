import { pool } from '../../../db.js';
import path from 'path'
import { fileURLToPath } from 'url'

import { PORT, DOMAIN, PROTOCOL } from '../../../config.js'

export const getCountry = async (req, res) => {
    try {
        const id = req.query.id || ""
        const country = req.query.name || ""
        const official_name = req.query.official_name || ""

        const url = req.originalUrl
        const endpoint = url.split('?')[0].slice(1)
        let results = 0
        let errorResponse = []
        let response = []
        let statusServer = 200

        const isIdValid = /^[0-9]+$/.test(id)

        if (!isIdValid) {
            errorResponse.push(`ID '${id}' not found.`)
            return res.status(400).json({
                get: endpoint,
                parameters: { id },
                errors: errorResponse,
                results,
                response,
            })
        }

        const parameters = {
            ...(id !== "" && { id: parseInt(id) }),
            ...(country !== "" && { name: country }),
            ...(official_name !== "" && { official_name: official_name }),
        }

        if (Object.keys(parameters).length === 0) {
            return res.status(400).json({
                get: endpoint,
                parameters,
                errors: "No parameters specified",
                results,
                response,
            })
        }

        const whereClauses = []
        const whereValues = []

        if (parameters.id) {
            whereClauses.push("Country.id = ?")
            whereValues.push(parameters.id)
        }
        if (parameters.name) {
            whereClauses.push("Country.name = ?")
            whereValues.push(parameters.name)
        }
        if (parameters.official_name) {
            whereClauses.push("Country.official_name = ?")
            whereValues.push(parameters.official_name)
        }

        try {
            [response] = await pool.query(
                `
                    SELECT
                        Country.id AS id,
                        Country.name AS name,
                        Country.official_name AS official_name,
                        Country.internet_tld AS internet_tld,
                        Country.coat AS coat,
                        CONCAT('${PROTOCOL}://${DOMAIN}:${PORT}/${endpoint}/flag/', Country.id, '.svg') AS flag,
                        Country.motto AS motto,
                        Country.anthem AS anthem,
                        Country.official_language AS official_language,
                        Country.population AS population,
                        Country.calling_code AS calling_code,
                        Country.timezone AS timezone,
                        Date_Format.format AS date_format,
                        JSON_OBJECT(
                            'region_name', Region.name,
                            'sub_region_name', Sub_Region.name,
                            'capital', Country.capital
                        ) AS location,
                        JSON_OBJECT(
                            'abbr', Currency.abbr,
                            'name', Currency.name,
                            'symbol', Currency.symbol
                        ) AS currency,
                        JSON_OBJECT(
                            'iso3166_code_alpha2', Country.iso_3166_1_alpha_2,
                            'iso3166_code_alpha3', Country.iso_3166_1_alpha_3
                        ) AS iso_code
                    FROM
                        Country
                    INNER JOIN
                        Region
                            ON
                            Country.id_region = Region.id_region
                    INNER JOIN
                        Sub_Region
                            ON
                            Country.id_sub_region = Sub_Region.id_sub_region
                    INNER JOIN
                        Date_Format
                            ON
                            Country.id_date_format = Date_Format.id_date_format
                    INNER JOIN
                        Currency
                            ON
                            Country.id_currency = Currency.id_currency
                    ${
                        whereClauses.length > 0 ? `WHERE ${whereClauses.join(" AND ")}` : ""
                    }
                `,
                [whereValues]
            )

            if (response.length > 0) {
                results = 1
            } else {
                results = 0
                statusServer = 404
                if (country !== "" && id === "" && official_name === "") {
                    errorResponse.push(`Country '${country}' not found.`)
                }
                if (country === "" && id !== "" && official_name === "") {
                    errorResponse.push(`ID '${id}' not found.`)
                }
                if (country === "" && id === "" && official_name !== "") {
                    errorResponse.push(`Official Name of Country '${official_name}' not found.`)
                }
            }
        } catch (error) {
            errorResponse.push(error.message)
            statusServer = 400
        }

        const bodyResponse = {
            get: endpoint,
            parameters,
            errors: errorResponse,
            results,
            response: response || [],
        }

        res.status(statusServer).send(bodyResponse)
    } catch (error) {
        console.log(new Date())
        console.log(error)
        return res.status(500).json({
            message: "Internal server error",
        })
    }
}

export const getCountryFlag = async (req, res) => {
    try {
        const imageId = req.params.id
        const svgPath = `./assets/flags/${imageId}`
        const svgContent = fs.readFileSync(svgPath, 'utf-8')
        res.send(svgContent)
    } catch (error) {
        console.log(new Date())
        console.log(error)
        return res.status(500).json({
            message: "Internal server error",
        })
    }
}
