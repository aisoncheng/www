/* @flow */

import React, { Component } from 'react';
import {Row,Col} from 'antd'

export default class DeclarationComponent extends Component {
  render() {
    return (
      <Row>
        <Col span={23} offset={1}>
          <div style={{border:'1px solid red'}}>
            <p style={{padding:'5px'}}>申请人承诺：</p>
            <p style={{padding:'5px'}}>以上信息经本人核对，确认无误。本申请人所提交的文件、证件以及有关材料全部真实、</p>
            <p style={{padding:'5px'}}>有效，上传附件与原件一致。如果申请过程中存在虚假、欺骗等不法行为，本申请人愿承担由此引起的一切法律责任。</p>
          </div>
        </Col>
      </Row>
    );
  }
}
