import { createBrowserRouter, RouterProvider, Outlet, useLocation } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Home from './pages/home'
import Resume from './pages/resume'
import Portfolio from './pages/Portfolio'
import Blog from './pages/Blog'
import Navbar from './components/Navbar'
import { RootStoreContext } from './context'
import { rootStore } from './stores/rootStore'
import { ROUTE_PATH, BASE_PATH  } from './config/router'
import { StyledEngineProvider } from '@mui/material/styles';
import { ThemeProvider } from './context/ThemeContext'
import './tailwind.css'

const Layout = () => {
  const location = useLocation();
  const { languageStore } = rootStore
  return (
    <StyledEngineProvider injectFirst>
      <RootStoreContext.Provider value={rootStore}>
      <div className={languageStore.selectedLanguage.code}> 
        <Navbar />
        <TransitionGroup>
          <CSSTransition key={location.key} timeout={300} classNames="fade">
            <Outlet />
          </CSSTransition>
        </TransitionGroup>
        
      </div>
      
    </RootStoreContext.Provider>
    </StyledEngineProvider>
    
  )
}

const router = createBrowserRouter([
  {
    path: BASE_PATH,
    element: <Layout/>,
    children: [
      {
        path: BASE_PATH,
        element: <Home/>,
        errorElement: <div><h1>Oh, seems the page gone!</h1></div>
      },
      {
        path: ROUTE_PATH.resume,
        element: <Resume/>,
        errorElement: <Home/>
      },
      {
        path: ROUTE_PATH.portfolio,
        element: <Portfolio/>,
        errorElement: <Home/>
      },
      {
        path: ROUTE_PATH.blog,
        element: <Blog/>,
        errorElement: <Home/>
      },
    ]
  }
])

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
    
  );
}



export default App;
