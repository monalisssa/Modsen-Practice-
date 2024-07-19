import React from 'react';
import { ProgressBar, ProgressContainer } from './styled';
import { ProgressIndicatorProps } from './types';

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({ progress }) => {
  return (
    <ProgressContainer>
      <ProgressBar progress={progress} />
    </ProgressContainer>
  );
};

export default ProgressIndicator;
