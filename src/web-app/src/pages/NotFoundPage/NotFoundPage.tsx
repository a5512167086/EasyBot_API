import { Typography } from '@mui/material'
import { StyledNotFoundPage } from './NotFoundPage.style'
import ErrorIcon from '@/assets/error-404.png'

export const NotFoundPage = () => {
  return (
    <StyledNotFoundPage maxWidth="sm">
      <img className="notfound__errorImg" src={ErrorIcon} />
      <Typography variant="h5" className="notfound__text">
        Page Not Found
      </Typography>
      <Typography variant="h6" className="notfound__text">
        Oops! The page you are looking for doesn't exist. It might have been
        moved or deleted, or you may have typed the URL incorrectly.
      </Typography>
    </StyledNotFoundPage>
  )
}
