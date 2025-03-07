import { useState } from 'react'
import TabButton from './TabButton.jsx'
import { EXAMPLES } from '../data.js';
import Section from './Section.jsx';
import Tabs from './Tabs.jsx';


export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    // selectedButton = 'components', 'jsx', 'props', 'state'
    // tabContent = selectedButton;  
    setSelectedTopic(selectedButton)
    console.log(selectedTopic);

  }

  let tapContent = <p>Please select a topic </p>

  if (selectedTopic) {
    tapContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>
            {EXAMPLES[selectedTopic].code}
          </code>
        </pre>
      </div>)
  }

  return (
    <Section title="Examples" id='examples'>
      <Tabs
        ButtonsCointainer="menu"
        buttons={
        <>
          <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleSelect('components')}>Components</TabButton>
          <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
          <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleSelect('props')}>Props</TabButton>
          <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleSelect('state')}>State</TabButton>
        </>
      }>
        {tapContent}
      </Tabs>
    </Section>
  )
}