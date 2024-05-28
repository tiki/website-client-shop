import type { Route } from './types/route'
import type { MainRouter } from './types/MainRouter'

import LegalComplianceScreen from '@/LegalCompliance/LegalComplianceScreen.vue'
import DatasetScreen from '@/Dataset/DatasetScreen.vue'

import { createMemoryHistory, createRouter } from 'vue-router'

export default class Router {
  private static instance: Router

  private myAccountRoutes: Route[] = [
    {
      type: 'my account',
      route: 'Organization'
    },
    {
      type: 'my account',
      route: 'Billing and Usage'
    },
    {
      type: 'my account',
      route: 'Access Keys'
    },
    {
      type: 'my account',
      route: 'Legal Compliance'
    }
  ]
  private dataAccessroutes: Route[] = [
    {
      type: 'Data Access',
      route: 'Playground'
    },
    {
      type: 'Data Access',
      route: 'AWS Athena'
    },
    {
      type: 'Data Access',
      route: 'Snowflake'
    },
    {
      type: 'Data Access',
      route: 'Apache Airflow'
    },
    {
      type: 'Data Access',
      route: 'Google BigQuery'
    },
    {
      type: 'Data Access',
      route: 'Apache Spark'
    },
    {
      type: 'Data Access',
      route: 'Databricks'
    }
  ]
  private datasetsRoutes: Route[] = []

  public static getInstance(): Router {
    if (!Router.instance) {
      Router.instance = new Router()
    }
    return Router.instance
  }

  public static getInitialRoute(): Route {
    const instance = Router.getInstance()
    return instance.myAccountRoutes[3]
  }

  public static getRoutes(): MainRouter[] {
    const instance = Router.getInstance()

    // do fetch to get datasets routes

    const datasetsRoutes: Route[] = [
      {
        type: 'Datasets',
        route: 'Transactions'
      },
      {
        type: 'Datasets',
        route: 'Receipts'
      },
      {
        type: 'Datasets',
        route: 'Demographics'
      }
    ]
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
