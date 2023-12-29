import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, } from 'react-redux'
import { Apifetch } from '../../redux/Slice/BlogSlice';
import { Link } from 'react-router-dom';
import BlogRecentPosts from './BlogRecentPosts'
import './Blogs.css'
import Navbar from '../../Components/Common/Navbar';
import Footer from '../../Components/Common/Footer';
import axiosInstance from '../../Api/apiUrl';




const Blogs = () => {
      
    const [blogPosts, setBlogPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const dispatch = useDispatch();
    const [data1,setData1]=useState(null)
    const [data2,setData2] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState(null);
    const [moreData, setMoreData] = useState([]);
    const [moreData1, setMoreData1] = useState([]);
    const [currentData, setCurrentData] = useState(blogPosts);
    

  
     const getMoreData1 = async () => {
        const res = await axiosInstance.get(`/view-tags`);
        setMoreData1(await res?.data);
            // console.log(res?.data);
     }
  
     useEffect(() => {
        getMoreData1();
     }, []);
  

    const getMoreData = async () => {
       const res = await axiosInstance.get(`/view-category`);
       setMoreData(await res?.data);
        //    console.log(res?.data);
    }
 
    useEffect(() => {
       getMoreData();
    }, []);
 


    const handleButtonClick1 = async (category) => {
      // console.log(category)
      try {
        const response = await axiosInstance.get(`/view-detailss/${category}`);
        
        //  console.log(response?.data?.data)
        setData2(response?.data?.data)
      } catch (error) {
        
        console.error('Error fetching data:', error);
      }
      
    
    };


    const handleButtonClick = async (tag) => {
    //   console.log(tag)
      try {
        const response = await axiosInstance.get(`/view-detail/${tag}`);
        // Handle the response data as needed
        //  console.log(response?.data?.data);
        setData1(response?.data?.data)
      } catch (error) {
        // Handle errors
        console.error('Error fetching data:', error);
      }
    };

   
    const handleSearch = (e) => {
        e?.preventDefault();
    
        if (searchQuery.trim() !== '') {
            const encodedQuery = encodeURIComponent(searchQuery);
            axiosInstance.get(`/search?q=${encodedQuery}`)
                .then(response => {
                    const data = response?.data;
                    setSearchResults(data.results);
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        }
    };
    
      
  
    const handleChange = (e) => {
      setSearchQuery(e?.target?.value);
    
    };
    useEffect(() => {
        const delay = setTimeout(() => {
            handleSearch();
        }, 500); 
    
        return () => clearTimeout(delay); 
    }, [searchQuery]);
  
    

    useEffect(() => {
        dispatch(Apifetch())
    }, [dispatch])
      // console.log(result)
     

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await axiosInstance.get(`/pagination?page=${currentPage}`);
        const data = await response?.data;
        setBlogPosts(data.blogPosts);
        setTotalPages(data.totalPages);
        // console.log(data)
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      }
    };

    fetchBlogPosts();
  }, [currentPage]);
// console.log(blogPosts)

