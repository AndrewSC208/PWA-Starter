import React from 'react';
import PropTypes from 'prop-types';
import { EditableText, H1, Button, Card, Elevation } from "@blueprintjs/core";

import './counter.css'

export const Counter = ({ counter, increment,  decrement}) => (
    <Card interactive={true} elevation={Elevation.TWO} className="counter">
        <H1 className="center">
            <EditableText
                intent={"primary"}
                maxLength={255}
                placeholder={counter.name}
                selectAllOnFocus={true} />
        </H1>
        <div className="counterActions">
            <Button
                icon="add"
                intent="success"
                className="counterButton"
                onClick={increment(counter)} />

            <span className="counterValue">{counter.count}</span>

            <Button
                icon="remove"
                intent="success"
                className="counterButton"
                onClick={decrement(counter)} />
        </div>
    </Card>
);

Counter.propTypes = {
    counter: PropTypes.object.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
};