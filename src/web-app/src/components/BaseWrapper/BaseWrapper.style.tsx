import { styled } from '@mui/material/styles'
import { Box } from '@mui/material'

export const StyledBaseWrapper = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  '& .wrapper__content': {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    padding: '10px'
  }
}))