import { Box, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { getCookie } from '../js/cookie';
import Possession from './Possession';
import Transaction from './Transaction';

const MyPage = () => {
  const [balance, setBalance] = useState('');

  const typoStyle = {
    my: 1,
  };

  useEffect(() => {
    setBalance(getCookie('balance'));
  }, []);
  return (
    <>
      <Grid container>
        <Grid md={8} xs={12}>
          <Box mb={3}>
            <Typography variant='h6' sx={typoStyle}>
              보유 잔고
            </Typography>
            <Typography sx={{ bgcolor: 'aliceblue', fontSize: '1.2em', p: 1 }}>
              {balance} KLAY
            </Typography>
          </Box>
          <Grid>
            <Typography variant='h6' sx={typoStyle}>
              보유 교환권
            </Typography>
            <Possession />
          </Grid>
        </Grid>
        <Grid md={3} xs={12} sx={{ ml: { md: 5, xs: 0 } }}>
          <Typography variant='h6' sx={typoStyle}>
            거래 내역
          </Typography>
          <Transaction />
        </Grid>
      </Grid>
    </>
  );
};

export default MyPage;