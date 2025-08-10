import Config from "../config";
import { PrismaClient } from "commons/generated/prisma";

let singleton: PrismaClient;

/* export default async (): Promise<PrismaClient> => {
    if (!singleton) {
        singleton = new PrismaClient();
        await singleton.$connect();
    }
    return singleton;
}
 */
const connect = async (): Promise<PrismaClient> => {
    if (!singleton) {
        singleton = new PrismaClient();
        await singleton.$connect();
    }
    return singleton;
}

export default connect;