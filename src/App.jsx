import Content from "./components/Content";
import Login from "./components/Login";

function App() {
  return (
    <>
      <div className="flex justify-center items-center w-screen h-screen  bg-[url('public/Images/nordwall3.jpg')] bg-cover" >
        <div className="flex">
          <Content />
          <Login />
        </div>
      </div>
    </>
  );
}

export default App;
