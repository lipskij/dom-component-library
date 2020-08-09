import React from 'react';
import ReactDOM from 'react-dom';
import PrimaryButton, { SecondaryButton, TertiaryButton } from './components/Buttons';

const App = () => (
  <div>
    <PrimaryButton>Hello</PrimaryButton>
    <SecondaryButton>Hello You</SecondaryButton>
    <TertiaryButton>Hello Boi</TertiaryButton>
  </div>
);

ReactDOM.render(<App />, document.querySelector('#root'));