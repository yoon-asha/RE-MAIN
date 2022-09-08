import { Box, Grid, Typography } from '@mui/material';

const MyPage = () => {
  return (
    <>
      <Grid container>
        <Grid item>
          <Box>
            <Typography>보유 잔고</Typography>
            <Box sx={{ bgcolor: 'aliceblue' }}> 0000.00 KLAY</Box>
          </Box>
          <Grid>
            <Typography>보유 교환권</Typography>
          </Grid>
        </Grid>
        <Grid>
          <Typography>거래 내역</Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default MyPage;
