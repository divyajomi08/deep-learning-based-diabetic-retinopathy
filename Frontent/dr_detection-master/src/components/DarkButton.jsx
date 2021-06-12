import React from 'react';
import { Button } from 'antd';

const DarkButton = (props) => {
    return (
        <Button type="primary" style={{ background: "#111d2c"}}>
            {props.text}
        </Button>
    );
}
export default DarkButton;