import { type ChartData } from './types/Chart'
import { Chart } from 'chart.js/auto'

export default function createCharts(
  Charts?: ChartData[],
  firstContainerId?: string,
  lastContainerId?: string
) {
  debugger
  const firstContainer = document.getElementById(firstContainerId!)
  const lastContainer = document.getElementById(lastContainerId!)

  Charts?.forEach((chart, index) => {
    console.log('teste 2', chart)
    let newCanva = document.createElement('canvas')
    newCanva.id = `${window.crypto.randomUUID()}`
    newCanva.width = chart.width ?? 10
    newCanva.height = chart.height ?? 10

    let newDiv = document.createElement('div')

    if (index == 0) {
      firstContainer?.appendChild(newCanva)
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
