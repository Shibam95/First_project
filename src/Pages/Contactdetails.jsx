import React from 'react'
import {  useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';
import {  DeleteContact, Fetchdata1 } from '../redux/Slice/ContactSlice';


export const Contactetails = () => {
    const dispatch = useDispatch();
    const navigate=useNavigate()

    const {C_data}= useSelector((state) => state?.contact);

    useEffect(() => {
        dispatch(Fetchdata1());
    }, [dispatch]);

    const deleteAppointmentData = async (id) => {
        await DeleteContact(id)
        dispatch(Fetchdata1());
    }
    
    return (
        <>
            <div className='container-fluid'>
                <table className="table mt-2">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Subject</th>
                            <th scope="col">Message</th>
                            
                            <th colSpan={2}>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        
                            
                                {C_data?.data?.map((student, key) => {
                                    return (
                                        <tr key={key}>
                                            <th>{student.name}</th>
                                            <td>{student.email}</td>
                                            <td>{student.subject}</td>
                                            <td>{student.message}</td>
                                            

                                            <td><button onClick={() => deleteAppointmentData(student._id)} className='btn btn-danger'>Delete</button></td>
                                        </tr>
                                    );
                                })}
                         

                    </tbody>
                </table>
            </div>

        </>
    )
}

