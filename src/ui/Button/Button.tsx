import styles from './style.module.css'

type Button = {
  children: React.ReactNode,
  className?: string,
  type: 'submit' | 'reset' | 'button'
}

const Button = (Props: Button) => {
  const{
    children,
    className,
    type
  } = Props
  return (
    <button type={type} className={`${className} ${styles.Button} `}>{children}</button>
  )
}

export default Button
