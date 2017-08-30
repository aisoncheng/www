(function(w){
	
	
	
	/**
	 *存储所有的数据信息 
	 *比如 user 比如 org  比如 许可证信息 
	 **/
	var store = {
			
	}
	
	store.prototype={
			
			
	}
	
	window.sotre = sotre;
})(window);

/***
 * 
 *export default {
  namespace: 'notice',
  state: {
    notice: [
      '1、以个人名义申请许可证的，请用个人账户登录；以法人名义申请许可证的，请用法人账户登录（分支机构以分支机构账户登录）。',
      '2、请确认您的拟办证地址在本局管辖范围内。',
      '3、请如实填报相关信息，若提供信息不完整、不准确或不真实，将影响正常办理；若提供虚假材料，您可能因此在1年内无法办理。',
      '4、请勿填写与本申请事项无关的信息。',
      '5、请勿传输不符合国家法律、法规的资料。',
      '6、为业务办理中的及时沟通，需验证联系人的手机号码。',
    ],
  },

  effects: {
  },
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(() => {
        console.log('i am the notice');
      });
    },
  },
  reducers: {
    applyWay(state, { payload }) {
      const { current, step } = payload;
      const xx = {
        ...state,
        current,
        step,
      };
      console.log(xx);
      return xx;
    },
  },
}; 
 *
 */