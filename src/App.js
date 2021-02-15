import './App.css';
import SourceCode from './SourceCode.js'
import CodeTunes from './CodeTunes.js'
import Guitar from './Guitar.js'

function App() {
  return (
        <div style={{ backgroundColor : '#000F23'}}>
            <div style={{ margin: 'auto' , width: '95%', paddingTop: '1%'}}>
                <CodeTunes />
            </div>
            <div>
                <SourceCode />
            </div>
        </div>
  );
}

export default App;
