declare module HardwareList {
  export interface Includedsensortypes {
    processor?: string[];
    memory?: string[];
    graphics?: string[];
    mainboard?: string[];
    storage?: string[];
    network?: string[];
  }

  export interface Config {
    hardwaretype: string;
    sensortype: string;
    id?: string;
    regex?: Regex;
    name?: string;
    sources?: string;
    fallbackToFirstValue?: boolean;
    extract?: Extract[];
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

  export interface HardwaremonitorData {
    timestamp: Date;
    source: string;
    includedhardwaretypes: string[];
    includedsensortypes: Includedsensortypes;
    data: Datum[];
  }

  export interface RootObject {
    openhardwaremonitor: HardwaremonitorData;
    librehardwaremonitor: HardwaremonitorData;
    hwinfo: HardwaremonitorData;
  }
}

export { HardwareList };
