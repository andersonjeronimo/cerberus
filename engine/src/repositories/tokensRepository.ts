import connect from "./db";
import { Token } from "commons/models/token";

async function getToken(id: string): Promise<Token | null> {
    const client = await connect();
    const token = await client.tokens.findUnique({
        where: { id }
    });
    return token;
}

async function addToken(token: Token): Promise<Token> {
    if (!token.id) throw new Error(`Invalid token`);   
    
    const client = await connect();
    const newToken = await client.tokens.create({
        data: token
    });

    return newToken;
}

export default { getToken, addToken };