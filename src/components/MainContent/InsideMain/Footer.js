import React from 'react';
// import KVS from '../../../img/KVS.png';
// import AWO from '../../../img/AWO.png';
import DCA from '../../../img/dca.svg';

function Footer() {
  return (
    <footer>
      <div className="row no-gutters">
        <div className="col-md-7">
          <div className='footer-left pdt-50 pdb-50'>
            <div className='footer-left-wrap'>
              <span className='section-heading'>Our mission</span>
              <p className='span'>
                This system is primarily designed to visualize the household status
                of families living in various districts of nepal. The primary
                objective is to study the risk associated with each family with
                reference to various disasters like flood, earthquake etc and seek
                for possible measures of assistance before occurrence. The system
                also focuses on visualization of various map layers extracted from
                VCA tool.
              </p>
              <div className='logo-wrap'>
                <span className='span'>Supported by</span>
                <div className='logo-img'>
                  {/* <figure>
                    <img src={KVS} alt='kvs' />
                  </figure> */}

                  <figure>
                    <img src={DCA} alt='dca' />
                  </figure>

                  {/* <figure>
                    <img src={AWO} alt='awo' />
                  </figure> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-5">
          <div className='footer-right pdt-50 pdb-50'>
            <div className='footer-right-wrap'>
            <span className='section-heading'>Contact</span>
            <ul className='contact-addr'>
              <li className='body1'>
                <span>
                  <i className="humanitarian-icon-Location"></i>
                </span>
                <span>Rajbiraj-4, Saptari, Nepal</span>
              </li>

              <li className='body1'>
                <span>
                  <i class="icon-phone"></i>
                </span>
                <span>+977 01-439 325 23, 405 456 09</span>
              </li>

              <li className='body1'>
                <span>
                  <i class="humanitarian-icon-E-mail"></i>
                </span>
                <span>mail@kvs.com.np</span>
              </li>
            </ul>
            <div className='copy-right'>
              <span className='sm-span'>
                © <span className='bold-span'>KVS</span> All rights reserved.
                Designed by <span className='bold-span'>NAXA</span>.
              </span>
            </div>
          </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
