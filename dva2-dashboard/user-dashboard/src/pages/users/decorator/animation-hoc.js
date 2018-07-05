import React from "react";

export default (WrappedComponent, text) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        x: 0,
        y: 0,
        text: text
      };
    }
    componentDidMount() {
      console.dir(WrappedComponent);
      const { clientHeight, clientWidth } = this.wrap;
      const _this = this;
     

      setInterval(() => {
        const { x, y } = _this.state;
        let currentX = x + 10+50;
        let currentY = y + 15;
        const linBackFlag = currentX >= clientWidth;
        const linBeginFlag = currentY >= clientHeight;
        if (linBackFlag && linBeginFlag) {
          currentX = 0;
          currentY = 0;
        } else if (linBackFlag && !linBeginFlag) {
          currentX = 0;
        } else if (!linBackFlag && !linBeginFlag) {
          currentY = y;
        }
        _this.setState({
          x: currentX,
          y: currentY
        });
      }, 300);
    }
    render() {
      return (
        <div
          ref={node => (this.wrap = node)}
          style={{ position: "relative", height: "60px", width: "80px" }}
        >
          <WrappedComponent {...this.state} {...this.props} />
        </div>
      );
    }
  };
};
