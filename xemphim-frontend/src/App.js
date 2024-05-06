import Main from "./Pages/Main";
import Nav from "./components/Nav";
import AuthButtons from "./components/AuthButtons";

function App() {
    return (
        <div className="grid sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            <Nav />
            <div className="px-12 py-6 sm:col-span-2 lg:col-span-3 xl:col-span-5 bg-[#e3e6e6]">
                <AuthButtons />
                <Main />
            </div>
        </div>
    );
}

export default App;
