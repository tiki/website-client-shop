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
      const slotDiv = document.createElement('div')
      slotDiv.id = window.crypto.randomUUID()
      slotDiv.style.display = 'flex'
      slotDiv.style.flexWrap = 'wrap'
      slotDiv.style.justifyContent = 'center'
      lastContainer?.append(slotDiv)
      switch (chartArray.length) {
        case 1:
          renderGridChart(
            parentContainer?.clientWidth! / 1.2,
            parentContainer?.clientHeight!,
            chartArray[0],
            slotDiv
          )
          break
        case 2:
          chartArray.forEach((array) => {
            renderGridChart(
              parentContainer?.clientWidth! / 1.2,
              parentContainer?.clientHeight! / 2,
              array,
              slotDiv
            )
          })
          break
        case 3:
          chartArray.forEach((array) => {
            renderGridChart(
              parentContainer?.clientWidth! / 2.4,
              parentContainer?.clientHeight! / 2,
              array,
              slotDiv
            )
          })
          break
        case 4:
          chartArray.forEach((array) => {
            renderGridChart(
              parentContainer?.clientWidth! / 2.4,
              parentContainer?.clientHeight! / 2.8,
              array,
              slotDiv
            )
          })
      }
    }
  })
}

function renderGridChart(width: number, height: number, chart: ChartData, slotDiv: HTMLElement) {
  let newCanva = document.createElement('canvas')
  newCanva.id = `${window.crypto.randomUUID()}`
  let newDiv = document.createElement('div')

  newCanva.width = width
  newCanva.height = height

  slotDiv?.appendChild(newDiv)
  newDiv?.appendChild(newCanva)
  new Chart(newCanva.id, {
    type: chart.type,
    data: {
      labels: chart.labels,
      datasets: chart.datasets
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
