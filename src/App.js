import { AppRoute } from './Routes';
import { BrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';
import PageLoader from './Components/Loader/Loader';
import './App.css';

function App() {
    return (
		<BrowserRouter>
			<Suspense fallback={<PageLoader loading={true}/>}>
				<AppRoute/>
			</Suspense>
		</BrowserRouter>
    );
}

export default App;
