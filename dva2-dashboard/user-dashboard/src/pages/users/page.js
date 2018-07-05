import Users from './components/Users';
import LoadingHoc from './decorator/loading-hoc'; 
// import LoadingPropsArt from './rederprops/loading-render-props';
// import ProcessPhoneNumHoc from './decorator/process-phone-num-hoc';
// import PhoneNumText from './components/phone-number';
// import ProcessPhoneNumArt from './rederprops/process-phone-num-art';
// import withAnimation from './decorator/animation-hoc'; 
// import MoveLabel from './components/move-label';
// import AnimationPropsArt from './rederprops/animation-props-art';
export default LoadingHoc(Users, 3000);
//export default ProcessPhoneNumHoc(PhoneNumText,'15764277163')
//export default withAnimation(MoveLabel, '跳一跳')
//export default () => (<LoadingPropsArt timeout={3000} component={() => (<Users/>)} />)
//export default () => (<ProcessPhoneNumArt phoneNum='15764277163' render={(phoneNum) => (<div>{phoneNum}</div>)} />)
//export default () => (<AnimationPropsArt text='跳一跳' animationProps={(params) => (<MoveLabel {...params} />)} />)
