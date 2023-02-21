import React from 'react';
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox';
import {PaletteTree} from './palette';
import App from "../App";
import Card from "../components/Card";

const ComponentPreviews = () => {
    return (
            <ComponentPreview path="/App">
                <App/>
            </ComponentPreview>
    );
};

export default ComponentPreviews;