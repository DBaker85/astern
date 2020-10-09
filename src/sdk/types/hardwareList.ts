interface Cpu {
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

interface Processor {
  count: number;
  cpus: Cpu[];
}

interface Gpu {
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

interface Graphics {
  count: number;
  gpus: Gpu[];
}

interface Module {
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

interface Memory {
  count: number;
  totalcapacity: number;
  capacityunit: string;
  modules: Module[];
}

export interface HardwareList {
  timestamp: Date;
  processor: Processor;
  graphics: Graphics;
  memory: Memory;
}
