import { Box, Paper, Typography } from '@mui/material';

const MyPage = () => {
  return (
    <>
      <Box>
        <Typography>보유 잔고</Typography>
        <Typography>0000.00 KLAY</Typography>
      </Box>
      <Box>
        <Typography>보유 교환권</Typography>
      </Box>
      <Box>
        <Typography>거래 내역</Typography>
      </Box>
    </>
  );
};

export default MyPage;
