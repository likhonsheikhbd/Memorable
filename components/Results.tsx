// components/Results.tsx
import React, { FunctionComponent } from 'react';

interface ResultsProps {
  memorabilityScore: number;
  saliencyMap: string; // URL to the saliency map image
}

const Results = ({ memorabilityScore, saliencyMap }: ResultsProps) => {
  return (
    <div>
      <h2>Results</h2>
      <p>Memorability Score: {memorabilityScore}</p>
      <img src={saliencyMap} alt="Saliency Map" />
    </div>
  );
};

export default Results;