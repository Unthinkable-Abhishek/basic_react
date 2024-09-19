import { Route, Routes } from 'react-router-dom'
import LoginContainer from './Components/Login/LoginContainer'
import ResetContainer from './Components/Reset Password/ResetContainer'
import NoPage from './Components/NoPage/NoPage'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<LoginContainer />}/>
        <Route path='/resetPassword' element={<ResetContainer />}/>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </>
  )
}

export default App

//theme pallet mixins-mediaquery  app.js  Router structure (public route private route) font  eslint config  prettier config