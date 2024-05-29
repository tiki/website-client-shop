import type { MainRouter } from './types/MainRouter'

import LegalComplianceScreen from '@/LegalCompliance/LegalComplianceScreen.vue'
import DatasetScreen from '@/Dataset/DatasetScreen.vue'

import { createMemoryHistory, createRouter } from 'vue-router'

export default class Router {
  private static instance: Router

  private myAccountRoutes: string[] = [
    'Organization',
    'Billing and Usage',
    'Access Keys',
    'Legal Compliance'
  ]
  private dataAccessroutes: string[] = [
    'Playground',
    'AWS Athena',
    'Snowflake',
    'Apache Airflow',
    'Google BigQuery',
    'Apache Spark',
    'Databricks'
  ]
  private datasetsRoutes: string[] = []

  public static getInstance(): Router {
    if (!Router.instance) {
      Router.instance = new Router()
    }
    return Router.instance
  }

  public static getInitialRoute(): string {
    const instance = Router.getInstance()
    return instance.myAccountRoutes[3]
  }

  public static getRoutes(): MainRouter[] {
    const instance = Router.getInstance()

    // use fetch to get datasets routes

    const datasetsRoutes: string[] = ['Transactions', 'Receipts', 'Demographics']
    instance.datasetsRoutes = datasetsRoutes

    const routes: MainRouter[] = [
      {
        sectionName: 'my account',
        navList: instance.myAccountRoutes
      },
      {
        sectionName: 'datasets',
        navList: instance.datasetsRoutes
      },
      {
        sectionName: 'data access',
        navList: instance.dataAccessroutes
      }
    ]

    return routes
  }
}

const routes = [
  {
    path: '/',
    redirect: '/myAccount/legalCompliance',
    children: []
  },
  {
    path: '/myAccount',
    name: 'my account',
    children: [
      {
        path: 'legalCompliance',
        name: 'legal compliance',
        component: LegalComplianceScreen
      }
    ]
  },
  {
    path: '/datasets/:name',
    component: DatasetScreen,
    name: 'datasets',
    children: []
  }
]

export const pluginRouter = createRouter({
  history: createMemoryHistory(),
  routes
})
