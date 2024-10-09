import { Container, styled } from '@mui/material'

export const StyledNotFoundPage = styled(Container)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: '100%',
  textAlign: 'center',
  '& .notfound__errorImg': {
    maxWidth: '200px',
    margin: '20px 0'
  },
  '& .notfound__text': {
    margin: '10px 0 '
  }
}))
