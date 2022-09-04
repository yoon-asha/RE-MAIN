import axios from 'axios';
import Caver from 'caver-js';
import { ACCESS_KEY_ID, SECRET_ACCESS_KEY, NFT_CONTRACT_ADDRESS, CHAIN_ID } from '../contract/index';

const option = {
    headers: [
        {
            name: "Authorization",
            value: "Basic " + Buffer.from(ACCESS_KEY_ID + ":" + SECRET_ACCESS_KEY).toString("base64")
        },
        { name: "x-chain-id", value: CHAIN_ID }
    ]
};

const caver = new Caver(new Caver.providers.HttpProvider("https://node-api.klaytnapi.com/v1/klaytn", option));

export const getBalance = (address) => {
    return caver.rpc.klay.getBalance(address).then((response) => {
        const balance = caver.utils.convertFromPeb(caver.utils.hexToNumberString(response));
        console.log(`BALANCE: ${balance}`);
        return balance;
    });
};