import { createSlice, configureStore } from "@reduxjs/toolkit";
export const INCREMENT = "increment";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    counter: 0,
    showCounter: true,
  },
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter += action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});


const store = configureStore({
  reducer: { counter: counterSlice.reducer}
});
export const counterActions = counterSlice.actions
export default store;
