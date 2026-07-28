export interface WorkStep {
  number: number
  title: string
  description: string
}

export interface Stat {
  value: string
  label: string
}

export interface HowItWorksProps {
  title?: string
  steps?: WorkStep[]
  stats?: Stat[]
}
