import connect from "./db";
import Pool from "commons/models/pool";

async function getPoll(id: string): Promise<Pool | null> {
    const client = await connect();
    const pool = await client.pools.findUnique({
        where: { id }
    });
    return pool;
}

async function addPoll(pool: Pool): Promise<Pool> {
    if (!pool.id) throw new Error(`Invalid pool`);
    const client = await connect();
    const newPool = await client.pools.create({
        data: pool
    });
    return newPool;
}

export default { getPoll, addPoll };
