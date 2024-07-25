import { config } from "dotenv"

config()

const CODIGO_OK = process.env['CODIGO_OK']
const CODIGO_ERROR = process.env['CODIGO_ERROR']

export { CODIGO_OK, CODIGO_ERROR }