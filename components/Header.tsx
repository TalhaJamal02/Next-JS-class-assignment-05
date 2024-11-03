
function Header() {
  return (
    <div>
      <div className="bg-[#A29875] flex flex-row items-center justify-between px-4 h-[90px] overflow-x-hidden">
        <h1 className="rye-font text-3xl text-white">MANZZARI</h1>

        <div className="flex justify-between items-center w-full px-8">
          <div className="flex-grow flex justify-center">
            <div className="relative w-[600px] flex-shrink-0">
              <input
                type="search"
                placeholder="Search for Gold Jewellery, Diamond Jewellery and more…"
                className="w-full nunito-sans-font h-10 rounded-lg p-3 pr-10 placeholder:text-gray-400"
              />
              <img
                src="/search.svg"
                className="absolute top-1/2 right-3 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                alt="Search Icon"
              />
            </div>
          </div>

          <div className="flex items-center space-x-8">
            <img src="/heart.svg" className="w-6 h-6" alt="Heart Icon" />
            <img src="/profile.svg" className="w-6 h-6" alt="Profile Icon" />
            <img src="/cart.svg" className="w-6 h-6" alt="Cart Icon" />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Header