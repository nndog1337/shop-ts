import styles from './style.module.css'
import { NavLink } from 'react-router'

const Nav = () => {
  return (
    <nav className={styles.Nav}>
      <NavLink to='/men'end>
        Мужчины
      </NavLink>
      <NavLink to='/women'end>
        Женщины
      </NavLink>
      <NavLink to='/jewelery'end>
        Ювелирные изделия
      </NavLink>
      <NavLink to='/electronics'end>
        Электроника
      </NavLink>
    </nav>
  )
}

export default Nav
