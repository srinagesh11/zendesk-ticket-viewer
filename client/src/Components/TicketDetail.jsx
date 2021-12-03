import React from "react"
import {useLocation} from "react-router-dom"


function TicketDetail(props) {
    const location = useLocation()
    const {fromNotifications} = location.state

    return (
        <div>
            <h1>Ticket ID : {fromNotifications.id}</h1>
            <p>Ticket URL : {fromNotifications.url}</p>
            <p>Ticket Created : {fromNotifications.created_at}</p>
            <p>Ticket Subject : {fromNotifications.subject}</p>
            <p>Requester ID : {fromNotifications.requester_id}</p>
            <p>Submitter ID : {fromNotifications.submitter_id}</p>
            <p>Assignee ID : {fromNotifications.assignee_id}</p>
            <p>Organisation ID : {fromNotifications.organization_id}</p>
            <p>Group ID : {fromNotifications.group_id}</p>
        </div>
    )
}

export default TicketDetail