import {
  Form,
  Input,
  Tooltip,
  Icon,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
  Radio,
  DatePicker,
  Upload,
  Modal
} from 'antd';
import {connect} from 'dva'
import {BaseInfo,Declaration} from '../../components'
import '../../assets/css/upload.less';

const FormItem = Form.Item;
const AutoCompleteOption = AutoComplete.Option;
const Option = Select.Option;
const RadioGroup = Radio.Group;
const RangePicker = DatePicker.RangePicker
const residences = [{
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake'
          }
        ]
      }
    ]
  }, {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men'
          }
        ]
      }
    ]
  }
];
const config = {
      rules: [{ type: 'object', required: true, message: 'Please select time!' }],
};
const formItemLayout = {
   labelCol:{
      span:'4'
    },
    wrapperCol:{
      span:'20'
    }
}
const plainOptions = [
  { label: '国有', value: '国有' },
  { label: '集体', value: '集体' },
  { label: '合伙', value: '合伙' },
  { label: '股份制(合作)', value: '股份制(合作)' },
  { label: '个人独资', value: '个人独资' },
  { label: '有限公司', value: '有限公司' },
  { label: '外商投资', value: '外商投资' },
  { label: '其他', value: '其他' }
];
const placeOwer = [
    { label: '自有', value: '自有' },
    { label: '租赁', value: '租赁' },
    { label: '无偿使用', value: '无偿使用' },
];

