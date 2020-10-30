import {
  arrayUpdater,
  getTime,
  getUsageValue,
  UsageType,
  maxDataPoints,
} from "./utils";

const datapoint = {
  time: new Date(),
  usage: 55,
};

describe("Chart accessors", () => {
  it("Should get time", () => {
    const time = getTime(datapoint);
    expect(time).toBeInstanceOf(Date);
  });

  it("Should get usage", () => {
    const usage = getUsageValue(datapoint);
    expect(usage).toEqual(55);
  });
});

describe("Array Updater", () => {
  let dataSet: UsageType[] | [] = [];
  beforeEach(() => {
    dataSet = [];
  });
  it("Should add data of the correct type", () => {
    const newSet = arrayUpdater(dataSet, 100);
    expect(newSet).toBeInstanceOf(Array);
    expect(newSet[0].time).toBeInstanceOf(Date);
    expect(newSet[0].usage).toEqual(100);
  });
  it("Should only hold a two minutes worth of data", () => {
    dataSet = Array(maxDataPoints).fill({ time: new Date(), usage: 55 });
    const newSet = arrayUpdater(dataSet, 100);
    const newSet2 = arrayUpdater(newSet, 100);
    const newSet3 = arrayUpdater(newSet2, 100);
    expect(newSet3.length).toBe(maxDataPoints);
  });
  it("Should correctly slice and update data", () => {
    dataSet = Array(maxDataPoints).fill({ time: new Date(), usage: 55 });
    const newSet = arrayUpdater(dataSet, 120);
    const newSet2 = arrayUpdater(newSet, 150);
    const newSet3 = arrayUpdater(newSet2, 160);
    expect(newSet3[maxDataPoints - 1].usage).toBe(160);
    expect(newSet3[maxDataPoints - 2].usage).toBe(150);
    expect(newSet3[maxDataPoints - 3].usage).toBe(120);
    expect(newSet3[maxDataPoints - 4].usage).toBe(55);
  });
});
