import React, { useEffect } from 'react'
import './App.css'
import { useImmerReducer } from 'use-immer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// MUI Imports
import { StyledEngineProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'

// Components
import Home from './Components/Home'
import Header from './Components/Header'
import Login from './Components/Login'
import Listings from './Components/Listings'
import ListingDetail from './Components/ListingDetail'
import ListingSearch from './Components/ListingSearch'
import Testing from './Components/Testing'
import Register from './Components/Register'
import ReducerTest from './Components/ReducerTest'
import ResponsiveAppBar from './Components/ResponsiveAppbar'
import Navbar from './Components/Navbar'
import AddProperty from './Components/AddProperty'
import Profile from './Components/Profile'
import Agencies from './Components/Agencies'
import AgencyDetail from './Components/AgencyDetail'
import New from './Components/New'

// Contexts
import DispatchContext from './Contexts/DispatchContext'
import StateContext from './Contexts/StateContext'


function App() {

  const initialState = {
    userUsername: localStorage.getItem('theUserUsername'),
    userEmail: localStorage.getItem('theUserEmail'),
    userId: localStorage.getItem('theUserId'),
    userToken: localStorage.getItem('theUserToken'),
    userIsLogged: localStorage.getItem('theUserUsername') ? true : false,
    globalMessage: 'Hello, this message can be used by any child component'
  }

  function ReducerFunction(draft, action) {
      switch(action.type) {
        case 'catchToken':
          draft.userToken = action.tokenValue
          break
        case 'userSignsIn':
          draft.userUsername = action.usernameInfo
          draft.userEmail = action.emailInfo
          draft.userId = action.IdInfo
          draft.userIsLogged = true
          break
        case 'logout':
          draft.userIsLogged = false
      }
    }

    // const [state, dispatch] = useReducer(ReducerFunction, initialState)
    const [state, dispatch] = useImmerReducer(ReducerFunction, initialState)

    // Login User

    useEffect(() => {
      if (state.userIsLogged) {
        // if user is logged in. Store user in local storage
        localStorage.setItem('theUserUsername', state.userUsername)
        localStorage.setItem('theUserEmail', state.userEmail)
        localStorage.setItem('theUserId', state.userId)
        localStorage.setItem('theUserToken', state.userToken)
      }

      else {
        // user is logged out.
        localStorage.removeItem('theUserUsername')
        localStorage.removeItem('theUserEmail')
        localStorage.removeItem('theUserId')
        localStorage.removeItem('theUserToken')
      }
    }, [state.userIsLogged])

  return (
    <StateContext.Provider value={state}>
    <DispatchContext.Provider value={dispatch}>
      <StyledEngineProvider injectFirst>
      <BrowserRouter>
      <CssBaseline />
    {/* <Header/> */}
      {/* <ResponsiveAppBar/> */}
      <Navbar/>
        <Routes>
          {/* <Route path='/' element={<Home/>}/> */}
          <Route path='/' element={<New/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/add-property' element={<AddProperty/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/agencies' element={<Agencies/>}/>
          <Route path='/agencies/:id' element={<AgencyDetail/>}/>
          <Route path='/listings' element={<Listings/>}/>
          <Route path='/listings/:id' element={<ListingDetail/>}/>
          <Route path='/listings/search' element={<ListingSearch/>}/>
          <Route path='/testing' element={<Testing/>}/>
          <Route path='/reducer' element={<ReducerTest/>}/>
          <Route path='/new' element={<New/>}/>
        </Routes>
      </BrowserRouter>
      </StyledEngineProvider>
    </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

export default App;
