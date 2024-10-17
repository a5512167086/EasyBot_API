import { CustomCard } from '@/components/CustomCard'
import { StyledBotPage } from './BotPage.style'
import { Breadcrumbs, Grid2 } from '@mui/material'
import { ActionType } from '@/components/CustomCard/CustomCard.type'
import SettingsIcon from '@mui/icons-material/Settings'
import AddIcon from '@/assets/add_icon.png'
import BotIcon from '@/assets/bot_icon.png'
import { CustomDialog } from '@/components/CustomDialog'
import { useState } from 'react'
import { CustomLink } from '@/components/CustomLink'
import { PAGE_PATHS } from '@/routes'
import { useNavigate } from 'react-router-dom'

const mockBotData = [
  'Adidax台北分店',
  'Adidax新北分店',
  'Adidax台中分店',
  'Adidax高雄分店',
  'Adidax南投分店'
]

export const BotPage = () => {
  const navigate = useNavigate()
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleDialogOpen = () => {
    setIsDialogOpen(true)
  }

  const handleDialogClose = () => {
    setIsDialogOpen(false)
  }

  const handleBotSetting = () => {
    navigate(PAGE_PATHS.MODULE_LIST)
  }
  return (
    <StyledBotPage maxWidth="lg">
      <Breadcrumbs
        sx={{ fontSize: '1.25rem', fontWeight: 'bold', margin: '20px 0' }}
      >
        <CustomLink
          link={PAGE_PATHS.BOT_LIST}
          linkText="My Bots"
          color="text.primary"
          aria-current="page"
        />
      </Breadcrumbs>
      <Grid2 container spacing={4}>
        <Grid2
          size={{ xs: 12, sm: 6, md: 4 }}
          display="flex"
          justifyContent="center"
        >
          <CustomCard
            imgSrc={AddIcon}
            cardButton={true}
            cardButtonAction={handleDialogOpen}
            titleText="Add New Bot"
            actionType={ActionType.None}
          />
        </Grid2>
        {mockBotData.map((bot) => (
          <Grid2
            size={{ xs: 12, sm: 6, md: 4 }}
            display="flex"
            justifyContent="center"
            key={bot}
          >
            <CustomCard
              imgSrc={BotIcon}
              enableHeaderButton={true}
              cardButton={false}
              titleText={bot}
              actionType={ActionType.Button}
              buttonText="Setting"
              buttonIcon={<SettingsIcon />}
              buttonAction={handleBotSetting}
            />
          </Grid2>
        ))}
      </Grid2>
      <CustomDialog isOpen={isDialogOpen} handleClose={handleDialogClose} />
    </StyledBotPage>
  )
}
