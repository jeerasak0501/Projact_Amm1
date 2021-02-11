import './App.css';
import AppHeader from './App-Header';
import SaxophoneItem from './saxophone-Item';

function App() {

    return (
        <div className="app">
            <AppHeader />
            <div className="app-grid">
                <SaxophoneItem />
                <SaxophoneItem />
                <SaxophoneItem />
                <SaxophoneItem />
            </div>
           
        </div>
    );

}

export default App;
