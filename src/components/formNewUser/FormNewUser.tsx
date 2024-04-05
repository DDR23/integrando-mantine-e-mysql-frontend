import { Box, Button, Group, TextInput } from "@mantine/core"
import { isEmail, isNotEmpty, useForm } from "@mantine/form"

export default function FormNewUser() {
  const { getInputProps, onSubmit, reset, values } = useForm({
    initialValues: {
      username: '',
      email: ''
    },
    validate: {
      username: isNotEmpty('Required'),
      email: isEmail('Invalid email')
    }
  })

  function createNewUser(){
    console.log(values)
    reset()
  }

  return(
    <Box
      w={'20rem'}
      maw={'90vw'}
      h={'max-content'}
      m={'auto'}
      p={'1rem'}
      bg={'dark'}
    >
      <form 
        onSubmit={onSubmit(createNewUser)}
      >
        <TextInput
          label='Username'
          placeholder="your username"
          {...getInputProps('username')}
        />
        <TextInput
          withAsterisk
          label='Email'
          placeholder="your email"
          {...getInputProps('email')}
        />
        <Group
          justify="flex-end"
          mt={'1rem'}
        >
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
  )
}