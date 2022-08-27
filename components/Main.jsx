import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import Logo from '../public/remain.png';

const Main = () => {
  return (
    <>
      <Box
        sx={{
          width: { xs: '100vw', sm: '80vw' },
          height: '50vh',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <Image
          src='https://cdn.pixabay.com/photo/2019/06/22/08/10/leaves-4291098_1280.jpg'
          layout='fill'
          objectFit='cover'
        />
      </Box>

      <Box
        sx={{
          bgcolor: '#fff',
          width: { xs: '100vw', sm: '80vw', md: '60vw', lg: '50vw' },
          height: '200px',
          position: 'absolute',
          top: '45%',
          pt: 2,
          pl: 5,
          pr: 5,
          textAlign: 'center',
          borderRadius: 2
        }}
      >
        <Image src={Logo} width={264} height={59} />
        <Typography>일회용컵 회수 플랫폼 리:메인</Typography>
      </Box>
    </>
  );
};

export default Main;
