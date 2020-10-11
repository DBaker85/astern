export declare module Helper {
  export interface Temperature {
    hardwaretype: string;
    warning: number;
    critical: number;
    max: number;
  }

  export interface Hardware {
    temperature: Temperature[];
  }

  export interface Settings {
    temperatureAsFahrenheit?: boolean;
    hardware?: Hardware;
  }

  export interface RootObject {
    settings: Settings;
  }
}
