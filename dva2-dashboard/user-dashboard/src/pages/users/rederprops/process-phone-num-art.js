import React, { Fragment } from "react";

class ProcessPhoneNumArt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phnoeNum: (() => {
        const phoneNunmReg = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;
        if (phoneNunmReg.test(this.props.phoneNum)) {
          return this.props.phoneNum.replace(
            /(\d{3})(\d{4})(\d{4})/,
            "$1-$2-$3"
          );
        }
        return "不合法的手机号码！！！！";
      })()
    };
  }
  render() {
  
    return (<Fragment>{this.props.render(this.state.phnoeNum)}</Fragment>);
  }
}
export default ProcessPhoneNumArt;
