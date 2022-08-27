import { Autocomplete, Box, TextField } from '@mui/material';
import { useState } from 'react';

const Frequency = () => {
  const [storeName, setStoreName] = useState(options[0]);
  // const [inputValue, setInputValue] = useState("");

  return (
    <>
      <Box>프리퀀시들</Box>
      <Box>
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
      </Box>
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
