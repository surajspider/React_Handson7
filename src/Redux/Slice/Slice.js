import { createSlice } from "@reduxjs/toolkit";

const initialState = [{
    name: "Sachin",
    age: 12,
    course: "MERN",
    batch: "EA24"
},
{
    name: "Mervin",
    age: 20,
    course: "MERN",
    batch: "EA23"
},
{
    name: "Rody",
    age: 20,
    course: "MEAN",
    batch: "EA21"
},
{
    name: "Dhoni",
    age: 30,
    course: "Cricket",
    batch: "EA22"
},
{
    name: "Sundar Pichai",
    age: 40,
    course: "AI",
    batch: "EA05"
}]
const StudentSlice = createSlice({
    name: "Stu_Data",
    initialState,
    reducers: {
        editStudent: (state, action) => {
            state[action.payload.indexdata] = action.payload.updateData;
        },
        addStudent: (state, action) => {
            state.push(action.payload);
        },
        deleteStudent: (state, action) => {
            console.log(action.payload)
            state.splice(action.payload, 1);
        }
    }
});

export const { editStudent, addStudent, deleteStudent } = StudentSlice.actions;
export default StudentSlice.reducer;