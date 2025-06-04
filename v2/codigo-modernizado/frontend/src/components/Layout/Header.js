import React from 'react';
import { AppBar, Box, Toolbar, Typography, Button, IconButton, Menu, MenuItem } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { isAuthenticated, getUserInfo, logout, hasRole } from '../../utils/auth';

const Header = () => {
  const navigate = useNavigate();
  const authenticated = isAuthenticated();
  const userInfo = getUserInfo();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleClose();
    logout();
    navigate('/login');
  };

  const handleProfile = () => {
    handleClose();
    navigate('/profile');
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, cursor: 'pointer' }}
            onClick={() => handleNavigation('/')}
          >
            CardDemo
          </Typography>
          
          {authenticated ? (
            <>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                {/* Admin-only menu items */}
                {hasRole('ROLE_ADMIN') && (
                  <Button color="inherit" onClick={() => handleNavigation('/admin/users')}>
                    Users
                  </Button>
                )}
                
                {/* Regular menu items */}
                <Button color="inherit" onClick={() => handleNavigation('/customers')}>
                  Customers
                </Button>
                <Button color="inherit" onClick={() => handleNavigation('/accounts')}>
                  Accounts
                </Button>
                <Button color="inherit" onClick={() => handleNavigation('/cards')}>
                  Cards
                </Button>
                <Button color="inherit" onClick={() => handleNavigation('/transactions')}>
                  Transactions
                </Button>
                
                {/* User menu */}
                <Typography variant="body1" sx={{ mx: 2 }}>
                  {userInfo?.username}
                </Typography>
                <IconButton
                  size="large"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleProfile}>Profile</MenuItem>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
              </Box>
            </>
          ) : (
            <Button color="inherit" onClick={() => handleNavigation('/login')}>
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;