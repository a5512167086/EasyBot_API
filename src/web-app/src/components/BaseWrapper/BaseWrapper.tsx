import { Box } from '@mui/material'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { StyledBaseWrapper } from './BaseWrapper.style'
import { Outlet } from 'react-router-dom'

export const BaseWrapper = () => {
  return (
    <StyledBaseWrapper>
      <Header />
      <Box className="wrapper__content">
        <Outlet />
      </Box>
      <Footer />
    </StyledBaseWrapper>
  )
}
