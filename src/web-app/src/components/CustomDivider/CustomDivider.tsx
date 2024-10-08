import { StyledDivider } from './CustomDivider.style'
import { CustomDividerProps } from './CustomDivider.type'

export const CustomDivider = ({ text }: CustomDividerProps) => {
  return (
    <StyledDivider>
      <div className="divider__line" />
      {text && <span className="divider__text">{text}</span>}
      <div className="divider__line" />
    </StyledDivider>
  )
}
