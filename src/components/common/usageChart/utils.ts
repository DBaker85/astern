import { produce } from "immer";

export const maxDataPoints = 120;

export const arrayUpdater = (baseState: UsageType[], value: number) =>
  produce<UsageType[]>(baseState, (draftState) => {
    if (baseState.length === maxDataPoints) {
      draftState.shift();
    }
    draftState.push({
      time: new Date(),
      usage: value,
    });
  });

// accessors
export const getTime = (d: UsageType) => new Date(d.time);
export const getUsageValue = (d: UsageType) => d.usage;

export type UsageType = { time: Date; usage: number };
