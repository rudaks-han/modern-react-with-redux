import Button from "../components/Button";
import { GoBell, GoDatabase, GoDownload } from "react-icons/go";

function ButtonPage() {
  const handleClick = () => {
    console.log("Clicked!");
  };

  return (
    <div className="App">
      <div>
        <Button
          secondary
          rounded
          outline
          className="mb-5"
          onClick={handleClick}
        >
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

export default ButtonPage;
