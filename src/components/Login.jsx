export default function Login() {
  return (
    <>
      <div className="flex flex-col min-w-120 bg-amber-100">
        <h1 className="text-5xl font-sans font-bold text-center mt-10 text-shadow-sm text-shadow-gray-500">
          Login
        </h1>
        <div className="flex mt-1 justify-center items-center min-h-90">
          <form className="flex flex-col justify-center items-start mt-10">
            <label className="p-2 ml-5 font-medium  text-shadow-zinc-600 text-shadow-sm">Username</label>
            <input
              className="border-2 border-gray-500 px-10 py-1.5 ml-6 rounded-full placeholder-gray-500"
              type="text"
              placeholder="Enter user name"
            />
            <label className="p-2 ml-5 font-medium text-shadow-zinc-600 text-shadow-sm ">Password</label>
            <input
              className="border-2 border-gray-500 px-10 py-1.5 ml-6 rounded-full placeholder-gray-500"
              type="password"
              placeholder="Enter password"
            />
            <button className="border-1 border-amber-200 from  px-30 py-1.5 ml-8 mt-10 rounded-full font-bold font-mono bg-gradient-to-r from-red-400 to-orange-300 shadow-sm shadow-black hover:cursor-pointer hover:from-red-500 hover:to bg-orange-500 hover:text-amber-100 transition-all duration-200 ease">
              Login
            </button>
          </form>
        </div>
        <div className="flex justify-center gap-9">
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
