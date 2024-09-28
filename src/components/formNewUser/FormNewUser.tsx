import { Box, Button, Group, LoadingOverlay, TextInput } from "@mantine/core"
import { isEmail, isNotEmpty, useForm } from "@mantine/form"
import usePost from "../../services/usePost"
import { useState } from "react"

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

  const [posted, setPosted] = useState(false)

  async function resetForm() {
    await setPosted(false)
    reset()
  }

  async function createNewUser() {
    await setPosted(true)
    resetForm()
  }


  const { isPosting } = usePost(`${import.meta.env.VITE_BASE_URL}/data/adicionar`, values, posted)


  return (
    <Box
      w={'20rem'}
      maw={'90vw'}
      h={'max-content'}
      m={'auto'}
      p={'1rem'}
      pos={'relative'}
    >
      <LoadingOverlay visible={isPosting} zIndex={1000} overlayProps={{ blur: 2 }} />
      <form
        onSubmit={onSubmit(createNewUser)}
      >
        <TextInput
          withAsterisk
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