import { createSlice } from '@reduxjs/toolkit'

const initialState = {
 user : null
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setuserDetai : (state,action)=>{

      console.log(action.payload)

    }
   
  },
})

// Action creators are generated for each case reducer function
export const { setuserDetai} = counterSlice.actions

export default userSlice.reducer