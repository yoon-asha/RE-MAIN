import { Box, Button, Grid } from "@mui/material"

const Possession = () => {
    return <>
        <Grid container sx={{ display: 'flex' }} spacing={2}>
            {Array.from(Array(3)).map((item, index) => (
                <Grid
                    item
                    xs={6}
                    md={4}
                    key={index}
                    sx={{ cursor: 'pointer', textAlign: 'center', }}
                // columnSpacing={5}
                >
                    {/* <Paper sx={{ width: 230, height: 300, p:2 }}> */}
                    <Box
                        sx={{
                            bgcolor: '#ccc', width: '100%', height: 180,
                            // height는 이미지 heigh로 들어가게! 100%로ㄴ
                            backgroundImage: `url('https://source.unsplash.com/random/${index}')`,
                            // backgroundImage: `url("https://source.unsplash.com/collection/${index}")`
                        }}
                    >
                    </Box>
                    {/* <Button>xs=2</Button> */}
                    <Button variant="contained" sx={{ width: '100%', my: 2 }}>교환하기</Button>
                    {/* </Paper> */}
                </Grid>
            ))}
        </Grid>
    </>
}

export default Possession