import { type ChartType } from 'chart.js/auto'

interface Dataset {
  label: string
  data: string | number
}

export interface ChartData {
  type: ChartType
  labels: (string | number)[]
  datasets: Dataset[]
}
