import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PageHeader from './components/PageHeader'; 
import PageLayout from './components/PageLayout'; 


class Root extends Component {
  render() {
    return(
      <div>
      <PageHeader headertitle="Арина" url="bublepinc"/>
      <PageLayout bodytitle="Арина" url="bublepinc" phone="+79333375491"/>
      </div>
    )
  }
}

export default Root;

ReactDOM.render(<Root />, document.getElementById('vk'));