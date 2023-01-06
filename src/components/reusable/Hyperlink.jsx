const Hyperlink = (props) => {
  const { label, to, className } = props

  return (
    <a className={`px-4 py-2 text-sm text-white rounded-lg bg-slate-600 hover:bg-slate-200 hover:text-slate-600 transition ease-in-out duration-75 ${className}`} href={to}>{label}</a>
  )
}

export default Hyperlink