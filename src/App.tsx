import { useState } from "react";
import Body from "./components/Body"
import Header from "./components/Header"

function App() {
  const [section, setSection] = useState("about");
  return (
    <div>
      <Header onClick={setSection}></Header>
      <Body tag={section}></Body>
    </div>
  )
}

export default App
