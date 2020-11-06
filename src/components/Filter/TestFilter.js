import React, { Component } from 'react'
import Axios from 'axios'

export default class TestFilter extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            requestData: ''
             
        }
    }
    // getFormdata = () => {
      
    //     this.setState({
    //         requestData: bodyFormData
    //     })
  
    //   }
    
    fetchData = () => {
        var bodyFormData = new FormData();
      
        bodyFormData.append('wards',JSON.stringify([6,2]));
        Axios({
            method: 'post',
            url: `${process.env.BASE_URL}api/v1/hdd`,
            data: bodyFormData,
            headers: {'Content-type': 'multipart/form-data'}
        })
        .then(res => {
            console.log("Data is here");
            console.log(res.data);
            
            
        })
    }

    componentDidMount() {
        // this.fetchData();
    }
    render() {
        return (
            <div>
                <h1>Test ffilter for API</h1>
            </div>
        )
    }
}
