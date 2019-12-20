import React from 'react';
import PropTypes from 'prop-types';
import { EditableText, H1, Button, Card, Elevation } from "@blueprintjs/core";

import './counter.css'

export const Counter = ({ counter, update, destroy}) => {
    const increment = () => {
        counter.count++;
        update(counter);
    };

    const decrement = () => {
        counter.count--;
        update(counter);
    };

    const title = (name) => {
        if (name) {
            counter.name = name;
            update(counter);
        }
    };

    return (
        <Card interactive={true} elevation={Elevation.TWO} className="counter">
            <H1 className="center">
                <EditableText
                    intent={"primary"}
                    maxLength={255}
                    placeholder={counter.name}
                    selectAllOnFocus={true}
                    onConfirm={title}/>
            </H1>
            <div className="counterActions">
                <Button
                    icon="add"
                    intent="success"
                    className="counterButton"
                    onClick={increment}/>

                <span className="counterValue">{counter.count}</span>

                <Button
                    icon="remove"
                    intent="success"
                    className="counterButton"
                    onClick={decrement}/>
            </div>
        </Card>
    );
};

Counter.propTypes = {
    counter: PropTypes.object.isRequired,
    update: PropTypes.func.isRequired,
    destroy: PropTypes.func.isRequired,
};