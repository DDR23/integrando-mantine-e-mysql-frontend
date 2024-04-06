import { Box, Group, Text, Title } from "@mantine/core";

export default function PageHome() {
  return (
    <>
      <Group
        h={'100vh'}
      >
        <Box
          m={'auto'}
          p={'2rem'}
        >
          <Title ta={'center'} order={1} >Registro de usuários</Title>
          <Title fw={400} ta={'center'} order={3} >Esse é um projeto desenvolvido em <Text fw={500} span c="blue" inherit>Typescript</Text> e usa componentes <Text fw={500} span c="blue" inherit>Mantine UI</Text></Title>
          <Title size={'xl'} fw={200} ta={'center'} order={5} >Todos os dados fornecidos à esta aplicação são enviados para uma API e registrados em um banco <Text fw={500} span c="blue" inherit>mySQL</Text> integrado aos serviços da <Text fw={500} span c="blue" inherit>Railway</Text></Title>
        </Box>
      </Group>
    </>
  )
}