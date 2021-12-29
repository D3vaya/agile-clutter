import React from 'react';
import '../../src/styles.css';
const Card = ({ children }: { children: React.ReactElement }) => {
  return <div className="bg-red bg-red-600 shadow">{children}</div>;
};
export function App() {
  return (
    <>
      {/* <NxWelcome title="disorder" /> */}
      <Card>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </Card>
    </>
  );
}

export default App;
