import React from 'react'

import Header from '../header/Header'
import Footer from '../footer/Footer'

interface Props {
  children: React.ReactNode
}

const MainLayout = ({children} : Props) => {
  return (
    <>
      <Header/>
      {children}
      <Footer/> 
    </>
  )
}

export default MainLayout