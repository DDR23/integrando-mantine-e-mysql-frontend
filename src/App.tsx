import { MantineProvider } from '@mantine/core';
import NavBar from './components/navBar/Navbar';
import { Outlet } from 'react-router-dom';
import { Notifications } from '@mantine/notifications';

export default function App() {
  return (
    <MantineProvider defaultColorScheme='auto'>
      <Notifications />
      <NavBar />
      <Outlet />
    </MantineProvider>
  )
}