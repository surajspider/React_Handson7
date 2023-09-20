import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { addStudent } from '../Slice/Slice';

function AddStudent() {
    const navi = useNavigate();
    // const data = useSelector((state) => state.Stu_Data);
    const dispatch = useDispatch();
    const [updateData, setUpdateData] = useState({
        name: "",
        age: "",
        course: "",
        batch: ""
    })
    const handleChange = (e) => {
        setUpdateData({ ...updateData, [e.target.name]: e.target.value })
    }
    const handleSubmit = () => {
        dispatch(addStudent(updateData));
        navi("/student");
    }
    return (
        <div>
            <h1>Add New Student</h1>
            <div className='form-parent'>
                <div className='form-child'>
                    <label htmlFor='name'>Name</label>
                    <input type="text" name="name" id="name" placeholder="Enter Name" onChange={handleChange} value={updateData.name} />
                </div>
                <div className='form-child'>
                    <label htmlFor='age'>Age</label>
                    <input type="number" name="age" id="age" placeholder='Enter Age' onChange={handleChange} value={updateData.age} />
                </div>
                <div className='form-child'>
                    <label htmlFor='course'>Course</label>
                    <input type="text" name="course" placeholder="Enter Course" onChange={handleChange} value={updateData.course} />
                </div>
                <div className='form-child'>
                    <label htmlFor='batch'>Batch</label>
                    <input type='text' name='batch' id="batch" placeholder="Enter Batch" onChange={handleChange} value={updateData.batch} />
                </div>
            </div>
            <div>
                <button className='butedit' onClick={handleSubmit}>Add Student</button>
                <button className='butedit' onClick={() => navi('/student')}>Cancel</button>
            </div>
        </div>
    )
}

export default AddStudent