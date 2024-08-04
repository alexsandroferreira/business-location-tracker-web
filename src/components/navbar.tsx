import { Menu as MenuIcon } from '@mui/icons-material'
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  MenuList,
  Toolbar,
  Typography,
} from '@mui/material'
import { MouseEvent, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export function Navbar() {
  const [anchorNav, setAnchorNav] = useState<null | HTMLElement>(null)
  const location = useLocation()

  const openMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorNav(event.currentTarget)
  }

  const closeMenu = () => {
    setAnchorNav(null)
  }

  const getButtonStyle = (path: string) => {
    return location.pathname === path ? { color: 'secondary.main' } : {}
  }

  return (
    <AppBar position="fixed" color="primary">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Business Tracker
        </Typography>

        <Box component="nav" sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Button
            color="inherit"
            component={Link}
            to="/hero"
            sx={getButtonStyle('/hero')}
          >
            About
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/"
            sx={getButtonStyle('/')}
          >
            Register
          </Button>
        </Box>

        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={openMenu}
          >
            <MenuIcon />
          </IconButton>

          <Menu
            anchorEl={anchorNav}
            open={Boolean(anchorNav)}
            onClose={closeMenu}
            sx={{ display: { xs: 'flex', md: 'none' } }}
          >
            <MenuList>
              <MenuItem
                onClick={closeMenu}
                component={Link}
                to="/hero"
                sx={getButtonStyle('/hero')}
              >
                About
              </MenuItem>
              <MenuItem
                onClick={closeMenu}
                component={Link}
                to="/"
                sx={getButtonStyle('/')}
              >
                Register
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
