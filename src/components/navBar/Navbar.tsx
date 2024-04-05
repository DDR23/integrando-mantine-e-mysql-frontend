import { useNavigate, useParams } from 'react-router-dom';
import { Tabs } from '@mantine/core';

  export default function NavBar() {
  const navigate = useNavigate();
  let { tabValue = "/" } = useParams();

  return (
    <Tabs
      pos={'fixed'}
      w={'100vw'}
      value={tabValue}
      onChange={(value) => navigate(`${value}`)}
    >
      <Tabs.List justify='center'>
        <Tabs.Tab value="/">Home</Tabs.Tab>
        <Tabs.Tab value="register">Cadastrar</Tabs.Tab>
        <Tabs.Tab value="users">Usuários</Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
}