import React from "react";
import Body from "./components/body";
import Header from "./components/header";
import "./index.css";
import { Provider } from "react-redux";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router";
import VideoContent from "./components/VideoContent";
import ButtonList from "./components/ButtonList";
import VideoCard from "./components/VideoCard";



const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: (
          <>
            <ButtonList />
            <VideoCard />
          </>
        ),
      },
      {
        path: "/:url",
        element: <VideoContent />,
      },
    ],
  },
]);


const App = () => {

  return (
    <Provider store={store}>
    <div>
      <Header />
      <RouterProvider router={appRouter}/>
    </div>
    </Provider>
  );
};

export default App;
