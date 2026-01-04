import { NavLink } from 'react-router'
import styles from './style.module.css'

const Logo = () => {
  return (
    <NavLink to='/'><img className={styles.Logo} src="public/foni-papik-pro-w3yq-p-kartinki-ashan-logo-na-prozrachnom-fone-2.png" alt="Логотип" /></NavLink>
  )
}

export default Logo
