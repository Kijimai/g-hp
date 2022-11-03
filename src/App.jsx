import { useState } from "react"
import Navigator from "./components/Navigator"
import Camera from "./icons/Camera"
import Microphone from "./icons/Microphone"
import GridDots from "./icons/GridDots"
import MagnifyingGlass from "./icons/MagnifyingGlass"
import "./App.css"

function App() {
  const [isDark, setIsDark] = useState(false)
  return (
    <div className="App">
      <Navigator />
      <Camera />
      <Microphone />
      <GridDots />
      <MagnifyingGlass />
    </div>
  )
}

export default App
