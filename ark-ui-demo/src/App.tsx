import { createSignal } from 'solid-js'
import './global.css';
import { BasicSplitter } from './components/splitter'
import { NestedSplitter } from './components/splitter'

import { BasicTreeView } from './components/tree-view'
import { BasicDatePicker } from './components/date-picker'

import { NestedMenu } from './components/menu'
import { ControlledPosition } from './components/floating-panel'

function App() {

return (
<>
  <br/>
  <h4>ControlledPosition</h4>
  <ControlledPosition />

  <br/>
  <h4>NestedMenu</h4>
  <NestedMenu />

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
