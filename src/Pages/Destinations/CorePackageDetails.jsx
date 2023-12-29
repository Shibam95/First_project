import React from "react";
import Navbar from "../../Components/Common/Navbar";
import Footer from "../../Components/Common/Footer";

const CorePackageDetails = () => {
  
  const data = localStorage.getItem("LocationData");
 const data1 =  JSON.parse(data)
//  console.log(data1);
  return (
    <>
    <Navbar/>
      {/* <h1>Hello world</h1> */}
      <div className="about" style={{ paddingTop: "70px" }}>
        <div className="container_width">
          <div className="row d_flex grig">
            <div className="col-md-6">
              <div className="about_img">
                <figure>
                  <img
                    src={data1[0].pic}
                    alt=" "
                    style={{ height: "300px" }}
                  />
                </figure>
              </div>
            </div>
            <div className="col-md-6 order">
              <div className="titlepage text_align_left">
                <h2>{data1[0].name}</h2>
                <div className="p-4">
                  <div className="d-flex justify-content-between mb-3">
                    <small className="m-0">
                      <i class="fa fa-map-marker-alt text-primary mr-2"></i>
                      {data1[0].Location}
                    </small>
                    <small className="m-0">
                      <i class="fa fa-calendar-alt text-primary mr-2"></i>
                      {data1[0].dur}
                    </small>
                    <small className="m-0">
                      <i class="fa fa-user text-primary mr-2"></i>
                      {data1[0].person}
                    </small>
                  </div>
                <p>{data1[0].tit}</p>
                  <h7>Price : {data1[0].cost}</h7>
                  <div className="row">
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default CorePackageDetails;
