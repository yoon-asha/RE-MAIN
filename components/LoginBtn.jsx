import { Box, Typography, Container, Button } from '@mui/material';
import QRCode from "qrcode.react";
import { fetchCardsOf, getBalance, readCount, setCount } from "../pages/api/UseCaver";
import { useState } from "react";
import * as KlipAPI from "../pages/api/UseKlip";

const DEFAULT_QR_CODE = "DEFAULT";
const DEFAULT_ADDRESS = "0x000000000000000000000000000000";
function Login() {
  const [myBalance, setMyBalance] = useState("0");
  const [myAddress, setMyAddress] = useState(DEFAULT_ADDRESS);

  // UI
  const [qrvalue, setQrvalue] = useState(DEFAULT_QR_CODE);

  const getAddress = () => {
    KlipAPI.getAddress(setQrvalue, async (address) => {
      setMyAddress(address);
      const _balance = await getBalance(address);
      setMyBalance(_balance);
    });
    // const _balance = getBalance(address);
    // setMyBalance(_balance);
  }


  // const _balance = () => {
  //     getBalance(myAddress)
  //     setMyBalance(_balance);
  //     console.log('balance>>>'+myBalance)
  // }

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 10,
    p: 4,
    borderRadius: 2
  };

  return (
    <>
      <Box sx={style}>
        <Typography onClick={getAddress} id='modal-modal-title' variant='h6' component='h2'>
          Klip 지갑 연결하기
        </Typography>

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
        <Button onClick={(async () => {
      const _balance = await getBalance(myAddress)
      setMyBalance(_balance);
      console.log('balance>>>'+myBalance)
          })} >잔액 조회</Button>
        
        <Typography id='modal-modal-description' variant='subtitle1' component='h4'>{myBalance}</Typography>
        <Typography id='modal-modal-description' variant='subtitle1' component='h4'>내 지갑 주소 {myAddress}</Typography>
      </Box>
    </>
  );
};

export default Login;
