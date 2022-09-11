import { useState } from 'react';
import {
  Autocomplete,
  Box,
  TextField,
  Grid,
  Typography,
  Button,
} from '@mui/material';
// import Grid from '@mui/material/Unstable_Grid2';

const circle = {
  bgcolor: '#fff',
  // width: 70,
  // height: 70,
  m: 1,
  p: { xs: 2, md: 4 },
  border: '1px solid #ccc',
  borderRadius: '100%',
  display: 'grid',
  placeItems: 'center',
  // justifyContent: 'center',
  // alignItems: 'center'
};

const boxStyle = {
  bgcolor: '#fff',
  mt: 2,
  p: 2,
  border: '1px solid #ccc',
  borderRadius: 1,
};

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Frequency = () => {
  const [storeName, setStoreName] = useState(options[0]);
  // const [inputValue, setInputValue] = useState("");

  return (
    <>
      <Grid container>
        <Grid
          container
          md={7}
          bgcolor='aliceblue'
          sx={{
            p: 2,
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gridTemplateRows: 'repeat(2, 100px)',
            // gridTemplateRows: 'auto'
            mr: { md: 5, xs: 0 }
          }}
        >
          {data.map((item, index) => (
            // {Array.from(Array(10)).map((item, index) => (
            <Grid sx={circle} key={index}>
              {item}
            </Grid>
          ))}
        </Grid>
        <Grid md={3}>
          <Autocomplete
            // disablePortal
            id='store'
            value={storeName}
            onChange={(event, newValue) => {
              setStoreName(newValue);
            }}
            // inputValue={inputValue}
            // onInputChange={(event, newInputValue) => {
            //   setInputValue(newInputValue)
            // }}
            options={options}
            // sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField
                {...params}
              // label="Cafe"
              />
            )}
          />
          <Box sx={boxStyle}>
            <Box sx={{ width: '100%', height: 200, bgcolor: '#ccc' }}>
              {/* 실제 이미지 넣을 때는 width 100%, height 100%로*/}
              Image
            </Box>
            <Typography>카페 이름</Typography>
            <Typography>프리퀀시 교환권 #number</Typography>
          </Box>
        </Grid>
      </Grid>
      <Button variant='contained' sx={{
        mt: 5,
        mr: { lg: 19, md: 17, xs: 0 }, float: 'right', px: 5, fontSize: '1em'
      }}>교환권 발행하기</Button>
    </>
  );
};

export default Frequency;

const options = [
  { label: '스타벅스', id: 1 },
  { label: '엔제리너스', id: 2 },
  { label: '투썸플레이스', id: 2 },
  { label: '탐앤탐스', id: 2 },
];
// or
// const options = ['스타벅스', '엔제리너스'];