import type { Route } from './types/route'
import LegalComplianceScreen from '@/LegalCompliance/LegalComplianceScreen.vue'
import DatasetScreen from '@/Dataset/DatasetScreen.vue'
import type { MainRouter } from './types/MainRouter'

export default class Router {
  private static instance: Router

  private myAccountRoutes: Route[] = [
    {
      type: 'my account',
      route: 'Organization',
      subtitle: `This dataset contains purchase transaction information like the date, amount, merchant, type, and location. Combine with demographics to build profiles against spend. See Taxonomy for all available fields. Each record contains a standard userid which can be used to join demographics to various other datasets, such as receipts and demographics.`
    },
    {
      type: 'my account',
      route: 'Billing and Usage',
      subtitle: `This dataset contains purchase transaction information like the date, amount, merchant, type, and location. Combine with demographics to build profiles against spend. See Taxonomy for all available fields. Each record contains a standard userid which can be used to join demographics to various other datasets, such as receipts and demographics.`
    },
    {
      type: 'my account',
      route: 'Access Keys',
      subtitle: `This dataset contains purchase transaction information like the date, amount, merchant, type, and location. Combine with demographics to build profiles against spend. See Taxonomy for all available fields. Each record contains a standard userid which can be used to join demographics to various other datasets, such as receipts and demographics.`
    },
    {
      type: 'my account',
      route: 'Legal Compliance',
      subtitle: `All data provided is licensed directly from the legal owner. Review and select the agreements that meet your due-diligence criteria to get started.`,
      component: LegalComplianceScreen
    }
  ]
  private dataAccessroutes: Route[] = [
    {
      type: 'Data Access',
      route: 'Playground',
      subtitle: `This dataset contains purchase transaction information like the date, amount, merchant, type, and location. Combine with demographics to build profiles against spend. See Taxonomy for all available fields. Each record contains a standard userid which can be used to join demographics to various other datasets, such as receipts and demographics.`
    },
    {
      type: 'Data Access',
      route: 'AWS Athena',
      subtitle: `This dataset contains purchase transaction information like the date, amount, merchant, type, and location. Combine with demographics to build profiles against spend. See Taxonomy for all available fields. Each record contains a standard userid which can be used to join demographics to various other datasets, such as receipts and demographics.`
    },
    {
      type: 'Data Access',
      route: 'Snowflake',
      subtitle: `This dataset contains purchase transaction information like the date, amount, merchant, type, and location. Combine with demographics to build profiles against spend. See Taxonomy for all available fields. Each record contains a standard userid which can be used to join demographics to various other datasets, such as receipts and demographics.`
    },
    {
      type: 'Data Access',
      route: 'Apache Airflow',
      subtitle: `This dataset contains purchase transaction information like the date, amount, merchant, type, and location. Combine with demographics to build profiles against spend. See Taxonomy for all available fields. Each record contains a standard userid which can be used to join demographics to various other datasets, such as receipts and demographics.`
    },
    {
      type: 'Data Access',
      route: 'Google BigQuery',
      subtitle: `This dataset contains purchase transaction information like the date, amount, merchant, type, and location. Combine with demographics to build profiles against spend. See Taxonomy for all available fields. Each record contains a standard userid which can be used to join demographics to various other datasets, such as receipts and demographics.`
    },
    {
      type: 'Data Access',
      route: 'Apache Spark',
      subtitle: `This dataset contains purchase transaction information like the date, amount, merchant, type, and location. Combine with demographics to build profiles against spend. See Taxonomy for all available fields. Each record contains a standard userid which can be used to join demographics to various other datasets, such as receipts and demographics.`
    },
    {
      type: 'Data Access',
      route: 'Databricks',
      subtitle: `This dataset contains purchase transaction information like the date, amount, merchant, type, and location. Combine with demographics to build profiles against spend. See Taxonomy for all available fields. Each record contains a standard userid which can be used to join demographics to various other datasets, such as receipts and demographics.`
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
        route: 'Transactions',
        subtitle: `This dataset contains purchase transaction information like the date, amount, merchant, type, and location. Combine with demographics to build profiles against spend. See Taxonomy for all available fields. Each record contains a standard userid which can be used to join demographics to various other datasets, such as receipts and demographics.`,
        component: DatasetScreen
      },
      {
        type: 'Datasets',
        route: 'Receipts',
        subtitle: `This dataset contains purchase transaction information like the date, amount, merchant, type, and location. Combine with demographics to build profiles against spend. See Taxonomy for all available fields. Each record contains a standard userid which can be used to join demographics to various other datasets, such as receipts and demographics.`,
        component: DatasetScreen
      },
      {
        type: 'Datasets',
        route: 'Demographics',
        subtitle: `This dataset contains purchase transaction information like the date, amount, merchant, type, and location. Combine with demographics to build profiles against spend. See Taxonomy for all available fields. Each record contains a standard userid which can be used to join demographics to various other datasets, such as receipts and demographics.`,
        component: DatasetScreen
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
