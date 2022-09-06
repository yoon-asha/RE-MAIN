import { Autocomplete, Box, TextField, Grid } from '@mui/material';
// import Grid from '@mui/material/Unstable_Grid2';
import { useState } from 'react';

const circle = {
  bgcolor: '#fff',
  // width: 70,
  // height: 70,
  m: 1,
  p: {xs: 2, md: 4},
  border: '1px solid #ccc',
  borderRadius: '100%',
  display: 'grid',
  placeItems: 'center',
  // justifyContent: 'center',
  // alignItems: 'center'
};

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Coupon = () => {
  const [storeName, setStoreName] = useState(options[0]);
  // const [inputValue, setInputValue] = useState("");

  return (
    <>
      <Grid container>
        <Grid
          container
          md={7}
          bgcolor='aliceblue'
          mr={5}
          sx={{
            p: 2,
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gridTemplateRows: 'repeat(2, 100px)',
            // gridTemplateRows: 'auto'
          }}
        >
          {data.map((item, index) => (
            // {Array.from(Array(10)).map((item, index) => (
            <Grid sx={circle} key={index}>
              {item}
              {/* 임시로 지정해놓은 크기 */}
            </Grid>
          ))}
        </Grid>
        <Grid md={4}>
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
          <Box>
            
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Coupon;

const options = [
  { label: '스타벅스', id: 1 },
  { label: '엔제리너스', id: 2 },
  { label: '투썸플레이스', id: 2 },
  { label: '탐앤탐스', id: 2 },
];
// or
// const options = ['스타벅스', '엔제리너스'];
