import { Feed, Home, Login, Navbar } from "./components";

function App() {
  
  return (
    <div className="bg-background text-text min-h-screen">
      <Login />
      <Home />
      <Feed />
    </div>
  );
}

export default App;
