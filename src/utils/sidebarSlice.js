import { createSlice } from "@reduxjs/toolkit";

const SidebarSlice = createSlice ({
    name : "Sidebar",
    initialState : {
        isopen : true,
    },
    reducers : {
        toggleSidebarBtn : (state) => {
            state.isopen = !state.isopen; 
        },
    }
})

export const {toggleSidebarBtn} = SidebarSlice.actions
export default SidebarSlice.reducer;
