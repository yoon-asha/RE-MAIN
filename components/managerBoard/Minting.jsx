import { useState } from 'react';
import { Autocomplete, Box, Grid, TextField, Typography } from '@mui/material';
import Transaction from '../dashboard/Transaction';

const typoStyle = {
  my: 0,
  fontSize: '1.1em'
};

const Minting = () => {
  const [nftType, setNftType] = useState(options[0]);

  return (
    <>
      <Grid container>
        <Grid md={6} xs={12}>
          <Box mb={2}>
            <Typography variant='h6' sx={typoStyle}>
              가맹점 이름
            </Typography>
            <Typography sx={{ bgcolor: 'aliceblue',  p: 1, fontSize: '1.1em' }}>
              카페이름
            </Typography>
          </Box>
          <Box mb={2}>
            <Typography variant='h6' sx={typoStyle}>
              발행 타입
            </Typography>
            <Autocomplete
              id='store'
              value={nftType}
              onChange={(event, newValue) => {
                setNftType(newValue);
              }}
              options={options}
              renderInput={(params) => (
                <TextField
                  {...params}
                />
              )}
            />
          </Box>
          <Box mb={2}>
            <Typography variant='h6' sx={typoStyle}>
              NFT 이름
            </Typography>
            <Typography sx={{ bgcolor: 'aliceblue',  p: 1, fontSize: '1.1em' }}>
              타입이름 #해당타입의넘버
            </Typography>
          </Box>
          <Box mb={2}>
            <Typography variant='h6' sx={typoStyle}>
              받는 사람
            </Typography>
            <Typography sx={{ bgcolor: 'aliceblue',  p: 1, fontSize: '1.1em' }}>
              지갑 주소 또는 닉네임 입력
            </Typography>
          </Box>
          <Box mb={2}>
            <Typography variant='h6' sx={typoStyle}>
              발행 개수
            </Typography>
            <Typography sx={{ bgcolor: 'aliceblue',  p: 1, fontSize: '1.1em' }}>
              개수 선택
            </Typography>
          </Box>
        </Grid>
        <Grid md={5} xs={12} sx={{ ml: { md: 5, xs: 0 } }}>
          <Typography variant='h6' sx={typoStyle}>
            거래 내역
          </Typography>
          <Transaction />
        </Grid>
      </Grid>
    </>
  );
};

export default Minting;

const options = [
  { label: '프리퀀시', id: 1 },
  { label: '음료 쿠폰', id: 2 },
];
