import { Grid2, Typography } from '@mui/material'
import { StyledModulePage } from './ModulePage.style'
import { CustomCard } from '@/components/CustomCard'
import { ActionType } from '@/components/CustomCard/CustomCard.type'
import SettingsIcon from '@mui/icons-material/Settings'
import FAQIcon from '@/assets/faq_icon.png'
import EcommIcon from '@/assets/ecomm_icon.png'
import ReservaitonIcon from '@/assets/reservation_icon.png'

const moduleData = [
  { moduleName: 'FAQ Moudle', moduleImg: FAQIcon },
  { moduleName: 'Ecomm Moudle', moduleImg: EcommIcon },
  { moduleName: 'Reservaiton Moudle', moduleImg: ReservaitonIcon }
]

export const ModulePage = () => {
  return (
    <StyledModulePage>
      <Typography className="bot__title" variant="h6">
        My Modules
      </Typography>
      <Grid2 container spacing={6}>
        {moduleData.map((module) => (
          <Grid2
            size={{ xs: 12, sm: 6, md: 4 }}
            display="flex"
            justifyContent="center"
            key={module.moduleName}
          >
            <CustomCard
              imgSrc={module.moduleImg}
              enableHeaderButton={true}
              cardButton={false}
              titleText={module.moduleName}
              actionType={ActionType.Switch}
              buttonText="Enable"
              buttonIcon={<SettingsIcon />}
            />
          </Grid2>
        ))}
      </Grid2>
    </StyledModulePage>
  )
}
