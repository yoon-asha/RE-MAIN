import { Box, Container, Paper, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Image from 'next/image';

const Explore = () => {
  return (
    <>
      <Container>
        <Typography variant='h5' fontWeight={600} >NFT Market</Typography>
        <Typography>NFT를 구매하고 프리퀀시를 모으세요</Typography>

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
                <Paper sx={{ width: '100%', height: '100%', p: 3 }}>
                  <Box
                    sx={{
                      bgcolor: '#ccc', width: '100%', height: '80%',
                      backgroundImage: `url('https://source.unsplash.com/random/${index}')`,
                      // backgroundImage: `url("https://source.unsplash.com/collection/${index}")`
                    }}
                  >
                  </Box>
                  {/* <Button>xs=2</Button> */}
                  <Typography>item.name</Typography>
                  <Box sx={{ display: 'flex', mb: {xs: 45, sm: 25, md: 30} }}>
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
      </Container>
    </>
  );
};

export default Explore;
