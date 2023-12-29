
import React, { useEffect, useState } from 'react'
import {  useParams } from 'react-router-dom'
import axiosInstance from '../../../Api/apiUrl';

const AboutDetails = () => {
   const [moreData, setMoreData] = useState([]);
   const { id } = useParams();

   const getMoreData = async () => {
      const res = await axiosInstance.get(`/view-about/${id}`);
      setMoreData(await res?.data);
      //   console.log(res.data);
   }

   useEffect(() => {
      getMoreData();
   }, []);

   return (
      <>
         <div className="pb-3">
            <div className="blog-item">
               <div className="position-relative">
                  <img className="img-fluid w-100" src={moreData?.data?.image10} alt="" />

               </div>
            </div>
            <div className="bg-white mb-3" style={{ padding: 30 }}>
               <div className="d-flex mb-3">
                  <a className="text-primary text-uppercase text-decoration-none" href="">
                     About Us
                  </a>
                  <span className="text-primary px-2">|</span>
                  <a className="text-primary text-uppercase text-decoration-none" href="">
                     Golden wings
                  </a>
               </div>
               <h2 className="mb-3">{moreData?.data?.title2}</h2>
               <img className="img-fluid float-left"
                  src={moreData?.data?.img}
                  style={{ height: '200px', width: '300px' }}
               />
               <p>
                  {moreData?.data?.ReadMore1}
               </p><br />

               <h4 className="mb-3">{moreData?.data?.title3}</h4>
               <img className="img-fluid  float-right"
                  src={moreData?.data?.img1}
                  style={{ height: '200px', width: '300px' }} />
               <p>
                  {moreData?.data?.ReadMore2}
               </p>
               <h5 className="mb-3">{moreData?.data?.title4}</h5>
               <img
                  className="img-fluid float-left"
                  src={moreData?.data?.img2}
                  style={{ height: '200px', width: '300px' }}
               />
               <p>
                  {moreData?.data?.ReadMore3}
               </p>
               <h5 className="mb-3">{moreData?.data?.title5}</h5>
               <img
                  className="img-fluid float-right"
                  src={moreData?.data?.img3}
                  style={{ height: '150px', width: '300px' }}
               />
               <p>
                  {moreData?.data?.ReadMore4}
               </p>
               <h5 className="mb-3">{moreData?.data?.title6}</h5>
               <img
                  className="img-fluid  float-left"
                  src={moreData?.data?.img4}
                  style={{ height: '200px', width: '300px' }}
               />
               <p>
                  {moreData?.data?.ReadMore5}
               </p>

            </div>
            <div className='container'>
               <h1 style={{ color: 'darkblue', textAlign: 'center' }}>Our Popular Destinations</h1><br />
               <h3 style={{ color: 'darkgreen', textAlign: 'center' }}>KERALA ('Spice Capital of India')</h3><br />
               <div className='row'>
                  <div className="card" style={{ width: '16rem', height: '25rem', boxSizing: 'border-box', fontFamily: 'Arial', padding: '1rem', borderRadius: '10px', transition: 'transform 0.3s', margin: '0.5rem' }}>
                     <img src={moreData?.data?.image2} className="card-img-top" alt="..." />
                     <div className="card-body">
                        <h5 className="card-title">{moreData?.data?.cardtitle1}</h5>
                        <p className="card-text">{moreData?.data?.description1}</p>
                     </div>
                  </div>
                  <div className="card" style={{ width: '16rem', height: '25rem', boxSizing: 'border-box', fontFamily: 'Arial', padding: '1rem', borderRadius: '10px', transition: 'transform 0.3s', margin: '0.5rem' }}>
                     <img src={moreData?.data?.image3} alt="..." />
                     <div className="card-body">
                        <h5 className="card-title">{moreData?.data?.cardtitle2}</h5>
                        <p className="card-text">{moreData?.data?.description2}</p>
                     </div>
                  </div>
                  <div className="card" style={{ width: '16rem', height: '25rem', boxSizing: 'border-box', fontFamily: 'Arial', padding: '1rem', borderRadius: '10px', transition: 'transform 0.3s', margin: '0.5rem' }}>
                     <img src={moreData?.data?.image4} className="card-img-top" alt="..." />
                     <div className="card-body">
                        <h5 className="card-title">{moreData?.data?.cardtitle3}</h5>
                        <p className="card-text">{moreData?.data?.description3}</p>
                     </div>
                  </div>
                  <div className="card" style={{ width: '16rem', height: '25rem', boxSizing: 'border-box', fontFamily: 'Arial', padding: '1rem', borderRadius: '10px', transition: 'transform 0.3s', margin: '0.5rem' }}>
                     <img src={moreData?.data?.image5} className="card-img-top" alt="..." />
                     <div className="card-body">
                        <h5 className="card-title">{moreData?.data?.cardtitle4}</h5>
                        <p className="card-text">{moreData?.data?.description4}</p>
                     </div>
                  </div>
               </div>
            </div><br />
            <div className='container'>

               <h3 style={{ color: 'darkgreen', textAlign: 'center' }}>KOLKATA ('City of Joy')</h3><br />
               <div className='row'>
                  <div className="card" style={{ width: '16rem', height: '25rem', boxSizing: 'border-box', fontFamily: 'Arial', padding: '1rem', borderRadius: '10px', transition: 'transform 0.3s', margin: '0.5rem' }}>
                     <img src={moreData?.data?.image6} className="card-img-top" alt="..." />
                     <div className="card-body">
                        <h5 className="card-title">{moreData?.data?.cardtitle5}</h5>
                        <p className="card-text">{moreData?.data?.description5}</p>
                     </div>
                  </div>
                  <div className="card" style={{ width: '16rem', height: '25rem', boxSizing: 'border-box', fontFamily: 'Arial', padding: '1rem', borderRadius: '10px', transition: 'transform 0.3s', margin: '0.5rem' }}>
                     <img src={moreData?.data?.image7} className="card-img-top" alt="..." />
                     <div className="card-body">
                        <h5 className="card-title">{moreData?.data?.cardtitle6}</h5>
                        <p className="card-text">{moreData?.data?.description6}</p>
                     </div>
                  </div>
                  <div className="card" style={{ width: '16rem', height: '25rem', boxSizing: 'border-box', fontFamily: 'Arial', padding: '1rem', borderRadius: '10px', transition: 'transform 0.3s', margin: '0.5rem' }}>
                     <img src={moreData?.data?.image8} className="card-img-top" alt="..." />
                     <div className="card-body">
                        <h5 className="card-title">{moreData?.data?.cardtitle7}</h5>
                        <p className="card-text">{moreData?.data?.description7}</p>
                     </div>
                  </div>
                  <div className="card" style={{ width: '16rem', height: '25rem', boxSizing: 'border-box', fontFamily: 'Arial', padding: '1rem', borderRadius: '10px', transition: 'transform 0.3s', margin: '0.5rem' }}>
                     <img src={moreData?.data?.image9} className="card-img-top" alt="..." />
                     <div className="card-body">
                        <h5 className="card-title">{moreData?.data?.cardtitle8}</h5>
                        <p className="card-text">{moreData?.data?.description8}</p>
                     </div>
                  </div>
               </div>
            </div><br />

            <div className='container'>

               <h3 style={{ color: 'darkgreen', textAlign: 'center' }}>New Delhi('The Capital of India')</h3><br />
               <div className='row'>
                  <div className="card" style={{ width: '16rem', height: '25rem', boxSizing: 'border-box', fontFamily: 'Arial', padding: '1rem', borderRadius: '10px', transition: 'transform 0.3s', margin: '0.5rem' }}>
                     <img src={moreData?.data?.image10} className="card-img-top" alt="..." />
                     <div className="card-body">
                        <h5 className="card-title">{moreData?.data?.cardtitle9}</h5>
                        <p className="card-text">{moreData?.data?.description9}</p>
                     </div>
                  </div>
                  <div className="card" style={{ width: '16rem', height: '25rem', boxSizing: 'border-box', fontFamily: 'Arial', padding: '1rem', borderRadius: '10px', transition: 'transform 0.3s', margin: '0.5rem' }}>
                     <img src={moreData?.data?.image11} className="card-img-top" alt="..." />
                     <div className="card-body">
                        <h5 className="card-title">{moreData?.data?.cardtitle10}</h5>
                        <p className="card-text">{moreData?.data?.description10}</p>
                     </div>
                  </div>
                  <div className="card" style={{ width: '16rem', height: '25rem', boxSizing: 'border-box', fontFamily: 'Arial', padding: '1rem', borderRadius: '10px', transition: 'transform 0.3s', margin: '0.5rem' }}>
                     <img src={moreData?.data?.image12} className="card-img-top" alt="..." />
                     <div className="card-body">
                        <h5 className="card-title">{moreData?.data?.cardtitle11}</h5>
                        <p className="card-text">{moreData?.data?.description11}</p>
                     </div>
                  </div>
                  <div className="card" style={{ width: '16rem', height: '25rem', boxSizing: 'border-box', fontFamily: 'Arial', padding: '1rem', borderRadius: '10px', transition: 'transform 0.3s', margin: '0.5rem' }}>
                     <img src={moreData?.data?.image13} className="card-img-top" alt="..." />
                     <div className="card-body">
                        <h5 className="card-title">{moreData?.data?.cardtitle12}</h5>
                        <p className="card-text">{moreData?.data?.description12}</p>
                     </div>
                  </div>
               </div>
            </div>


         </div><br />

         
       
 
         

      </>
   )
}

