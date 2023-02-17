import React from 'react';
import { ArchAndShopSelector, ArchNode } from 'wzx-design';

const App = () => {
  const data: ArchNode[] = [];

  return (
    <ArchAndShopSelector
      archList={data}
      onChange={(val) => {
        console.log(val);
      }}
    />
  );
};

export default App;
