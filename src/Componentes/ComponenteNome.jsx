import { useState } from "react";
import { Button } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';

function ComponenteNome() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [nome, setNome] = useState("SEU NOME");

    return (
        <div>
            <Button variant="primary" onClick={handleShow}>Alterar para apelido</Button>{' '}

            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

            <Button variant="success">Alterar para nome</Button>{' '}
            {/* Old buttons
            <button onClick={() => setNome("SEU NOME APELIDO")}>Alterar para apelido</button>
            <button onClick={() => setNome("SEU NOME")}>Alterar para nome</button>
            */}
            <hr/>
            <p>Nome: {nome}</p>
        </div>
    );
}

export default ComponenteNome;
