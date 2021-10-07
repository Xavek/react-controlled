
import './App.css';
import Form from './Form';

function App() {
  const headingStyles = {
    textAlign: "center"
  }
  return (
    <div>
      <h1 style={headingStyles}>Magic Color Box</h1>
      <Form/>
    </div>
  );
}

export default App;

// First create a form to take the input
// display the input as text first or realtime keyboard change
// convert the given text into css background colour properties