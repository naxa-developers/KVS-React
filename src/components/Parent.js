import React, { Component, createRef } from 'react';
import L, { Layer, tileLayer } from 'leaflet';
import 'leaflet-ajax'
import Main from './MainContent/Main';
import Filter from './Filter/Filter';

import Axios from 'axios';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import './Parent.css'
import { Popup } from 'leaflet';


let LayerOne = null;
let wardJ = null;
let layerImage = null;

class Parent extends Component {

  constructor(props) {
    super(props);
    this.markerref = createRef();
    this.clusterRef = createRef()
    this.state = {
      householdData: '',
      bollean: [],
      bounds: '',
      display: 'block',
      token: `${localStorage.getItem('myValueInLocalStorage')}`,
      tempData: '',
      jsonData: '',
      geoSingle: '',
      VCALayers: '',
      layerStyles:'',
      layerToshow: '',
      layerToPlot: null,
      dropArr: {},
      dropArrHazard: [],
      layersLegend: L.control({ position: 'bottomright' }),
      legendToShow: null,
      singleLayerStyle: null,
      singleLayerMarker : 'http://vca.naxa.com.np/media/'
    };
  }

  fetchDataF = () => {
    var bodyFormData = new FormData();

    // bodyFormData.append('ward', JSON.stringify([6, 2]));
    // bodyFormData.append('education_lists',JSON.stringify(['Literate']));
    // bodyFormData.append('security', "Yes");
    // bodyFormData.append('age_group_list',JSON.stringify(["20-40"]));
    Axios({
      method: 'post',
      url: 'http://139.59.67.104:8019/api/v1/fdd',
      data: bodyFormData,
      headers: {
        'Content-type': 'multipart/form-data',
        // Authorization: `Token 7d9f1c535b1323f607525fa99a4989b961bc5e01`
        Authorization: `Token ${this.state.token}`
      }
    }).then(res => {


      this.setState({ householdData: res.data.data }, () => {
        window.mapRef.current.leafletElement.fitBounds(
          this.markerref.current.leafletElement.getBounds()
        );
      });
    });
  };



  searchTable = keyword => {
    if (keyword.length > 0) {
      let filteredData = this.state.householdData.filter(data =>
        data.owner_name.includes(keyword)
      );
      setTimeout(() => {
        this.setState({
          householdData: filteredData,
        }, () => {
          window.mapRef.current.leafletElement.fitBounds(
            this.markerref.current.leafletElement.getBounds()
          );
          window.mapRef.current.leafletElement.setZoom(14);
          const cluster = this.clusterRef.current.leafletElement.getLayers()
          cluster[0].openPopup()
        });
      }, 1200)
    } else {
      if (JSON.parse(sessionStorage.getItem("available")) != true) {
        return
      }
      else {
        this.state.householdData = JSON.parse(sessionStorage.getItem("household"))
        this.setState({},
          () => {
            window.mapRef.current.leafletElement.fitBounds(
              this.markerref.current.leafletElement.getBounds()
            );
          }
        )
      }
    }
  }

  fetchDatafilter = () => {
    this.setState({ ...this.state, display: 'block' });
    var bodyFormData = new FormData();

    // bodyFormData.append('ward', JSON.stringify([6, 3]));
    // bodyFormData.append('education_lists',JSON.stringify(['Literate']));
    // bodyFormData.append('security', 'Yes');
    // bodyFormData.append('age_group_list',JSON.stringify(["20-40"]));
    // console.log(this.props,"hey props")
    Axios({
      method: 'post',
      url: 'http://139.59.67.104:8019/api/v1/fdd',
      data: bodyFormData,
      headers: {
        'Content-type': 'multipart/form-data',
        // Authorization: `Token 7d9f1c535b1323f607525fa99a4989b961bc5e01`
        Authorization: `Token ${this.state.token}`
      }
    }).then(res => {
      // console.log("initial", res.data);

      this.setState(
        { householdData: res.data.data, tempData: res.data.data },
        () => {
          window.mapRef.current.leafletElement.fitBounds(
            this.markerref.current.leafletElement.getBounds()
          );
        }
      );
      sessionStorage.setItem('household', JSON.stringify(res.data.data))
      sessionStorage.setItem('available', true);
      this.state.householdData != '' && this.setState({ display: 'none' });

    });
  };

