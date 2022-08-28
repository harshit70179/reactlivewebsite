
import './App.css';
import Home from './component/pages/Home';
import Shoppingcart from './component/pages/Shoppingcart'
import Viewinfo from './component/pages/Viewinfo';
import Header from './component/header/Header';
import store from './component/stores/store';
import Footer from './component/footer/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

function App() {
  return (
    <div className="App">
            <Provider store={store}>
                <BrowserRouter>
                    <Header/>
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="abc/:id" element={<Viewinfo />}></Route>
                        <Route path="/shoppingcart" element={<Shoppingcart/>}></Route>
                    </Routes>
                    <Footer/>
                </BrowserRouter>
            </Provider>
        </div>
  );
}

export default App;
