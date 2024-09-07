import {useState,useEffect} from "react"
import {Link } from "react-router-dom";
import weather from "../Weather"
import './index.css';


const Home = () => {

  const [tableData1, setTableData1] = useState([])
  const[error, setError] = useState("")
  

  useEffect(() =>{
    const fetchingData = async () =>{
        const data = await fetch("https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/geonames-all-cities-with-a-population-1000/records?limit=100")
        
        if(data.status === 200){
          const resultData = await data.json() 
          console.log(resultData)
          const convertData = resultData.results.map(each =>{

            return {
              id:each.geoname_id,
              countryName: each.cou_name_en,
              countryCode:each.country_code,
              population:each.population,
              timeZone:each.timezone,
              city:each.name,
              weather:"weather"
            }
          })
          setTableData1(convertData)
          setError("")
          
          
        }
        else{
          setError("Something went wrong please try again....")
        }
        
    }
    fetchingData();
  },[])
  return (
    <div className="App">
      <h1 className="countres-text">Countries Data</h1>
      <table className="my-table">
    <thead>
      <tr>
        <th>ID</th>
        <th>CountryName</th>
        <th>CountryCode</th>
        <th>Population</th>
        <th>Timezone</th>
        <th>Weather</th>
      </tr>
    </thead>
    <tbody>
      {tableData1.map((item) => (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.city}</td>
          <td>{item.countryCode}</td>
          <td>{item.population}</td>
          <td>{item.timeZone}</td>
          <td><Link to={`/weather/${item.id}`} target="_blank">{item.weather}</Link></td>
        </tr>
      ))}
    </tbody>
  </table>
  {error !== "" && <p className="error-msg">{error}</p>}
    </div>
  );
}

export default Home;
