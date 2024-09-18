
import  {createBrowserRouter} from "react-router-dom";
import { RouterProvider} from "react-router-dom";





 const  TheRouter () {
const router = createBrowserRouter([
    {
        path: "/",
        exact: true,
        component: HomePage
    },
    {
        path: "/about",
        component: AboutPage
    },
    {
        path: "/contact",
        component: ContactPage
    },
    {
        path: "*",
        component: NotFoundPage
    }
])

return(



    <RouterProvider 
       router={router}
       fallbackElement={{ v7_startTransition: true }}

    />


  
)





 }

 export default TheRouter;
