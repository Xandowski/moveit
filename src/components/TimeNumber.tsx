import { motion } from 'framer-motion'

interface TimeNumberProps {
  value?: string
  children: string
}

const TimeNumber = ({ value, children }: TimeNumberProps) => (
  <motion.span
    transition={{ delay: 0.5, duration: 0.5 }}
    variants={{
      show: { opacity: 1, y: '0' },
      hidden: { opacity: 0, y: `${value}` },
    }}
    initial="hidden"
    animate="show"
  >
    {children}
  </motion.span>
)

export default TimeNumber
