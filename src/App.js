import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { createBrowserRouter ,Outlet,RouterProvider} from "react-router-dom";
import About from "./components/about";
import Contact from "./components/Contact";
import Error  from "./components/Error";
import Instamart from "./components/Instamart";
import Body from "./components/Body";
import Cart from "./components/Cart";
import RestaurantMenu from "./components/RestaurantMenu";


const AppLayout = () => {
  return (
    <> 
      <Header />
      <Outlet />  
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    errorElement: <Error />,
    children: [
      {
        path:"/",
        element:<Body/>,
      },
      {
        path:"/about",
        element:<About/>,
      },
      {
        path:"/contact",
        element:<Contact />,
      },
      {
        path:"/instamart",
        element:<Instamart />,
      },
      {
        path:"/cart",
        element:<Cart />,
      },
      {
        path:"/restaurant/:id",
        element:<RestaurantMenu />
      }

    ]
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
