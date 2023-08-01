// import { createAction, createReducer } from "@reduxjs/toolkit";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

// export const increment = createAction("counter/increment");
// export const decrement = createAction("counter/decrement");
// export const multiplyIncrement = createAction("counter/multiplyIncrement");
// export const multiplyDecrement = createAction("counter/multiplyDecrement");
// export const multiplyDecrement = createAction("counter/increaseFive", () => {
//   return {
//     payload: 5,
//   };
// });

// const counterReducer = createReducer(initialState, {
//   [increment]: (state) => {
//     state.value++;
//   },
//   [decrement]: (state) => {
//     state.value--;
//   },
//   [multiplyIncrement]: (state, action) => {
//     state.value += action.payload;
//   },
//   [multiplyDecrement]: (state, action) => {
//     state.value -= action.payload;
//   },
// });

// const counterReducer = createReducer(initialState, (builder) => {
//   builder
//     .addCase(increment, (state) => {
//       state.value++;
//     })
//     .addCase(decrement, (state) => {
//       state.value--;
//     })
//     .addCase(multiplyIncrement, (state, action) => {
//       state.value += action.payload;
//     })
//     .addCase(multiplyDecrement, (state, action) => {
//       state.value -= action.payload;
//     });
// });

// export default counterReducer;

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    decrement(state) {
      state.value++;
    },
    increment(state) {
      state.value++;
    },
    multiplyDecrement(state, action) {
      state.value -= action.payload;
    },
    multiplyIncrement(state, action) {
      state.value += action.payload;
    },
    increaseFive: {
      reducer: (state, action) => {
        state.value += action.payload;
      },
      prepare() {
        return {
          payload: 5,
        };
      },
    },
  },
});

// const counterSlice = createSlice({
//   name: "counter",
//   initialState,
//   reducers: (builder) => {
//     builder
//       .addCase("decrement", (state) => {
//         state.value++;
//       })
//       .addCase("increment", (state) => {
//         state.value++;
//       })
//       .addCase("multiplyDecrement", (state, action) => {
//         state.value -= action.payload;
//       })
//       .addCase("multiplyIncrement", (state, action) => {
//         state.value += action.payload;
//       })
//       .addCase("increaseFive", (state) => {
//         state.value += 5;
//       });
//   },
// });

const { actions, reducer, name } = counterSlice;

export { name as nameCounter };

export const {
  decrement,
  increment,
  multiplyDecrement,
  multiplyIncrement,
  increaseFive,
} = actions;

export default reducer;
