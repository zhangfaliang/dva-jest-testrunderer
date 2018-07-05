
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { Link } from 'antd';
 
describe('# Component Link', () => {
  it('should render without throwing an error', () => {
    expect(shallow(<Link />).contains(<p className="ajrl-title"></p>)).toBe(true);
  });
 
  it('should mount in a full DOM', () => {
    expect(mount(<Link />).find('.ajrl-title').length).toBe(1);
  });
 
  it('should render to static HTML', () => {
    expect(render(<Link />).find('.ajrl-title').text()).toEqual('test');
  });
});
