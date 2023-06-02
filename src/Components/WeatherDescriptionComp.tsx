import React from 'react'
import { WeatherInterface } from '../Custom/CustomInterfaces'

interface Props{
    ambient: WeatherInterface
}

const WeatherDescriptionComp: React.FC<Props> = ({ambient}) => {
  return (
    <div>WeatherDescriptionComp</div>
  )
}

export default WeatherDescriptionComp