import { Box, Button, Container, Paper, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Image from 'next/image';

const Selling = () => {
  return (
    <>
      <Container>
        {/* <Box sx={{bgcolor: '#ccc', height: '100vh'}} > NFT list</Box> */}
        <Box my={5}>
          <Grid
            container
            spacing={2}
            // columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {Array.from(Array(6)).map((item, index) => (
              <Grid
                item
                xs={12}
                sm={4}
                md={3}
                key={index}
                sx={{ cursor: 'pointer' }}
                // columnSpacing={5}
              >
                <Paper sx={{ width: '100%', height: '100%', p: 2.5 }}>
                  <Box
                    sx={{ bgcolor: '#ccc', width: '100%', height: '80%' }}
                  ></Box>
                  {/* <Button>xs=2</Button> */}
                  <Typography>item.name</Typography>
                  <Box sx={{ display: 'flex', mb: 20 }}>
                    <Typography variant='p' fontSize='0.8em'>
                      item.storeName
                    </Typography>
                    <Typography variant='p' fontSize='0.8em'>
                      item.price
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
          <Button variant='outlined' sx={{ px: 3 }}>
            판매 수량
          </Button>
          <Button variant='contained' sx={{ px: 3 }}>
            판매 등록
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default Selling;
