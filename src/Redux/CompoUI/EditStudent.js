import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom'
import { editStudent } from '../Slice/Slice';

function EditStudent() {
    const navi = useNavigate();
    const indexdata = useLocation().state.index;
    const data = useSelector((state) => state.Stu_Data);
    const dispatch = useDispatch();

    const [updateData, setUpdateData] = useState({
        name: data[indexdata].name,
        age: data[indexdata].age,
        course: data[indexdata].course,
        batch: data[indexdata].batch
    })
    console.log(data[indexdata])
    const handleChange = (e) => {
        setUpdateData({ ...updateData, [e.target.name]: e.target.value });
    }
    const handleSubmit = () => {
        // const updatedData = [...data];
        // updatedData[indexdata] = updateData;
        dispatch(editStudent({ updateData, indexdata }))
        // console.log(data[indexdata]);
        console.log(updateData);
        navi('/student');
    }
    return (
        <div>
            <h1>Edit Student</h1>
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
                <button className='butedit' onClick={handleSubmit}>Update</button>
                <button className='butedit' onClick={() => navi('/student')}>Cancel</button>
            </div>
        </div>
    )
}

export default EditStudent