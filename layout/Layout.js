import React from 'react'
import Header from '../components/Header'

export default function Layout({children}) {
  return (
    <React.Fragment>
        <Header/>
        {children}
    </React.Fragment>
  )
}