  dataReset = () => {
    wardJ !== null && window.mapRef.current.leafletElement.removeLayer(wardJ)
    // VCALayer !== null && window.mapRef.current.leafletElement.removeLayer(VCALayer)
    if (JSON.parse(sessionStorage.getItem("available")) != true) {
      this.fetchDatafilter();
    }
    else {

      this.state.householdData = JSON.parse(sessionStorage.getItem("household"))
      this.setState({

        display: 'none'


      },
        () => {
          window.mapRef.current.leafletElement.fitBounds(
            this.markerref.current.leafletElement.getBounds()
          );

        }
      )

    }

  }

  onApply = selected => {


    this.setState({ ...this.state, display: 'block' });
    var bodyFormData = new FormData();


    // bodyFormData.append('education_lists',JSON.stringify(['Literate']));
    // bodyFormData.append('security', "Yes");
    // bodyFormData.append('age_group_list',JSON.stringify(["20-40"]));

    selected.forEach(i => {
      if (i.value.length != 0) {
        if (i.field === 'flood' || i.field === 'social_security_received') {
          i.value[0] === 'Yes' && bodyFormData.append(i.field, 'Yes');
          i.value[0] !== 'Yes' && bodyFormData.append(i.field, 'No');
          return;
        }

        if (i.field === 'senior_citizen') {
          i.value[0] === 'Yes' &&
            bodyFormData.append(i.field, 'Senior citizen');
          return;
        }
        if (i.field === 'ward' || i.field === 'education') {
          bodyFormData.append(i.field, JSON.stringify(i.value));
          this.fetchWardJson(i.value)
          return
        }
        if (i.field === 'hazard_type') {

          bodyFormData.append(i.field, JSON.stringify(i.value))
        }
      }
    });




    for (var p of bodyFormData) {

    }

    Axios({
      method: 'post',
      url: 'http://139.59.67.104:8019/api/v1/fdd',
      data: bodyFormData,
      headers: {
        'Content-type': 'multipart/form-data',
        // Authorization: `Token 7d9f1c535b1323f607525fa99a4989b961bc5e01`
        Authorization: `Token ${this.state.token}`
      }
    }).then(res => {
      this.setState({
        householdData: res.data.data,
        display: 'none'
      }, () => {
        window.mapRef.current.leafletElement.fitBounds(
          this.markerref.current.leafletElement.getBounds()
        );
      });


    });
  };

  onApplyMore = (selectedSid, selCat) => {
    this.setState({ display: 'block' })
    let labelArr = [];
    selectedSid.map((s) => {
      labelArr.push(s.label)
    })

    var bodyFormData = new FormData();

    bodyFormData.append('field', selCat)
    bodyFormData.append('value', JSON.stringify(labelArr))


    Axios({


      method: 'post',
      url: 'http://139.59.67.104:8019/api/v1/more',
      data: bodyFormData,
      headers: {
        'Content-type': 'multipart/form-data',
        Authorization: `Token ${this.state.token}`

      }
    }).then(res => {


      // debugger
      res.data.data.length != 0 ?
        this.setState({
          householdData: res.data.data,
          display: 'none',


        },
          () => {
            window.mapRef.current.leafletElement.fitBounds(
              this.markerref.current.leafletElement.getBounds()
            );
          }

        ) :
        confirmAlert({
          title: 'No data available!',
          buttons: [],
        })

      this.state.householdData.length === 0 &&
        this.setState({
          householdData: JSON.parse(sessionStorage.getItem("household"))
        })
    });


  }

