import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import AboutUs from "../pages/About/AboutUs";
import Chairman from "../pages/Administration/Chairmain";
import Principal from "../pages/Administration/Principal";
import Governing from "../pages/Administration/Governings";
import Teachers from "../pages/Administration/Teachers";
import Staffs from "../pages/Administration/Stuffs";
import Contacts from "../pages/contacts/Contacts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/aboutUs",
        element: <AboutUs></AboutUs>
      },
      {
        path: "/chairman",
        element: <Chairman></Chairman>
      },
      {
        path: "/principal",
        element: <Principal></Principal>
      },
      {
        path: "/governing",
        element: <Governing></Governing>
      },
      {
        path: "/teachers",
        element: <Teachers></Teachers>
      },
      {
        path: "/staff",
        element: <Staffs></Staffs>
      },
      {
        path: "/contacts",
        element : <Contacts></Contacts>
      }
    ],
  },
]);

export default router;