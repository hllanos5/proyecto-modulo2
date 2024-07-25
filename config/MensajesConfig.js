import { config } from "dotenv"

config()

const MENSAJE_OK = process.env['MENSAJE_OK']
export { MENSAJE_OK }