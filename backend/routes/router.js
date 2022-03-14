import express from 'express'
const router = express.Router()
import {
  login,
  registerUser,
  userPic,
  profileUpload,
  sendUserInfo,
} from '../controllers/user.js'
import {
  registerHostel,
  cpUpload,
  listOfHostels,
  singleHostel,
  userHostel,
  searchHostels,
  getComments,
  removeComment,
  removeHostel,
} from '../controllers/hostel.js'

router.get('/', (req, res) => {
  res.json('This is the backend')
})

router.post('/login', login)
router.post('/registeruser', registerUser)
router.post('/userpic', profileUpload, userPic)
router.post('/api/senduserinfo', sendUserInfo)

router.post('/registerhostel', cpUpload, registerHostel)
router.get('/hostel', listOfHostels)
router.post('/singlehostel', singleHostel)
router.post('/userHostel', userHostel)

router.post('/searchhostel', searchHostels)

router.post('/getcomments', getComments)
router.post('/removeComment', removeComment)
router.post('/removeHostel', removeHostel)

export default router
