import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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

        let HeaderTitle = this.props.headertitle;
        let ProfileImageURL = '../images/people/' + this.props.url + '/profileimage.jpg';
        return (
            <div id="page_header_cont" className="page_header_cont">
                <div id="page_header_wrap" className="page_header_wrap">
                    <header id="page_layout">
                        <ul id="top_nav" className="HeaderNav">
                            <li className="HeaderNav__item">
                                <a className="top_home_link" aria-label="Home" accessKey="1">
                                    <div className="top_home_logo"></div>
                                </a>
                            </li>
                            <li className="HeaderNav__item HeaderNav__item--gap"></li>
                            <li className="HeaderNav__item HeaderNav__item--player"></li>
                            <li className="HeaderNav__item HeaderNav__item--profile">
                                <a id="top_profile_link" className={this.state.active} onClick={()=>{this.openNavMenu()}}>
                                    <div className="top_profile_name">{ HeaderTitle }</div>
                                    <img className="top_profile_img" src={ProfileImageURL}/>
                                    <div className="top_profile_arrow"></div>
                                </a>
                                <div id="top_profile_menu" className={this.state.show}>
                                    <a className="top_profile_mrow" id="top_support_link">Помощь</a>
                                    <a className="top_profile_mrow" id="top_logout_link">Выйти</a>                                
                                </div>
                            </li>
                        </ul>
                    </header>                
                </div>
            </div>          
            

        )
    }

}

export default PageHeader