import React from 'react'
import { Link } from 'react-router-dom'
import { scrollToTop } from '../utils/helper'
import './HostelCard.scss'

function HostelCard({ hostel }) {
  const {
    id,
    hostelName,
    city,
    street,
    hostelPrice,
    thumbnail,
    stars,
    hostelReviews,
    hostelType,
  } = hostel

  const BoysHostel = () => {
    return (
      <h3 className='mini-details'>
        <i className='fas fa-male icons'></i>
        {`${hostelType} Hostel`}
      </h3>
    )
  }

  const GirlsHostel = () => {
    return (
      <h3 className='mini-details'>
        <i className='fas fa-female icons'></i>
        {`${hostelType} Hostel`}
      </h3>
    )
  }

  return (
    <Link to={`/hostel/${id}`} onClick={scrollToTop}>
      <div className='hostel-card'>
        <img
          src={`https://merohostel.herokuapp.com/hostels/${thumbnail}`}
          className='hostel-pic'
          alt={hostelName}
        />
        <div className='hostel-info'>
          <h3 className='hostel-name'>{hostelName}</h3>

          {hostelType === 'Boys' ? <BoysHostel /> : <GirlsHostel />}

          <h3 className='mini-details'>
            <i className='fas fa-map-marked-alt icons'></i>
            {`${street}, ${city}`}
          </h3>
          <div className='rate-price'>
            <div className='rating'>
              <i className='fas fa-star'></i>
              <p className='stars'>{stars}</p>
              <p className='reviews'>({hostelReviews.length} reviews)</p>
            </div>
            <div className='price'>
              <h4>Rs {hostelPrice}</h4>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default HostelCard
