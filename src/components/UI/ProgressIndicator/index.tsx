import React from 'react';
import {ProgressBar, ProgressContainer} from "./styled";
import {SelectedItemCardProps} from "../../SelectedItemCard/types";
import {ProgressIndicatorProps} from "./types";

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({ progress})  => {
    return (
        <ProgressContainer>
            <ProgressBar progress={progress} />
        </ProgressContainer>
    );
};

export default ProgressIndicator