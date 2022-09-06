import axios from 'axios';
import { NFT_CONTRACT_ADDRESS, MARKET_CONTRACT_ADDRESS } from '../contract/contract.cypress';

const A2P_API_PREPARE_URL = 'https://a2a-api.klipwallet.com/v2/a2a/prepare';
const APP_NAME = 'KLAY_MARKET';
//const isMobile = window.screen.width >= 1280 ? false : true;

const getKlipAccessUrl = (method, request_key) => {
    if (method === "QR") {
        return `https://klipwallet.com/?target=/a2a?request_key=${request_key}`;
    }
    // 딥링크 기술로 카카오계정으로 자동 연결
    return `kakaotalk://klipwallet/open?url=https://klipwallet.com/?target=/a2a?request_key=${request_key}`;
}

export const getAddress = (setQrvalue, callback) => {

    axios.post(A2P_API_PREPARE_URL, {
        bapp: {
            name: APP_NAME
        },
        type: "auth"
    }
    ).then((response) => {
        const request_key = response.data.request_key;
        // const request_key = response.data.request_key;
        // if (isMobile) {
        //     window.location.href = getKlipAccessUrl("android", request_key);
        // } else {
        //     setQrvalue(getKlipAccessUrl("QR", request_key));
        // }
        setQrvalue(getKlipAccessUrl("QR", request_key));
        // const qrcode = `https://klipwallet.com/?target=/a2a?request_key=${request_key}`;
        // setQrvalue(qrcode);
        let timerId = setInterval(() => {
            axios.get(`https://a2a-api.klipwallet.com/v2/a2a/result?request_key=${request_key}`)
                .then((res) => {
                    if (res.data.result) {
                        console.log(`[Result] ${JSON.stringify(res.data.result)}`);
                        callback(res.data.result.klaytn_address);
                        clearInterval(timerId);
                        setQrvalue("DEFAULT");
                    }
                });
        }, 1000);
    });
};