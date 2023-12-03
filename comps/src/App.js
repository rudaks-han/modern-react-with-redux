import Button from "./Button";
import { GoBell, GoDatabase, GoDownload } from "react-icons/go";

function App() {
  return (
    <div className="App">
      <div>
        <Button success rounded outline>
          <GoBell />
          Click me
        </Button>
      </div>
      <div>
        <Button danger outline>
          <GoDownload />
          Buy Now
        </Button>
      </div>
      <div>
        <Button warning>
          <GoDatabase />
          See Deal
        </Button>
      </div>
      <div>
        <Button secondary outline>
          Hide Ads!
        </Button>
      </div>
      <div>
        <Button primary rounded>
          Something!
        </Button>
      </div>
    </div>
  );
}

export default App;
