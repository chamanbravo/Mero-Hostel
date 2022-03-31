import React, { useState } from 'react'
import Button from './Button'
import { useDispatch, useSelector } from 'react-redux'
import { setHostel } from '../features/hostHostel'
import { popupModal } from '../features/popupModal'

function HostAmenitiesForm() {
  const hostelData = useSelector((state) => state.hostHostel)
  const dispatch = useDispatch()

  const [state, setState] = useState({
    hostelCapacity: '',
    hostelRooms: '',
    hostelPrice: '',
    hostelAdmissionFee: '',
    hostelSecurityCharges: '',
    hostelRules: '',
  })

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    })
  }

  const [amenities, setAmenities] = useState({
    Wifi: false,
    Parking_Space: false,
    Laundary: false,
    Furniture: false,
    Air_Conditioning: false,
  })

  const onChangeWifi = () => {
    setAmenities((initialState) => ({
      ...amenities,
      Wifi: !initialState.Wifi,
    }))
  }

  const onChangeParkingSpace = () => {
    setAmenities((initialState) => ({
      ...amenities,
      ParkingSpace: !initialState.ParkingSpace,
    }))
  }

  const onChangeLaundary = () => {
    setAmenities((initialState) => ({
      ...amenities,
      Laundary: !initialState.Laundary,
    }))
  }

  const onChangeFurniture = () => {
    setAmenities((initialState) => ({
      ...amenities,
      Furniture: !initialState.Furniture,
    }))
  }

  const onChangeAirConditioning = () => {
    setAmenities((initialState) => ({
      ...amenities,
      AirConditioning: !initialState.AirConditioning,
    }))
  }

  let checkArray = []
  for (var key in amenities) {
    if (amenities[key] === true) {
      checkArray.push(key)
    }
  }

  let checkFeilds =
    state.hostelCapacity &&
    state.hostelRooms &&
    state.hostelPrice &&
    state.hostelAdmissionFee &&
    state.hostelSecurityCharges &&
    state.hostelRules

  const handleSubmit = () => {
    if (!checkFeilds) {
      return dispatch(popupModal({ message: 'Empty fields!', cName: 'red' }))
    }
    dispatch(
      setHostel({ ...hostelData.value, ...state, amenities: checkArray })
    )
  }

  return (
    <div className='host-form'>
      <div className='host-user'>
        <div className='text'>
          <h2>Amenities</h2>
          <p>
            Hostel Amenities are a great way to help people get to know about
            your place.
          </p>
        </div>
      </div>
      <form className='host-data-form'>
        <div className='text-field'>
          <div className='input-field'>
            <h4>Total capacity of your Hostel?</h4>
            <input
              type='number'
              placeholder='total capacity'
              name='hostelCapacity'
              value={state.hostelCapacity}
              onChange={handleChange}
            />
          </div>
          <div className='input-field'>
            <h4>Total number of rooms in your hostel</h4>
            <input
              type='number'
              placeholder='total no of rooms'
              name='hostelRooms'
              value={state.hostelRooms}
              onChange={handleChange}
            />
          </div>
          <div className='input-field'>
            <h4>Price per head(NPR)</h4>
            <input
              type='number'
              placeholder='price of room'
              name='hostelPrice'
              value={state.hostelPrice}
              onChange={handleChange}
            />
          </div>
          <div className='input-field'>
            <h4>Admission Fee</h4>
            <input
              type='number'
              placeholder='Admission Fee'
              name='hostelAdmissionFee'
              value={state.hostelAdmissionFee}
              onChange={handleChange}
            />
          </div>
          <div className='input-field'>
            <h4>
              Security Charges
              <br />
              (if you don't charge please insert 0)
            </h4>
            <input
              type='number'
              placeholder='Security Charges'
              name='hostelSecurityCharges'
              value={state.hostelSecurityCharges}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className='checkbox-field'>
          <h4>Amenities(Tick the amenities you provide)</h4>
          <div className='form-check'>
            <label className='form-check-label'>
              <input
                type='checkbox'
                checked={amenities.Wifi}
                onChange={onChangeWifi}
              />
              Wifi
            </label>
          </div>
          <div className='form-check'>
            <label className='form-check-label'>
              <input
                type='checkbox'
                checked={amenities.ParkingSpace}
                onChange={onChangeParkingSpace}
              />
              Parking Space
            </label>
          </div>
          <div className='form-check'>
            <label className='form-check-label'>
              <input
                type='checkbox'
                checked={amenities.Laundary}
                onChange={onChangeLaundary}
              />
              Laundary
            </label>
          </div>
          <div className='form-check'>
            <label className='form-check-label'>
              <input
                type='checkbox'
                checked={amenities.Furniture}
                onChange={onChangeFurniture}
              />
              Furniture
            </label>
          </div>
          <div className='form-check'>
            <label className='form-check-label'>
              <input
                type='checkbox'
                checked={amenities.AirConditioning}
                onChange={onChangeAirConditioning}
              />
              Air Conditioning
            </label>
          </div>
        </div>
        <div className='input-field'>
          <h4>Hostel Rules</h4>
          <textarea
            placeholder='Hostel Rules'
            name='hostelRules'
            value={state.hostelRules}
            onChange={handleChange}
          />
        </div>
        <div onClick={handleSubmit}>
          <Button
            link={checkFeilds ? '/hostelimages' : '#'}
            innerText='Next'
            cName='btn-black'
          />
        </div>
      </form>
    </div>
  )
}

export default HostAmenitiesForm
