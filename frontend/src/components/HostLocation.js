import React, { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import './HostLocation.scss'
import Button from './Button'
import { useDispatch, useSelector } from 'react-redux'
import { setHostel } from '../features/hostHostel'
import { popupModal } from '../features/popupModal'

function HostLocation() {
  const dispatch = useDispatch()
  const hostelData = useSelector((state) => state.hostHostel)
  const [state, setState] = useState({
    street: '',
    city: '',
    countryState: '',
    latitude: '',
    longitude: '',
  })

  const handleChange = (e) =>
    setState({
      ...state,
      [e.target.name]: e.target.value,
    })

  const defaultProps = {
    center: {
      lat: 27.68883,
      lng: 85.335615,
    },
    zoom: 13,
  }

  let checkFeilds =
    state.street &&
    state.city &&
    state.countryState &&
    state.latitude &&
    state.longitude

  const handleSubmit = () => {
    if (!checkFeilds) {
      return dispatch(popupModal({ message: 'Empty fields!', cName: 'red' }))
    }
    dispatch(
      setHostel({
        ...hostelData.value,
        ...state,
      })
    )
  }

  let handleClickedMap = (e) => {
    setState({
      ...state,
      latitude: e.lat,
      longitude: e.lng,
    })
  }

  return (
    <div className='host-location'>
      <div className='mapBox'>
        <GoogleMapReact
          onClick={handleClickedMap}
          // bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        ></GoogleMapReact>
        <div className='click-info'>
          <h1>Click on the map and select the location.</h1>
        </div>
      </div>
      <form className='host-location-form'>
        <div>
          <div className='input-field'>
            <h4>Street</h4>
            <input
              type='text'
              placeholder='Street'
              name='street'
              value={state.street}
              onChange={handleChange}
            />
          </div>
          <div className='input-field'>
            <h4>City</h4>
            <input
              type='text'
              placeholder='City'
              name='city'
              value={state.city}
              onChange={handleChange}
            />
          </div>
          <div className='input-field'>
            <h4>State</h4>
            <input
              type='text'
              placeholder='State'
              name='countryState'
              value={state.countryState}
              onChange={handleChange}
            />
          </div>
          <div className='input-field'>
            <h4>Country/Region</h4>
            <p>Nepal</p>
          </div>
        </div>
        <div onClick={handleSubmit}>
          <Button
            link={checkFeilds ? '/amenities' : '#'}
            innerText='Next'
            cName='btn-black'
          />
        </div>
      </form>
    </div>
  )
}

export default HostLocation
