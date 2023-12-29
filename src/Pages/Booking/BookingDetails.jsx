// BookingDetails.js

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Vortex } from 'react-loader-spinner';
import { Deletebooking, Fetchdata, cancelBooking, confirmBooking } from '../../redux/Slice/BookSlice';

export const BookingDetails = () => {
  const dispatch = useDispatch();
  const { A_data } = useSelector((state) => state?.booking);
  const storedBookingConfirmationStatus = JSON.parse(localStorage.getItem('bookingConfirmationStatus')) || {};

  useEffect(() => {
    dispatch(Fetchdata());
  }, [dispatch]);

  const deleteAppointmentData = async (id) => {
    await Deletebooking(id);
    dispatch(Fetchdata());
  };

  const confirmBookingHandler = (id) => {
    dispatch(confirmBooking({ bookingId: id, status: 'Confirmed' }));
  };

  const cancelBookingHandler = (id) => {
    dispatch(cancelBooking({ bookingId: id, status: 'Not Confirmed'  }));
  };

  return (
    <>
      <div className="container-fluid">
        <table className="table mt-2">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Phone</th>
              <th scope="col">Destination</th>
              <th scope="col">Member</th>
              <th scope="col">StartDate</th>
              <th scope="col">ReturnDate</th>
              <th scope="col">BookingId</th>
              <th scope="col"> Status</th>
              <th colSpan={3}>Response</th>
            
            </tr>
          </thead>
          <tbody>
            {A_data !== null ? (
              <>
                {A_data?.data?.map((student, key) => {
                  return (
                    <tr key={key}>
                      <th>{student.name}</th>
                      <td>{student.phone}</td>
                      <td>{student.destination}</td>
                      <th>{student.member}</th>
                      <td>{student.startdate}</td>
                      <th>{student.returndate}</th>
                      <th>{student._id}</th>
                      <td>{storedBookingConfirmationStatus[student._id] || 'Not Confirmed'}</td>
                      
                      <td>
                        <button onClick={() => deleteAppointmentData(student._id)} className="btn btn-danger">
                          Delete
                        </button>
                      
                      
                        <button
                          onClick={() => confirmBookingHandler(student._id)}
                          className="btn btn-success"
                          disabled={storedBookingConfirmationStatus[student._id] === 'Confirmed'}
                        >
                          Confirm
                        </button>
                        <button
                          onClick={() => cancelBookingHandler(student._id)}
                          className="btn btn-warning"
                          disabled={storedBookingConfirmationStatus[student._id] === 'Not Confirmed'}
                        >
                          Cancel
                        </button>
                      </td>
            
                    </tr>
                  );
                })}
              </>
            ) : (
              <>
                <Vortex
                  visible={true}
                  height="80"
                  width="80"
                  ariaLabel="blocks-loading"
                  wrapperStyle={{}}
                  wrapperClass="blocks-wrapper"
                  colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                />
              </>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};
