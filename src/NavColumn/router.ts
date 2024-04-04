export default class Router {
  private static instance: Router

  private myAccountRoutes: string[] = [
    'Organization',
    'Billing and Usage',
    'Access Keys',
    'Legal Compliance'
  ]
  private datasetsRoutes: string[] = []
  private dataAccessroutes: string[] = [
    'Playground',
    'AWS Athena',
    'Snowflake',
    'Apache Airflow',
    'Google BigQuery',
    'Apache Spark',
    'Databricks'
  ]

  public static getInstance(): Router {
    if (!Router.instance) {
      Router.instance = new Router()
    }
    return Router.instance
  }

  public static getRoutes(datasetsRoutes: string[]) {
    const instance = Router.getInstance()
    instance.datasetsRoutes = datasetsRoutes

    const routes = [
      {
        title: 'MY ACCOUNT',
        navList: instance.myAccountRoutes
      },
      {
        title: 'DATASETS',
        navList: instance.datasetsRoutes
      },
      {
        title: 'DATA ACCESS',
        navList: instance.dataAccessroutes
      }
    ]

    return routes
  }
}
