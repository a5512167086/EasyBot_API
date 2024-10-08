import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardActionArea from '@mui/material/CardActionArea'
import { StyledCustomCard } from './CustomCard.style'
import { ActionType, CustomCardProps } from './CustomCard.type'
import { Button, FormControlLabel, Switch } from '@mui/material'

export const CustomCard = ({
  imgSrc,
  cardButton,
  titleText,
  actionType,
  buttonText,
  buttonIcon
}: CustomCardProps) => {
  return (
    <StyledCustomCard>
      {cardButton ? (
        <CardActionArea className="card__actionArea">
          <CardContent className="card__content">
            {imgSrc && (
              <CardMedia component="img" image={imgSrc} className="card__img" />
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
            <Button startIcon={buttonIcon} variant="outlined">
              {buttonText}
            </Button>
          )}
          {actionType === ActionType.Switch && (
            <FormControlLabel
              value="start"
              control={<Switch color="primary" />}
              label={buttonText}
              labelPlacement="start"
            />
          )}
        </CardContent>
      )}
    </StyledCustomCard>
  )
}
