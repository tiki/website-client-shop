import { type ChartData } from "@/ChartService/types/Chart";
import { type Stats } from "./Stats";

export interface DatasetResponse {
    data: Data[];
    meta: Meta;
  }
  
  export interface Data {
    id: number;
    attributes: Attributes;
  }
  
  export interface Attributes {
    name: string;
    description: string;
    stats: Stats;
    charts: ChartData[][];
    taxonomy: Taxonomy;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  }
  
  export interface Chart {
    width: number;
    height: number;
    type: string;
    labels: string[];
    datasets: Dataset[];
  }
  
  export interface Dataset {
    data: any[];
    label: string;
    backgroundColor: string;
    borderColor?: string;
    fill?: boolean;
  }
  
  export interface TaxonomyItem {
    data: string;
    type: string;
    description: string
  }
  
  export interface Taxonomy {
    [key: string]: TaxonomyItem[];
  }
  
  export interface Meta {}
  