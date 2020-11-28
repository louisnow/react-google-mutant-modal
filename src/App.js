import React, { useCallback, useState } from 'react';
import { MapComponent } from './map';
import { Button, Modal } from '@material-ui/core';
import './App.css';

function App() {
  const [open, setOpen] = useState(false);

  const openModal = useCallback(() => setOpen(true));

  const onClose = useCallback(() => setOpen(false));

  return (
    <div>
      <Button onClick={openModal}>Open Map in Modal</Button>
      <Modal open={open} onClose={onClose}>
        <div>
          <MapComponent className="mappane"></MapComponent>
        </div>
      </Modal>
    </div>
  );
}

export default App;
