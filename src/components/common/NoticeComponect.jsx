/* @flow */
import React, { Component } from 'react';
import  '../../assets/css/noticeCss.less'
import { Checkbox,Button,Tooltip } from 'antd';
import {Link} from 'dva/router';
import {connect} from 'dva';
import { routerRedux } from 'dva/router'
import {TitleSpilt} from '../../components'
class NoticeComponect extends Component {
  constructor(props){
    super(props);
    this.state={
      disabled:true
    }
  }
  onChange =(e)=>{
    if(e.target.checked){
      this.setState({disabled:false});
    }else{
      this.setState({disabled:true});
    }
  }
  nextButton = (e)=>{
      this.props.dispatch(routerRedux.push(this.props.nextStep));
  }
  render() {

    return (
       <div className='container'>
           <TitleSpilt
             title = {'网上申请须知'}
           />
           <span className='noticeSpan'>为方便您申请烟草专卖零售许可证,现开通网上申请功能,请您在申请前仔细阅读本须知。</span>
           <span className='noticeSpan'>1、请填报本人/单位真实信息；</span>
           <span className='noticeSpan'>2、请勿填写与烟草专卖零售许可证申办无关的信息；</span>
           <span className='noticeSpan'>3、请勿传输不符合国家法律、法规的资料；</span>
           <span className='noticeSpan'>4、如您是为法人分支机构提出申请，请以相应分支机构认证登录后提出申请，并提供相应分支机构的材料；</span>
           <span className='noticeSpan'>5、请认真填写申请信息，以便核对，填表信息如不完整或不真实,您将无法成功办理，并可能因提供虚假材料而1年内无法提出申请。</span>
           <Checkbox
             onChange={this.onChange}
             indeterminate ={false}
             className='thisChekBox'
             ><span>我已阅读并同意</span>
           </Checkbox>
           <div className='nextButton'>
             <div style={{width:'80px',margin:'0 auto',display:'block'}}>
               <Tooltip  placement="top" title={this.state.disabled?'请勾选已阅读并同意':''}>
                  <Button  type="primary" size='large' disabled={this.state.disabled}  onClick={this.nextButton}>下一步</Button>
               </Tooltip>
             </div>
           </div>
       </div>
    );
  }
}

function mapStateToProps({state}) {
    return {state};
}
export default connect(mapStateToProps)(NoticeComponect);
