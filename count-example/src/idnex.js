import React from 'react';
import dva, { connect } from 'dva';
import './style.css'

// 1 initialize store reducres initialize 
const app = dva()

// 2  app.use() 中间件使用

// 3 modol 


app.model({
  namespace: 'count',
  state: 0,
  reducers: {
    add(count) { return count + 1 },
    minus(count) { return count-1},
  },
})

// 4 component  
class TestError extends React.Component { 
  componentDidCatch(e) { 
    alert(e.message)
  }
  componentDidMount() { 

  }
  render() { 
    return <div> TestError </div>
  }
}
const App = connect(({ count }) => ({
  count
}))(function (props) { 
  return (
    <div>
      <TestError />
      <h2>{props.count}</h2>
      <button key="add" onClick={() => { props.dispatch({type: 'count/add'})}}>+</button>
      <button key="minus" onClick={() => { props.dispatch({type: 'count/minus'})}}>-</button>
    </div>
  )
  });

  //5 router
app.router(() => <App />)

// 6  start
app.start('#root')
