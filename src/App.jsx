import { useState } from "react";

import {CORE_CONCEPTS} from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";
import {EXAMPLES} from "./data.js";

function App() {
  const [ selectedTopic, setSelectedTopic ] = useState();

  function handleSelect(selectedButton){
    setSelectedTopic(selectedButton)
  }

  let tabContent = <p>Please select a topic.</p>;

  if(selectedTopic){
    tabContent = (
      <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>
    );
  }

  return (
    <div>
      <Header/>     
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => 
            (<CoreConcept key={conceptItem.title} {...conceptItem} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton 
            isSelect={selectedTopic === 'components'}
            onSelect={() => handleSelect('components')} >
              Components
            </TabButton>
            <TabButton 
            isSelect={selectedTopic === 'jsx'}
            onSelect={() => handleSelect('jsx')}>
              JSX
            </TabButton>
            <TabButton 
            isSelect={selectedTopic === 'props'}
            onSelect={() => handleSelect('props')}>
            Props
            </TabButton>
            <TabButton 
            isSelect={selectedTopic === 'state'}
            onSelect={() => handleSelect('state')}> 
              State
            </TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
