import { type ChartData } from './types/Chart'
import { Chart } from 'chart.js/auto'

export default class ChartService {
  public static renderLegalComplianceChart(chart: ChartData, firstContainerId: string) {
    const firstContainer = document.getElementById(firstContainerId!)

    const newCanva = document.createElement('canvas')
    newCanva.id = `${window.crypto.randomUUID()}`
    newCanva.width = 200
    newCanva.height = 200

    const newDiv = document.createElement('div')
    firstContainer?.appendChild(newDiv)

    newDiv.appendChild(newCanva)

    new Chart(newCanva.id, {
      type: 'doughnut',
      data: {
        labels: chart.labels,
        datasets: chart.datasets
      }
    })
  }

  public static renderDatasetScreenChart(
    charts?: ChartData[][],
    firstContainerId?: string,
    lastContainerId?: string
  ) {
    if (!firstContainerId || !charts) return
    const parentContainer = document.getElementById('first-chart-container')
    const firstContainer = document.getElementById(firstContainerId)
    if (!firstContainer && !parentContainer) return
    ChartService.renderFirstChart(charts[0], firstContainer!, parentContainer!)
    ChartService.renderGridCharts(charts, lastContainerId!, firstContainer!, parentContainer!)
  }

  static renderFirstChart(
    chartArray: ChartData[],
    firstContainer: HTMLElement,
    parentContainer: HTMLElement
  ) {
    chartArray.forEach((chart) => {
      const newCanva = document.createElement('canvas')
      newCanva.id = `${window.crypto.randomUUID()}`
      const newDiv = document.createElement('div')
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
        type: chart.type!,
        data: {
          labels: chart.labels,
          datasets: chart.datasets
        }
      })
    })
  }

  static renderGridCharts(
    charts: ChartData[][],
    lastContainerId: string,
    firstContainer: HTMLElement,
    parentContainer: HTMLElement
  ) {
    const lastContainer = document.getElementById(lastContainerId!)
    for (let index = 1; index < charts.length; index++) {
      const chartArray = charts[index]
      const slotDiv = document.createElement('div')
      slotDiv.id = window.crypto.randomUUID()
      slotDiv.style.display = 'flex'
      slotDiv.style.flexWrap = 'wrap'
      slotDiv.style.justifyContent = 'center'
      lastContainer?.append(slotDiv)
      switch (chartArray.length) {
        case 1:
          ChartService.renderGridChart(
            parentContainer?.clientWidth! / 1.2,
            parentContainer?.clientHeight!,
            chartArray[0],
            slotDiv
          )
          break
        case 2:
          chartArray.forEach((array) => {
            ChartService.renderGridChart(
              parentContainer?.clientWidth! / 1.2,
              parentContainer?.clientHeight! / 2,
              array,
              slotDiv
            )
          })
          break
        case 3:
          chartArray.forEach((array) => {
            ChartService.renderGridChart(
              parentContainer?.clientWidth! / 2.4,
              parentContainer?.clientHeight! / 2,
              array,
              slotDiv
            )
          })
          break
        case 4:
          chartArray.forEach((array) => {
            ChartService.renderGridChart(
              parentContainer?.clientWidth! / 2.4,
              parentContainer?.clientHeight! / 2.8,
              array,
              slotDiv
            )
          })
      }
    }
  }

  static renderGridChart(width: number, height: number, chart: ChartData, slotDiv: HTMLElement) {
    const newCanva = document.createElement('canvas')
    newCanva.id = `${window.crypto.randomUUID()}`
    const newDiv = document.createElement('div')

    newCanva.width = width
    newCanva.height = height

    slotDiv?.appendChild(newDiv)
    newDiv?.appendChild(newCanva)
    new Chart(newCanva.id, {
      type: chart.type!,
      data: {
        labels: chart.labels,
        datasets: chart.datasets
      }
    })
  }
}
