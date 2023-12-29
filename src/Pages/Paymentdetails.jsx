import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';
import { paymentfetchdata } from '../redux/Slice/paymentslice';


export const Paymentdetails = () => {
    const dispatch = useDispatch();
    const orderId=localStorage.getItem("id")

    const {paymentdata1}= useSelector((state) => state?.payment);
    // console.log(paymentdata1)

    useEffect(() => {
        dispatch(paymentfetchdata(orderId));
    }, [dispatch]);

    
    
    return (
        <>
            <div className='container-fluid'>
                <table className="table mt-2">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Amount</th>
                            <th scope="col">AmountPaid</th>
                            <th scope="col">Receipt</th>
                            <th scope="col">Status</th>
                            

                        </tr>
                    </thead>
                    <tbody>
                        
                            
                                        <tr >
                                            <th>{paymentdata1.id}</th>
                                            <td>{paymentdata1.amount}</td>
                                            <td>{paymentdata1.amount_paid}</td>
                                            <td>{paymentdata1.receipt}</td>
                                            <td>{paymentdata1.status}</td>
                                            

                                        
                                        </tr>
                                    
                                
                         

                    </tbody>
                </table>
            </div>

        </>
    )
}

