import { type ChartType } from 'chart.js/auto'

interface Axis {
  x: number
  y: number
  r?: number
}
interface Dataset {
  label: string
  data: string[] | number[] | Axis[]
  backgroundColor?: string | string[]
  borderColor?: string
  color?: string
  fill?: boolean
}

export interface ChartData {
  type?: ChartType
  labels: (string | number)[]
  datasets: Dataset[]
  width?: number
  height?: number
}
