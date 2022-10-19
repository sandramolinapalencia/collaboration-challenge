import logo from "./and-logo.png";
import "./App.css";
import Form from "./Form";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="Page-title">
          <span className="Red-text">AND</span>title
        </p>
        <div className="App-logo" />
      </header>
      <div className="Form-container">
        <div>
          <p>
          ANDtitle is a platform that allows you to communicate your ANDtitle with other ANDis. The platform facilitates communication in a simple manner.<br/>
          <br/>
          <p className="bold">INSTRUCTIONS:</p>
          <ol>
            <li>Fill out the areas below and click send email.</li>
            <li>Email is sent to reciepient.</li>
            <li>Wait For your reply!</li>
          </ol>
          </p>
        </div>
        <Form />
      </div>
    </div>
  );
}

export default App;
