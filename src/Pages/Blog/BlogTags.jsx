
import React, { useEffect, useState } from 'react'
import axiosInstance from '../../Api/apiUrl';

const BlogTags = () => {
    const [moreData, setMoreData] = useState([]);

   const getMoreData = async () => {
      const res = await axiosInstance.get(`/view-tags`);
      setMoreData(await res?.data);
        //  console.log(res?.data);
   }

   useEffect(() => {
      getMoreData();
   }, []);

    return (
        <>
            <h5 className="text-uppercase mb-4" style={{marginRight:"145px"}}>Tags Cloud</h5>
           
                <>
                {
                    moreData?.data?.map((e)=>{
                        return(
                            <>
                            <div className="d-flex flex-wrap m-n1">
                            <ul style={{listStyle:"none"}}>
                                <button  className='btn btn-light m-1' style={{ "font-size": "15px" }}> <li> {e.tags}</li></button>
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

export default BlogTags