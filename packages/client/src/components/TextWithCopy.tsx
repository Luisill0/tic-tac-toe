import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCopy } from '@fortawesome/free-solid-svg-icons';

import 'scss/css/style.css';
import { Col, Row } from 'reactstrap';

type TextWithCopyProps = {
    text: string;
    size: {
        w: string;
        h: string;
    }
}

const TextWithCopy = ({text, size}: TextWithCopyProps): JSX.Element => {
    const [hasCopied, setHasCopied] = useState<boolean>(false);

    const copyText = async () => {
        await navigator.clipboard.writeText(text);
        setHasCopied(true);
    }

    const getSizeNumber = (size: string) => {
        return parseInt(size.replace(/\D/g,''));
    }

    return (
        <Row
            className='
                border border-2 border-dark rounded
            '
            style={{
                width: size.w,
                height: size.h,
                fontSize: `${getSizeNumber(size.h) * 0.6}px`
            }}
        >
            <Col xs={9}
                className='d-flex justify-content-center align-items-center'
            >
                {text}
            </Col>
            <Col xs={3}
                className='d-flex justify-content-center align-items-center
                    border-start border-dark border-2
                '
            >
                <FontAwesomeIcon
                    icon={
                        hasCopied ? 
                        faCheck
                        :
                        faCopy
                    }
                    onClick={copyText}
                    style={{
                        cursor: 'pointer',
                        color: `${hasCopied ? 'limegreen' : ''}`
                    }}
                />
            </Col>
        </Row>
    )
}

export default TextWithCopy;