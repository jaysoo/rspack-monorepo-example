import { Header } from '@rspack-monorepo-example/ui';

import styles from './app.module.css';

export function App() {
  // TODO: process.env needs to be accessible.
  return (
    <div className={styles['container']}>
      <Header>Hello Rust!</Header>
      <p>NODE_ENV: {process.env['NODE_ENV']}</p>
    </div>
  );
}
