import type { MainRouter } from './types/MainRouter'

import LegalComplianceScreen from '@/LegalCompliance/LegalComplianceScreen.vue'
import DatasetScreen from '@/Dataset/DatasetScreen.vue'
import AccessKeysScreen from '@/AccessKeys/AccessKeysScreen.vue'
import DataAccessScreen from '@/DataAccess/DataAccessScreen.vue'

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
    'Aws Athena',
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
      },
      {
        path: 'accessKeys',
        name: 'access keys',
        component: AccessKeysScreen
      }
    ]
  },
  {
    path: '/datasets/:name',
    component: DatasetScreen,
    name: 'datasets',
    children: []
  },
  {
    path: '/dataAccess',
    name: 'data access',
    children: [
      {
        path: 'awsAthena',
        name: 'aws athena',
        component: DataAccessScreen
      },
      {
        path: 'snowflake',
        name: 'snowflake',
        component: DataAccessScreen
      },
      {
        path: 'apacheAirflow',
        name: 'apache airflow',
        component: DataAccessScreen
      },
      {
        path: 'googleBigquery',
        name: 'google bigquery',
        component: DataAccessScreen
      },
      {
        path: 'apacheSpark',
        name: 'apache spark',
        component: DataAccessScreen
      },
      {
        path: 'databricks',
        name: 'databricks',
        component: DataAccessScreen
      }
    ]
  }
]

export const pluginRouter = createRouter({
  history: createMemoryHistory(),
  routes
})
