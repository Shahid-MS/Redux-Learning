import "bootstrap/dist/css/bootstrap.min.css";
import Container from "./Components/Container";
import Header from "./Components/Header";
import DisplayCounter from "./Components/DisplayCounter";
import Controls from "./Components/Controls";
import "./App.css";
import { useSelector } from "react-redux";
import PrivacyMessage from "./Components/PrivacyMessage";

function App() {
  const privacy = useSelector((store) => store.privacy);
  return (
    <>
      <div className="px-4 py-5 my-5 text-center">
        <Container>
          <Header />
          <div className="col-lg-6 mx-auto">
            {privacy ? <PrivacyMessage /> : <DisplayCounter />}
            <Controls />
          </div>
        </Container>
      </div>
    </>
  );
}

export default App;
