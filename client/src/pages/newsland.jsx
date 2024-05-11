import React from 'react'
import { useLocation } from 'react-router'

export default function Newsland() {
  const {state}=useLocation();
  return (
    <div>
    <h1>{state.data.title}</h1>
    <p>{state.data.description}</p>
    <img src={state.data.urlToImage} alt="" />
    <p>{state.data.content}</p>

    </div>
  )
}
