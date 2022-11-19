export type ApiResponse = {
  ticker: string;
  description: string;
  geography: string;
  frequency: string;
  dataset: string;
  units: any;
  additional_metadata: AdditionalMetadata;
  data: Data;
};

export type ChartData = {
  values: number[];
  dates: string[];
};

export type ChartProperties = {
  dates: string[];
  values: number[];
  label: string;
  title: string;
  scale?: number;
};

type AdditionalMetadata = {
  '1:area_code': string;
  '3:item_code': string;
  '1220:base_code': string;
  'GEO:None': string;
};

type Data = {
  values: number[];
  dates: string[];
  status: string[];
};
