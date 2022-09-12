import { useState } from 'react';
import {
  Autocomplete,
  Box,
  Button,
  FormControl,
  Grid,
  TextField,
  Typography,
  Paper,
  InputLabel,
  Input,
  FormHelperText,
} from '@mui/material';

const typoStyle = {
  my: 0,
  fontSize: '1.1em',
};

const Minting = () => {
  const [nftType, setNftType] = useState(options[0]);
  const [mintImgUrl, setMintImgUrl] = useState('');

  return (
    <>
      <Grid container>
        <Grid md={6} xs={12}>
          <Box mb={2}>
            <Typography variant='h6' sx={typoStyle}>
              가맹점 이름
            </Typography>
            <Typography
              sx={{ bgcolor: 'aliceblue', pl: 1, py: 2, fontSize: '1.1em' }}
            >
              {nftType.cafe}
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
              renderInput={(params) => <TextField {...params} />}
            />
          </Box>
          <Box mb={2}>
            <Typography variant='h6' sx={typoStyle}>
              NFT 이름
            </Typography>
            <Typography
              sx={{ bgcolor: 'aliceblue', pl: 1, py: 2, fontSize: '1.1em' }}
            >
              {nftType.label} #{nftType.id}
            </Typography>
          </Box>
          <Box mb={2}>
            <Typography variant='h6' sx={typoStyle}>
              받는 사람
            </Typography>
            <TextField type='input' sx={{ width: '100%' }} />
          </Box>
          <Box mb={2}>
            <Typography variant='h6' sx={typoStyle}>
              발행 개수
            </Typography>
            <TextField type='input' sx={{ width: '100%' }} />
          </Box>
        </Grid>
        <Grid md={5} xs={12} sx={{ ml: { md: 5, xs: 0 } }}>
          <Paper sx={{ width: '100%', height: '100%', p: 2 }}>
            <FormControl
              onChange={(e) => {
                setMintImgUrl(e.target.value);
                console.log(mintImgUrl);
              }}
              sx={{width: '100%'}}
            >
              {/* <InputLabel htmlFor='my-input'>Image URL</InputLabel> */}
              <Input variant={mintImgUrl} placeholder='NFT 이미지 URL을 올려주세요' />
              {/* https://source.unsplash.com/random/1 */}
            </FormControl>
            {mintImgUrl === '' ? (
              <Box
                sx={{
                  width: '80%',
                  height: '80%',
                  backgroundImage: `url("https://cdn.pixabay.com/photo/2013/04/01/21/30/photo-99135_1280.png")`,
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  m: '0 auto',
                  mb: 2,
                  opacity: '0.4',
                }}
              ></Box>
            ) : (
              <Box
                sx={{
                  width: '80%',
                  height: '80%',
                  backgroundImage: `url(${mintImgUrl})`,
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  m: '0 auto',
                  mb: 2,
                }}
              ></Box>
            )}
            <Typography>가맹점 명</Typography>
            <Typography>
              {nftType.label} #{nftType.id}
            </Typography>
          </Paper>
          <Button
            variant='contained'
            sx={{ px: 4, py: 1.5, fontSize: '1em', my: 5, float: 'right' }}
          >
            NFT 발행하기
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Minting;

const options = [
  { label: '프리퀀시', id: 1, cafe: '멋쟁이사자' },
  { label: '음료 쿠폰', id: 2, cafe: '멋쟁이사자' },
];
