import React from 'react';
import  '../../assets/css/head.less'
import { connect } from 'dva';

const HeadComponent = ({user})=> {

  return (
    <div className='headContainer'>
        <div className='leftHead'>
          <img src={require('../../assets/img/logo.gif')}></img>
          <span>【在线办理】</span>
        </div>
        <div className='rightHead'>
            <div className='wellcome'>
              <div >欢迎您：{user.userName}</div>
              <div >
                <img src={(require('../../assets/img/zjzwfw_mhwz.gif'))}/>
                <a href="http://www.zj.gov.cn"  target="_blank">浙江省政府门户网站</a>
              </div>
            </div>
            <div>
              <img src={(require('../../assets/img/sy_fuwusm.gif'))} />
            </div>
        </div>
    </div>
  );
}

export default  connect(({user})=>({user}))(HeadComponent); ;
