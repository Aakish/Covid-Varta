import React,{Component} from 'react';


import{Cards,Chart,CountryPicker} from './components';
import styles from './App.module.css';
import {fetchData} from './api';

class App extends Component{

    state={
        data:{},
        country:'',
    }
    async componentDidMount (){
        const fetchedData = await fetchData();
        
        this.setState({data:fetchedData})
    }

    handleCountryChange = async(country) =>{
        const fetchedData = await fetchData(country);
        this.setState({data: fetchedData, country:country});
    }

    render(){

        const { data, country }=this.state;

        return(
            <div className={styles.container}>
                <h1 className={styles.heading}>Pandemic Updates</h1>
                <Cards data={data}/>
                <Chart data={data} country={country}/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
            </div>
        )
    }
}

export default App;