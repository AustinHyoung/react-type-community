import React from 'react';
import { Mobile, Tablet, PC } from '../MediaQuery';
import '../password.css';

const Password = () => {
  return (
    <>
      <PC>
        <div className="hi">
          <div className="hi2">Password</div>
          <div className="hi2">Password</div>
          <div className="hi2">Password</div>
        </div>
      </PC>
      <Tablet>
        <div className="hi">
          <div className="hi2">Password</div>
          <div className="hi2">Password</div>
          <div className="hi2">Password</div>
        </div>
      </Tablet>
      <Mobile>
        <div className="hi">
          <div className="hi2">Password</div>
          <div className="hi2">Password</div>
          <div className="hi2">Password</div>
        </div>
      </Mobile>
    </>
  );
};

export default Password;
