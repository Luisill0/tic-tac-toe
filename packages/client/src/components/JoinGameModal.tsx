import { useState } from "react";
import { Button, FormGroup, Input, Label, Modal, ModalBody } from "reactstrap"

import 'scss/css/style.css';

type JoinGameModalProps = {
    toggle: () => void;
    isOpen: boolean;
    submit: (room: string) => void;
    args: any
}

const JoinGameModal = ({toggle, isOpen, submit, args}: JoinGameModalProps): JSX.Element => {
    const [roomId, setRoomId] = useState<string>('');

    return (
        <Modal isOpen={isOpen} toggle={toggle} {...args}>
            <ModalBody>
                <FormGroup>
                    <Label 
                        for='room'
                    >
                        Room ID
                    </Label>
                    <Input
                        id='room'
                        type='text'
                        placeholder='Room ID'
                        value={roomId}
                        onChange={(ev) => setRoomId(ev.target.value)}
                    />
                </FormGroup>
                <Button
                    color='primary'
                    onClick={() => submit(roomId)}
                >
                    Join Room
                </Button>
                <Button
                    className='ms-3'
                    color='danger'
                    onClick={toggle}
                >
                    Cancel
                </Button>
            </ModalBody>
        </Modal>
    )
}

export default JoinGameModal;