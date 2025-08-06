import chainid = require("./chainid");

export type Token = {
    id:string;
    name:string;
    sybol:string;
    decimals:number;
    network: chainid.ChainId
}