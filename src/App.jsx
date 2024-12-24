import Header from "./Header.jsx"
import MainContent from "./Main content"
import Contact from  "./Contact"
import Matrix from "./Matrix"

function App() {

  return (
    <>
      <Matrix/>
      <div className="container " >
        <Header/>
        <MainContent/>
        <Contact/>
      </div>
    </>
  )
}

export default App
