
import {Router,Route,Routes,useSearchParams} from "react-router-dom"
import Weather from "./components/Weather"
import Home from "./components/Home"
import './App.css';


const App = (props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const city = searchParams.get('city')
  
return (<Routes>
  <Route exact path="/" element={<Home/>}/>
  <Route path="/weather/:id" element={<Weather city={city}/>}/>
</Routes>)

}

export default App;
