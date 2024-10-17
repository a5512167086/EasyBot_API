import { Breadcrumbs, Grid2 } from '@mui/material'
import { StyledModulePage } from './ModulePage.style'
import { CustomCard } from '@/components/CustomCard'
import { ActionType } from '@/components/CustomCard/CustomCard.type'
import SettingsIcon from '@mui/icons-material/Settings'
import FAQIcon from '@/assets/faq_icon.png'
import EcommIcon from '@/assets/ecomm_icon.png'
import ReservaitonIcon from '@/assets/reservation_icon.png'
import { CustomLink } from '@/components/CustomLink'
import { PAGE_PATHS } from '@/routes'

const moduleData = [
  { moduleName: 'FAQ Module', moduleImg: FAQIcon },
  { moduleName: 'Ecomm Module', moduleImg: EcommIcon },
  { moduleName: 'Reservation Module', moduleImg: ReservaitonIcon }
]

export const ModulePage = () => {
  return (
    <StyledModulePage>
      <Breadcrumbs
        sx={{ fontSize: '1.25rem', fontWeight: 'bold', margin: '20px 0' }}
      >
        <CustomLink link={PAGE_PATHS.BOT_LIST} linkText="My Bots" />
        <CustomLink
          link={PAGE_PATHS.MODULE_LIST}
          linkText="My Modules"
          color="text.primary"
          aria-current="page"
        />
      </Breadcrumbs>
      <Grid2 container spacing={4}>
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
