import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Navigate } from 'react-router-dom'
import axios from 'axios'
import { popupModal } from '../features/popupModal'

function HostImagesForm() {
  const dispatch = useDispatch()
  const hostelData = useSelector((state) => state.hostHostel.value)
  const userId = useSelector((user) => user.user.value.id)
  const {
    hostelName,
    hostelOwnerName,
    hostelOwnerNumber,
    hostelContactNumber,
    hostelType,
    nehaRegister,
    street,
    city,
    countryState,
    hostelCapacity,
    hostelRooms,
    hostelPrice,
    hostelAdmissionFee,
    hostelSecurityCharges,
    amenities,
    locationDesc,
    hostelRules,
    latitude,
    longitude,
  } = hostelData

  console.log(hostelData)

  const [state, setState] = useState({
    thumbnail: '',
    gallery: '',
    res: '',
  })

  const handleThumbnailChange = (e) => {
    setState({
      ...state,
      thumbnail: e.target.files[0],
    })
  }

  const handleGalleryChange = (e) => {
    setState({
      ...state,
      gallery: e.target.files,
    })
  }

  if (state.gallery.length > 2) {
    alert('only 4 allowed')
    setState({
      ...state,
      gallery: [],
    })
  }
  const data = new FormData()
  data.append('hostelName', hostelName)
  data.append('hostelOwnerName', hostelOwnerName)
  data.append('hostelOwnerNumber', hostelOwnerNumber)
  data.append('hostelContactNumber', hostelContactNumber)
  data.append('hostelType', hostelType)
  data.append('nehaRegister', nehaRegister)
  data.append('street', street)
  data.append('city', city)
  data.append('countryState', countryState)
  data.append('hostelCapacity', hostelCapacity)
  data.append('hostelRooms', hostelRooms)
  data.append('hostelPrice', hostelPrice)
  data.append('hostelAdmissionFee', hostelAdmissionFee)
  data.append('hostelSecurityCharges', hostelSecurityCharges)
  data.append('locationDesc', locationDesc)
  data.append('hostelRules', hostelRules)
  data.append('userId', userId)
  data.append('longitude', longitude)
  data.append('latitude', latitude)
  for (let i of amenities) {
    data.append('amenities', i)
  }
  data.append('thumbnail', state.thumbnail)

  let checkFeilds = state.thumbnail && state.gallery

  const handleSubmit = () => {
    if (!checkFeilds) {
      return dispatch(popupModal({ message: 'Empty fields!', cName: 'red' }))
    }
    for (let i = 0; i < state.gallery.length; i++) {
      const file = state.gallery[i]
      data.append('gallery', file)
    }
    registerHostel()
  }

  const registerHostel = async () => {
    await axios
      .post('https://merohostel.herokuapp.com/registerhostel', data)
      .then((res) => {
        setState({
          ...state,
          msg: res.data.msg,
        })
        return dispatch(
          popupModal({ message: 'Hostel Hosted!', cName: 'green' })
        )
      })
      .catch((err) => console.log(err))
  }

  return (
    <div className='host-form'>
      <div className='host-user'>
        <div className='text'>
          <h2>Hostel Images</h2>
          <p>
            Hostel Images are the most important part of your hostel. It helps
            to make your hostel more visible.
          </p>
        </div>
      </div>
      <form className='host-data-form'>
        <div className='images-field'>
          <div className='input-field'>
            <h4>Hostel Thumbnail</h4>
            <input type='file' onChange={handleThumbnailChange} />
          </div>
          <div className='input-field'>
            <h4>Hostel Gallery(2-4)</h4>
            <input type='file' multiple='4' onChange={handleGalleryChange} />
          </div>
        </div>
        <div className='link-btn' onClick={handleSubmit}>
          <button
            className='btn-black'
            onClick={(e) => {
              e.preventDefault()
            }}
          >
            host
          </button>
          {state.msg && <Navigate to='/profile' />}
        </div>
      </form>
    </div>
  )
}

export default HostImagesForm