export default AboutDetails











// <div className="pb-3">
//   <div className="blog-item">
//     <div className="position-relative">
//       <img className="img-fluid w-100" src="img/blog-1.jpg" alt="" />
//       <div className="blog-date">
//         <h6 className="font-weight-bold mb-n1">01</h6>
//         <small className="text-white text-uppercase">Jan</small>
//       </div>
//     </div>
//   </div>
//   <div className="bg-white mb-3" style={{ padding: 30 }}>
//     <div className="d-flex mb-3">
//       <a className="text-primary text-uppercase text-decoration-none" href="">
//         Admin
//       </a>
//       <span className="text-primary px-2">|</span>
//       <a className="text-primary text-uppercase text-decoration-none" href="">
//         Tours &amp; Travel
//       </a>
//     </div>
//     <h2 className="mb-3">Dolor justo sea kasd lorem clita justo diam amet</h2>
//     <p>
//       Sadipscing labore amet rebum est et justo gubergren. Et eirmod ipsum sit
//       diam ut magna lorem. Nonumy vero labore lorem sanctus rebum et lorem magna
//       kasd, stet amet magna accusam consetetur eirmod. Kasd accusam sit ipsum
//       sadipscing et at at sanctus et. Ipsum sit gubergren dolores et, consetetur
//       justo invidunt at et aliquyam ut et vero clita. Diam sea sea no sed
//       dolores diam nonumy, gubergren sit stet no diam kasd vero.
//     </p>
//     <p>
//       Voluptua est takimata stet invidunt sed rebum nonumy stet, clita aliquyam
//       dolores vero stet consetetur elitr takimata rebum sanctus. Sit sed accusam
//       stet sit nonumy kasd diam dolores, sanctus lorem kasd duo dolor dolor vero
//       sit et. Labore ipsum duo sanctus amet eos et. Consetetur no sed et
//       aliquyam ipsum justo et, clita lorem sit vero amet amet est dolor elitr,
//       stet et no diam sit. Dolor erat justo dolore sit invidunt.
//     </p>
//     <h4 className="mb-3">Est dolor lorem et ea</h4>
//     <img className="img-fluid w-50 float-left mr-4 mb-2" src="img/blog-2.jpg" />
//     <p>
//       Diam dolor est labore duo invidunt ipsum clita et, sed et lorem voluptua
//       tempor invidunt at est sanctus sanctus. Clita dolores sit kasd diam
//       takimata justo diam lorem sed. Magna amet sed rebum eos. Clita no magna no
//       dolor erat diam tempor rebum consetetur, sanctus labore sed nonumy diam
//       lorem amet eirmod. No at tempor sea diam kasd, takimata ea nonumy elitr
//       sadipscing gubergren erat. Gubergren at lorem invidunt sadipscing rebum
//       sit amet ut ut, voluptua diam dolores at sadipscing stet. Clita dolor amet
//       dolor ipsum vero ea ea eos. Invidunt sed diam dolores takimata dolor
//       dolore dolore sit. Sit ipsum erat amet lorem et, magna sea at sed et eos.
//       Accusam eirmod kasd lorem clita sanctus ut consetetur et. Et duo tempor
//       sea kasd clita ipsum et.
//     </p>
//     <h5 className="mb-3">Est dolor lorem et ea</h5>
//     <img
//       className="img-fluid w-50 float-right ml-4 mb-2"
//       src="img/blog-3.jpg"
//     />
//     <p>
//       Diam dolor est labore duo invidunt ipsum clita et, sed et lorem voluptua
//       tempor invidunt at est sanctus sanctus. Clita dolores sit kasd diam
//       takimata justo diam lorem sed. Magna amet sed rebum eos. Clita no magna no
//       dolor erat diam tempor rebum consetetur, sanctus labore sed nonumy diam
//       lorem amet eirmod. No at tempor sea diam kasd, takimata ea nonumy elitr
//       sadipscing gubergren erat. Gubergren at lorem invidunt sadipscing rebum
//       sit amet ut ut, voluptua diam dolores at sadipscing stet. Clita dolor amet
//       dolor ipsum vero ea ea eos. Invidunt sed diam dolores takimata dolor
//       dolore dolore sit. Sit ipsum erat amet lorem et, magna sea at sed et eos.
//       Accusam eirmod kasd lorem clita sanctus ut consetetur et. Et duo tempor
//       sea kasd clita ipsum et. Takimata kasd diam justo est eos erat aliquyam et
//       ut.
//     </p>
//   </div>
// </div>
