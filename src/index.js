import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import Skills from "./Skills";

const greetingMessage = (
	<div>
		<h1>Hello world!</h1>
	</div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Skills />);
