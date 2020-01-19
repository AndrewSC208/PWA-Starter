import {Classes, H3} from "@blueprintjs/core";
import React from "react";

export const Inbox = () => (
    <div>
        <H3>Example panel: Angular</H3>
        <p className={Classes.RUNNING_TEXT}>
            HTML is great for declaring static documents, but it falters when we try to use it for declaring dynamic
            views in web-applications. AngularJS lets you extend HTML vocabulary for your application. The resulting
            environment is extraordinarily expressive, readable, and quick to develop.
        </p>
    </div>
);