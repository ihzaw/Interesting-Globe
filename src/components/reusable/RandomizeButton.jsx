import { Icon } from "astro-icon";

const RandomizeButton = () => {
  const handleClick = () => {
    console.log('window location :', window.location)
  }
  
  return (
    <div class="p-4 py-6 flex justify-center items-center align-middle h-full bg-slate-800 rounded-full" onClick={() => handleClick()}>
      <div class="flex">
        <Icon
          name="fa-solid:dice-d20"
          class="text-white cursor-pointer mr-4 transition ease-in-out hover:scale-[1.2] duration-300 "
          rotate="90deg"
          width="50px"
          height="50px"
        />
        <div class="cursor-default font-bold text-white flex justify-center items-center text-xl">
          Next article
        </div>
      </div>
    </div>
  )
}

export default RandomizeButton