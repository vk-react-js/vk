import React, { Component } from 'react';


class PageHeader extends Component {

    constructor()
    {
      super()
      this.state={
        show: '',
        active: 'top_nav_link top_profile_link',
        isClicked: false
      }
    }
    openNavMenu()
    {
      if (this.state.isClicked === false) {
      this.setState({show:'shown'});
      this.setState({active:'top_nav_link top_profile_link active'});
      this.setState({isClicked:!this.state.isClicked});
        } 
    else
    {
      this.setState({show:''});
      this.setState({active:'top_nav_link top_profile_link'});
      this.setState({isClicked:!this.state.isClicked});
    } 
    }

    render() {

        return (
            <div id="page_header_cont" className="page_header_cont">
                <div id="page_header_wrap" className="page_header_wrap">
                    <header id="page_layout">
                        <ul id="top_nav" className="HeaderNav">
                            <li className="HeaderNav__item">
                                <a className="top_home_link" href="#" aria-label="Home" accessKey="1">
                                    <div className="top_home_logo"></div>
                                </a>
                            </li>
                            <li className="HeaderNav__item HeaderNav__item--gap"></li>
                            <li className="HeaderNav__item HeaderNav__item--player"></li>
                            <li className="HeaderNav__item HeaderNav__item--profile">                       
                            </li>
                        </ul>
                    </header>                
                </div>
            </div>          
            

        )
    }

}

export default PageHeader