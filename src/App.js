import './App.css';
import {BrowserRouter ,Routes , Route } from "react-router-dom"
import Header from './Components/Header';
import HomePages from './Pages/HomePages';
import CoinsPage from './Pages/CoinsPage';



function App() {


  return (
    <BrowserRouter>
    <div style = {{ backgroundColor : "#14161a" , color : "white" , minHeight : "100vh" }} >
      <Header/>
      <Routes>
          <Route path = "/" element={<HomePages />} exact  />
          <Route path = "/coins/:id" element={<CoinsPage />} exact  />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
