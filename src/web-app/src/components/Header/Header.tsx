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
import { PUBLIC_NAVIGATION_ROUTE } from '@/routes'
import { useNavigate } from 'react-router-dom'

export const Header = () => {
  const navigate = useNavigate()
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const handleDrawerToggle = () => {
    setIsDrawerOpen((prevState) => !prevState)
  }

  const handleNavigation = (link: string) => {
    navigate(link)
  }

  return (
    <StyledHeader>
      <AppBar component="nav" position="fixed">
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
            {PUBLIC_NAVIGATION_ROUTE.map((item) => (
              <Button
                key={item.text}
                className="header__navLink"
                onClick={() => {
                  handleNavigation(item.link)
                }}
              >
                {item.text}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <CustomDrawer
          navItems={PUBLIC_NAVIGATION_ROUTE}
          isOpen={isDrawerOpen}
          handleDrawerToggle={handleDrawerToggle}
        />
      </nav>
    </StyledHeader>
  )
}
