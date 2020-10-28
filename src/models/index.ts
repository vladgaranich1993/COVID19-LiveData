export interface GlobalData {
  NewConfirmed: number;
  TotalConfirmed: number;
  NewDeaths: number;
  TotalDeaths: number;
  NewRecovered: number;
  TotalRecovered: number;
}

export interface Country {
  Country: string;
  CountryCode: string;
  Slug: string;
  NewConfirmed: number;
  TotalConfirmed: number;
  NewDeaths: number;
  TotalDeaths: number;
  NewRecovered: number;
  TotalRecovered: number;
  Date: string;
}

export interface FieldsBE {
  Global: GlobalData;
  Countries: Array<Country>;
  Date: string;
}

export interface State {
  globalData: GlobalData;
  countriesData: Array<Country>;
  countriesNames: Array<string>;
}
