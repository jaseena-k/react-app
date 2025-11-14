

function App() {
const date= new Date()
const currentTime = date.getHours()
let greeting

if (currentTime < 12){
  greeting ="goodmorning"

}else if(currentTime < 18){
  greeting = "good afternoon"
}
else{
  greeting ="good night"

}


  return (
    

    <div>
      <h1>{greeting}</h1>
    </div>

  )


}

  
export default App