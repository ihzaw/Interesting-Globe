const Button = (props) => {
  const { label } = props

  return (
    <button className="px-4 py-2 text-sm rounded-lg bg-slate-600 hover:bg-slate-200 transition ease-in-out duration-200">{label}</button>
  )
}

export default Button