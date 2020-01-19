import React from 'react';
import {Tab, Tabs} from "@blueprintjs/core";

import {Inbox} from "./inbox";
import {Starred} from "./starred";
import {Sent} from "./sent";
import {Drafts} from "./drafts";

import "./mail.css";

export const MailView = () => {
    return (
        <div className="root-mail">
            <Tabs animate={true} id="mail" key={"horizontal"} renderActiveTabPanelOnly={true} vertical={false}>
                <Tab id="inbox" title="Inbox" panel={<Inbox />} />
                <Tab id="starred" title="Starred" panel={<Starred />} />
                <Tab id="send-mail" title="Sent Mail" panel={<Sent />} />
                <Tab id="drafts" title="Drafts" panel={<Drafts />} />
            </Tabs>
        </div>
    );
};
