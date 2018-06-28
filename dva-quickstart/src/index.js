import dva from 'dva';
import './index.css';

// 1. Initialize
const app = dva({
  initialState: {
    products: [
      { name: 'dva', id: 1 },
      { name: 'antd', id: 3 },
    ]
  }
})

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);
 app.model(require('./models/products').default);
//import export / require exports https://www.zhihu.com/question/56820346

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
