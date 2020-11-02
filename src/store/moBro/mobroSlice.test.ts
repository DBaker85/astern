// it('should set the correct campaign', () => {
//     const state = {
//       current: null,
//       testCampaign: {
//         seen: false,
//       },
//       ketelComfort: {
//         seen: false,
//       },
//     };

//     const expectedResult = {
//       current: 'ketelComfort',
//       testCampaign: {
//         seen: false,
//       },
//       ketelComfort: {
//         seen: false,
//       },
//     };
//     expect(campaignReducer(state, setCurrent('ketelComfort'))).toEqual(expectedResult);
//   });
import reducer, { initMobroClient, MobroState } from "./mobroSlice";

const initialMobroState: MobroState = {
  sensors: {},
  hardware: {},
  settings: {},
  loading: false,
  init: false,
};

describe("Mobro Slice", () => {
  it("Should set loading state while init", () => {
    const action = { type: initMobroClient.pending };
    const newState = reducer(initialMobroState, action);
    const expectedState = { ...initialMobroState, ...{ loading: true } };

    expect(newState).toEqual(expectedState);
  });
});
