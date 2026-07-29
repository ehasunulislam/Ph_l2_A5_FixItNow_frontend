export interface StandardCard {
  id: string
  icon: React.ReactNode
  title: string
  description: string
}

export interface QualityStandardsProps {
  title?: string
  subtitle?: string
  cards?: StandardCard[]
}