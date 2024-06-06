import React from 'react'
import Popular from '../components/popular.jsx'
import Heading from '../components/heading.jsx'
import Navbar from '../components/navbar.jsx'


export default function Homepage() {
  return (
    <div>
      <Navbar/>
      <Heading/>
        <Popular/>
    </div>
  )
}
