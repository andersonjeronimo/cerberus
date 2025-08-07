import chainid = require("./chainid");

export type Token = {
    id:string;
    name:string;
    symbol:string;
    decimals:number;
    network: chainid.ChainId
}