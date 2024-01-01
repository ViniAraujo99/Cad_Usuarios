interface Props {
  color?: 'blue' | 'green' | 'gray' | 'red',
  children: any,
  onClick?: () => void
}

export const Button = ({ children, color = 'blue', onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`
     p-2 rounded-md
     bg-gradient-to-r from-${color}-400 to-${color}-600 
    `}>
      {children}
    </button>
  )
}