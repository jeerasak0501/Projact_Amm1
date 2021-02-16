import './App.css';
import AppHeader from './Components/App-Header';
import SaxophoneItem from './Components/saxophone-Item';
import SaxophonePost from './Components/saxophone-Item';

function App() {

    return (
        <>
            <div>
                <p>Login</p>
            </div>
            <div className="app">
                <AppHeader />
                <div className="app-grid">
                        <div className="Saxophone-item">
                        <SaxophoneItem imgName="images/1โซปราโนแซกโซโฟน.jpg"/><h4>โซปราโนแซกโซโฟน</h4></div>
                        <div className="Saxophone-item">
                    <SaxophoneItem imgName="images/2อัลโต้แซกโซโฟน.jpg"/><h4>อัลโต้แซกโซโฟน</h4></div>
                        <div className="Saxophone-item">
                    <SaxophoneItem imgName="images/3เทเนอร์แซกโซโฟน.jpg"/><h4>เทเนอร์แซกโซโฟน</h4></div>
                        <div className="Saxophone-item">
                    <SaxophoneItem imgName="images/4บาริโทนแซกโซโฟน.jpg"/><h4>บาริโทนแซกโซโฟน</h4></div>
                         <div className="Saxophone-item">
                    <SaxophoneItem imgName="images/5เบสเเซกโซโฟน.jpg"/><h4>เบสเเซกโซโฟน</h4></div>
                        <div className="Saxophone-item">
                    <SaxophoneItem imgName="images/7อุปกรณ์แซกโซโฟน.jpg"/><h4>อุปกรณ์แซกโซโฟน</h4></div>
                </div>
                <SaxophoneItem />
            </div></>
    );

}

export default App;
