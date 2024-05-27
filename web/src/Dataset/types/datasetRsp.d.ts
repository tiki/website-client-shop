export interface DatasetResponse {
    data: Data[]
    meta: Meta
  }
  
  export interface Data {
    id: number
    attributes: Attributes
  }
  
  export interface Attributes {
    name: string
    description: string
    stats: Stats
    charts: Charts
    taxonomy: Taxonomy
    createdAt: string
    updatedAt: string
    publishedAt: string
  }
  
  export interface Stats {
    updates: string
    updated_at: string
    years: string
    contains: string[]
    approved_for: string[]
  }
  
  export interface Charts {
    charts: Chart[][]
  }
  
  export interface Chart {
    width: number
    height: number
    type: string
    labels: string[]
    datasets: Dataset[]
  }
  
  export interface Dataset {
    data: any[]
    label: string
    backgroundColor: string
    borderColor?: string
    fill?: boolean
  }
  
  export interface Taxonomy {
    receipts?: Receipt[]
    demographics?: Demographic[]
    transactions?: Transaction[]
  }
  
  export interface Receipt {
    data: string
    type: string
  }
  
  export interface Demographic {
    data: string
    type: string
  }
  
  export interface Transaction {
    data: string
    type: string
  }
  
  export interface Meta {}
  