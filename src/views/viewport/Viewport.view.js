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

import HomeView from '../home/Home.container'
import CounterView from '../counter/Counter.container'

export default class ViewportView extends Component {
    render() {
        const {toHome, toCounter} = this.props;

        const renderMenu = (
            <Menu>
                <MenuItem icon="home" text="Home" onClick={toHome} />
                <MenuItem icon="document" text="Counters" onClick={toCounter} />
                <MenuItem icon="map" text="Map" />
                <MenuItem icon="th" text="Table" shouldDismissPopover={false} />
                <MenuItem icon="zoom-to-fit" text="Nucleus" disabled={true} />
                <MenuDivider />
                <MenuItem icon="cog" text="Settings...">
                    <MenuItem icon="add" text="Add new application" />
                    <MenuItem icon="remove" text="Remove application" />
                </MenuItem>
            </Menu>
        );

        return (
            <div className="rootViewPort">
                <Navbar className="navViewport">
                    <NavbarGroup align={Alignment.LEFT}>
                        <NavbarHeading>Plenum</NavbarHeading>
                        <NavbarDivider />

                        <Popover content={renderMenu} position={Position.BOTTOM_LEFT}>
                            <Button icon="menu" text="Menu" />
                        </Popover>
                    </NavbarGroup>

                    <NavbarGroup align={Alignment.RIGHT}>
                        <Button className={Classes.MINIMAL} icon="user" />
                        <Button className={Classes.MINIMAL} icon="notifications" />
                        <Button className={Classes.MINIMAL} icon="cog" />
                    </NavbarGroup>

                </Navbar>

                <div className="mainViewport">
                    <Switch>
                        <Route exact path="/" render={() => (<HomeView />)} />
                        <Route exact path="/counter" render={() => (<CounterView />)} />
                        <Route render={() => (<div>404</div>)} />
                    </Switch>
                </div>
            </div>
        );
    }
}
