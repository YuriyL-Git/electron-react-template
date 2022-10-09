import React, { ReactElement } from 'react';
import { ExampleComponent } from '../../Components/ExampleComponent/ExampleComponent';
import { GetRandomNumber } from '../../Components/GetRandomNumber/GetRandomNumber';

const Page1 = (): ReactElement => {
  return (
    <div color="#000">
      <ExampleComponent />
      <GetRandomNumber />
    </div>
  );
};

export default Page1;