class NewForm extends React.Component {
  state = {
    confirmDirty: false,
    previewVisible: false,
    previewImage :'',
    fileList : []
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
    const {getFieldDecorator} = this.props.form;
    return (
      <div className='container'>
        <BaseInfo  uri={require('../../assets/img/basicInfo.png')}/>
        <Form onSubmit={this.handleSubmit} layout={'horizontal'}>
           <Row>
             <Col span={24} >
               <FormItem {...formItemLayout} label="企业（字号）名称" hasFeedback={true}>
                  {getFieldDecorator('email', {
                    rules: [
                     {
                        required: true,
                        message: '请输入企业名称!'
                      }
                    ]
                  })(<Input/>)}
                </FormItem>
             </Col>
           </Row>
           <Row>
             <Col span={12}>
               <FormItem labelCol={{span:8}} wrapperCol={{span:16}} label=" 经营地址" hasFeedback={true}>
                  {getFieldDecorator('address', {
                    rules: [
                      {
                        required: true,
                        message: '请输入详细经营地址!'
                      }
                    ]
                  })(<Input/>)}
                </FormItem>
             </Col>
             <Col span={12} >
               <FormItem labelCol={{span:8}} wrapperCol={{span:16}} label="详细地址" hasFeedback={true}>
                  {getFieldDecorator('addressDetail', {
                    rules: [
                      {
                        required: true,
                        message: '请选择地址!'
                      }
                    ]
                  })(<Cascader placeholder={'请选择地址'} options={residences}/>)}
                </FormItem>
             </Col>
           </Row>
           <FormItem {...formItemLayout} label="经营范围：" hasFeedback = {false}>
             {getFieldDecorator('jydz',{initialValue:'卷烟零售、雪茄烟零售'})(<Input  disabled={true} />)}
          </FormItem>
          <FormItem {...formItemLayout} label="经济类型：" hasFeedback>
            {
              getFieldDecorator('jjlx', {
              rules: [
                {
                  required: true,
                  message: '请选择经济类型!'
                }
              ]
             })(
               <RadioGroup  options={plainOptions}></RadioGroup>
             )
           }
          </FormItem>
          <Row>
            <Col span={12}>
              <FormItem labelCol={{span:8}} wrapperCol={{span:16}} label=" 工商营业执照编码" hasFeedback={true}>
                 {getFieldDecorator('yyzzbm', {
                   rules: [
                     {
                       required: true,
                       message: '请输入工商营业执照编码!'
                     }
                   ]
                 })(<Input/>)}
               </FormItem>
            </Col>
            <Col span={10} >
              <FormItem labelCol={{span:10}} wrapperCol={{span:14}} label="有效期至：" hasFeedback={true}>
                 {getFieldDecorator('endtime', {
                   rules: [
                     {
                       required: true,
                       message: '请选择时间'
                     }
                   ]
                 })(<DatePicker style={{width:'100%'}}/>)}
               </FormItem>
            </Col>
            <Col span={2} >
              <FormItem labelCol={{span:0}} wrapperCol={{span:24}} label="" hasFeedback={false}>
                 {getFieldDecorator('allways')(
                   <div style={{float:'right',marginRight:'10px'}}>
                     <span>&nbsp;&nbsp;长期&nbsp;&nbsp;</span>
                     <Checkbox></Checkbox>
                   </div>
                 )}
               </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <FormItem labelCol={{span:8}} wrapperCol={{span:16}}  label=" 场地归属" hasFeedback={true}>
                 {getFieldDecorator('placeOwer', {
                   rules: [
                     {
                       required: true,
                       message: '请选择场地归属'
                     }
                   ]
                 })(<RadioGroup  options={placeOwer}></RadioGroup>)}
               </FormItem>
            </Col>
            <Col span={10}>
              <FormItem labelCol={{span:10}} wrapperCol={{span:14}}  label="租赁/无偿使用期限" hasFeedback={true}>
                 {getFieldDecorator('zlqx', {
                   rules: [
                    {
                       required: true,
                       message: '请选择租赁/使用期限!'
                     }
                   ]
                 })(<RangePicker placeholder={'租赁（无偿使用）'} />)}
               </FormItem>
            </Col>
            <Col span={2} >
              <FormItem labelCol={{span:0}} wrapperCol={{span:24}} label="" hasFeedback={false}>
                 {getFieldDecorator('qlqxcj')(
                   <div style={{float:'right',marginRight:'10px'}}>
                     <span>&nbsp;&nbsp;长期&nbsp;&nbsp;</span>
                     <Checkbox></Checkbox>
                   </div>
                 )}
               </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span={12} >
              <FormItem labelCol={{span:8}} wrapperCol={{span:16}} label="负责人" hasFeedback={true}>
                 {getFieldDecorator('managerName', {
                   rules: [
                     {
                       required: true,
                       message: '请输入负责人(经营者)名称!'
                     }
                   ]
                 })(<Input placeholder={'负责人/经营者'}/>)}
               </FormItem>
            </Col>
            <Col span={12}>
              <FormItem labelCol={{span:8}} wrapperCol={{span:16}} label="证件类型：" hasFeedback={true}>
                 {getFieldDecorator('cardType', {
                   rules: [
                     {
                       required: true,
                       message: '请选择证件类型'
                     }
                   ]
                 })(
                   <Select>
                     <Option value={'身份证'}>身份证</Option>
                     <Option value={'护照'}>护照</Option>
                    <Option value={'军官证'}>军官证</Option>
                   </Select>
                 )}
               </FormItem>
            </Col>
          </Row>
          <FormItem  {...formItemLayout} label="证件号码" hasFeedback={true}>
             {getFieldDecorator('cardNo',{
               rules: [
                 {
                   required: true,
                   min:6,
                   message: '请输入证件号码!'
                 }
               ]
             })(
               <Input/>
             )}
           </FormItem>
          <Row>
            <Col span={12}>
              <FormItem labelCol={{span:8}} wrapperCol={{span:16}} label="  身份证住址" hasFeedback={true}>
                 {getFieldDecorator('cardAddress', {
                   rules: [
                     {
                       required: true,
                       message: '请输入身份证住址!'
                     }
                   ]
                 })(<Input/>)}
               </FormItem>
            </Col>
            <Col span={12} >
              <FormItem labelCol={{span:8}} wrapperCol={{span:16}} label="现住址" hasFeedback={true}>
                 {getFieldDecorator('nowAddress', {
                   rules: [
                     {
                       required: true,
                       message: '请输入现住址!'
                     }
                   ]
                 })(<Input placeholder={'现住址'} />)}
               </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <FormItem labelCol={{span:8}} wrapperCol={{span:16}} label=" 联系人" hasFeedback={true}>
                 {getFieldDecorator('touchMan', {
                   rules: [
                      {
                       required: true,
                       message: '请输入联系人!'
                     }
                   ]
                 })(<Input/>)}
               </FormItem>
            </Col>
            <Col span={12} >
              <FormItem labelCol={{span:8}} wrapperCol={{span:16}} label="联系电话" hasFeedback={true}>
                 {getFieldDecorator('phone', {
                   rules: [
                     {
                       required: true,
                       message: '请输入联系电话!'
                     }
                   ]
                 })(<Input placeholder={'请输入联系电话'} />)}
               </FormItem>
            </Col>
          </Row>
          <BaseInfo  uri={require('../../assets/img/materials.png')}/>


          <Row>
            <Col>
              <FormItem  labelCol={{span:4}}  wrapperCol={{span:16}} label="申请表" hasFeedback={true}>
                 {getFieldDecorator('applayTable', {
                   rules: [
                     {
                       required: true,
                       message: '请上传申请表!'
                     }
                   ]
                 })(
                   <Upload
                       action = {'//jsonplaceholder.typicode.com/posts/'}
                       className = 'uploadInRow'
                     >
                     <Button>
                       <Icon type="upload" /> Upload
                     </Button>
                   </Upload>
                )}
               </FormItem>
            </Col>
          </Row>

          <FormItem  labelCol={{span:4}}  wrapperCol={{span:16}} label="身份证正面" hasFeedback={true}>
             {getFieldDecorator('cardImgZm', {
               rules: [
                 {
                   required: true,
                   message: '请上传正面图片!'
                 }
               ]
             })(
               <Upload
                   action = {'//jsonplaceholder.typicode.com/posts/'}
                   listType ={'picture'}
                    className = 'uploadInRow'
                 >
                 <Button>
                   <Icon type="upload" /> Upload
                 </Button>
               </Upload>
            )}
           </FormItem>

           <FormItem   labelCol={{span:4}}  wrapperCol={{span:16}} label="身份证反面" hasFeedback={true}>
              {getFieldDecorator('cardImgFm', {
                rules: [
                  {
                    required: true,
                    message: '请上传身份证反面!'
                  }
                ]
              })(
                <Upload
                    action = {'//jsonplaceholder.typicode.com/posts/'}
                    listType ={'picture'}
                  >
                  <Button>
                    <Icon type="upload" /> Upload
                  </Button>
                </Upload>
             )}
            </FormItem>
            <FormItem   labelCol={{span:4}}  wrapperCol={{span:16}} label="固定场所照片" hasFeedback={true}>
               {getFieldDecorator('placeImg', {
                 rules: [
                   {
                     required: true,
                     message: '请上传固定场所照片!'
                   }
                 ]
               })(
                 <Upload
                     action = {'//jsonplaceholder.typicode.com/posts/'}
                     listType ={'picture'}
                   >
                   <Button>
                     <Icon type="upload" /> Upload
                   </Button>
                 </Upload>
              )}
             </FormItem>
             <FormItem   labelCol={{span:4}}  wrapperCol={{span:16}} label="工商营业执照" hasFeedback={true}>
                {getFieldDecorator('yyzzzm', {
                  rules: [
                    {
                      required: true,
                      message: '请上传工商营业执照!'
                    }
                  ]
                })(
                  <Upload
                      action = {'//jsonplaceholder.typicode.com/posts/'}
                      listType ={'picture'}
                      defaultFileList = {this.state.fileList}
                      onChange = {this.onUpload}
                    >
                    <Button>
                      <Icon type="upload" /> Upload
                    </Button>
                  </Upload>
               )}
              </FormItem>
            <BaseInfo uri={require('../../assets/img/declaration.png')}/>
            <Row>
              <Col span={22} offset={1}>
                以上信息经本人核对，确认无误。本申请人所提交的文件、证件以及有关材料全部真实、
                有效，上传附件与原件一致。如果申请过程中存在虚假、欺骗等不法行为，本申请人愿承担由此引起的一切法律责任。
              </Col>
            </Row>
          <Row>
            <Col span={12}>
              <FormItem wrapperCol={{offset:20}}>
                <Button type="primary" htmlType="submit" size="large">保存草稿</Button>
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem wrapperCol={{offset:2}}>
                <Button type="primary" htmlType="submit" size="large">提交申请</Button>
              </FormItem>
            </Col>
          </Row>
        </Form>


        <Modal visible={this.state.previewVisible} footer={null} onCancel={this.handleCancel}>
          <img alt="example" style={{ width: '100%' }} src={this.state.previewImage} />
        </Modal>

      </div>


    );
  }
  handleCancel = () => this.setState({ previewVisible: false })
  onUpload = (file,fileList,event)=>{
       console.log(fileList,file,event);
       return  fileList.length>0 ? false :true;
  }
}

const uploadButton = (
     <div >
       <Icon type="plus" />
       <div className="ant-upload-text">Upload</div>
     </div>
);

const WrappedRegistrationForm = Form.create()(NewForm);

function mapStateToProps({state}) {
  return {state};
}
export default connect(mapStateToProps)(WrappedRegistrationForm);
