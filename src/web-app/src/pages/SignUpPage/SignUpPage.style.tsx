import { styled } from '@mui/material/styles'
import { Container } from '@mui/material'
import { theme } from '@/configs/theme'

export const StyledSignUpPage = styled(Container)(() => ({
  '& .signin__box': {
    marginTop: 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  '& .signin__avatar': {
    margin: '10px',
    backgroundColor: theme.palette.primary.main
  },
  '& .signin__formBox': {
    marginTop: '10px'
  },
  '& .sigin__signinButton': {
    margin: '20px 0'
  },
  '& .signin__signupButton': {
    textAlign: 'right',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'left'
    }
  }
}))