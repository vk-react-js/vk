import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PageHeader from './components/PageHeader'; 
import PageLayout from './components/PageLayout'; 


class Root extends Component {
  render() {
    return(
      <div>
      <PageHeader headertitle="Алина" url="alik.egorova"/>
      <PageLayout bodytitle="Алина" url="alik.egorova" phone="+79131727607"/>
      </div>
    )
  }
}

export default Root;

ReactDOM.render(<Root />, document.getElementById('vk'));