import React from 'react'

import Player from '../../objects/Player'
import Card from '../../objects/Card'

import './styles.css'

const Hashtag = () => {
  return (
        <Card>
            <ul className='hashtag'>
                <li className="item"><Player player='o' /></li>
                <li className="item"><Player player='x' /></li>
                <li className="item"><Player player='x' /></li>  
                <li className="item"><Player player='o' /></li>
                <li className="item"><Player player='x' /></li>
                <li className="item"><Player player='x' /></li> 
                <li className="item"><Player player='o' /></li>
                <li className="item"><Player player='x' /></li>
                <li className="item"><Player player='x' /></li> 
            </ul>
      </Card>
  )
}

export default Hashtag