import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {
  Header,
  Footer,
  RegisterModal,
  HostForm,
  HostLocation,
  HostAmenitiesForm,
  HostImagesForm,
  PopupMessage,
  StickyBar,
} from './components'
import {
  Homepage,
  SingleHostelPage,
  SearchResultPage,
  UserProfilePage,
  ErrorPage,
} from './pages'
import { useSelector, useDispatch } from 'react-redux'
import ProtectedRoutes from './utils/ProtectedRoutes'
import { popupModal } from './features/popupModal'

function App() {
  const register = useSelector((state) => state.register.value)

  let modalContent = useSelector((state) => state.popupModal.value)
  let dispatch = useDispatch()

  useEffect(() => {
    if (modalContent.message) {
      const timer = setTimeout(() => {
        dispatch(popupModal({ message: '', cName: '' }))
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [modalContent])

  return (
    <div className='App'>
      <Router>
        <Header />
        {register.toggleState && <RegisterModal />}
        {modalContent.cName && <PopupMessage modalContent={modalContent} />}
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/hostel/:id' element={<SingleHostelPage />} />
          <Route path='/hostel' element={<SearchResultPage />} />
          <Route element={<ProtectedRoutes />}>
            <Route path='/profile' element={<UserProfilePage />} />
            <Route path='/host' element={<HostForm />} />
            <Route path='/amenities' element={<HostAmenitiesForm />} />
            <Route path='/location' element={<HostLocation />} />
            <Route path='/hostelimages' element={<HostImagesForm />} />
          </Route>
          <Route path='*' element={<ErrorPage />} />
        </Routes>
        <StickyBar />
        <Footer />
      </Router>
    </div>
  )
}

export default App
