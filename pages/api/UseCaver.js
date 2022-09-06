import Caver from 'caver-js';
import { ACCESS_KEY_ID, SECRET_ACCESS_KEY, NFT_CONTRACT_ADDRESS, CHAIN_ID } from '../contract';

const option = {
    headers: [
      {name: 'Authorization', value: 'Basic S0FTSzlDQlAzUlhYMTM0VlIySTdDUVdHOk5CNkdVNkZtTVlJX2d3aHo2UURnSHk3MEpwNE9adnJjdmdjU0tyOWs='},
      {name: 'x-chain-id', value: '8217'},
    ]
}

const caver = new Caver(new Caver.providers.HttpProvider("https://node-api.klaytnapi.com/v1/klaytn", option));

export const getBalance = (address) =>{
    return caver.rpc.klay.getBalance(address).then((response) =>{
      const balance = caver.utils.convertFromPeb(caver.utils.hexToNumberString(response));
      return balance;
    }
    )
  }