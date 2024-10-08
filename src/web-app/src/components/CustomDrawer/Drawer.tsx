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

export const CustomDrawer = ({
  navItems,
  isOpen,
  handleDrawerToggle
}: CustomDrawerProps) => {
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
              <ListItemButton className="drawer__listButton">
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </StyledDrawer>
  )
}
