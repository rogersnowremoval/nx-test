import styles from './my.module.css';

/* eslint-disable-next-line */
export interface MyProps {}

export function My(props: MyProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to My!</h1>
    </div>
  );
}

export default My;
