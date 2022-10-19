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
            ANDtitle is a platform that allows you to communicate your ANDtitle
            with other ANDies. The platform facilitates communication in a
            simple manner. By inserting the relevant information, the functions
            will enable ANDies to communicate their title with each other via
            email. Instructions: input the email address of the ANDi initiating
            the communication and a clue to enable the ANDies you are
            communicating with to have a guess on what your ANDtitle is. If the
            ANDi you are communicating with does not guess your ANDtitle within
            5 minutes, we will be sending them and email automatically with the
            answer.
          </p>
        </div>
        <Form />
      </div>
    </div>
  );
}

export default App;
