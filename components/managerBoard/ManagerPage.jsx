import { Box, Grid, Typography } from '@mui/material';
import Transaction from '../dashboard/Transaction';

const typoStyle = {
  my: 1,
};

const ManagerPage = () => {
  return (
    <>
      <Grid container>
        <Grid md={8} xs={12}>
          <Box mb={3}>
            <Typography variant='h6' sx={typoStyle}>
              보유 잔고
            </Typography>
            <Typography sx={{ bgcolor: 'aliceblue', fontSize: '1.2em', p: 1 }}>
              0000.00 KLAY
            </Typography>
          </Box>
          <Box mb={3}>
            <Typography variant='h6' sx={typoStyle}>
              발행된 NFT
            </Typography>
            <Typography sx={{ bgcolor: 'aliceblue', fontSize: '1.2em', p: 1 }}>
              000000 개
            </Typography>
          </Box>
          <Box mb={3}>
            <Typography variant='h6' sx={typoStyle}>
              잔여 프리퀀시
            </Typography>
            <Typography sx={{ bgcolor: 'aliceblue', fontSize: '1.2em', p: 1 }}>
              000000 개
            </Typography>
          </Box>
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

export default ManagerPage;
