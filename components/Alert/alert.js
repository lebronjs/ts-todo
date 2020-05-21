import styles from './alert.module.scss'

export default function Alert({ children, type }) {
    const colorObj = {
        success: styles.success,
        error: styles.error
    };
  return <div className={ colorObj[type] }>{children}</div>;
}