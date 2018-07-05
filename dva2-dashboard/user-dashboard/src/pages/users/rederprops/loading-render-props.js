import React, { Fragment } from 'react';

class LoadingPropsArt extends React.Component { 
  constructor(props) { 
    super(props)
    this.state = {
      loading:true,
    }
  }
  componentDidMount() { 
    const _this=this
    setTimeout(() => {
      _this.setState({
        loading: false
      })
    }, _this.props.timeout||3000);
  }
  render() { 
    return(<Fragment>{this.state.loading ? 'loading....' : this.props.component(this.state.loading )}</Fragment>)
  }
}
export default LoadingPropsArt