  componentDidMount() {

    if (JSON.parse(sessionStorage.getItem("available")) != true) {


      this.fetchDatafilter();
    }
    else {

      this.state.householdData = JSON.parse(sessionStorage.getItem("household"))
      this.setState({

        display: 'none'


      },
        () => {
          window.mapRef.current.leafletElement.fitBounds(
            this.markerref.current.leafletElement.getBounds()
          );
        }
      )

    }

    // this.addLegend();
    this.fetchVCALayers();

  }

  fetchVCALayers = () => {
    var bodyFormData = new FormData();
    bodyFormData.append('municipality', '524 2 15 3 004')
    // bodyFormData.append('ward', 2)

    localStorage.getItem("ward")!== 'null' && bodyFormData.append('ward', localStorage.getItem('ward'))


    Axios({
      method: 'post',
      url: 'http://vca.naxa.com.np/api/kvs_map_data_layers',
      data: bodyFormData,
      headers: {
        'Content-type': 'multipart/form-data',

      }
    }).then(res => {


let dropArr = [];
let dropArrHazard = [];
let project_id = null;
project_id = res.data['Category:Resources'][0].project__id;

res.data['Category:Resources'].map((d) => {
  // let dropNames = Object.keys(d)

 
   
 
  let obj = {
    id: d.layerId,
    text: d.layerName
  }
 dropArr.push(obj) 
})
this.setState({
  dropArr: dropArr
})

res.data['Category:Hazard'].map((d) => {
  // let dropNames = Object.keys(d)
  let obj = {
    id: d.layerId,
    text: d.layerName
  }
 dropArrHazard.push(obj) 
})
this.setState({
  dropArrHazard: dropArrHazard
})


      this.setState({
        VCALayers: res.data
      },
    () => {
      Axios.get(`http://vca.naxa.com.np/api/style-setting/?project=${project_id}`).then((res) => {
        this.setState({
          layerStyles: res.data
        })
      })
        
        
      }
      
      )

    })
  

  }


  fetchGeoSingle = () => {
    Axios.get('http://139.59.67.104:8019/api/v1/municipality_geo_json?id=1').then(res => {

      // L.geoJSON(res.data).addTo(window.mapRef.current.leafletElement);

      this.setState({
        geoSingle: res.data
      })


    })


  }


  fetchWardJson = (w) => {
    var bodyFormData = new FormData();
    bodyFormData.append('municipality', '524 2 15 3 004')


    bodyFormData.append('ward', w)


    Axios({
      method: 'post',
      url: 'http://vca.naxa.com.np/api/ward_geojson_kvs',
      data: bodyFormData,
      headers: {
        'Content-type': 'multipart/form-data',

      }
    }).then(res => {
      wardJ = L.geoJSON(res.data, 
        {style: {color:'#f59e42'}}
      )
      wardJ.addTo(window.mapRef.current.leafletElement);

    });

  }
  addLayers = (Ly) => {

    this.state.VCALayers['Category:Hazard'].map((m) => {

      if (Ly == m.layerId) {
        let file = m.file;
        const {prakop}= this.state.layerStyles;
      
      
          if(m.geometry_type=="polygondiv" || m.geometry_type=="linediv") {
          
          prakop.map((p) => {
            p.title==m.layerName && this.setState({ singleLayerStyle: p.style})
          })   
  
  
          LayerOne = new L.geoJson.ajax(file, m.styles )
          } else {
            prakop.map((p) => {
              
              
           
              if(p.title===m.layerName) { layerImage = 'http://vca.naxa.com.np/media/' + p.marker_image }   
            })   
    
            let layerIcon = L.icon({
              iconUrl: layerImage,
              iconSize: [24, 34] 
            }); 
    
            
            LayerOne = new L.geoJson.ajax(file, 
              {pointToLayer: function (feature, latlng) {
                return L.marker(latlng, { icon: layerIcon });
                // layer.setIcon(layerIcon);
            }
           } )
  
          
        }
       

        this.setState(state => ({
          layerToPlot: {
            ...state.layerToPlot,
            [Ly]: LayerOne
          }
        }))

        LayerOne.addTo(window.mapRef.current.leafletElement)


      }
    })


    this.state.VCALayers['Category:Resources'].map((m) => {


      if (Ly == m.layerId) {
        let file = m.file;
        const {vautik}= this.state.layerStyles;
        if(m.geometry_type=="polygondiv" || m.geometry_type=="linediv") {

        LayerOne = new L.geoJson.ajax(file, m.styles )
        } else {

          vautik.map((p) => {
            if(p.title===m.layerName) { layerImage = 'http://vca.naxa.com.np/media/' + p.marker_image } 
          })  
         
          var layerIcon = L.icon({
            iconUrl: layerImage,
            iconSize: [24, 34] 
          }); 
          LayerOne = new L.geoJson.ajax(file, 
            {pointToLayer: function (feature, latlng) {
              return L.marker(latlng, { icon: layerIcon });
              // layer.setIcon(layerIcon);
          }
         } 
         
         
         )

        }
        

        

        this.setState(state => ({
          layerToPlot: {
            ...state.layerToPlot,
            [Ly]: LayerOne
          }
        }))

        LayerOne.addTo(window.mapRef.current.leafletElement)


      }
    })
   


  }
  removeLayers = (V) => {
  
 
  const removed =  this.state.layerToPlot[`${V}`]
  window.mapRef.current.leafletElement.removeLayer(removed)
    
    // this.state.layerToPlot[`${V}`] = null

  }

