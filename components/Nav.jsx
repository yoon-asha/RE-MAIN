import {
  AppBar,
  Box,
  Button,
  Toolbar,
} from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
// import { Search } from "@mui/icons-material";
import Image from 'next/image';
import Logo from '../public/remain.png';
import Link from 'next/link';

const Nav = () => {
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.black, 0.05),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.black, 0.1),
    },
    marginRight: theme.spacing(2),
    // marginLeft: 0,
    width: '200px',
    // height: '40px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));
  return (
    <>
      {/* <CssBaseline /> */}
      <AppBar position='sticky' sx={{ bgcolor: '#fff', boxShadow: 'none' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box
            sx={{
              position: 'relative',
              top: -40,
              height: 40,
              cursor: 'pointer',
            }}
          >
            <Link href='/'>
              <Image
                src={Logo}
                width={160}
                // height={45}
                // objectFit='none'
                objectFit='contain'
              />
            </Link>
          </Box>

          {/* <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ 
              // display: { xs: 'none', sm: 'block' }, 
              color:'#246551' }}>Logo</Typography> */}

          <Search sx={{ color: '#246551' }}>
            {/* <SearchIconWrapper> */}
            <SearchIcon sx={{mt: 0.5, mx: 1}} />
            {/* </SearchIconWrapper> */}
          </Search>

          {/* <Button variant="outlined" color="success">
            Login
          </Button> */}
          <Link href='/dashboard'>
            <Button color='success'>Dashboard</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Nav;
