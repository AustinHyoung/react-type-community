import { Mobile, Tablet, PC } from '../MediaQuery';
import React from 'react';

const Item3 = () => {
  return (
    <>
      <PC>
        <div>Item3</div>
      </PC>
      <Tablet>
        <div>Item3</div>
      </Tablet>
      <Mobile>
        <div>Item3</div>
      </Mobile>
    </>
  );
};

export default Item3;
