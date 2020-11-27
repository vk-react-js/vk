import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PageHeader from './components/PageHeader'; 
import PageLayout from './components/PageLayout'; 


class Root extends Component {
  render() {
    return(
      <div>
      <PageHeader headertitle="Мария" url="id52266709"/>
      <PageLayout bodytitle="Мария" url="id52266709" phone="+79149378810"/>
      </div>
    )
  }
}

export default Root;

ReactDOM.render(<Root />, document.getElementById('vk'));