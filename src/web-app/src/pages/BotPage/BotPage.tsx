import { CustomCard } from '@/components/CustomCard'
import { StyledBotPage } from './BotPage.style'
import { Grid2, Typography } from '@mui/material'
import { ActionType } from '@/components/CustomCard/CustomCard.type'
import SettingsIcon from '@mui/icons-material/Settings'
import AddIcon from '@/assets/add_icon.png'
import BotIcon from '@/assets/bot_icon.png'

const mockBotData = ['Bot 1', 'Bot 2', 'Bot 3', 'Bot 4', 'Bot 5']

export const BotPage = () => {
  return (
    <StyledBotPage maxWidth="lg">
      <Typography className="bot__title" variant="h6">
        My Bots
      </Typography>
      <Grid2 container spacing={6}>
        <Grid2
          size={{ xs: 12, sm: 6, md: 4 }}
          display="flex"
          justifyContent="center"
        >
          <CustomCard
            imgSrc={AddIcon}
            cardButton={true}
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
            />
          </Grid2>
        ))}
      </Grid2>
    </StyledBotPage>
  )
}
