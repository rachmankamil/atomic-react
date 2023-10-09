import { createSlice } from "@reduxjs/toolkit"

const tokenSlice = createSlice({
    name: "token",
    initialState: {
        value: ""
    },
    reducers:{
        setToken: (state, action) => {
            console.log(action);
            state.value = action.payload
        },
    }
})

// setter function on global state
export const {setToken} = tokenSlice.actions
// getter function on global state
export const getToken = (state) => state.token.value
// export store reducer
export default tokenSlice.reducer