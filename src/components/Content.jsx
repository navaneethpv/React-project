export default function Content(){
    return (
        <>
            <div className="max-w-4xl min-h-150 bg-white/10 flex flex-col backdrop-blur-md border border-white/30 rounded-tl-xl text-white rounded-bl-xl" >
                <h1 className="text-6xl font-bold ml-10 mt-30">Welcome!</h1>
                <div className="h-1 w-40  rounded-full ml-10 mt-10 bg-pink-400"></div>
                <p className="mt-20 ml-10 text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas itaque inventore corrupti quaerat cupiditate! At repellendus, quaerat architecto ea mollitia odit voluptas consectetur culpa nulla et cumque molestiae assumenda a!</p>
                <button className="border-1 border-amber-50 w-40 p-2 mt-15 ml-15 rounded-2xl font-bold bg-gradient-to-r from-red-300 to-red-400 shadow-md hover:from-red-400 hover:to-pink-600  hover:text-pink-100 transition-all duration-200 ease hover:cursor-pointer">Learn more</button>
            </div>
        </>
    );
}