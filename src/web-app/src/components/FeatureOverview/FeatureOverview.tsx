import { Grid2, Box, Typography } from '@mui/material'
import { StyledFeatureOverview } from './FeatureOverview.style'
import { CustomCard } from '../CustomCard'
import { ActionType } from '../CustomCard/CustomCard.type'
import FAQIcon from '@/assets/faq_icon.png'
import EcommIcon from '@/assets/ecomm_icon.png'
import ReservationIcon from '@/assets/reservation_icon.png'

export const FeatureOverview = () => {
  return (
    <StyledFeatureOverview maxWidth="xl">
      <Typography className="overview__title" variant="h6">
        專業的客製化模組
      </Typography>
      <Box className="overview__cardBox">
        <Grid2 container spacing={6}>
          <Grid2
            size={{ xs: 12, md: 6, lg: 4 }}
            display="flex"
            justifyContent="center"
          >
            <CustomCard
              imgSrc={FAQIcon}
              cardButton={false}
              titleText="問答模組"
              descriptionText="問答模組結合了AI的RAG (檢索增強生成) 系統，能夠即時從資料庫中檢索出相關答案，並通過生成技術提供精確和自然的回應。無論是常見問題還是專業知識，這個模組都能輕鬆處理，確保用戶得到滿意的解答。"
              actionType={ActionType.None}
            />
          </Grid2>
          <Grid2
            size={{ xs: 12, md: 6, lg: 4 }}
            display="flex"
            justifyContent="center"
          >
            <CustomCard
              imgSrc={EcommIcon}
              cardButton={false}
              titleText="電商模組"
              descriptionText="電商模組透過AI數據分析功能，幫助您追蹤客戶行為、預測銷售趨勢、並自動生成客戶反饋報告，同時商家也能有效地管理庫存、提升轉換率，並提供個性化的購物體驗。"
              actionType={ActionType.None}
            />
          </Grid2>
          <Grid2
            size={{ xs: 12, md: 12, lg: 4 }}
            display="flex"
            justifyContent="center"
          >
            <CustomCard
              imgSrc={ReservationIcon}
              cardButton={false}
              titleText="預約模組"
              descriptionText="預約模組讓您輕鬆管理各類預訂和安排，從客戶的角度來說，預訂過程簡單快速，支援通知功能，確保不會錯過任何重要的預約。"
              actionType={ActionType.None}
            />
          </Grid2>
        </Grid2>
      </Box>
    </StyledFeatureOverview>
  )
}
