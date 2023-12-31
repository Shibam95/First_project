import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';
import {  paymentrefundfetchdata } from '../redux/Slice/paymentslice';


export const Refunddetail = () => {
    const dispatch = useDispatch()
    const paymentId=localStorage.getItem("paymentId")

    const {paymentrefunddata}= useSelector((state) => state?.payment);
     const result=paymentrefunddata?.paymentDetails

    useEffect(() => {
        dispatch(paymentrefundfetchdata(paymentId));
    }, [dispatch]);

    
    
    return (
        <>
            <div className='container-fluid'>
                <table className="table mt-2">
                    <thead>
                        <tr>
                            <th scope="col">PaymentId</th>
                            <th scope='col'>OrderId</th>
                            <th scope="col">Amount</th>
                        <th scope="col">Status</th>
                            
                            

                        </tr>
                    </thead>
                    <tbody>
                        
                            
                                        <tr >
                                            <th>{result?.id}</th>
                                            <th>{result?.order_id}</th>
                                            <td>{result?.amount}</td>
                                            <td>{result?.status}</td>
                                            

                                        
                                        </tr>
                                    
                                
                         

                    </tbody>
                </table>
            </div>

        </>
    )
}

