import * as React from 'react';
import { Button } from 'baseui/button';
import { Drawer, ANCHOR } from 'baseui/drawer';
export default function Sidebar() {
  const [isOpen, setIsOpen] = React.useState(false);

  function close() {
    setIsOpen(false);
  }

  return (
    <React.Fragment>
      <Button onClick={() => setIsOpen(!isOpen)}>
        Open Drawer
      </Button>
      <Drawer
        isOpen={isOpen}
        autoFocus
        onClose={() => setIsOpen(false)}
        anchor={ANCHOR.left}
      >
             <Button onClick={() => setIsOpen(!isOpen)}>
        Open Drawer
      </Button>
      </Drawer>
    </React.Fragment>

  );
}