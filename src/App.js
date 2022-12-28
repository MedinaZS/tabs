import './App.css';
import { useState } from 'react';
import Tabs from './components/Tabs';
import TabContent from './components/TabContent';

function App() {

  const [tabs, setTabs] = useState([
    {
      titulo: "Tab 1",
      contenido: "Tab 1 content is showing here",
      estado: false
    },
    {
      titulo: "Tab 2",
      contenido: "Tab 2 content is showing here",
      estado: true
    },
    {
      titulo: "Tab 3",
      contenido: "Tab 3 content is showing here",
      estado: false
    }
  ])


  return (
    <div className="App">
      <Tabs tabs={tabs} setTabs={setTabs} />
      <TabContent tabs={tabs}/>
    </div>
  );
}

export default App;
