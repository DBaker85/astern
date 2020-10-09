export interface Includedsensortypes {
  processor: string[];
  memory: string[];
  graphics: string[];
  mainboard: string[];
  storage: string[];
}

export interface Config {
  hardwaretype: string;
  sensortype: string;
  id: string;
}

export interface Sensor {
  sensortype: string;
  unit: string;
  id: string;
  label: string;
  value: number;
  min: number;
  max: number;
  avg?: any;
  _config: Config;
}

export interface Datum {
  hardwaretype: string;
  title: string;
  id: string;
  sensors: Sensor[];
}

export interface Openhardwaremonitor {
  timestamp: Date;
  source: string;
  includedhardwaretypes: string[];
  includedsensortypes: Includedsensortypes;
  data: Datum[];
}

export interface Includedsensortypes2 {
  processor: string[];
  memory: string[];
  graphics: string[];
  mainboard: string[];
  storage: string[];
  network: string[];
}

export interface Regex {
  match: string;
  flag: string;
}

export interface ByLabel {
  includes: string;
  excludes: string;
}

export interface Extract {
  byLabel: ByLabel[];
}

export interface Config2 {
  hardwaretype: string;
  sensortype: string;
  regex: Regex;
  name: string;
  sources: string;
  fallbackToFirstValue?: boolean;
  extract: Extract[];
}

export interface Sensor2 {
  sensortype: string;
  unit: string;
  id: string;
  label: string;
  value: number;
  min: number;
  max: number;
  avg?: any;
  _config: Config2;
}

export interface Datum2 {
  hardwaretype: string;
  title: string;
  id: string;
  sensors: Sensor2[];
}

export interface Librehardwaremonitor {
  timestamp: Date;
  source: string;
  includedhardwaretypes: string[];
  includedsensortypes: Includedsensortypes2;
  data: Datum2[];
}

export interface Includedsensortypes3 {}

export interface Hwinfo {
  timestamp: Date;
  source: string;
  includedhardwaretypes: any[];
  includedsensortypes: Includedsensortypes3;
  data: any[];
}

export interface SensorData {
  openhardwaremonitor: Openhardwaremonitor;
  librehardwaremonitor: Librehardwaremonitor;
  hwinfo: Hwinfo;
}
