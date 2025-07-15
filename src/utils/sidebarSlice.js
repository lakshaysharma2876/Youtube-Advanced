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
        closeSideMenu : (state) => {
            state.isopen = false;
        },
        openSideMenu : (state) => {
            state.isopen = true;
        }
    }
})

export const {toggleSidebarBtn, closeSideMenu, openSideMenu} = SidebarSlice.actions
export default SidebarSlice.reducer;
