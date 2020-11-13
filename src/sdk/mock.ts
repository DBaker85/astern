window.MobroSDK = {
  generalChannels: {
    PROCESSOR: {
      USAGE: "general_processor_usage",
      TEMPERATURE: "general_processor_temperature",
    },
    GRAPHICS: {
      USAGE: "general_graphics_usage",
      TEMPERATURE: "general_graphics_temperature",
    },
    MEMORY: {
      USAGE: "general_memory_usage",
      AVAILABLE: "general_memory_available",
      USED: "general_memory_used",
    },
  },
  commands: {
    CONTROL: {
      AUDIO: {
        NEXT: "control:audio:next",
        PREV: "control:audio:prev",
        PAUSE: "control:audio:pause",
        PLAY: "control:audio:play",
        STOP: "control:audio:stop",
        VOLUME_UP: "control:audio:volume-up",
        VOLUME_DOWN: "control:audio:volume-down",
        VOLUME_MUTE: "control:audio:volume-mute",
      },
    },
  },
  com: {
    INIT: "init",
    MONITOR: {
      DATA: "monitor:data",
      HARDWARE: "monitor:hardware",
      INCLUDED_HARDWARE_TYPES: "monitor:included-hardware-types",
      INCLUDED_SENSOR_TYPES: "monitor:included-sensor-types",
      SENSOR_DATA: "monitor:sensor:data",
    },
  },
  socket: null,
  initialized: !1,
  helper: null,
  init() {},
  getSocket() {
    return this.socket;
  },
  isConnected() {},

  addChannelListener(t, e) {},
  removeChannelListener(t, e) {},
  emit(t, e) {},
};

// .addChannelListener = (channel, cb)=>{
//     setInterval(()=>cb(55),500)
// }
