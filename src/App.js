import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Booking } from './Pages/Booking/Booking';
import { Contact } from './Pages/Contact';
import { Bookingedit } from './Pages/Booking/Bookingedit';
import { Login } from './Pages/Login/Login';
import { Register } from './Pages/Register/Register';
import AdminLogin from './Pages/Admin/AdminLogin'
import Home from './Pages/Home';
import Blogs from './Pages/Blog/Blogs';
import BlogDetails from './Pages/Blog/BlogDetails';
import Package from './Pages/TourPackage/Package';
import PackageDetails from './Pages/TourPackage/PackageDetails';
import AboutDetails from './Components/Core/Home/AboutDetails';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { check_token } from './redux/Slice/AuthSlice';
import About from './Components/Core/Home/About';
import CorePackage from './Pages/Destinations/CorePackage';
import Destination from './Pages/Destinations/Destination';
import Services from './Components/Core/Home/Services';
import { Admin } from './Pages/Admin/Admin';
import Guider from './Components/Core/Home/Guider';
import Blog from './Components/Core/Home/Blog';
import CorePackageDetails from './Pages/Destinations/CorePackageDetails';
import ScrollToTop from './Components/ScrolltoTop';



function App() {
  const dispatch = useDispatch();
  //check token avable or not
  function PrivateRoute({ children }) {
    const token =localStorage.getItem("token")
    return token !== null && token !== undefined ? (
      children
    ) : (
      <Navigate to="/login" />
    );
  }

  //for Public Route
  const PublicRouteNames = [
    {
      path: "/login",
      Component: <Login />
    },
    
    {

      path: "/register",
      Component: <Register />
    },
    {
      path: '/',
      Component: <Home />
    },
    {
      path: 'about/',
      Component: <About />
    },
{
    path: '/aboutdetails/:id',
    Component: <AboutDetails />
  },
  {
    path: '/contact',
    Component: <Contact/>
  },
  {
    path: '/bookingedit/:id',
    Component: <Bookingedit/>
  },
  
  {
    path: '/booking',
    Component: <Booking/>
  },
  {
    path: '/blogdet/:id',
    Component: <BlogDetails/>
  },
  {
    path:'/blogs',
    Component:<Blogs/>
  },
 
  {
    path:'/tour',
    Component:<Package />
  },
  
  {
    path:'/tourdet/:id',
    Component:<PackageDetails />
  },
  {
    path:'/corepackage/:id',
    Component:<CorePackage />
  },
  {
    path:'/corepackagedetails',
    Component:<CorePackageDetails/>
  },

  {
    path:'/destination',
    Component:<Destination />
  },

{
  path: '/services',
  Component:<Services/>
},

{
  path: '/guider',
  Component:<Guider/>
},


{
  path: '/blog',
  Component:<Blog/>
}



  ]
//for Private Route
  const PrivateRouteNames = [

    
    
  
  ]
  
  useEffect(() => {
   dispatch(check_token())
  }, [])
  
  return (
    <>
        <Router>
          <ScrollToTop />
          <Routes>
            {PublicRouteNames?.map((route, index) => {
              return (
                <Route
                  Key={index + 1}
                  exact
                  path={route.path}
                  element={route?.Component}
                />
              )
            })}

            {/* Protect Route */}
            {PrivateRouteNames?.map((route) => {
              return (
                <Route
                  path={route.path}
                  element={<PrivateRoute>{route?.Component}</PrivateRoute>}
                />
              )

            })}
            <Route path='/admin' element={<Admin/>}></Route>
           <Route path='/adminlogin' element={<AdminLogin/>}></Route>
          </Routes>
        
        </Router>
                    
    </>
  );
}

export default App;
