import Button from "@mui/material/Button";
import { useState } from "react";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<Button variant="contained">Hello world</Button>
		</>
	);
}

export default App;
