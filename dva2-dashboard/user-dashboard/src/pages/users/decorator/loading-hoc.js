import React,{ Fragment } from "react";

export default (WrappedComponent,timeout) => {
  return class extends React.Component { 
    constructor(props) {
      super(props)
      this.state = {
        loading:true
      }
    } 
    componentDidMount() { 
      const that = this;
     
      setTimeout(() => {
        that.setState({
          loading:false
        })
      }, timeout);
    
    }
    render() {
      return (<Fragment>{this.state.loading ? 'loading......' : <WrappedComponent {...this.state}{...this.props}/>}</Fragment>)
    }
  }
};
