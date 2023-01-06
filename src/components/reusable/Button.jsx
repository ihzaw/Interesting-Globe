const Button = (props) => {
  const { label, to } = props

  const handleClick = (params) => {
    console.log('params :', params)
  }

  return (
    <button onClick={() => handleClick('masuk')} className="px-4 py-2 text-sm text-white rounded-lg bg-slate-600 hover:bg-slate-200 hover:text-slate-600 transition ease-in-out duration-75">
      {label}
    </button>
  )
}

export default Button