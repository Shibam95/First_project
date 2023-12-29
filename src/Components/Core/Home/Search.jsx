
import React from 'react';
import Typewriter from 'typewriter-effect';
import './Search.css'; 

const Search = () => {
  return (
    <>
      <div className="container-fluid booking mt-5 pb-5">
        <div className="container pb-5">
          <div className="bg-light shadow" style={{ padding: 30 }}>
            <div className="row align-items-center" style={{ minHeight: 60 }}>
              <div className="col-md-10">
                <div className="row">
                  <div className="mb-3 mb-md-0 text-center"> {/* Add 'text-center' class */}
                    <h1>
                      <Typewriter
                        options={{
                          autoStart: true,
                          loop: true,
                          delay: 80,
                          strings: ["Enjoy a romantic getaway and <span class='green'>get a 30% off...</span>",
                                    "Unforgettable <span class='blue'>Adventures...</span>",
                                    "Discover Your <span class='purple'>Dream Destination...</span>",
                                    "Off the <span class='orange'>Beaten Path...</span>",
                                    "Explore the <span class='red'>World...</span>"],
                          html: true, // Enable HTML tags in strings
                        }}
                      />
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;

