import styles from './header.module.scss';
export default function HeaderComponent() {
  return (
    <div className={`${styles.container}`}>
      <img src='/Assets/Images/logo.png' alt='logo'/>
    </div>
  );
}
