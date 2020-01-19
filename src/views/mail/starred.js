import {Classes, H3} from "@blueprintjs/core";
import React from "react";

export const Starred = () => (
    <div>
        <H3>Example panel: Ember</H3>
        <p className={Classes.RUNNING_TEXT}>
            Ember.js is an open-source JavaScript application framework, based on the model-view-controller (MVC)
            pattern. It allows developers to create scalable single-page web applications by incorporating common idioms
            and best practices into the framework. What is your favorite JS framework?
        </p>
        <input className={Classes.INPUT} type="text" />
    </div>
);