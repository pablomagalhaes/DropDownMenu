import "./assets/styles.scss";
import DropDownMenu from "./components/DropDownMenu/index"

function App() {

  return (
    <div className="App">
      <DropDownMenu position="left" />
      <DropDownMenu position="right"/>
    </div>
  );
}

export default App
