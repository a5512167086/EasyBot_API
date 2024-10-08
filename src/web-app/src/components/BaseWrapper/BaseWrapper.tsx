import { Box } from '@mui/material'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { BaseWrapperProps } from './BaseWrapper.type'
import { StyledBaseWrapper } from './BaseWrapper.style'

export const BaseWrapper = ({ children }: BaseWrapperProps) => {
  return (
    <StyledBaseWrapper>
      <Header />
      <Box className="wrapper__content">{children}</Box>
      <Footer />
    </StyledBaseWrapper>
  )
}
