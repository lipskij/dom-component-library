import React from 'react';
import ReactDOM from 'react-dom';
import PrimaryButton, { SecondaryButton, TertiaryButton } from './components/Buttons';
import { GlobalStyle } from './utils';

const App = () => (
  <div>
    <PrimaryButton modifiers={["small", "success", "primarySuccessButton"]}>Hello</PrimaryButton>
    <SecondaryButton modifiers={["large", "warning", "secondaryButtonWarning"]}>Hello You</SecondaryButton>
    <TertiaryButton modifiers={["error", "tertiaryErrorButton"]}>Hello Boi</TertiaryButton>
    <GlobalStyle />
  </div>
);

ReactDOM.render(<App />, document.querySelector('#root'));