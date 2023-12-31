import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../../Components/Common/Navbar';
import Footer from '../../Components/Common/Footer';
import axiosInstance from '../../Api/apiUrl';

const Package = () => {
    // const  result  = useSelector((state) => state?.tour?.pack)
    
    const [blogPosts, setBlogPosts] = useState([]);
    const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [minDays, setMinDays] = useState('');
  const [maxDays, setMaxDays] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const navigate=useNavigate()


    const [data1,setData1]=useState(null)

    const [data,setData] = useState(null);
    const handleButtonClick1 = async (min, max) => {
      try {
        const response = await axiosInstance.get(`/days/range/${min}/${max}`);
        
        //  console.log(response?.data?.data)
        setData1(response?.data?.data)
      } catch (error) {
        
        console.error('Error fetching data:', error);
      }
      
    
    };


    const handleCustomDaysButtonClick = () => {
      // Validate input values before making the request
      if (minDays !== '' && maxDays !== '') {
        handleButtonClick1(parseInt(minDays), parseInt(maxDays));
      } else {
        // Handle validation error, e.g., show an alert
        alert('Please enter both minimum and maximum days.');
      }
    };

    const handleButtonClick = async (min, max) => {
      try {
        const response = await axiosInstance.get(`/cost/range/${min}/${max}`);
        // Handle the response data as needed
        //  console.log(response?.data?.data);
        setData1(response?.data?.data)
      } catch (error) {
        // Handle errors
        console.error('Error fetching data:', error);
      }
    };

    const handleCustomRangeButtonClick = () => {
      // Validate input values before making the request
      if (minPrice !== '' && maxPrice !== '') {
        handleButtonClick(parseInt(minPrice), parseInt(maxPrice));
      } else {
        // Handle validation error, e.g., show an alert
        alert('Please enter both minimum and maximum prices.');
      }
    };

    useEffect(() => {
        const fetchBlogPosts = async () => {
          try {
            const response = await axiosInstance.get(`/pagination1?page=${currentPage}`);
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


      


    const handleSubmit=()=>{
        localStorage.removeItem("bookid")
      navigate('/booking')
    }

    
   
    return (
        <>
        <Navbar/>
        <div style={{ background: 'url(https://wallpaper.dog/large/10807522.jpg)' }}>
            <div class="container-fluid page-header" style={{ height: '400px' }}>
                <div className="container">
                    <div className="d-flex flex-column align-items-center justify-content-center" >
                        <h3 className="display-4 text-white text-uppercase" style={{ marginTop: "120px" }}>Tour Packages</h3>
                        <div className="d-inline-flex text-white">
                            <p className="m-0 text-uppercase"><Link class="text-white" to="/">Home</Link></p>
                            <i className="fa fa-angle-double-right pt-1 px-3"></i>
                            <p className="m-0 text-uppercase">Tour Packages</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid py-5" >
                <div className="container pt-5 pb-2" >
                    <div className="text-center mb-3 pb-3" style={{marginRight:"300px"}}>
                        <h6 className="text-primary text-uppercase">Packages</h6>
                        <h1>Perfect Tour Packages</h1>
                    </div>
                    <div className="row">
                        <div className="col-lg-9">
                            <div className="row pb-2">
                                {
                                    (data!==null  || data1!==null) ?(<>{
                                        data?.map((p, k) => {
                                            return (
                                                <>
                                                    <div className="col-lg-4 col-md-6 mb-4" >
                                                        <div className="package-item bg-white mb-2">
                                                            <img class="img-fluid" src={p.image} alt="" style={{ height: "170px",width:"600px" }} />
                                                            <div className="p-4">
                                                                <div className="d-flex justify-content-between mb-3">
                                                                    <small className="m-0"><i class="fa fa-map-marker-alt text-primary mr-2"></i>{p.location}</small>
                                                                    <small className="m-0"><i class="fa fa-calendar-alt text-primary mr-2"></i>{p.duration} days</small>
                                                                    <small className="m-0"><i class="fa fa-user text-primary mr-2"></i>{p.person}</small>
                                                                </div>
                                                                <div>
                                                                  <h6>{p.name}</h6> 
                                                                </div>
                                                                <div>
                                                                    <h6 className="m-0">Rs  {p.cost}</h6>
                                                                </div>
    
                                                                <div className="border-top mt-4 pt-4">
                                                                    <div className="d-flex justify-content-between">
                                                                        <h6 className="m-0"><><Link className="btn btn-outline-success mt-0" to={`/tourdet/${p.id}`}>Details</Link></></h6>
                                                                        <h6 className="m-0"><Link className="btn btn-outline-success mt-0" onClick={handleSubmit} to="/booking">Book Now</Link></h6>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            )
                                        })
                                    }{
                                        data1?.map((p, k) => {
                                            return (
                                                <>
                                                    <div className="col-lg-4 col-md-6 mb-4" >
                                                        <div className="package-item bg-white mb-2">
                                                            <img class="img-fluid" src={p.image} alt="" style={{ height: "170px",width:"600px" }} />
                                                            <div className="p-4">
                                                                <div className="d-flex justify-content-between mb-3">
                                                                    <small className="m-0"><i class="fa fa-map-marker-alt text-primary mr-2"></i>{p.location}</small>
                                                                    <small className="m-0"><i class="fa fa-calendar-alt text-primary mr-2"></i>{p.duration} days</small>
                                                                    <small className="m-0"><i class="fa fa-user text-primary mr-2"></i>{p.person}</small>
                                                                </div>
                                                                <div>
                                                                  <h6>{p.name}</h6> 
                                                                </div>
                                                                <div>
                                                                    <h6 className="m-0">Rs  {p.cost}</h6>
                                                                </div>
    
                                                                <div className="border-top mt-4 pt-4">
                                                                    <div className="d-flex justify-content-between">
                                                                        <h6 className="m-0"><><Link className="btn btn-outline-success mt-0" to={`/tourdet/${p.id}`}>Details</Link></></h6>
                                                                        <h6 className="m-0"><Link className="btn btn-outline-success mt-0" onClick={handleSubmit} to="/booking">Book Now</Link></h6>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            )
                                        })
                                    }</>) :(<>{
                                        blogPosts?.map((p, k) => {
                                            return (
                                                <>
                                                    <div className="col-lg-4 col-md-6 mb-4" >
                                                        <div className="package-item bg-white mb-2">
                                                            <img class="img-fluid" src={p.image} alt="" style={{ height: "170px",width:"600px" }} />
                                                            <div className="p-4">
                                                                <div className="d-flex justify-content-between mb-3">
                                                                    <small className="m-0"><i class="fa fa-map-marker-alt text-primary mr-2"></i>{p.location}</small>
                                                                    <small className="m-0"><i class="fa fa-calendar-alt text-primary mr-2"></i>{p.duration} days</small>
                                                                    <small className="m-0"><i class="fa fa-user text-primary mr-2"></i>{p.person}</small>
                                                                </div>
                                                                <div>
                                                                  <h6>{p.name}</h6> 
                                                                </div>
                                                                <div>
                                                                    <h6 className="m-0">Rs  {p.cost}</h6>
                                                                </div>
    
                                                                <div className="border-top mt-4 pt-4">
                                                                    <div className="d-flex justify-content-between">
                                                                        <h6 className="m-0"><><Link className="btn btn-outline-success mt-0" to={`/tourdet/${p.id}`}>Details</Link></></h6>
                                                                        <h6 className="m-0"><Link className="btn btn-outline-success mt-0" onClick={handleSubmit} to="/booking">Book Now</Link></h6>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            )
                                        })
                                    }</>)
                                }
                                
                            </div>
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
                                 ... <button
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

                             
                        <div className="col-lg-3">
                        <>
                        <h5 className="text-uppercase mb-4" style={{ paddingLeft: "70px" }}>Filter By Price</h5>
                        <div className="d-flex flex-wrap m-n1" style={{ paddingLeft: "50px" }}>
                            <ul style={{listStyle:"none"}}>
                            <ul style={{ listStyle: "none", padding: 0 }}>
                            <li style={{ marginRight: "10px" }}>
                              <input
                                type="number"
                                placeholder="Min Price"
                                value={minPrice}
                                onChange={(e) => setMinPrice(e.target.value)}
                                className="form-control"
                                style={{ width: "120px" }}
                              />
                            </li>
                            <li style={{ marginRight: "10px" }}>
                              <input
                                type="number"
                                placeholder="Max Price"
                                value={maxPrice}
                                onChange={(e) => setMaxPrice(e.target.value)}
                                className="form-control"
                                style={{ width: "120px" }}
                              />
                            </li>
                            <li>
                              <button
                                onClick={handleCustomRangeButtonClick}
                                className='btn btn-success'
                                style={{ fontSize: "17px", marginLeft: "5px" }}
                              >
                                Apply Price
                              </button>
                            </li>
                          </ul>
                                <li> <button onClick={() => handleButtonClick(10000, 20000)} className='btn btn-light m-1' style={{ "font-size": "17px" }}>₹10,000 - ₹20,000 </button></li>
                                <li><button onClick={() => handleButtonClick(20000, 30000)} className='btn btn-light m-1' style={{ "font-size": "17px" }}>₹20,000 - ₹30,000 </button></li>
                                <li><button onClick={() => handleButtonClick(30000, 40000)} className='btn btn-light m-1' style={{ "font-size": "17px" }}>₹30,000 - ₹40,000 </button></li>
                                <li> <button onClick={() => handleButtonClick(40000,50000)} className='btn btn-light m-1' style={{ "font-size": "17px" }}>₹40,000 - ₹50,000 </button></li>
                                <li><button onClick={() => handleButtonClick(50000,60000)} className='btn btn-light m-1' style={{ "font-size": "17px" }}>₹50,000 - ₹80,000 </button></li>
                                <li><button onClick={() => handleButtonClick(60000,100000)} className='btn btn-light m-1' style={{ "font-size": "17px" }}>₹60,000 - ₹100,000 </button></li>
                            </ul>
                        </div>
                    </>
                            <br/>
                            <>

        
                            <h5 className="text-uppercase mb-4" style={{ paddingLeft: "70px" }}>Filter By Days</h5>
                            <div className="d-flex flex-wrap m-n1" style={{ paddingLeft: "50px" }}>
                                <ul style={{listStyle:"none"}}>
                                <ul style={{ listStyle: "none", padding: 0 }}>
                                <li style={{ marginRight: "10px" }}>
                                  <input
                                    type="number"
                                    placeholder="Min Days"
                                    value={minDays}
                                    onChange={(e) => setMinDays(e.target.value)}
                                    className="form-control"
                                    style={{ width: "120px" }}
                                  />
                                </li>
                                <li style={{ marginRight: "10px" }}>
                                  <input
                                    type="number"
                                    placeholder="Max Days"
                                    value={maxDays}
                                    onChange={(e) => setMaxDays(e.target.value)}
                                    className="form-control"
                                    style={{ width: "120px" }}
                                  />
                                </li>
                                <li>
                                  <button
                                    onClick={handleCustomDaysButtonClick}
                                    className='btn btn-success'
                                    style={{ fontSize: "17px", marginLeft: "5px" }}
                                  >
                                    Apply Days
                                  </button>
                                </li>
                              </ul>
                                    <li> <button onClick={() => handleButtonClick1(1, 2)} className='btn btn-light m-1' style={{ "font-size": "17px" }}>1 - 2 days </button></li>
                                    <li><button onClick={() => handleButtonClick1(3, 5)} className='btn btn-light m-1' style={{ "font-size": "17px" }}>3 - 5 days </button></li>
                                    <li><button onClick={() => handleButtonClick1(6, 8)} className='btn btn-light m-1' style={{ "font-size": "17px" }}>6 - 8 days </button></li>
                                    <li> <button onClick={() => handleButtonClick1(9,12)} className='btn btn-light m-1' style={{ "font-size": "17px" }}>9 - 12 days</button></li>
                                    <li><button onClick={() => handleButtonClick1(13,20)} className='btn btn-light m-1' style={{ "font-size": "17px" }}>13 - 20 days </button></li>
                                    <li><button onClick={() => handleButtonClick1(21,30)} className='btn btn-light m-1' style={{ "font-size": "17px" }}>21 - 30 days </button></li>
                                </ul>
                                
                                                       
                            </div>
                        </>
                        </div>
                    </div>
                </div>
            </div>
        </div>
<Footer/>
        </>
    )
}

export default Package