import { configureStore } from "@reduxjs/toolkit";
import BannerReducer from "../Slice/BannerSlice";
import searchReducer from '../Slice/SearchSlice';
import AboutReducer from "../Slice/AboutSlice";
import TestimonialsReducer from "../Slice/TestimonialSlice";
import  AuthReducer  from "../Slice/AuthSlice";
import AdminReducer from "../Slice/AdminSlice";
import BookReducer from '../Slice/BookSlice';
import ContactReducer from "../Slice/ContactSlice";
import BlogReducer from "../Slice/BlogSlice"
import TourPackageReducer from "../Slice/TourPackageSlice";
import DestinationReducer from "../Slice/DestinationSlice";
import TitleReducer from "../Slice/TitleSlice"
import BlogdetailsReducer from "../Slice/BlogdetailsSlice";
import SearchReducer from "../Slice/SearchSlice";
import paymentReducer from "../Slice/paymentslice";

export const Store = configureStore({
    reducer: {
        banner:BannerReducer,
        search: searchReducer,
        about:AboutReducer,
        test:TestimonialsReducer,
        auth:AuthReducer,
        admin:AdminReducer,
        booking:BookReducer,
        contact:ContactReducer,
        blog: BlogReducer,
        tour: TourPackageReducer,
        destination: DestinationReducer,
        con: TitleReducer,
        details:BlogdetailsReducer,
        search:SearchReducer,
        payment:paymentReducer
        
    }
}
)