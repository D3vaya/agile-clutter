import styles from './app.module.css';
import NxWelcome from './nx-welcome';
import { Card } from '@agile-clutter/ui/core';

import '../../src/styles.css';
export function App() {
  return (
    <>
      <Card />
      <NxWelcome title="disorder" />
    </>
  );
}

export default App;
