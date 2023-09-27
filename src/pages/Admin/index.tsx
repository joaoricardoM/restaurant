import { useParams, Navigate } from 'react-router-dom'

export default function Admin() {
  const params = useParams()
  if (params.user !== 'joao') {
    return <Navigate to="/" />
  }
  return (
    <>
      <h1>Área restrita!</h1>
    </>
  )
}
