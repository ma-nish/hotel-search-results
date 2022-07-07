import React from 'react'
import { Modal, Button, Form, Row, Col } from "react-bootstrap"
import { PartyCompositionType } from '../../constants/types';
import Counter from '../counter/Counter';
import ChildAge from './ChildAge';

export type CountOption = {
  label: string;
  value: number;
};

interface PartyCompositionProps {
  show: boolean;
  onHide: () => void;
  setValue: (args: PartyCompositionType) => void;
}

const PartyComposition: React.FunctionComponent<PartyCompositionProps> = ({ show, onHide, setValue }) => {
  const [adults, setAdults] = React.useState<number>(0);
  const [childrens, setChildrens] = React.useState<number>(0);
  const [infants, setInfants] = React.useState<number>(0);
  const [childAges, setChildAges] = React.useState<number[]>([]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setValue({
      adults: adults,
      childAges: childAges,
      infants: infants
    });
    onHide();
  }

  return (
    <Modal
      aria-labelledby="contained-modal-title-vcenter"
      centered
      backdrop="static"
      keyboard={false}
      show={show}
      onHide={onHide}
      data-testid="modal"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Who's Going
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Form.Label column sm="9">
            Adults <small>(Ages 15 or above)</small>
          </Form.Label>
          <Col sm="3">
            <Counter count={adults} setCount={setAdults} />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="9">
            Children <small>(Ages 0 to 15)</small>
          </Form.Label>
          <Col sm="3">
            <Counter count={childrens} setCount={setChildrens} />
          </Col>
        </Form.Group>
        {<ChildAge childrens={childrens} childAges={childAges} setChildAges={setChildAges} />}

        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="9">
            Infants <small>(Ages 1 or below)</small>
          </Form.Label>
          <Col sm="3">
            <Counter count={infants} setCount={setInfants} />
          </Col>
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button type='button' variant='secondary' onClick={onHide}>Cancel</Button>
        <Button type='button' onClick={handleSubmit}>Save</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default PartyComposition