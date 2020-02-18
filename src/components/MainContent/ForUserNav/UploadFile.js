import React, { Component } from 'react';
import Dropzone from 'react-dropzone'
import upload from '../../../img/uploading.gif'
const csv = require('csvtojson')

import './drop.css'


export default class UploadFile extends Component {

  state = {
    files: [],
    uploading: false
  }

  onDrop = (acceptedFiles, rejectedFiles) => {
    this.setState({
      files: acceptedFiles
    });

    acceptedFiles.forEach(file => {
      const reader = new FileReader();

      reader.onload = () => {
        const fileAsBinaryString = reader.result;

        csv({
          noheader: true,
          output: "json"
        })
          .fromString(fileAsBinaryString)
          .then((csvRows) => {
            const toJson = []
            csvRows.forEach((aCsvRow, i) => {


              if (i !== 0) {
                const builtObject = {}

                Object.keys(aCsvRow).forEach((aKey) => {
                  const valueToAddInBuiltObject = aCsvRow[aKey];
                  const keyToAddInBuiltObject = csvRows[0][aKey];
                  builtObject[keyToAddInBuiltObject] = valueToAddInBuiltObject;
                })

                toJson.push(builtObject)
              }


            })
            this.props.onDrop(toJson)
          })

      };

      reader.onabort = () => console.log('file reading was aborted');
      reader.onerror = () => console.log('file reading has failed');

      reader.readAsBinaryString(file);
    });


  }
  uploadNow = () => {
    this.setState({
      uploading: !this.state.uploading
    })
  }

  render() {
//    this.state.files&& console.log(this.state.files[0].name);
    
    return (
      <>
      <section>
        <div className="dropzone" id="dropzone_id">
           
          <Dropzone
            onDrop={this.onDrop.bind(this)}
            multiple={false}
          >
                <div class="data-center-bg">
                        <span class="icon-content"></span>
                        <span class="para">You can also upload Excel or CSV by</span>
                        <p class="click" style={{color:'blue'}}>clicking here</p>
                    </div>
                
           

          </Dropzone>
        </div>
        <aside>
         
           <ul>
            {
               
   
                
            }
          </ul> 
        </aside>
       
      </section>
       {this.state.files&& this.state.files.map((f) => {
        return   <span className="span-file">{f.name} - {(f.size/1024).toFixed(2)} KB </span>
      })}
      <br />

      
      { this.state.uploading &&
        <div style={{alignContent:'center', textAlign:'center'}}>
          <img src={upload} style={{height:'40px', width:'40px'}}></img> 
         <br /> <span style={{marginBottom:'5px'}}>Uploading file..</span>
          <br/>   
          <br/> 
          </div>} 
       
          <div style={{textAlign: 'center'}}>
       { this.state.files.length>0 &&  <button className="btn btn-primary" onClick={() => this.uploadNow()}>{this.state.uploading ? "Cancel" : "Upload"}</button>}
      </div>
    </>

       
    );
  }
}