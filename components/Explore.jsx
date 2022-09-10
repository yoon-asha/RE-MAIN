import { Box, Container, Paper, Typography } from '@mui/material';
import { useEffect, useState } from "react";
import * as KlipAPI from '../pages/api/UseKlip';
import { fetchCardsOf } from '../pages/api/UseCaver';
import { MARKET_CONTRACT_ADDRESS } from '../pages/contract';
import Grid from '@mui/material/Unstable_Grid2';
import Image from 'next/image';



const Explore = () => {

  const [nfts, setNfts] = useState([]);

  const FetchMarketNFTs = async () =>{
    const _nfts = await fetchCardsOf(MARKET_CONTRACT_ADDRESS);
    setNfts(_nfts);
  };

  const onClickCardMarketCard = (amount,tokenId) =>{
    KlipAPI.buyCard(amount,tokenId);

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
                onClick = {() => {onClickCardMarketCard(nfts[index].amount,nfts[index].id)}}
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
                    <Typography mr = {1} variant='p' fontSize='0.8em'>
                    프리퀀시{nfts[index].id}
                    </Typography>
                    : <Typography mr = {1} variant='p' fontSize='0.8em'>
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
    </>
  );
};

export default Explore;
