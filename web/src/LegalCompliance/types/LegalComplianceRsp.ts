export interface LegalComplianceRsp {
    data: LegalComplianceData[]
    meta: Meta
  }
  
  export interface LegalComplianceData {
    id: number
    attributes: Attributes
  }
  
  export interface Attributes {
    name: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    approved: boolean
    link: string
    records: string
    approved_for: ApprovedFor
  }
  
  export interface ApprovedFor {
    approved_for: string[]
  }
  
  export interface Meta {}
  