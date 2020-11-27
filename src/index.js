import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import tanyatanyapliss from './tanyatanyapliss';
import alena_night from './alena_night';
import alik_egorova from './alik.egorova';
import bublpinc from './bublepinc';
import markovana from './markovana';
import nemnogomasha1 from './nemnogomasha1';
import sonya_tis from './sonya__tis'
import bubblgm from './bubblgm';
import personality_19 from './personality_19';
import daytodie from './daytodie';
import frontpage from './frontpage';
import id174466061 from './id174466061';
import katrin2909 from './katrin2909';
import anna_gofman from './anna.gofman';
import dskavronskiy from './dskavronskiy';
import id52266709 from './id52266709';
import { BrowserRouter as Router, HashRouter, Route, Switch } from "react-router-dom";


class Root extends Component {
  
  render() {
    return(
      <Router>
                <HashRouter>
                <div>
                <Switch basename="/">                    
                    <Route exact path="/" component={frontpage} />
                    <Route path="/tanyatanyapliss" component={tanyatanyapliss} />
                    <Route path="/alena_night" component={alena_night} />
                    <Route path="/alik.egorova" component={alik_egorova} />
                    <Route path="/bublepinc" component={bublpinc} />
                    <Route path="/markovana" component={markovana} />
                    <Route path="/nemnogomasha1" component={nemnogomasha1} />
                    <Route path="/sonya__tis" component={sonya_tis} />
                    <Route path="/bubblgm" component={bubblgm} />
                    <Route path="/personality_19" component={personality_19} />
                    <Route path="/daytodie" component={daytodie} />
                    <Route path="/id174466061" component={id174466061} />
                    <Route path="/katrin2909" component={katrin2909} />
                    <Route path="/anna.gofman" component={anna_gofman} />
                    <Route path="/dskvarosnkiy" component={dskavronskiy} />
					<Route path="/id52266709" component={id52266709} />
                </Switch>
                </div>
                </HashRouter>
      </Router>
    )
  }
}

export default Root;

ReactDOM.render(<Root />, document.getElementById('vk'));