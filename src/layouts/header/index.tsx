import { SetStateAction, useState } from 'react';
import { Box } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';

const settings = ['Profile', 'Change Password', 'Logout'];

function notificationsLabel(count: number) {
  if (count === 0) {
    return 'no notifications';
  }
  if (count > 99) {
    return 'more than 99 notifications';
  }
  return `${count} notifications`;
}

const Header = () => {
  const [anchorElUser, setAnchorElUser] = useState(null);


  const handleOpenUserMenu = (event: { currentTarget: SetStateAction<null>; }) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <Box sx={{ display: { xs: 'none', md: 'flex', gap: 15 }, ml: 'auto' }}>
      <IconButton aria-label={notificationsLabel(100)}>
        <Badge badgeContent={100} color="error">
          <NotificationsIcon />
        </Badge>
      </IconButton>
      <Box>
        <Tooltip title="Open settings">
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar
              size="small"
              alt="Remy Sharp"
              src="https://minimal-kit-react.vercel.app/assets/images/avatars/avatar_default.jpg"
            />
          </IconButton>
        </Tooltip>
        <Menu
          sx={{ mt: '45px' }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          {settings.map((setting) => (
            <MenuItem key={setting} onClick={handleCloseUserMenu}>
              <Typography textAlign="center">{setting}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
      
    </Box>
  );
};

export default Header;
