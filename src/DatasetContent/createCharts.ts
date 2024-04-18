import { type ChartData } from './types/Chart'
import { Chart } from 'chart.js/auto'

export default function createCharts(
  Charts?: ChartData[][],
  firstContainerId?: string,
  lastContainerId?: string
) {
  const parentContainer = document.getElementById('first-chart-container')
  const firstContainer = document.getElementById(firstContainerId!)
  const lastContainer = document.getElementById(lastContainerId!)
  Charts?.forEach((chartArray, index) => {
    if (index === 0) {
      chartArray.forEach((chart) => {
        let newCanva = document.createElement('canvas')
        newCanva.id = `${window.crypto.randomUUID()}`
        let newDiv = document.createElement('div')
        console.log(parentContainer?.offsetWidth!, parentContainer?.offsetHeight!)
        newCanva.width =
          chartArray.length === 1
            ? parentContainer?.clientWidth! / 1.2
            : parentContainer?.clientWidth! / 2.15
        newCanva.height =
          chartArray.length === 1
            ? parentContainer?.clientHeight! / 1.5
            : parentContainer?.clientHeight! / 1.5

        firstContainer?.appendChild(newDiv)
        newDiv?.appendChild(newCanva)
        new Chart(newCanva.id, {
          type: chart.type,
          data: {
            labels: chart.labels,
            datasets: chart.datasets
          }
        })
      })
    } else {
      switch (chartArray.length) {
        case 1:
          console.log(chartArray)
      }
    }
  })
}

export function renderLegalComplianceChart(
  Charts?: ChartData[],
  firstContainerId?: string,
  lastContainerId?: string
) {
  const firstContainer = document.getElementById(firstContainerId!)
  const lastContainer = document.getElementById(lastContainerId!)

  Charts?.forEach((chart, index) => {
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
