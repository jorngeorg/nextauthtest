import React, { useState, useEffect } from 'react'
import useAuth from '../utils/useAuth'

const Index = () => {
 
  return (
    <main>
      <h1>Hello</h1>
   
    </main>
  )
}

Index.getInitialProps = ({req, res}) => {
  const security = useAuth(req, res)
  return security
}  

export default Index