  addLegend = (name) => {


    this.state.layersLegend.onAdd = () => {
      
      var div = L.DomUtil.create('div', `layersLegendTop`)
      div.innerHTML = ''
      // var class1 = 'desccard';
      if(name.length>0){

        div.innerHTML += `<h6>Legend</h6>`
        let descCard = '' 
        const { vautik, prakop} = this.state.layerStyles;
  
       
        name.map((n) => {
//  console.log("n", n);
 
          // vautik.map((v) => {
          //   // console.log("vvv", v.title);
            
          //   if(v.title === n) {
          //     console.log("vimage", v.marker_image);
              
          //              } 
          //  })

     
  
      //  this.state.legendToShow&&Object.keys(this.state.legendToShow).map((n) => {
           descCard = `<div class="layersLegend"><ul id='mrk-lg'><li><img src =''><img/>${n}</li></ul> </div>`;
          div.innerHTML += descCard
        //  }) 
       
     
    
      })
      }
  
          return div;
     
      }
      
 this.state.layersLegend.addTo( window.mapRef.current.leafletElement)

   

  }
  

  render() {
  
    // console.log("ward", localStorage.getItem("ward"));
    // console.log("marker ", this.state.singleLayerMarker);
    // console.log("layers ", this.state.VCALayers);
    console.log("styles", this.state.layerStyles);
    // this.state.legendToShow&& console.log("all ", Object.keys(this.state.legendToShow));



    return (
      <div className=''>
        <div className='kvs-wrapper'>

          <div
            className='container-fluid main-wrapper p-0'
            style={{ position: 'fixed' }}
          >
            <Filter
              householdData={this.state.householdData && this.state.householdData}
              onApply={this.onApply}
              fetchedData={this.fetchDatafilter}
              markerref={this.markerref}
              dataReset={this.dataReset}
              onApplyMore={this.onApplyMore}
              addLayers={this.addLayers}
              removeLayers={this.removeLayers}
              fetchVCALayers={this.fetchVCALayers}
              dropArr = {this.state.dropArr && this.state.dropArr}
              dropArrHazard = {this.state.dropArrHazard && this.state.dropArrHazard }
              addLegend = {this.addLegend}
            />
            <Main
              householdData={this.state.householdData && this.state.householdData}
              searchTable={this.searchTable}
              markerref={this.markerref}
              display={this.state.display}
              clusterRef={this.clusterRef}
              geoSingle={this.state.geoSingle && this.state.geoSingle}
              VCALayers={this.state.VCALayers}
            />
          </div>
        </div>
      </div>
    );
  }
}



export default Parent;
