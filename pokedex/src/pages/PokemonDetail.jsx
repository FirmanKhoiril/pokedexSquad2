import React from 'react'
import { useParams } from 'react-router-dom'

const PokemonDetail = () => {
    const {id} = useParams()
  return (
    <section className='container w-full mx-auto'>PokemonDetail {id}</section>
  )
}

export default PokemonDetail