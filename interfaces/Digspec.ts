export interface DigspecData {
  _id: string;
  name: string;
  num: number;
  subgroup: string;
  maingroup: string;
  ad_series: { labels: string[]; values: number[] };
  prediction_series: {
    [predSpan: string]: {
      labels: string[];
      values: number[];
    };
  };
  model: string;
  mape: {
    value: number;
    type: string;
  }[];
  eval_mape: number;
  prediction_values: {
    [predSpan: string]: number;
  };
  prediction_percentages: {
    [predSpan: string]: number;
  };
  trend_percentages: {
    [trendSpan: string]: number;
  };
  jobs: {
    [occupation_name: string]: number;
  };
  skills: {
    [skillname: string]: number;
  };
  geos: {
    [geoName: string]: {
      num: number;
      organisations_num: number;
      details: {
        [employerName: string]: number;
      };
    };
  };
  employers: {
    [employer: string]: number;
  };
  traits: {
    [traitName: string]: number;
  };
}
