import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AnimCursor from "./Components/AnimatedCursor/AnimCursor";
import Main from "./layout/Main";
import AboutMe from "./Pages/AboutMe/AboutMe";
import Blogs from "./Pages/Blogs/Blogs";
import Home from "./Pages/Home/Home";
import ProjectDetails from "./Pages/ProjectDetails/ProjectDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: "aboutme",
        element: <AboutMe></AboutMe>
      },
      {
        path: "blogs",
        element: <Blogs></Blogs>
      },
      {
        path: "/projectDetails/:id",
        element: <ProjectDetails></ProjectDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/project/${params.id}`)
      }
    ]
  },
  
]);

function App() {
  return (
    <div>
      <AnimCursor/>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
