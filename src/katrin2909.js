import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PageHeader from './components/PageHeader'; 
import PageLayout from './components/PageLayout'; 


class Root extends Component {
  render() {
    return(
      <div>
      <PageHeader headertitle="Екатерина" url="katrin2909"/>
      <PageLayout bodytitle="Екатерина" url="katrin2909" phone="+79996841564"/>
      </div>
    )
  }
}

export default Root;

ReactDOM.render(<Root />, document.getElementById('vk'));