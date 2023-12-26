import Styles from './css/index.css'
import Header from './PartWebsite/header'
import Video from './PartWebsite/video'
import Conteiner from './PartWebsite/conteiner'
import React from 'react'

export default function Home() {
  return (
    <div>
      <Video />
      <Header />
      <Conteiner />
    </div>
  )
}
