import Divider from '@mui/material/Divider'
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText
} from '@mui/material'
import { CustomDrawerProps } from './Drawer.type'
import { StyledDrawer } from './Drawer.style'
import { useNavigate } from 'react-router-dom'

export const CustomDrawer = ({
  navItems,
  isOpen,
  handleDrawerToggle
}: CustomDrawerProps) => {
  const navigate = useNavigate()
  const handleNavigation = (link: string) => {
    navigate(link)
  }

  return (
    <StyledDrawer
      variant="temporary"
      open={isOpen}
      onClose={handleDrawerToggle}
      ModalProps={{
        keepMounted: true
      }}
    >
      <Box onClick={handleDrawerToggle} className="drawer__box">
        <Divider />
        <List>
          {navItems.map((item) => (
            <ListItem key={item.text}>
              <ListItemButton
                className="drawer__listButton"
                onClick={() => {
                  handleNavigation(item.link)
                }}
              >
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </StyledDrawer>
  )
}
