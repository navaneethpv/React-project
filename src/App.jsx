import Content from "./components/Content";
import Login from "./components/Login";

function App() {
  return (
    <>
      <div className="flex justify-center items-center w-screen h-screen  bg-[url('public/Images/nordwall3.jpg')]" >
        <div className="flex bg-amber-300">
          <Content />
          <Login />
        </div>
      </div>
    </>
  );
}

export default App;
