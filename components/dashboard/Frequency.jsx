import { Autocomplete, Box, TextField } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { useState } from 'react';

const circle = {
  bgcolor: '#fff',
  width: '50px',
  height: '50px',
  border: '1px solid #ccc',
  borderRadius: '100%',
};

const dummy = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Frequency = () => {
  const [storeName, setStoreName] = useState(options[0]);
  // const [inputValue, setInputValue] = useState("");

  return (
    <>
      <Grid container>
        <Grid md={8}>
          {dummy.map((item, index) => {
            <Box sx={circle} key={index}>
              {item}
            </Box>;
          })}
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
          <Box>교환할 수 있는 프리퀀시</Box>
        </Grid>
      </Grid>
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
