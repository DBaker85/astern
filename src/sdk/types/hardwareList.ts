declare module HardwareList {
  export interface Cpu {
    name: string;
    caption: string;
    description: string;
    manufacturer: string;
    processorid: string;
    socket: string;
    cores: number;
    logicalprocessors: number;
    l2cachesize: number;
    l3cachesize: number;
    cachesizeunit: string;
    virtualizationenabled: boolean;
    maxclockspeed: number;
  }

  export interface Processor {
    count: number;
    cpus: Cpu[];
  }

  export interface Gpu {
    name: string;
    caption: string;
    description: string;
    manufacturer: string;
    driver: string;
    videoprocessor: string;
    videomodedescription: string;
    bitsperpixel?: number;
    horizontalresolution?: number;
    verticalresolution?: number;
    refreshrate?: number;
    refreshrateunit: string;
  }

  export interface Graphics {
    count: number;
    gpus: Gpu[];
  }

  export interface Module {
    name: string;
    banklabel: string;
    caption: string;
    description: string;
    manufacturer: string;
    model?: any;
    partnumber: string;
    serialnumber: string;
    type: string;
    formfactor: string;
    speed: number;
    speedunit: string;
    capacity: any;
    capacityunit: string;
  }

  export interface Memory {
    count: number;
    totalcapacity: number;
    capacityunit: string;
    modules: Module[];
  }

  export interface RootObject {
    timestamp: Date;
    processor: Processor;
    graphics: Graphics;
    memory: Memory;
  }
}

export { HardwareList };
