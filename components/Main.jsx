import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Logo from '../public/remain.png'

const Main = () => {
  return (
    <>
      <Box
        sx={{
          width: { xs: "100vw", sm: "80vw" },
          height: "70vh",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Image
          src="https://cdn.pixabay.com/photo/2019/06/22/08/10/leaves-4291098_1280.jpg"
          layout="fill"
          objectFit="cover"
        />
      </Box>

      <Box sx={{
          bgcolor: '#fff',
          width: { xs: "100vw", sm: "80vw", md: '50vw' },
          height: '300px',
          position: 'absolute',
          top: '55%',
          pt: 1,
          pl: 5, pr:5
        }}>
          <Typography>LOGO</Typography>
          <Typography>일회용컵 회수 플랫폼 리:메인</Typography>
        </Box>
    </>
  );
};

export default Main;
