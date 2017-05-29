/* @flow */
import React, { Component } from 'react';
import '../../assets/css/noticeCss.less'
import { Checkbox,Button,Tooltip,Alert} from 'antd';
import {Link} from 'dva/router';
import {connect} from 'dva';
import { routerRedux } from 'dva/router'
import {TitleSpilt} from  '../../components'

const CheckboxGroup = Checkbox.Group;
const plainOptions = [
  '（一）有与经营烟草制品零售业务相适应的资金；',
  '（二）有与住所相独立的固定经营场所；',
  '（三）符合当地烟草制品零售点合理布局的要求；',
  '（四）国家烟草专卖局规定的其他条件。',
  '（五）无法律、法规、规章规定的不予发放烟草专卖零售许可证的情形。'
];

class NewCondition extends Component {
  constructor(props){
    super(props);
    this.state={
      disabled:true,
      indeterminate: false,
      checkAll: false,
      checkedList:[]
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
  onChangeGroup = (checkedList) => {
   const checkAll = checkedList.length === plainOptions.length;
   this.setState({
     checkedList,
     indeterminate: !!checkedList.length && (checkedList.length < plainOptions.length),
     checkAll: checkAll,
     disabled:!checkAll
   });
 }
 onCheckAllChange = (e) => {
   const all = e.target.checked;
   this.setState({
     checkedList: all ? plainOptions : [],
     indeterminate: false,
     checkAll: all,
     disabled : !all
   });
 }

render() {
    return (
       <div className='container'>
           <TitleSpilt
              title = {'审批条件'}
              detail = {'办理该项业务，需满足以下申请条件才能进行业务的办理，请自检是否满足，符合请打勾。'}
           />
           <div className='checkGroup'>
               <Checkbox
                 indeterminate={this.state.indeterminate}
                 onChange={this.onCheckAllChange}
                 checked={this.state.checkAll}
               > 全选</Checkbox>
             <CheckboxGroup options={plainOptions} value={this.state.checkedList}  onChange={this.onChangeGroup} />
           </div>
           <div className='datumLable'>
              <span className='datumLableTitle'>收取材料</span>
           </div>
           <span className='noticeSpan'>1.个体工商户经营者、法定代表人或企业负责人的身份证明</span>
           <span className='noticeSpan'>2.固定经营场所证明</span>
           <span className='noticeSpan'>3.工商营业执照</span>
           <Alert message="注：本人对办理该事项所提交的申报材料实质内容的真实性负责。" type="error"  style={{marginTop:'30px',fontSize:'14px',color:'red'}}/>

            <div className='nextButtonDiv'>
               <Tooltip  placement="top" title={this.state.disabled?this.props.disabledTitle:''}>
                  <Button  type="primary" size='large' disabled={this.state.disabled}  onClick={this.nextButton}>下一步</Button>
               </Tooltip>
            </div>
       </div>
    );
  }
}
function mapStateToProps({state}) {
    return {state};
}
export default connect(mapStateToProps)(NewCondition);
