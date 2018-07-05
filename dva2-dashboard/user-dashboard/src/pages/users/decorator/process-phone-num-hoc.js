import React from 'react';
function ProcessPhoneNumHoc(WrappedComponent, phoneNum) {
  const phoneNunmReg = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;
  function processPhoneNumFn(params) {
    if (phoneNunmReg.test(phoneNum)) {
      return phoneNum.replace(/(\d{3})(\d{4})(\d{4})/,"$1-$2-$3")
    } 
    return '不合法的手机号码！！！！'
  }
  return class extends React.Component{
    constructor(props) { 
      super(props);
      this.state = {
        phoneNum: processPhoneNumFn(phoneNum)
      }
    }
    render() { 
      return (<WrappedComponent {...this.state} {...this.props}/>)
    }
  }
}

export default ProcessPhoneNumHoc;