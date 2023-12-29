
import React, { useEffect, useState } from 'react'
import axiosInstance from '../../Api/apiUrl';

const BlogCategory = () => {
    const [moreData, setMoreData] = useState([]);

   const getMoreData = async () => {
      const res = await axiosInstance.get(`/view-category`);
      setMoreData(await res?.data);
        //  console.log(res?.data);
   }

   useEffect(() => {
      getMoreData();
   }, []);

    return (
        <>
            <h5 className="text-uppercase mb-4" style={{marginRight:"145px"}}>Categories</h5>
           
                <>
                {
                    moreData?.data?.map((e)=>{
                        return(
                            <>
                            <div className="d-flex flex-wrap m-n1">
                            <ul style={{listStyle:"none"}}>
                               <li> <button  className='btn btn-light m-1' style={{ "font-size": "15px" }}>  {e.category}</button></li>
                            </ul>
                            </div>
                            </>
                        )
                    })
                }
                </>
            
        </>
    )
}

export default BlogCategory