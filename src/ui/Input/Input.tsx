import type { ChangeEvent } from "react"

interface InputProps{
  type: string
  placeholder: string
  className?: string
  value?: string
  required?: boolean
  onChange?:(e: ChangeEvent<HTMLInputElement>) => void
}

const Input = (Props: InputProps) => {
  const{
    type,
    placeholder,
    className,
    value,
    onChange,
    required=false
  } = Props
  return (
    <input className={className} type={type} placeholder={placeholder} value={value} onChange={onChange} required={required} />
  )
}

export default Input
