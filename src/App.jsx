import { AppRouts } from "./components/pages/routex"
import { createGlobalStyle } from "styled-components"

function App() {

  return (
    <>
    <GlobalSTyle/>
    <AppRouts/>
    </>
  )
}
const GlobalSTyle= createGlobalStyle`
  *{
    margin:0;
    padding:0;
  }
`

export default App
