import dotenv from 'dotenv';
dotenv.config();

const MONITOR_INTERVAL: number = parseInt(`${process.env.MONITOR_INTERVAL}`);
const CHARGE_INTERVAL: number = parseInt(`${process.env.CHARGE_INTERVAL}`);
const NETWORK: string = `${process.env.NETWORK}`;
const EXCHANGE: string = `${process.env.EXCHANGE}`;
const DATABASE_URL: string = `${process.env.DATABASE_URL}`;
const UNISWAP_GRAPH_URL: string = `${process.env.UNISWAP_GRAPH_URL}`;
const UNISWAP_ROUTER: string = `${process.env.UNISWAP_ROUTER}`;
const POOL_COUNT: number = parseInt(`${process.env.POOL_COUNT}`);
const WS_PORT: number = parseInt(`${process.env.WS_PORT}`);
const CORS_ORIGIN: string = `${process.env.CORS_ORIGIN}`;
const JWT_SECRET: string = `${process.env.JWT_SECRET}`;
const JWT_EXPIRES: number = parseInt(`${process.env.JWT_EXPIRES}`);
const CERBERUS_LOGS: string = `${process.env.CERBERUS_LOGS}`;
const RPC_NODE: string = `${process.env.RPC_NODE}`;
const CERBERUS_PAY_CONTRACT: string = `${process.env.CERBERUS_PAY_CONTRACT}`;
const ADMIN_PRIVATE_KEY: string = `${process.env.ADMIN_PRIVATE_KEY}`;
const MAILER_TRANSPORT: string = `${process.env.MAILER_TRANSPORT}`;
const SITE_URL: string = `${process.env.SITE_URL}`;
const AES_KEY: string = `${process.env.AES_KEY}`;

export default {
    MONITOR_INTERVAL,
    CHARGE_INTERVAL,
    NETWORK,
    EXCHANGE,
    DATABASE_URL,
    UNISWAP_GRAPH_URL,
    UNISWAP_ROUTER,
    POOL_COUNT,
    WS_PORT,
    CORS_ORIGIN,
    JWT_SECRET,
    JWT_EXPIRES,
    CERBERUS_LOGS,
    RPC_NODE,
    CERBERUS_PAY_CONTRACT,
    ADMIN_PRIVATE_KEY,
    MAILER_TRANSPORT,
    SITE_URL,
    AES_KEY
}