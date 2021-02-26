import { motion } from 'framer-motion'
import styled from 'styled-components'

interface TimeNumberProps {
  side: string,
  value?: string,
  children: string
}

const Span = styled(motion.span)<TimeNumberProps>`
  ${props => props.side === 'right' ? 
    `border-right: 1px solid #f8f1f3;` :
    `border-left: 1px solid #f8f1f3;`
  }
`

const TimeNumber = ({side, value, children}: TimeNumberProps) => (
  <Span
    transition={{ delay: 0.5, duration: 0.5}}
    variants={{
      show: {opacity: 1, y: '0'},
      hidden: {opacity: 0, y: `${value}`},
    }}
    initial="hidden"
    animate="show"
    side={side}
  >
    {children}
  </Span>
)

export default TimeNumber