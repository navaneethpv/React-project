export default function Login() {
  return (
    <>
      <div className="flex flex-col min-w-120 bg-white/30 backdrop-blur-xl rounded-br-xl rounded-tr-xl">
        <h1 className="text-5xl text-white font-serif font-bold text-center mt-10 text-shadow-sm text-shadow-gray-500">
          Login
        </h1>
        <div className="flex mt-1 justify-center items-center min-h-90">
          <form className="flex flex-col justify-center items-start mt-10">
            <label className="p-2 ml-5 text-lg font-medium text-white text-shadow-gray-500 text-shadow-sm">Username</label>
            <input
              className="border-3 text-white font-mono border-white px-13 py-1.5 ml-6 rounded-full placeholder:text-white/60 placeholder:font-medium placeholder:font-sans"
              type="text"
              placeholder="Enter user name"
            />
            <label className="p-2 ml-5 text-lg font-medium text-white text-shadow-gray-500 text-shadow-sm mt-5">Password</label>
            <input
              className="border-3 text-white font-mono border-white px-13 py-1.5 ml-6 rounded-full placeholder:text-white/60 placeholder:font-medium placeholder:font-sans"
              type="password"
              placeholder="Enter password"
            />
            <button className="border-1 border-white/50 from text-white/90 px-30 py-1.5 ml-8 mt-10 rounded-full text-lg font-bold font-mono bg-gradient-to-r from-red-400 to-orange-300 shadow-sm shadow-black hover:cursor-pointer hover:from-red-500 hover:to bg-orange-500 hover:text-amber-100 transition-all duration-200 ease">
              Login
            </button>
          </form>
        </div>
        <div className="flex justify-center gap-9 invert">
          <img
            src="public/Images/instagram.svg"
            alt="Instagram"
            className="size-8 hover:cursor-pointer hover:scale-120 transition-all duration-200 ease"
          />
          <img
            src="public/Images/github.svg"
            alt="Instagram"
            className="size-8 hover:cursor-pointer hover:scale-120 transition-all duration-200 ease"
          />
          <img
            src="public/Images/facebook.svg"
            alt="Instagram"
            className="size-8 hover:cursor-pointer hover:scale-120 transition-all duration-200 ease"
          />
        </div>
      </div>
    </>
  );
}
