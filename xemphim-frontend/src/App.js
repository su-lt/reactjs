import Main from "./Pages/Main";
import Nav from "./components/Nav";

function App() {
    return (
        <div className="grid grid-cols-5">
            <Nav />
            <div className="px-12 py-6 col-span-4 bg-cyan-50">
                <Main />
            </div>
        </div>
    );
}

export default App;
