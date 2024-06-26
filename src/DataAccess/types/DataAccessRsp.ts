export interface DataAccessRsp {
    data: DataAccess[]
    meta: Meta
  }
  
  export interface DataAccess {
    id: number
    attributes: Attributes
  }
  
  export interface Attributes {
    name: string
    description: string
    content: string
    createdAt: string
    updatedAt: string
    publishedAt: string
  }
  
  export interface Meta {
    pagination: Pagination
  }
  
  export interface Pagination {
    page: number
    pageSize: number
    pageCount: number
    total: number
  }
  