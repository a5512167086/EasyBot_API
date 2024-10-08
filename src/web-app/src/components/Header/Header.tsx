import { useState } from 'react'
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  Button
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import logo from '@/assets/header_logo.png'
import { StyledHeader } from './Header.style'
import { CustomDrawer } from '@/components/CustomDrawer'
import { NAVIGATION_ROUTE } from '@/configs/common'

export const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const handleDrawerToggle = () => {
    setIsDrawerOpen((prevState) => !prevState)
  }

  return (
    <StyledHeader>
      <AppBar component="nav" position="sticky">
        <Toolbar className="header__toolbar">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className="header__iconButton"
          >
            <MenuIcon />
          </IconButton>
          <img src={logo} className="header__logo" />
          <Typography variant="h6" component="div" className="header__title">
            EasyBot
          </Typography>
          <Box className="header__navBox">
            {NAVIGATION_ROUTE.map((item) => (
              <Button key={item.text} className="header__navLink">
                {item.text}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <CustomDrawer
          navItems={NAVIGATION_ROUTE}
          isOpen={isDrawerOpen}
          handleDrawerToggle={handleDrawerToggle}
        />
      </nav>
    </StyledHeader>
  )
}
