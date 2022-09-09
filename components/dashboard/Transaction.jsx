import { Box, Typography } from '@mui/material';

const Transaction = () => {
  return (
    <>
      <Box sx={{ width: '100%', height: '100%', bgcolor: 'aliceblue', p: 2 }}>
        {Array.from(Array(5)).map((item, index) => (
          <Typography lineHeight={3} key={index}>
            거래내역
          </Typography>
        ))}
      </Box>
    </>
  );
};

export default Transaction;
