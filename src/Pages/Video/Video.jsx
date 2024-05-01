/* eslint-disable no-unused-vars */
import React from 'react'
import './Video.scss'
import PlayVideo from '../../Components/PlayVideo/PlayVideo'
import Recommend from '../../Components/Recommend/Recommend'
import {useParams} from 'react'

const Video = () => {

  return (
    <div className='play-container'>
      <PlayVideo/>
      <Recommend/>
    </div>
  )
}

export default Video