import { ReactNode } from 'react'

export enum ActionType {
  None = 'NONE',
  Button = 'BUTTON',
  Switch = 'SWITCH'
}

export type CustomCardProps = {
  imgSrc?: string
  cardButton: boolean
  titleText?: string
  actionType: ActionType
  buttonText?: string
  buttonIcon?: ReactNode
}