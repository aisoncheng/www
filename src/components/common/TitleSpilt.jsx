/* @flow */
import React, { Component } from 'react';
import  '../../assets/css/noticeCss.less'

export default class TitleSpilt extends Component {
  render() {
    return (
      <div className='datumLable'>
         <span className='datumLableTitle'>{this.props.title}</span>
         <span className='datumLableComment'>&nbsp;&nbsp;&nbsp;{this.props.detail||''}</span>
      </div>
    );
  }
}
