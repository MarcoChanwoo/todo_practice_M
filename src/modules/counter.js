import { createAction, handleAction } from 'redux-actions';

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// export const increase = () => ({ type: INCREASE });
// export const decrease = () => ({ type: DECREASE });

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

const initialState = {
  number: 0,
};

// function counter(state = initialState, action) {
//   switch (action.type) {
//     case INCREASE:
//       return {
//         number: state.number + 1,
//       };
//     case DECREASE:
//       return {
//         number: state.number - 1,
//       };

//     default:
//       return state;
//   }
// }

// 더 간결한 코드
const counter = handleAction(
  {
    [INCREASE]: (state, action) => ({ number: state.number + 1 }),
    [DECREASE]: (state, action) => ({ number: state.number - 1 }),
  },
  initialState,
);

export default counter;
