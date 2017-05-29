/* @flow */
import React, { Component } from 'react';
import {connect} from 'dva';
import  '../../assets/css/containerCss.less'

export default class Container extends Component {

  constructor(props){
     super(props)
  }

  render() {
    return (
       <div className='containerMy'>
           <div className='containerBody'>
                 <div className='containerTop'>
                     <img src={require('../../assets/img/icon_house.gif')}></img>
                     <div className='containerTopRight'>
                       <span >烟草专卖零售许可证(新办申请)</span>
                       <span >事项编码：01001900120024824212330000</span>
                     </div>
                 </div>
                 <div className='containerCenter'>
                   <div className='containerLeft'>
                       <span style={{fontSize:'20px',marginBottom:'10px'}}>操作流程</span>
                       <div>
                         <img src={require('../../assets/img/lc_icon_a1.gif')}></img>
                       </div>
                       <div className='erect'/>
                       <div>
                         <img src={require('../../assets/img/lc_icon_b2.gif')}></img>
                       </div>
                       <div className='erect'/>
                       <div>
                         <img src={require('../../assets/img/lc_icon_b3.gif')}></img>
                       </div>
                   </div>
                   <div className='containerRight'>
                        {this.props.children}
                   </div>
                 </div>
           </div>
       </div>
    );
  }
}
