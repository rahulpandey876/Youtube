import React from "react";
import ReactDOM from 'react-dom/client';
import Head from "./Head";
import Body from "./Body";
import Store from "./Appstore";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Maincontainer from "./Maincontainer";
import Watch from "./Watch";
import { InfoProvider } from "./ReactContext";




const App = () => {
    const VideoRouter=createBrowserRouter([{
        path:"/",
        element: <Body />,  // its main route Component, which is container for other routes
        children:
        [{path:"/",
            element: (<InfoProvider>
                   <Maincontainer/>
            </InfoProvider> )// it set as default child for '/' path.
          
        },
       {
        path:"/Watch/:videoId",
        element:(<InfoProvider>
            <Watch/>
     </InfoProvider> )
    }]
    }])
   
    return (
        <Provider store={Store}>
            
            
             <header className="sticky  bg-gray-50 top-0 p-4 z-10 ">  <Head /></header>
             <RouterProvider router={VideoRouter} />
             
               
        </Provider>
    );
}

const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(<App />);
