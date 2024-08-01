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
import { Link } from 'react-router-dom'

export function Navbar() {
  const [anchorNav, setAnchorNav] = useState<null | HTMLElement>(null)

  const openMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorNav(event.currentTarget)
  }

  const closeMenu = () => {
    setAnchorNav(null)
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Business Tracker
        </Typography>

        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Button color="inherit" component={Link} to="/hero">
            Hero
          </Button>
          <Button color="inherit" component={Link} to="/">
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
              <MenuItem onClick={closeMenu} component={Link} to="/hero">
                Hero
              </MenuItem>
              <MenuItem onClick={closeMenu} component={Link} to="/">
                Register
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
