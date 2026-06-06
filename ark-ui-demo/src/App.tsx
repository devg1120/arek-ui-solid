import { createSignal } from 'solid-js'
import './global.css';
import { BasicSplitter } from './components/splitter'
import { NestedSplitter } from './components/splitter'

import { BasicTreeView } from './components/tree-view'
import { BasicDatePicker } from './components/date-picker'

function App() {

return (
<>
  <br/>
  <h4>BasicDatePicker</h4>
  <BasicDatePicker />

  <br/>
  <h4>BasicTreeView</h4>
  <BasicTreeView />

  <br/>
  <h4>BasicSplitter</h4>
  <BasicSplitter />

  <br/>
  <h4>NestedSplitter</h4>
  <NestedSplitter />
</>
)

}
export default App
