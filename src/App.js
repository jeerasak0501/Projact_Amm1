import './App.css';
import AppHeader from './AppHeader';
import SaxophoneItem from './saxophoneItem';

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
