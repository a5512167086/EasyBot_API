import { Button } from '@mui/material'
import GoogleIcon from '@mui/icons-material/Google'
import FacebookIcon from '@mui/icons-material/Facebook'
import { StyledOAuth } from './OAuth.style'

export const OAuth = () => {
  return (
    <StyledOAuth maxWidth="xs">
      <Button
        type="submit"
        fullWidth
        variant="contained"
        className="oauth__button"
        startIcon={<GoogleIcon />}
      >
        Continue with Google
      </Button>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        className="oauth__button"
        startIcon={<FacebookIcon />}
      >
        Continue with Facebook
      </Button>
    </StyledOAuth>
  )
}
