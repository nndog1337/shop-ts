import Logo from "../../ui/Logo/Logo"
import Nav from "../../ui/Nav/Nav"
import Button from "../../ui/Button/Button"
import styles from './style.module.css'



const Header = () => {
  return (
    <header className={styles.Header}>
      <div className='container'>
        <div className={styles.Wrapper}>
          <Logo/>
          <Nav/>
          <Button type="button" children={'Корзина'} className={styles.button}/>
        </div>
      </div>
    </header>
  )
}

export default Header
