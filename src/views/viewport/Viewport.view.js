import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import {
    Alignment,
    Button,
    Classes,
    Navbar,
    NavbarDivider,
    NavbarGroup,
    NavbarHeading,
    Menu,
    MenuDivider,
    MenuItem,
    Position,
    Popover
} from "@blueprintjs/core";
import { uuid } from 'uuidv4';

import HomeView from '../home/Home.container';
import CounterView from '../counter/Counter.container';
import MailView from "../mail/Mail.container";

import './viewport.css'

export default class ViewportView extends Component {
    constructor(props) {
        super(props);

        console.log("viewport view props: ", props);
    }

    newCounter = (evt) => {
        const {newCounter} = this.props;
        let id = uuid();
        let counter = {
            [id]: {id: id, name: "New Counter", count: 0}
        };

        newCounter(counter);
    };

    render() {
        const {router, toHome, toCounter, toMail} = this.props;

        // todo -> break this out into a reusable component
        const menu = (
            <Menu>
                <MenuItem icon="home" text="Home" onClick={toHome} />
                <MenuItem icon="document" text="Counters" onClick={toCounter} />
                <MenuItem icon="envelope" text="Mail" onClick={toMail} />
                <MenuItem icon="th" text="Table" shouldDismissPopover={false} />
                <MenuItem icon="zoom-to-fit" text="Nucleus" disabled={true} />
                <MenuDivider />
                <MenuItem icon="cog" text="Settings...">
                    <MenuItem icon="add" text="Add new application" />
                    <MenuItem icon="remove" text="Remove application" />
                </MenuItem>
            </Menu>
        );

        // todo -> break this out into a reusable component
        const file = (
            <Menu>
                <MenuItem icon="history" text="New Counter" onClick={this.newCounter} />
            </Menu>
        );

        // todo -> break this out into a reusable component
        const mainNav = (
            <Navbar className="top-navbar">
                <NavbarGroup align={Alignment.LEFT}>
                    <NavbarHeading>Plenum</NavbarHeading>
                    <NavbarDivider />

                    <Popover content={menu} position={Position.BOTTOM_LEFT}>
                        <Button icon="menu" />
                    </Popover>
                </NavbarGroup>

                <NavbarGroup align={Alignment.RIGHT}>
                    <Button className={Classes.MINIMAL} icon="user" />
                    <Button className={Classes.MINIMAL} icon="notifications" />
                    <Button className={Classes.MINIMAL} icon="cog" />
                </NavbarGroup>
            </Navbar>
        );

        // todo -> break this out into a reusable component
        const counterSubNav = (
            <Navbar className="bottom-navbar">
                <NavbarGroup align={Alignment.LEFT}>
                    <Popover content={file} position={Position.BOTTOM_LEFT}>
                        <Button text="File" />
                    </Popover>
                    <Popover content={file} position={Position.BOTTOM_LEFT}>
                        <Button text="Edit" />
                    </Popover>
                    <Popover content={file} position={Position.BOTTOM_LEFT}>
                        <Button text="View" />
                    </Popover>
                </NavbarGroup>
            </Navbar>
        );

        return (
            <div className="root-viewport">

                <div className="root-navbar">
                    {mainNav}
                    {router.location.pathname === "/counter" && counterSubNav}
                </div>

                <div className="main-viewport">
                    <Switch>
                        <Route exact path="/" render={() => (<HomeView />)} />
                        <Route exact path="/counter" render={() => (<CounterView />)} />
                        <Route exact path="/mail" render={() => (<MailView />)} />
                        <Route render={() => (<div>404</div>)} />
                    </Switch>
                </div>

            </div>
        );
    }
}
