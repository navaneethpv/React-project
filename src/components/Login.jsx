export default function Login() {
  return (
    <>
      <div className="flex flex-col min-w-120 bg-amber-100">
        <h1 className="text-3xl font-mono font-bold text-center mt-10">
          Login
        </h1>
        <div className="flex mt-1 ml-13 justify-center items-center min-h-90">
          <form className="flex flex-col justify-center items-start mt-10">
            <label className="p-2 ml-5">Username</label>
            <input
              className="border-1 px-10 py-1.5 ml-6 rounded-full"
              type="text"
              placeholder="Enter user name"
            />
            <label className="p-2 ml-5">Password</label>
            <input
              className="border-1 px-10 py-1.5 ml-6 rounded-full"
              type="password"
              placeholder="Enter password"
            />
            <button className="border-1 px-30 py-1.5 ml-6 mt-10 rounded-full font-bold font-mono">
              Login
            </button>
          </form>
        </div>
        <div className="flex justify-center gap-9 ml-11">
          <img
            src="public/Images/instagram.svg"
            alt="Instagram"
            className="size-6"
          />
          <img
            src="public/Images/instagram.svg"
            alt="Instagram"
            className="size-6"
          />
          <img
            src="public/Images/instagram.svg"
            alt="Instagram"
            className="size-6"
          />
        </div>
      </div>
    </>
  );
}
