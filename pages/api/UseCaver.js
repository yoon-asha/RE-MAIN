import Caver from 'caver-js'
import {
  ACCESS_KEY_ID,
  // SECRET_ACCESS_KEY,
  // NFT_CONTRACT_ADDRESS,
  CHAIN_ID,
} from '../contract/index';
import { MARKET_CONTRACT_ADDRESS } from '../contract/index';
import KIP17ABI from "../abi/RemainABI.json";
import MARKETABI from "../abi/MarketABI.json"
import { NFT_CONTRACT_ADDRESS } from '../contract/index';

const option = {
  headers: [
    {
      name: 'Authorization',
      value: `Basic ${ACCESS_KEY_ID}`,
    },
    { name: 'x-chain-id', value: CHAIN_ID },
  ],
}


const caver = new Caver(
  new Caver.providers.HttpProvider(
    'https://node-api.klaytnapi.com/v1/klaytn',
    option
  )
)
const NFTContract = new caver.contract(KIP17ABI,NFT_CONTRACT_ADDRESS);
const MarketContract = new caver.contract(MARKETABI,MARKET_CONTRACT_ADDRESS);

export const getBalance = (address) => {
  return caver.rpc.klay.getBalance(address).then((response) => {
    const balance = caver.utils.convertFromPeb(
      caver.utils.hexToNumberString(response)
    )
    return balance
  })
}

export const fetchCardsOf = async (address) => {
  const _balance = await NFTContract.methods.balanceOf(address).call();
  console.log(_balance);
  const tokenIds =[];
  const id = await NFTContract.methods.ownerTokens(address).call();
  for (let i =0;i<_balance;i++){
    tokenIds.push(id[i]);
  }

  const tokenURIs =[];
  for (let i =0;i<_balance;i++){
    const uri = await NFTContract.methods.tokenURIs(tokenIds[i]).call();
    tokenURIs.push(uri);
  }
  console.log(`${tokenIds}`);
  console.log(`${tokenURIs}`);

  const tokenAmount = [];
  for (let i =0;i<_balance;i++){
    const amount = await MarketContract.methods.nftAmount(tokenIds[i]).call();
    tokenAmount.push(amount);
  }

  const CafeName = [];
  for (let i =0;i<_balance;i++){
    const string = await NFTContract.methods.HashToString(tokenIds[i]).call();
    CafeName.push(string);
  }

  const nfts = [];
  for(let i =0;i<_balance;i++){
    nfts.push({uri: tokenURIs[i],id: tokenIds[i],amount:tokenAmount[i],name:CafeName[i]});
  }
  console.log(nfts);
  return nfts;
}