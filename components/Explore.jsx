import { Box, Container, Paper, Typography,Modal,Button } from '@mui/material';
import QRCode from "qrcode.react";
import { getCookie } from '../components/js/cookie';
import { useEffect, useState } from "react";
import * as KlipAPI from '../pages/api/UseKlip';
import { fetchCardsOf } from '../pages/api/UseCaver';
import { MARKET_CONTRACT_ADDRESS } from '../components/contract/index';
import Grid from '@mui/material/Unstable_Grid2';


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

const Explore = () => {

  const [nfts, setNfts] = useState([]);
  const [open, setOpen] = useState(false);
  const [qrvalue,setQrvalue] = useState("DEFAULT_QR_CODE");
  const [modalIndex,setmodalIndex] = useState();
  const [amount,setAmount] = useState(0);
  const [qropen,setQropen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setQropen(false);
  };


  const FetchMarketNFTs = async () =>{
    const _nfts = await fetchCardsOf(MARKET_CONTRACT_ADDRESS);
    setNfts(_nfts);
    console.log(nfts);
  };

  const onClickMarketCard = (index) =>{
    setOpen(true);
    setmodalIndex(index);
    setAmount(nfts[index].amount);
  }

  const buyNFT = (index) =>{
      setQropen(true);
      KlipAPI.buyCard(nfts[index].amount,nfts[index].id,setQrvalue,(result)=>{
      setQropen(false);
      setOpen(false);
    })
  }

  useEffect(() =>{
    FetchMarketNFTs();
  }
  ,[])

  return (
    <>
      <Container>
        <Typography variant='h5' fontWeight={600} >NFT Market</Typography>
        <Typography>NFT를 구매하고 프리퀀시를 모으세요</Typography>

        {/* <Box sx={{bgcolor: '#ccc', height: '100vh'}} > NFT list</Box> */}
        <Box my={5}>
          <Grid
            container
            spacing={2}
            // columns={{ xs: 4, sm: 8, md: 12 }} 
          >
            {Array.from(nfts).map((item, index) => (
              <Grid
                item
                xs={12}
                sm={4}
                md={3}
                key={index}
                sx={{ cursor: 'pointer' }}
                onClick = {() => {onClickMarketCard(index)}}
                // columnSpacing={5}
              >
                <Paper sx={{ width: '100%', height: '100%', p: 3 }}>
                  <Box
                    sx={{
                      bgcolor: '#ccc', width: '100%', height: '80%',
                      backgroundImage: `url(${nfts[index].uri})`,
                      // backgroundImage: `url("https://source.unsplash.com/collection/${index}")`
                    }}
                  >
                  </Box>
                  {/* <Button>xs=2</Button> */}

                  {nfts[index].name.charAt(nfts[index].name.length-1) == "시" ? 
                    <Typography>{nfts[index].name.substring(0,nfts[index].name.length-4)}</Typography>
                    : <Typography>{nfts[index].name.substring(0,nfts[index].name.length-2)}</Typography>
                  }
                
                  <Box sx={{ display: 'flex', mb: {xs: 45, sm: 25, md: 30} }}>
                    
                    {nfts[index].name.charAt(nfts[index].name.length-1) == "시" ? 
                    <Typography mr = {1} variant='p' fontSize='0.65em'>
                    프리퀀시{nfts[index].id}
                    </Typography>
                    : <Typography mr = {1} variant='p' fontSize='0.65em'>
                    쿠폰{nfts[index].id}
                    </Typography>
                  }
                    <Typography variant='p' fontSize='0.8em'>
                      {(nfts[index].amount)/100} Klay
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        {getCookie('isLogin') ? 
        <Box sx = {style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            구매하시겠습니까?
          </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <Box>구매비용 {amount/100}Klay</Box>
                {(!qropen) ?null:<QRCode value={qrvalue} size={256} style={{ margin: "auto" }} />}
                <Button onClick = {()=>{buyNFT(modalIndex)}} sx = {{margin: 2}} variant="contained">Contained</Button>
                <Button onClick = {handleClose} sx ={{margin: 2}} variant="outlined">아니요</Button>           
            </Typography>
        </Box>
                 :  
                  <Box sx = {style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                    로그인
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                  </Box>
          }
        </Modal>
        
    </>
  );
};

            

export default Explore;
