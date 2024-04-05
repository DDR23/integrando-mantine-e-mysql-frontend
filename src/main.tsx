import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { RouterProvider, createBrowserRouter, useParams } from 'react-router-dom'
import PageError from './pages/pageError/PageError.tsx'
import PageHome from './pages/pageHome/PageHome.tsx'
import '@mantine/core/styles.css';
import PageRegister from './pages/pageRegister/PageRegister.tsx'
import PageUser from './pages/pageUser/PageUser.tsx'

function RouteHandler() {
  const { tabValue } = useParams();
  if (tabValue === 'register') {
    return <PageRegister />;
  } else if (tabValue === 'users'){
    return <PageUser />
  }
  return <PageError />;
}

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [{
      path: '/',
      element: <PageHome />
    },{
      path: '/:tabValue',
      element: <RouteHandler />
    }]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
)