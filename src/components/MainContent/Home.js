import React, { Component } from 'react';
import Introduction from './InsideMain/Introduction';
import SystemFeatures from './InsideMain/SystemFeatures';
import Summary from './InsideMain/Summary';
import Footer from './InsideMain/Footer';
import FirstSection from './InsideMain/FirstSection';
import NavBarHome from './InsideMain/NavBarHome';
import Axios from 'axios';

class Home extends Component {
  constructor(props) {
    super(props);
    this.introductionRef = React.createRef();
    this.summaryRef = React.createRef();
    this.featureRef = React.createRef();

    this.state = {
      districts: [],
      household: [],
      people: [],
      seniorCitizen: [],
      children: []
    };
  }

  summaryData = () => {
    Axios.get('http://139.59.67.104:8019/api/v1/highlight').then(res => {
      const districts = res.data.data[0].district;
      const household = res.data.data[0].house_hold_count;
      const people = res.data.data[0].num_of_people;
      const seniorCitizen = res.data.data[0].senior_citizen;
      const children = res.data.data[0].num_of_children;
      this.setState({
        districts,
        household,
        people,
        seniorCitizen,
        children
      });
    });
  };

  componentDidMount() {
    this.summaryData();
  }

  scrollToIntroduction = () => {
    if (this.introductionRef.current) {
      this.introductionRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest'
      });
    }
  };
  scrollToSummary = () => {
    if (this.summaryRef.current) {
      this.summaryRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }
  };
  scrollToFeature = () => {
    if (this.featureRef.current) {
      this.featureRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  render() {
    return (
      <body className=''>
        <div className='kvs-wrapper'>
          <NavBarHome
            intro={this.scrollToIntroduction}
            summary={this.scrollToSummary}
            feature={this.scrollToFeature}
          />
          <FirstSection />
          <div ref={this.introductionRef}>
            <Introduction />
          </div>
          <div ref={this.summaryRef}>
            <Summary
              districts={this.state.districts}
              household={this.state.household}
              people={this.state.people}
              seniorCitizen={this.state.seniorCitizen}
              children={this.state.children}
            />
          </div>
          <div ref={this.featureRef}>
            <SystemFeatures />
          </div>
          <Footer />
        </div>
      </body>
    );
  }
}

export default Home;
