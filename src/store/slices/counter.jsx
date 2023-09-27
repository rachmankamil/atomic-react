import { createSlice } from "@reduxjs/toolkit"

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 0
    },
    reducers:{
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByValue: (state, action) => {
            state.value += action.payload
        }
    }
})

// setter function on global state
export const {increment, decrement, incrementByValue} = counterSlice.actions
// getter function on global state
export const getCount = (state) => state.counter.value
// export store reducer
export default counterSlice.reducer