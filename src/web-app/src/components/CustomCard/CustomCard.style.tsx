import { styled } from '@mui/material/styles'
import { Card } from '@mui/material'

export const StyledCustomCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  borderRadius: '30px',
  height: '320px',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  '& .card__actionArea': {
    height: '100%'
  },
  '& .card__content': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  '& .card__img': {
    objectFit: 'contained',
    width: '170px',
    height: '150px'
  },
  '& .card__title': {
    fontSize: '1.75rem',
    textAlign: 'center',
    fontWeight: 'bold'
  }
}))
