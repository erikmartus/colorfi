import { useState } from 'react';
import Button from './Button';
import Modal from './Modal';
import Themes from './Themes';
import ArrowDown from '../icons/arrow-down.svg';

function Intro() {
  const [hiddenState, setHiddenState] = useState(true);

  return (
    <section id="intro" className="flex flex-col items-center mb-12">
      <h1>Create Code Ready Color Themes</h1>
      <Button type="primary" onClick={() => setHiddenState(false)}>
        Choose a Theme
      </Button>
      <p className="mb-3 text-center text-xl font-semibold">
        Or get started below
      </p>
      <a href="#colors">
        <ArrowDown className="animate-bounce text-gray-600 w-12" />
      </a>
      <Modal
        title="Themes"
        hidden={hiddenState}
        handleHidden={() => setHiddenState((state) => !state)}
      >
        <Themes onChange={() => setHiddenState((state) => !state)} />
      </Modal>
    </section>
  );
}

export default Intro;
