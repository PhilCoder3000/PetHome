import React, { MouseEvent, useState } from 'react';
import { Fab, Menu, MenuItem, styled } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Outlet, useNavigate } from 'react-router-dom';

const StyledContainerDiv = styled('div')(() => ({
  position: 'fixed',
  top: '10px',
  left: '10px',
  zIndex: 1101,
}));

export function NavMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const navigate = useNavigate()
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (path: string) => {
    setAnchorEl(null);
    setTimeout(() => {
      navigate(path)
    }, 100);
  };

  return (
    <StyledContainerDiv>
      <Fab
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        color="primary"
        size="small"
      >
        <MenuIcon />
      </Fab>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={() => handleClose("/pet-tube/main")}>Main</MenuItem>
        <MenuItem onClick={() => handleClose("/pet-tube/video")}>Video</MenuItem>
        <MenuItem onClick={() => handleClose("/pet-tube/channel")}>channel</MenuItem>
        <MenuItem onClick={() => handleClose("/pet-tube/search")}>search</MenuItem>
        <Outlet />
      </Menu>
    </StyledContainerDiv>
  );
}
