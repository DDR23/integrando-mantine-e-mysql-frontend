import { Group } from "@mantine/core";
import FormNewUser from "../../components/formNewUser/FormNewUser";

export default function PageRegister() {
  return (
    <>
      <Group
        h={'100vh'}
      >
        <FormNewUser />
      </Group>
    </>
  )
}