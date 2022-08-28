import { Box, Typography } from '@mui/material';

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

const LoginBtn = () => {
  
  return (
    <>
      <Box sx={style}>
        <Typography id='modal-modal-title' variant='h6' component='h2'>
          Klip 지갑 연결하기
        </Typography>

        <Typography id='modal-modal-description' variant='subtitle1' component='h4'>
          QR코드
        </Typography>
      </Box>
    </>
  );
};

export default LoginBtn;
