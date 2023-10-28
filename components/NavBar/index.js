import './index.scss';
const NavBar = () => {
  return (
    <div className="nav-bar h-14 text-base flex flex-wrap items-center mx-auto gap-4">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold ">
          <a title='jiaozi'>🥟</a>
          <span className="text-3xl ml-2 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-400">Poker</span>
        </h1>
      </div>
    </div>
  )
}

export default NavBar