"use client";
// app/page.tsx
import React from 'react';
import FileUpload from '../components/FileUpload';
import Results from '../components/Results';

const Home = () => {
  const [memorabilityScore, setMemorabilityScore] = React.useState(0.0);
  const [saliencyMap, setSaliencyMap] = React.useState('');

  // Placeholder function to simulate the API call
  const handleFileUpload = (file: File) => {
    // Simulate API call and update the state with the results
    setTimeout(() => {
      setMemorabilityScore(0.75);
      setSaliencyMap('https://example.com/saliency_map.png');
    }, 1000);
  };

  return (
    <div>
      <h1>Memorable</h1>
      <FileUpload onFileUpload={handleFileUpload} />
      {memorabilityScore > 0 && (
        <Results memorabilityScore={memorabilityScore} saliencyMap={saliencyMap} />
      )}
    </div>
  );
};

export default Home;