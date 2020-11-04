import React from 'react';

function Summary(props) {
  return (
    <section className='summary pdt-80 pdb-110' ref={props.introRef}>
      <div className='container'>
        <div className='text-wrap'>
          <span className='section-heading'>Data summary</span>
          <h3 className='heading3'>
            Our <span>highlights </span>of data.
          </h3>
        </div>
        <div className='flex-series-boxes'>
          <div className='flex-sm-boxes'>
            <a>
              <span className='heading1'>{props.districts}</span>
              <span className='body1'>Districts</span>
            </a>
          </div>

          <div className='flex-sm-boxes'>
            <a>
              <span className='heading1'>{props.household}</span>
              <span className='body1'>Households</span>
            </a>
          </div>

          <div className='flex-sm-boxes'>
            <a>
              <span className='heading1'>{props.people}</span>
              <span className='body1'>People</span>
            </a>
          </div>

          <div className='flex-sm-boxes'>
            <a>
              <span className='heading1'>{props.seniorCitizen}</span>
              <span className='body1'>Senior citizens</span>
            </a>
          </div>

          <div className='flex-sm-boxes'>
            <a>
              <span className='heading1'>{props.children}</span>
              <span className='body1'>Children</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Summary;
