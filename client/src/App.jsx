import './App.css';
import React, { useState } from 'react';
import { LeftSection, RightSection } from './components';

function App() {
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div>
      <LeftSection toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <RightSection isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;