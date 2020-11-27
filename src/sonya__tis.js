import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PageHeader from './components/PageHeader'; 
import PageLayout from './components/PageLayout'; 


class Root extends Component {
  render() {
    return(
      <div>
      <PageHeader headertitle="Sonya" url="sonya__tis"/>
      <PageLayout bodytitle="Sonya" url="sonya__tis" phone="+79041108396"/>
      </div>
    )
  }
}

export default Root;

ReactDOM.render(<Root />, document.getElementById('vk'));