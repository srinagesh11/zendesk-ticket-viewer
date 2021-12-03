import React from 'react';
import {Link} from "react-router-dom"

const Tickets = ({ tickets, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
    <h2 className="text-center">Tickets List</h2>
    <br></br>
    <div className = "row">
           <table className = "table table-striped table-bordered">

               <thead>
                   <tr>
                       <th> Ticket id</th>
                       <th> Ticket URL</th>
                       <th> Created </th>
                       <th> Subject </th>
                       <th> Actions</th>
                   </tr>
               </thead>
               <tbody>
                   {
                       tickets.map(
                           ticket => 
                           <tr key = {ticket.id}>
                                <td> {ticket.id} </td>   
                                <td> {ticket.url} </td>
                                <td> {ticket.created_at} </td>
                                <td> {ticket.subject} </td>
                                <td>
                                    <Link to={{pathname : `/tickets/${ticket.id}`, state : {fromNotifications : ticket}}}>View Ticket</Link>
                                </td>
                           </tr>
                       )
                   }
               </tbody>
           </table>

    </div>
    </div>
   
  );
};

export default Tickets;

