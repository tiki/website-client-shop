import { type ChartData } from './types/Chart'
import { Chart } from 'chart.js/auto'

export default function createCharts(Charts?: ChartData[]) {
  const firstContainer = document.getElementById('dataset-first-grid-container')
  const lastContainer = document.getElementById('dataset-last-grid-container')

  Charts?.forEach((chart, index) => {
    let newCanva = document.createElement('canvas')
    newCanva.id = `${index}`
    newCanva.width = chart.width ?? 10
    newCanva.height = chart.height ?? 10

    let newDiv = document.createElement('div')

    if (index == 0) {
      firstContainer?.appendChild(newDiv)
      newDiv?.appendChild(newCanva)
    } else {
      lastContainer?.appendChild(newDiv)
      newDiv?.appendChild(newCanva)
    }

    new Chart(newCanva.id, {
      type: chart.type,
      data: {
        labels: chart.labels,
        datasets: chart.datasets
      }
    })
  })
}
