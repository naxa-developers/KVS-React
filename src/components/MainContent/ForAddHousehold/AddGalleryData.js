import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import '../ForUserNav/drop.css';
import Household1 from '../../../img/household1.png';
import Household2 from '../../../img/household2.png';
import Household3 from '../../../img/household3.png';

export default class AddGalleryData extends Component {
  render() {
    return (
      <div class='user-info-body household-wrap user-info-bg'>
        {/* <div class='data-center'>
          <span class='icon-content'></span>
          <h3 class='heading3'>Upload an image</h3>
          <span class='info-para'>Drag and drop your files here</span>
        </div>

        <div class='data-center-bg bg-gray'>
          <span class='icon-content'></span>
          <span class='para'>You can also upload images by</span>
          <a class='click' href=''>
            clicking here
          </a>
        </div> */}
        <div className='dropzone' id='dropzone_id'>
          <Dropzone multiple={false}>
            <div class='data-center'>
              <span class='icon-content'></span>
              <h3 class='heading3'>Upload an image</h3>
              <span class='info-para'>
                Drag and drop your files here or click anywhere on the area
              </span>
            </div>
          </Dropzone>
        </div>

        <div class='img-section'>
          <div class='image-grp-wrap'>
            <span class='img-grp-date'>Sun, Dec 29, 2019</span>
            <div class='image-grp'>
              <div class='row no-gutters'>
                <div class='col-md-4'>
                  <div class='image-content'>
                    <img src={Household1} alt='' />
                  </div>
                </div>
                <div class='col-md-4'>
                  <div class='image-content'>
                    <img src={Household2} alt='' />
                  </div>
                </div>
                <div class='col-md-4'>
                  <div class='image-content'>
                    <img src={Household3} alt='' />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class='image-grp-wrap'>
            <span class='img-grp-date'>Sun, Dec 29, 2019</span>
            <div class='image-grp'>
              <div class='row no-gutters'>
                <div class='col-md-4'>
                  <div class='image-content'>
                    <img src={Household1} alt='' />
                  </div>
                </div>
                <div class='col-md-4'>
                  <div class='image-content'>
                    <img src={Household2} alt='' />
                  </div>
                </div>
                <div class='col-md-4'>
                  <div class='image-content'>
                    <img src={Household3} alt='' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
