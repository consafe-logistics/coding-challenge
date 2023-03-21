
import { alpha, AppBar, Box, Container, IconButton, InputBase, Paper, styled, Toolbar, Typography } from '@mui/material';
import { Link, Outlet } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import getAddressTitle from '../utils/getTitle';

function AppWrapper() {
  const title = getAddressTitle(document.location.href);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: "#FFF"}}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <Link to=''><MenuIcon /></Link>
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} color="#353535">
              <Box sx={{ textTransform: 'capitalize' }}>{title}</Box>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Container>
        <Paper sx={{p: 3, m: 3}}>
          <Outlet />
        </Paper>
      </Container>
    </>
  );
}

export default AppWrapper;
