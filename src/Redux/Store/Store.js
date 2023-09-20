import { configureStore } from "@reduxjs/toolkit";
import StudentSlice from '../Slice/Slice';

const Store = configureStore({
    reducer: {
        Stu_Data: StudentSlice
    }
});

export default Store;