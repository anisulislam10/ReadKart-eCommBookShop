import { createSlice } from "@reduxjs/toolkit";
const authSlice=createSlice({

    name: "auth",
    initialState:{isLoggedin:false, role:"user"},
    reducers:{
      login(state){
        state.isLoggedin=true;
      },
      logout(state){
        state.logout=false;
      },
      changeRole(state,action){
        const role=action.payload;
        state.role=role;
      },
      
    }
})

export const authAction=authSlice.actions;
export default authSlice.reducer;