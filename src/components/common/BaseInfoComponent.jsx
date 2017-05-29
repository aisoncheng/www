/* @flow */

import React, { Component } from 'react';


export default class BaseInfoComponent extends Component {
  constructor(props){
    super(props);
  }
  render() {
     return (
       <div style={{marginBottom:'20px'}}>
         <img src={this.props.uri} />
       </div>
     );
  }
}
