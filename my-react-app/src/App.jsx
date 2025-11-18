import {add ,multiply, substract, divide} from "./calculater"
function App() {
   return (


    <div>
      <ul>
        <li>{add(2,4)}</li>
        <li>{multiply(6,8)}</li>
        <li>{substract(5,9)}</li>
        <li>{divide(9,3)}</li>
      </ul>
    </div>

  )

}


 
export default App