useEffect(() => {
    if (searchResults !== null && searchResults.length > 0) {
      setCurrentData(searchResults);
    } else if (data1 !==null && data1.length > 0) {
      setCurrentData(data1);
    } else if (data2 !==null && data2.length > 0) {
      setCurrentData(data2);
    } else {
      setCurrentData(blogPosts);
    }
  }, [searchResults, data1, data2, blogPosts]);



    return (
        <>
        <Navbar/>
        <div style={{ background: 'url(https://wallpaper.dog/large/10807522.jpg)' }}>
            <div class="container-fluid page-header" style={{ height: '400px' }}>
                <div class="container">
                    <div class="d-flex flex-column align-items-center justify-content-center" >
                        <h3 class="display-4 text-white text-uppercase" style={{ marginTop: "120px" }}>Blog</h3>
                        <div class="d-inline-flex text-white">
                            <p class="m-0 text-uppercase"><Link class="text-white" to="/">Home</Link></p>
                            <i class="fa fa-angle-double-right pt-1 px-3"></i>
                            <p class="m-0 text-uppercase">Blog</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="md-5" style={{marginTop:"10px"}}>
            <div className="input-group">
              <form  style={{display:"flex",justifyContent:"center",alignItems:"center",margin:"auto"}}>
                <div className="input-group-append">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={handleChange}
                    placeholder='Search here'
                    style={{
                      padding: '10px',         // Increased padding for a larger input box
                      borderRadius: '6px',     // Rounded corners
                      border: '1px solid #ddd', // Light border
                      marginRight: '10px',      // Margin to separate from other elements
                      width: '800px',           // Set a specific width
                      fontSize: '16px',         // Font size
                      // Add more styles as needed
                    }}
                  />
                  
    
                  
                  
                </div>
              </form>
            </div>
          </div>
    

            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="row pb-3">

                            
                             {currentData?.map((p, k) => {
                                    return (
                                        <>
                                            <div key={k} className="col-md-6 mb-4 pb-2">
                                                <div className="blog-item">
                                                    <div className="position-relative">
                                                        <img class="img-fluid w-100" src={p?.image} alt="" style={{ height: "230px" }} />
                                                        <div className="blog-date">
                                                            <small className="text-white text-uppercase">{p?.date}</small>
                                                        </div>
                                                    </div>
                                                    <div className="bg-white p-4">
                                                        <div className=" mb-2">
                                                            <p>{p?.body}</p>
                                                            <br></br>
                                                            <p>{p?.categories}</p>
                                                            <p>{p?.tags}</p>
                                                        </div>
                                                        <h5> <Link className="btn btn-outline-success " style={{marginLeft:"100px"}} to={`/blogdet/${p?._id}`}>Details</Link></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }

                       
                            {/* Pagination controls */}
                            <span style={{ marginLeft: "200px" }}>
                              {currentPage > 1 && (
                                <button
                                  style={{
                                    margin: "5px",
                                    padding: "8px 12px",
                                    fontSize: "14px",
                                    fontWeight: "normal",
                                    color: "#007bff",
                                    border: "1px solid #007bff",
                                    borderRadius: "4px",
                                    cursor: "pointer",
                                  }}
                                  onClick={() => setCurrentPage(currentPage - 1)}
                                >
                                  Previous
                                </button>
                              )}
                            
                              {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                                <button
                                  style={{
                                    margin: "5px",
                                    padding: "8px 12px",
                                    fontSize: "14px",
                                    fontWeight: currentPage === page ? "bold" : "normal",
                                    backgroundColor: currentPage === page ? "#007bff" : "#fff",
                                    color: currentPage === page ? "#fff" : "#007bff",
                                    border: "1px solid #007bff",
                                    borderRadius: "4px",
                                    cursor: "pointer",
                                  }}
                                  key={page}
                                  onClick={() => setCurrentPage(page)}
                                >
                                  {page}
                                </button>
                              ))}
                            
                              {currentPage < totalPages && (
                                <>
                                  {currentPage + 2 < totalPages && (
                                    <button
                                      style={{
                                        margin: "5px",
                                        padding: "8px 12px",
                                        fontSize: "14px",
                                        fontWeight: "normal",
                                        color: "#007bff",
                                        border: "1px solid #007bff",
                                        borderRadius: "4px",
                                        cursor: "pointer",
                                      }}
                                      onClick={() => setCurrentPage(currentPage + 2)}
                                    >
                                      ...
                                    </button>
                                  )}
                                  ...<button
                                    style={{
                                      margin: "5px",
                                      padding: "8px 12px",
                                      fontSize: "14px",
                                      fontWeight: "normal",
                                      color: "#007bff",
                                      border: "1px solid #007bff",
                                      borderRadius: "4px",
                                      cursor: "pointer",
                                    }}
                                    onClick={() => setCurrentPage(totalPages)}
                                  >
                                    {totalPages}
                                  </button>
                                </>
                              )}
                            
                              {currentPage < totalPages && (
                                <button
                                  style={{
                                    margin: "5px",
                                    padding: "8px 12px",
                                    fontSize: "14px",
                                    fontWeight: "normal",
                                    color: "#007bff",
                                    border: "1px solid #007bff",
                                    borderRadius: "4px",
                                    cursor: "pointer",
                                  }}
                                  onClick={() => setCurrentPage(currentPage + 1)}
                                >
                                  Next
                                </button>
                              )}
                            </span>;
                            
                                                                                                        
                     </div>
                        </div>


                        <div className="col-lg-4 mt-5 mt-lg-0">
                            


                           
                           
                            <div className="mb-5" style={{ paddingLeft: "80px", display: "flex" }}>
 
  
                                 {/* Tag Cloud */}
                                 <>
                                 <div className="mb-5">
                                 <h5 className="text-uppercase mb-4" style={{ paddingLeft: "70px" }}> Tags</h5>
                                 <div className="d-flex flex-wrap m-n1" style={{ paddingLeft: "50px" }}>
                                 
                                 {
                                  moreData1?.data?.map((tag1,k)=>{
                                      return(
                                          <>
                                          <div key={k} className="d-flex flex-wrap m-n1">
                                          <ul style={{listStyle:"none"}}>
                                              <button onClick={() => handleButtonClick(tag1.tags)} className='btn btn-light m-1' style={{ "font-size": "15px" }}> <li> {tag1.tags}</li></button>
                                          </ul>
                                          </div>
                                          </>
                                      )
                                  })
                              }
                                     
                                                            
                                 </div>
                                    </div>
                                  </>
                                       {/* Category List */}
                             <div className="mb-5" style={{ borderRight: "1px solid #ccc", paddingRight: "10px" }}>
                             
                             <div className="d-flex flex-wrap m-n1" style={{ paddingLeft: "50px" }}>
                             <h5 className="text-uppercase mb-4" style={{marginRight:"145px"}}>Categories</h5>
           
                             <>
                             {
                                 moreData?.data?.map((location,k)=>{
                                  // console.log(location)
                                     return(
                                         <>
                                         <div key={k} className="d-flex flex-wrap m-n1">
                                         <ul style={{listStyle:"none"}}>
                                             <button onClick={() => handleButtonClick1(location.category)} className='btn btn-light m-1' style={{ "font-size": "15px" }}> <li> {location.category}</li></button>
                                         </ul>
                                         </div>
                                         </>
                                     )
                                 })
                             }
                             </>
                             </div>
                                         </div>

                                      </div>

                                 
                            {/* <!-- Recent Post --> */}
                            <div className="mb-5" style={{ paddingLeft: "80px" }}>
                            <BlogRecentPosts/>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default Blogs