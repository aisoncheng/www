import dva from 'dva';
import './assets/css/index.less';

// 1. Initialize
const app = dva({
  initialState: {
     products: [
       { name: 'dva', id: 1 },
       { name: 'antd', id: 2 },
     ],
  },
 });
// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example'));
//注册Model 后可以使用
app.model(require('./models/products'));
app.model(require("./models/person"));
app.model(require("./models/user"));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
