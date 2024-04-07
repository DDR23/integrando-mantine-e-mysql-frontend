import { notifications } from "@mantine/notifications"
import { IconCheck, IconCircleX, IconExclamationCircle } from "@tabler/icons-react"
import axios from "axios"
import { useEffect, useState } from "react"

export default function usePost(url: string, values: object, posted: boolean) {
  const [isPosted, setIsPosted] = useState(false)
  const [isPosting, setIsPosting] = useState(false)
  const [error, setError] = useState('')
  const [error409, setError409] = useState(false)

  useEffect(() => {
    if (posted){
      const id = notifications.show({
        loading: true,
        title: 'Aguarde...',
        message: 'Estamos enviando as informações.',
        autoClose: false,
        withCloseButton: false,
      })
      setIsPosting(true)
      axios.post(url, values)
      .then(res => {
        notifications.update({
          id,
          color: 'teal',
          title: 'Sucesso',
          message: 'Um novo usuário foi cadastrado',
          icon: <IconCheck size={18} />,
          loading: false,
          autoClose: 3000,
        });
        res.status
        setIsPosted(true)
      })
      .catch(err => {
        if (err.response.status === 409){
          setError409(true)
          notifications.update({
            id,
            color: 'red',
            title: 'Usuário já foi cadastrado',
            message: 'Já existe um cadastro com esse email, insira um email diferente',
            icon: <IconExclamationCircle size={22} />,
            loading: false,
            autoClose: 5000,
          });
        } else {
          notifications.update({
            id,
            color: 'red',
            title: 'ERRO',
            message: 'Estamos enfrentando problemas aqui, tente novamente mais tarde',
            icon: <IconCircleX size={22} />,
            loading: false,
            autoClose: 5000,
          });
        }
        setError(err)
      })
      .finally(() => {
        setIsPosting(false)
      })
    }
  }, [posted])
  
  return { isPosted, isPosting, error, error409 }
}