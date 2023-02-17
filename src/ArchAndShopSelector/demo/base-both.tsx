import React from 'react';
import { ArchAndShopSelector, ArchAndShopValue, ArchNode } from 'wzx-design';

const App = () => {
  const data: ArchNode[] = [];
  const [archAndShop, setArchAndShop] = React.useState<ArchAndShopValue>([
    [],
    [],
  ]);

  return (
    <ArchAndShopSelector
      archList={data}
      controlMode="BOTH"
      value={archAndShop}
      onChange={setArchAndShop}
    />
  );
};

export default App;
