import React from 'react'
import GoogleMapReact from 'google-map-react'
import './HostelMap.scss'

function HostelMap({ lat, lng }) {
  let center = { lat: parseFloat(lat), lng: parseFloat(lng) }
  let zoom = 18

  return (
    <div className='hostel-mapbox'>
      <GoogleMapReact
        // bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
        defaultCenter={center}
        defaultZoom={zoom}
      ></GoogleMapReact>
    </div>
  )
}

export default HostelMap
