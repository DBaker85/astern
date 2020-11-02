import { RootStateType } from "../../index";

export const cpuName = "AmazeCpu";
export const gpuName = "AmazeRayTracing";
export const ramCapacity = {
  totalcapacity: 17179869184,
  totalcapacityGb: "16GB",
  count: 2,
  capacityunit: "B",
};
export const cpuLimits = {
  hardwaretype: "Processor",
  warning: 70,
  critical: 80,
  max: 100,
};
export const gpuLimits = {
  hardwaretype: "Graphics",
  warning: 80,
  critical: 100,
  max: 110,
};

export const coreCount = 4;

const coreSensors = Array(coreCount).fill({
  sensortype: "Usage",
  label: "CPU Core #1",
});

export const mocks: RootStateType = {
  moBro: {
    sensors: {
      openhardwaremonitor: {
        data: [
          {
            hardwaretype: "Processor",
            title: cpuName,

            sensors: coreSensors,
          },

          {
            hardwaretype: "Graphics",
            title: gpuName,
          },
        ],
      },
      librehardwaremonitor: {
        data: [
          {
            hardwaretype: "Processor",
            title: cpuName,

            sensors: [
              {
                sensortype: "Usage",

                label: "CPU Core #1",
              },
              {
                sensortype: "Usage",

                label: "CPU Core #2",
              },
              {
                sensortype: "Usage",

                label: "CPU Core #3",
              },
              {
                sensortype: "Usage",

                label: "CPU Core #4",
              },
            ],
          },

          {
            hardwaretype: "Graphics",
            title: "NVIDIA GeForce GTX 1080 Ti",
          },
        ],
      },
    },
    hardware: {
      memory: ramCapacity,
    },
    settings: {
      temperatureAsFahrenheit: false,
      hardware: {
        temperature: [cpuLimits, gpuLimits],
      },
    },
    loading: false,
    init: true,
  },
};
