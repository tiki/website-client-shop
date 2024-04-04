import { type ChartType } from 'chart.js/auto'

type ChartTypes =
  | 'area'
  | 'bar'
  | 'bubble'
  | 'doughnut'
  | 'pie'
  | 'line'
  | 'polar'
  | 'radar'
  | 'scatter'

interface Dataset {
  label: string
  data: string | number
}

export interface ChartData {
  type: ChartType
  labels: string[]
  datasets: Dataset[]
}
