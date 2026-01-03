import { Link } from 'react-router'
import styles from './style.module.css'

interface SectionProductProps{
  src:string,
  children: React.ReactNode,
  link: string
}

const SectionProduct = (Props: SectionProductProps) => {
  const{
    src,
    children,
    link
  } = Props
  return (
    <Link to={link}>
      <div className={styles.SectionProduct}>
        <img src={src} />
        <p>{children}</p>
      </div>
    </Link>
  )
}

export default SectionProduct
