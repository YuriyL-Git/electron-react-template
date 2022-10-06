import React, { ReactElement } from 'react';
import { GetRandomNumber } from '../../Components/GetRandomNumber/GetRandomNumber';
import { ExampleComponent } from '../../Components/ExampleComponent/ExampleComponent';

const Page1 = (): ReactElement => {
  return (
    <div color="#000">
      <ExampleComponent />

      <GetRandomNumber />
    </div>
  );
};

export default Page1;
