import { ReactNode } from 'react';
import styles from './header.module.css';

export function Header(props: { children: ReactNode }) {
  return <h1 data-testid="header" className={styles['header']}>{props.children}</h1>;

}
