import React, { Component } from 'react';
import Dropzone from 'react-dropzone'
const csv = require('csvtojson')

import './drop.css'


export default class UploadFile extends Component {

  state = {
    files: []
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

  render() {
//    this.state.files&& console.log(this.state.files[0].name);
    
    return (
      <section>
        <div className="dropzone" id="dropzone_id">
           
          <Dropzone
            onDrop={this.onDrop.bind(this)}
            multiple={false}
          >
                <div class="data-center">
                        <span class="icon-content"></span>
                        <h3 class="heading3">Upload your data from Excel or CSV</h3>
                        <span class="info-para">Drag and drop your files here</span>
                    </div>
                 {/* <p style={{color:'black', textAlign:'center', marginTop:'75px'}}>Try dropping some files here, or click to select files to upload.</p> */}
           

          </Dropzone>
        </div>
        <aside>
          {/* <h6>Dropped files</h6> */}
           <ul>
            {
               
    //  this.state.files&&  this.props.displayFileName(this.state.files[0].name)
                
            //    <li key={f.name}>{f.name} - {f.size} bytes </li>
                
            }
          </ul> 
        </aside>
      </section>
    );
  }
}