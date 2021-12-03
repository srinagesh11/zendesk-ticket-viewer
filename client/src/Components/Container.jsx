import React, {Component} from "react";
import {Switch, Route} from "react-router-dom"
import TicketDetail from "./TicketDetail";
import TicketsDisplay from "./TicketsDisplay";
class Container extends Component {
    render() {
        return(
            <div>
                <Switch>
                <Route exact path="/">
                    <TicketsDisplay />
                </Route>
                <Route path="/tickets/:ticketId">
                    <TicketDetail />
                </Route>
                </Switch>
            </div>
        );
    }
}

export default Container;