import React from 'react';

export default ({ 
  text = '',
  x = 0,
  y = 0,
}) => { 
  return (<div style={{ position: 'absolute', width:'50px',height:'20px', top:`${y}px`, left: `${x}px` }}>{text}</div>)
}