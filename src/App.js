import './App.css';
import Piano from './Piano.js'
import Gitar from './Gitar.js'
import SourceCode from './SourceCode.js'
import CodeTunes from './CodeTunes.js'

function App() {
  return (
        <div style={{ backgroundColor : '#000F23' }}>
            <div style={{ margin: 'auto' , width: '90%', paddingTop: '1%'}}>
                <CodeTunes />
            </div>
            <div>
                <SourceCode />
            </div>
        </div>
  );
}

export default App;
