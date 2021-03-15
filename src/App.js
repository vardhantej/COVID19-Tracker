import React, {Component} from 'react';
import Cards from "./components/Cards/Cards";
import Chart from "./components/Chart/Chart";
import CountryPicker from "./components/CountryPicker/CountryPicker";
import styles from "./App.css";
import { fetchData } from "./api";
import coronaHeading from './images/image.png';


//using react-chartjs-2 for creating charts and material UI for many different react components

class App extends Component {
  state = {  
    data:{},
    country:''
  }

  async componentDidMount(){
    const fetchedData = await fetchData();
    this.setState({data: fetchedData});
  }

  handleCountryChange= async (country) =>{
    const fetchedCountry= await fetchData(country);
    console.log(fetchedCountry);
    this.setState({data: fetchedCountry, country: country});

  }


  render() { 

    const {data,country}= this.state;

    return ( 
      <div className="app-container">
        <img className={styles.image} src={coronaHeading} alt="COVID-19"></img>
        <Cards data={data}/>
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Chart data={data} country={country} />
      </div>
     );
  }
}
 
export default App;
