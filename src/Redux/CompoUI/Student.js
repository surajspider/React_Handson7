import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { deleteStudent } from '../Slice/Slice';

function Student() {
    const data = useSelector((state) => state.Stu_Data);
    const dispatch = useDispatch();
    const navi = useNavigate();
    console.log(data)
    const handleDelete = (indexdata) => {
        console.log(data)
        // data.filter((item, index) => index !== indexdata);
        dispatch(deleteStudent(indexdata));
    }
    return (
        <div>
            <div className='studenttopic'>
                <h1 className='studetailtopic'>Student Details</h1>
                <div>
                    <button className='addstubut' onClick={() => navi("/addstudent")}>Add New Student</button>
                </div>

            </div>
            <br />
            <table border="1" style={{ margin: "auto", width: "80%" }}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Course</th>
                        <th>Batch</th>
                        <th>Change</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                                <td>{item.course}</td>
                                <td>{item.batch}</td>
                                <td><NavLink to="/editstudent" state={{ index }}>Edit</NavLink></td>
                                <td><button onClick={() => handleDelete(index)}>Delete</button></td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
        </div>
    )
}

export default Student