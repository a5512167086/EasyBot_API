import HeroBackground from '@/assets/bot_img.jpg'
import { StyledHero } from './Hero.style'
import { Typography } from '@mui/material'

export const Hero = () => {
  return (
    <StyledHero maxWidth="md">
      <div className="hero__card">
        <img className="hero__img" src={HeroBackground} alt="" />
      </div>
      <div className="hero__textBox">
        <Typography variant="h6" className="hero__title">
          打造專屬智慧對話體驗
          <br />
          無需Coding經驗，快速上手！
        </Typography>
        <Typography variant="h6" className="hero__description">
          我們的平台讓您能輕鬆建立和管理聊天機器人，支援多種應用場景，無論是客戶服務、自動回應、電子商務，我們的平台都能滿足您的需求。
        </Typography>
      </div>
    </StyledHero>
  )
}
