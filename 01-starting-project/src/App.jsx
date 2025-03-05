import { useState} from 'react';

import Header from './Components/Header.jsx';
import { CORE_CONCEPTS } from './data.js'
import CoreConcept from './Components/CoreConcept.jsx';
import TabButton from './Components/TabButton.jsx';
import { EXAMPLES} from './data.js'


function App() {
  
  const [selectedTopic, setSelectedTopic]  = useState('components');

  function handleSelect(selectedButton) {
    // selectedButton = 'components', 'jsx', 'props', 'state'
    // tabContent = selectedButton;  
    setSelectedTopic(selectedButton)
    console.log(selectedTopic);
    
  }

  console.log('APP COMPONENT FUNCTION');

  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          <div id="tab-content">
            <h3>{ EXAMPLES[selectedTopic].title}</h3>
            <p>{ EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
                {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>
          
        </section>
      </main>
    </div>
  );
}

export default App;
