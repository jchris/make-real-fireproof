import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MakeRealButton } from './components/MakeRealButton';
import { ResponseShapeUtil } from './ResponseShape/ResponseShape';
import '@tldraw/tldraw/tldraw.css';
import { Tldraw } from '@tldraw/tldraw';
import { MadePage } from './MadePage';
import { ShowPage } from './ShowPage';
// import { RiskyButCoolAPIKeyInput } from './components/RiskyButCoolAPIKeyInput'

const shapeUtils = [ResponseShapeUtil];

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={
					<div className="editor">
						<Tldraw
							persistenceKey="make-real"
							shareZone={<MakeRealButton />}
							shapeUtils={shapeUtils}
						>
							{/* <TldrawLogo /> */}
							<MakeRealButton />
						</Tldraw>
					</div>
				} />
				<Route path="/made" element={<MadePage />} />
				<Route path="/show/:id" element={<ShowPage />} />
			</Routes>
		</Router>
	);
}

export default App;
