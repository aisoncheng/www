(function(w){
	
	var cfg = {};
	
	
	// cfg.basePath = "http://10.44.21.96:9090/REGIEAPP_LIC_WEB";
	cfg.basePath = "http://218.75.75.132:9070/TEST_LIC_WEB";
	
	cfg.applyWays = {
			  'new': {
			    apply: 1001,
			    name: '新办申请',
			    code: '许可-00977-001'
			  },
			  extend: {
			    apply: 1003,
			    name: '延续申请',
			    code: '许可-00977-002'
			  },
			  change: {
			    apply: 1002,
			    name: '变更申请',
			    code: '许可-00977-003'
			  },
			  renew: {
			    apply: 1006,
			    name: '补办申请',
			    code: '许可-00977-004'
			  },
			  close: {
			    apply: 1004,
			    name: '停业申请',
			    code: '许可-00977-005'
			  },
			  resume: {
			    apply: 1005,
			    name: '恢复营业申请',
			    code: '许可-00977-007'
			  },
			  stop: {
			    apply: 1007,
			    name: '歇业申请',
			    code: '许可-00977-006'
			  },
			  retract: {
			    apply: 1008,
			    name: '',
			    code: ''
			  }
			};
	
	
	cfg.files = {
		change: [
               {
                 auto: true,
                 materialName: '申请表',
                 applyMaterialAttArray: {},
                 count: 1,
                 allowFix: 'jpg,jpeg,gif,png',
               },
               {
                 materialNameTitle: 'identificationCard1',
                 fileSeqNo: 0,
                 isFileCatalog: 1,
                 pageNum: 1,
                 count: 1,
                 allowFix: 'jpg,jpeg,gif,png',
                 applyMaterialAttArray: {},
                 materialName: '身份证-正面'
               },
               {
                 materialNameTitle: 'identificationCard2',
                 fileSeqNo: 1,
                 isFileCatalog: 1,
                 pageNum: 1,
                 count: 1,
                 allowFix: 'jpg,jpeg,gif,png',
                 applyMaterialAttArray: {},
                 materialName: '身份证-反面'
               }
          ],
        stop: [
               {
                 auto: true,
                 materialName: '申请表',
                 applyMaterialAttArray: {},
                 count: 1,
                 allowFix: 'jpg,jpeg,gif,png',
               },
               {
                 materialNameTitle: 'identificationCard1',
                 fileSeqNo: 0,
                 isFileCatalog: 1,
                 pageNum: 1,
                 count: 1,
                 allowFix: 'jpg,jpeg,gif,png',
                 applyMaterialAttArray: {},
                 materialName: '身份证-正面'
               },
               {
                 materialNameTitle: 'identificationCard2',
                 fileSeqNo: 1,
                 isFileCatalog: 1,
                 pageNum: 1,
                 count: 1,
                 allowFix: 'jpg,jpeg,gif,png',
                 applyMaterialAttArray: {},
                 materialName: '身份证-反面'
               }
          ],
       close: [
         {
           auto: true,
           materialName: '申请表',
           applyMaterialAttArray: {},
           count: 1,
           allowFix: 'jpg,jpeg,gif,png',
         },
         {
           materialNameTitle: 'identificationCard1',
           fileSeqNo: 0,
           isFileCatalog: 1,
           pageNum: 1,
           count: 1,
           allowFix: 'jpg,jpeg,gif,png',
           applyMaterialAttArray: {},
           materialName: '身份证-正面'
         },
         {
           materialNameTitle: 'identificationCard2',
           fileSeqNo: 1,
           isFileCatalog: 1,
           pageNum: 1,
           count: 1,
           allowFix: 'jpg,jpeg,gif,png',
           applyMaterialAttArray: {},
           materialName: '身份证-反面'
         }
     ],
     resume: [
         {
           auto: true,
           materialName: '申请表',
           applyMaterialAttArray: {},
           count: 1,
           allowFix: 'jpg,jpeg,gif,png',
         },
         {
           materialNameTitle: 'identificationCard1',
           fileSeqNo: 0,
           isFileCatalog: 1,
           pageNum: 1,
           count: 1,
           allowFix: 'jpg,jpeg,gif,png',
           applyMaterialAttArray: {},
           materialName: '身份证-正面'
         },
         {
           materialNameTitle: 'identificationCard2',
           fileSeqNo: 1,
           isFileCatalog: 1,
           pageNum: 1,
           count: 1,
           allowFix: 'jpg,jpeg,gif,png',
           applyMaterialAttArray: {},
           materialName: '身份证-反面'
         }
     ],
     newBus:[
             {
                 auto: true,
                 materialName: '申请表',
                 applyMaterialAttArray: {},
                 count: 1,
                 allowFix: 'jpg,jpeg,gif,png',
               },
               {
                 materialNameTitle: 'identificationCard1',
                 fileSeqNo: 0,
                 isFileCatalog: 1,
                 pageNum: 1,
                 count: 1,
                 allowFix: 'jpg,jpeg,gif,png',
                 applyMaterialAttArray: {},
                 materialName: '身份证-正面'
               },
               {
                 materialNameTitle: 'identificationCard2',
                 fileSeqNo: 1,
                 isFileCatalog: 1,
                 pageNum: 1,
                 count: 1,
                 allowFix: 'jpg,jpeg,gif,png',
                 applyMaterialAttArray: {},
                 materialName: '身份证-反面'
               },
               {
                 materialNameTitle: 'businessLicense',
                 fileSeqNo: 2,
                 isFileCatalog: 1,
                 allowFix: 'jpg,jpeg,gif,png',
                 pageNum: 1,
                 count: 1000,
                 applyMaterialAttArray:{},
                 materialName: '工商营业执照'
               },
             ]
 }
	
	
	w.cfg = cfg;
	
})(window);