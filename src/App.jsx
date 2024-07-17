import { Route, BrowserRouter, Routes } from 'react-router-dom'
import HomePage from './pages/homePages'
import { Provider } from 'react-redux'
import store from './redux/store'
import CartPages from './pages/cartPages'
// import CartPage from './pages/cartPages'

function App() {

  return (
    <Provider store={store}>

    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/cart' element={<CartPages/>}/>
    </Routes>
    </BrowserRouter>
    </Provider>
  )
}

export default App
