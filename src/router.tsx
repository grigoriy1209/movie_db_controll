import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./lauouts/MainLayout";
import {MoviesPage} from "./pages/MoviesPage";
import {MovieDetailsPage} from "./pages/MovieDetailsPage";
import {GenrePage} from "./pages/GenrePage";

const router = createBrowserRouter([
    {
        path:'', element:<MainLayout/>,children:[
            {
                index:true, element:<Navigate to={'movies'}/>
            },
            {
                path:'movies', element:<MoviesPage/>
            },
            {
                path:'/movie/:id', element:<MovieDetailsPage/>
            },
            {
                path:'genres', element:<GenrePage/>
            }
        ]
    }
])

export {
    router
}