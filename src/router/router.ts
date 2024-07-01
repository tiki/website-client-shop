import type { MainRouter } from './types/MainRouter'

import LegalComplianceScreen from '@/LegalCompliance/LegalComplianceScreen.vue'
import DatasetScreen from '@/Dataset/DatasetScreen.vue'
import DataAccessScreen from '@/DataAccess/DataAccessScreen.vue'
import PlaygroundScreen from '@/Playground/PlaygroundScreen.vue'

import { createMemoryHistory, createRouter } from 'vue-router'
export default class Router {
  private static instance: Router

  private myAccountRoutes: string[] = [
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

  public static async getRoutes(): Promise<MainRouter[]> {
    const instance = Router.getInstance()

    const datasetsRoutes: string[] = []
    const headers = new Headers()
    headers.append(
      'Authorization',
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjbGllbnRfaWQiLCJhdWQiOiJteXRpa2kuY29tIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.C_xGCt8BsAUjfFm6dJ60VoMu1qyxu7LAzbe6bm0B7Rw'
    )
    const options = {
      method: 'GET',
      headers: headers
    }
    const response = await (await fetch(`${import.meta.env.VITE_API_URL}/datasets`, options)).json()

    response.data.forEach((element: any) => {
      datasetsRoutes.push(element.attributes.name)
    })

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
        path: 'playground',
        name: 'playground',
        component: PlaygroundScreen
      },
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
