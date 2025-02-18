
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout.jsx'
import Home from './Components/Home/Home.jsx'
import Cart from './Components/Cart/Cart.jsx'
import Categories from './Components/Categories/Categories.jsx'
import Brands from './Components/Brands/Brands.jsx'
import Products from './Components/Products/Products.jsx'
import Login from './Components/Login/Login.jsx'
import Register from './Components/Register/Register.jsx'
import NotFound from './Components/NotFound/NotFound.jsx'
import { UserContextProvider} from './Context/UserContext.jsx'
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute.jsx'
import ProductDetails from './Components/ProductDetails/ProductDetails.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import CartContextProvider from './Context/CartContext.jsx'
import { Toaster } from 'react-hot-toast'
import Checkout from './Components/Checkout/Checkout.jsx'
import Orders from './Components/Orders/Orders.jsx'
import WishList from './Components/WhishList/WishList.jsx'



let query= new QueryClient()


let routers = createBrowserRouter([{
  path:'' , element : <Layout/>,children:[
    {index: true , element: <Register/>},
    {path:'login' , element: <Login/>},
    {path:'home' , element: <ProtectedRoute><Home/></ProtectedRoute>},
    {path:'cart' , element: <ProtectedRoute> <Cart/></ProtectedRoute>},
    {path:'brands' , element: <ProtectedRoute><Brands/></ProtectedRoute> },
    {path:'wishlist' , element: <ProtectedRoute><WishList/></ProtectedRoute> },
    {path:'categories' , element: <ProtectedRoute><Categories/></ProtectedRoute> },
    {path:'checkout' , element: <ProtectedRoute><Checkout/></ProtectedRoute> },
    {path:'productdetails/:id/:category' , element: <ProtectedRoute><ProductDetails/></ProtectedRoute> },
    {path:'products' , element: <ProtectedRoute><Products/></ProtectedRoute> },
    {path:'allorders' , element: <ProtectedRoute><Orders/></ProtectedRoute> },
    {path:'*' , element: <NotFound/>},
  ]
}])
function App() {

  return <>
  <div className="container">
    <CartContextProvider>
     <QueryClientProvider client={query}>
       <UserContextProvider>
         <RouterProvider router={routers}></RouterProvider>
         <Toaster/>
         <ReactQueryDevtools/>
       </UserContextProvider>
     </QueryClientProvider>
    </CartContextProvider>
  </div>
    

  </>
}

export default App
