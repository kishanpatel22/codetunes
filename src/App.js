import './App.css';
import Piano from './Piano.js'
import Gitar from './Gitar.js'
import SourceCode from './SourceCode.js'
import CodeTunes from './CodeTunes.js'

function App() {
  return (
        <div style={{ backgroundColor : '#000F23'}}>
            <div style={{ margin: 'auto' , width: '95%', paddingTop: '0.5%'}}>
                <CodeTunes />
            </div>
            <div>
                <SourceCode />
            </div>
        </div>
  );
}

export default App;
