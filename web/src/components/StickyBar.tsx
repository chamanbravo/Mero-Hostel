import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toggle } from '../features/register'
import { scrollToTop } from '../utils/helper'
import './StickyBar.scss'

function StickyBar() {
  const user = useSelector((state) => state.user.value)
  const dispatch = useDispatch()
  const toggleMenuStateIn = () => {
    dispatch(toggle({ toggleState: true, sign: 'in' }))
  }
  return (
    <div className='sticky-bar'>
      <div className='sticky-menu'>
        <div className='explore bm'>
          <Link
            to='/'
            className='selected'
            onClick={() => {
              dispatch(toggle({ toggleState: false, sign: 'in' }))
              scrollToTop()
            }}
          >
            <i className='fas fa-search icon'></i>
            <p>Explore</p>
          </Link>
        </div>
        <div className='host bm' onClick={scrollToTop}>
          <Link to='/host'>
            <i className='fa fa-home icon'></i>
            <p>Host</p>
          </Link>
        </div>
        <div className='login bm' onClick={scrollToTop}>
          <Link
            to={user.firstName ? '/profile' : '#'}
            onClick={!user.firstName && toggleMenuStateIn}
          >
            <i className='far fa-user-circle icon'></i>
            <p>{user.firstName ? 'Profile' : 'LogIn'}</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default StickyBar
