import { useCallback } from "react";
import { Button } from "./components/Button/Button";

function App() {
  const handleClick = useCallback(() => {
    console.log("Button clicked");
  }, []);

  return (
    <div>
      <Button label="click me" onButtonClick={handleClick} />
    </div>
  );
}

export default App;
