import styles from './style.module.css'

type Button = {
  children: React.ReactNode,
  className?: string,
  type: 'submit' | 'reset' | 'button'
  onClick?: () => void
}

const Button = (Props: Button) => {
  const{
    children,
    className,
    type,
    onClick
  } = Props
  return (
    <button type={type} className={`${className} ${styles.Button} `} onClick={onClick}>{children}</button>
  )
}

export default Button
