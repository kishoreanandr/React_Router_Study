import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Product } from './pages/Product';
import { RootLayout } from './Layout/RootLayout';
import { Login } from './pages/Login';
import { Info } from './components/Info';
import { Form } from './components/Form';
import { ContactLayout } from './Layout/ContactLayout';
import { NotFound } from './pages/NotFound';
import { UserLayout } from './Layout/UserLayout';
import { Users } from './pages/Users';
import { UserLoader, UserSingleLoader } from './utils/UserLoader';
import { User } from './components/User';
import { ErrorHandle } from './components/ErrorHandle';


function App() {
  // Here we create the Browser router with help of route from components
  const router=createBrowserRouter(
    createRoutesFromElements(
      //Root layout is used for starting the url with '/'
      <Route path="/" element={<RootLayout/>}> 
          <Route index element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='product' element={<Product/>}/>
          <Route path='contact' element={<ContactLayout/>}>
              <Route path='info' element={<Info/>}/>
              <Route path='form' element={<Form/>}/>
          </Route>
          <Route path='users' element={<UserLayout/>} errorElement={<ErrorHandle/>}>
              <Route index element={<Users/>} loader={UserLoader}/>
              <Route path=':id' element={< User/>} loader={UserSingleLoader}/>
          </Route>
          <Route path='login' element={<Login/>}/>
          <Route path='*' element={<NotFound/>}/>
      </Route>
    )
  )
  return (
    //here we call that created router and load it in layout while clicking the link in navbar
    <RouterProvider router={router} />
  );
}

export default App;
