import React from 'react'
import { places } from '../context/mockData/places'
import { Link } from 'react-router-dom'
import './ExploreNearby.scss'

function ExploreNearby() {
  return (
    <div className='explore-nearby'>
      <h1>Explore nearby</h1>
      <div className='places-grid'>
        {places.map((place, index) => {
          return (
            <Link to={`/hostel?search=${place.location}`} key={index}>
              <div className='place'>
                <img src={place.image} alt={`hostel in ${place.location}`} />
                <div className='text'>
                  <h3>{place.location}</h3>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default ExploreNearby
