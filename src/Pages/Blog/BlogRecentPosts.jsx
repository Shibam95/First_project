
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axiosInstance from '../../Api/apiUrl';

const BlogRecentPosts = () => {
    const [moreData, setMoreData] = useState([])
 
    const getMoreData = async () => {
       const res = await axiosInstance.get(`/recentpost`);
       setMoreData(await res?.data);
        //   console.log(res.data);
    }
 
    useEffect(() => {
       getMoreData();
    }, []);
    return (
        <>
            <div className="mb-5">
                <h5 className="text-uppercase mb-4" style={{marginRight:"140px"}} >Recent Post</h5>
                {
                     moreData?.data?.slice(0, 3)?.map((item) =>
                        <Link className="d-flex align-items-center text-decoration-none bg-white mb-3" to={`/blogdet/${item?._id}`}>

                            <img className="img-fluid" src={item.image} style={{ height: "70px" }} alt="" />
                            <div className="pl-3" key={item.id}>
                                <h6 className="m-1"><Link to={`/blogdet/${item.id}`}>{item.title}</Link></h6>
                                <time dateTime="15-06-2023">{item.date}</time>
                            </div>
                        </Link>
                    )
                }
            </div>
        </>
    )
}

export default BlogRecentPosts
