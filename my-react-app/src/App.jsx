import notes from "./components/notes"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Note from "./components/Note"


function App() {
  return (
    <div>
    <Header/>
      {
        notes.map(noteItem => (
          <Note
            key={noteItem.key}
            title={noteItem.title}
            content={noteItem.content}
          />
        ))
      }
    <Footer />
  </div>
  )
  
}


export default App

