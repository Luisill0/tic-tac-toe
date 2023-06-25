import dotenv from 'dotenv';
dotenv.config();
import { appServer } from "./app";

const PORT = process.env['PORT'];
if(!PORT) throw new Error('port is not defined');

appServer.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
})