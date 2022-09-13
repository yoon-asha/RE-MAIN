import { Box, Container, Button } from '@mui/material';
import QRCode from "qrcode.react";
import { fetchCardsOf, getBalance, readCount, setCount } from "../pages/api/UseCaver";
import { useState } from "react";
import * as KlipAPI from "../pages/api/UseKlip";
import { getCookie, setCookie } from '../components/js/cookie';


const DEFAULT_QR_CODE = "DEFAULT";
const DEFAULT_ADDRESS = "0x000000000000000000000000000000";
function Login(value) {
  const [myBalance, setMyBalance] = useState("0");
  const [myAddress, setMyAddress] = useState(DEFAULT_ADDRESS);

  // UI
  const [qrvalue, setQrvalue] = useState(DEFAULT_QR_CODE);

  const getAddress = async () => {
    KlipAPI.getAddress(setQrvalue, async (address) => {
      const _balance = await getBalance(address);  //비동기(async) await 

      const expires = new Date();

      expires.setTime(expires.getTime() + 60 * 60 * 24 * 1000);

      const option = {
        path: '/',
        expires
      };
      setCookie("isLogin", true, option);
      setCookie("address", address, option);
      setCookie("balance", _balance, option);
      value.setOpen(false);
      value.setIsLogin(getCookie('isLogin'));
      return value;
    });
  }

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 10,
    p: 4,
    pt: 3,
    borderRadius: 2,
    textAlign: 'center'
  };

  return (
    <>
      <Box sx={style}>
        <Button onClick={getAddress}
          sx={{ fontSize: '1.2em', mb: 1 }}
        >
          Klip 지갑 연결하기
        </Button>

        <Container
          style={{
            backgroundColor: "white",
            width: 300,
            height: 300,
            padding: 20
          }}>
          <QRCode value={qrvalue} size={256} style={{ margin: "auto" }} />
          <br />
          <br />
        </Container>
      </Box>
    </>
  );
};

export default Login;