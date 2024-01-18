import Search from "./components/Search"

function App() {
  return <div className="h-fit min-h-[100vh] w-full flex justify-center pt-14 bg-[url('https://images.unsplash.com/photo-1606247357835-d27fe83fc6a3?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]
  bg-cover bg-repeat-y bg-no-repeat-x relative">
    <div>
      <Search />
    </div>
  </div>
}

export default App
