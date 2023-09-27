import { useParams, Navigate } from 'react-router-dom'
import React from 'react'

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
