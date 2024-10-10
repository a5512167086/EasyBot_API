import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardActionArea from '@mui/material/CardActionArea'
import { StyledCustomCard, StyledSwitch } from './CustomCard.style'
import { ActionType, CustomCardProps } from './CustomCard.type'
import { Button, FormControlLabel, IconButton } from '@mui/material'
import SettingsIcon from '@mui/icons-material/Settings'

export const CustomCard = ({
  imgSrc,
  enableHeaderButton,
  cardButton,
  cardButtonAction,
  titleText,
  actionType,
  buttonText,
  buttonIcon
}: CustomCardProps) => {
  return (
    <StyledCustomCard>
      {enableHeaderButton && (
        <IconButton className="card__headerButton">
          <SettingsIcon />
        </IconButton>
      )}
      {cardButton ? (
        <CardActionArea className="card__actionArea" onClick={cardButtonAction}>
          <CardContent className="card__content">
            {imgSrc && (
              <div>
                <CardMedia
                  component="img"
                  image={imgSrc}
                  className="card__img"
                />
              </div>
            )}
            <Typography variant="h5" component="div" className="card__title">
              {titleText}
            </Typography>
          </CardContent>
        </CardActionArea>
      ) : (
        <CardContent className="card__content">
          {imgSrc && (
            <CardMedia component="img" image={imgSrc} className="card__img" />
          )}
          <Typography variant="h5" component="div" className="card__title">
            {titleText}
          </Typography>
          {actionType === ActionType.Button && (
            <Button
              startIcon={buttonIcon}
              variant="outlined"
              className="card__button"
            >
              {buttonText}
            </Button>
          )}
          {actionType === ActionType.Switch && (
            <FormControlLabel
              value="start"
              control={<StyledSwitch sx={{ m: 1 }} color="primary" />}
              label={buttonText}
              className="card__switch"
              labelPlacement="start"
            />
          )}
        </CardContent>
      )}
    </StyledCustomCard>
  )
}
