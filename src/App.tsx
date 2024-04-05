import { MantineProvider } from '@mantine/core';
import NavBar from './components/navBar/Navbar';
import { Outlet } from 'react-router-dom';

export default function App() {
  return (
    <MantineProvider defaultColorScheme='auto'>
      <NavBar />
      <Outlet />
    </MantineProvider>
  )
}