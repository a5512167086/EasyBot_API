import { Box } from '@mui/material'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { StyledBaseWrapper } from './BaseWrapper.style'
import { Outlet } from 'react-router-dom'
import { Suspense } from 'react'
import { CustomLoader } from '../CustomLoader'

export const BaseWrapper = () => {
  return (
    <StyledBaseWrapper>
      <Header />
      <Box className="wrapper__content">
        <Suspense fallback={<CustomLoader size="6rem" text="Loading..." />}>
          <Outlet />
        </Suspense>
      </Box>
      <Footer />
    </StyledBaseWrapper>
  )
}
