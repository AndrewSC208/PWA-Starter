import React, { Component } from 'react';
import { Switch, Route } from 'react-router'
import {
    Alignment,
    Button,
    Classes,
    Navbar,
    NavbarDivider,
    NavbarGroup,
    NavbarHeading
} from "@blueprintjs/core";
// Add all view
// STORY 1 -> Dynamicly load all view with the router somehow
// would be nice if we could just read all the views that are exported
// from the views directory
import HomeView from '../home'
import CounterView from '../counter/Counter.container'

export default class ViewportView extends Component {
    render() {
        return (
            <div className="rootViewPort">
                <Navbar className="navViewport">
                    <NavbarGroup align={Alignment.LEFT}>
                        <NavbarHeading>Plenum</NavbarHeading>
                        <NavbarDivider />
                        <Button
                            className={Classes.MINIMAL}
                            icon="home"
                            text="Home" 
                            onClick={this.props.toHome} />

                        <Button
                            className={Classes.MINIMAL}
                            icon="document"
                            text="Counters" 
                            onClick={this.props.toCounter} />
                    </NavbarGroup>

                    <NavbarGroup align={Alignment.RIGHT}>
                        <button className="bp3-button bp3-minimal bp3-icon-user"></button>
                        <button className="bp3-button bp3-minimal bp3-icon-notifications"></button>
                        <button className="bp3-button bp3-minimal bp3-icon-cog"></button>
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
