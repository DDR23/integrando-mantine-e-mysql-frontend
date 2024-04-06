import axios from "axios"
import { useEffect, useState } from "react"

export default function usePost(url: string, values: object, posted: boolean) {
  const [isPosted, setIsPosted] = useState(false)
  const [isPosting, setIsPosting] = useState(false)
  const [error, setError] = useState('')
  const [error409, setError409] = useState(false)

  useEffect(() => {
    if (posted){
      setIsPosting(true)
      axios.post(url, values)
      .then(res => {
        res.status
        setIsPosted(true)
        console.log('sucesso')
      })
      .catch(err => {
        if (err.response.status === 409){
          setError409(true)
        }
        setError(err)
        console.log(err)
      })
      .finally(() => {
        setIsPosting(false)
      })
    }
  }, [posted])
  
  return { isPosted, isPosting, error, error409 }
}