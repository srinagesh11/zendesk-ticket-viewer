import React, { Component } from 'react'
import TicketService from '../services/TicketService'
import Tickets from './Tickets';
import ReactPaginate from 'react-paginate';
import '../Stylesheets/Paginate.css'


class TicketsDisplay extends Component {
    constructor(props) {
        super(props)

        this.state = {
                tickets: [],
                loading: false,
                perPage: 25,
                page: 0,
                pages: 0,
                authentication :  false,
                errorMessage : ""
        }
    }
    
    componentDidMount(){
        this.setState({loading : true})
        TicketService.getTickets().then(response => {
            if(response.data.tickets) {
                this.setState({ authentication : true })
                let ticketsData = response.data.tickets;
                var jsonData = JSON.parse(ticketsData);
                for (var i = 0; i < jsonData.length; i++) {
                    var ticket = jsonData[i];
                    this.setState(prevState => ({
                        tickets: [...prevState.tickets, ticket]
                    }))
                }
                this.setState({
                    pages: Math.floor(this.state.tickets.length / this.state.perPage)
                });
            } else {
                this.setState({ authentication : false })
                this.setState({errorMessage : JSON.stringify(response.data.Error)})
            }
            
        });
        this.setState({loading : false})
    }

    handlePageClick = (event) => {
        let page = event.selected;
        this.setState({page})
    }

    render() {        
        const {page, perPage, pages, tickets} = this.state;
        let curtickets = tickets.slice(page * perPage, (page + 1) * perPage);

        return (
                <div className='container mt-5'>
                    { this.state.authentication 
                        ?
                        <h1 className='text-primary mb-3'>Authentication Successfull</h1>
                        : 
                        <h1 className='text-primary mb-3'>{this.state.errorMessage}</h1>
                    }   
                    {this.state.authentication ? 
                        <>
                        <Tickets tickets={curtickets} loading={this.state.loading} />
                        <ReactPaginate
                        previousLabel={'prev'}
                        nextLabel={'next'}
                        pageCount={pages}
                        onPageChange={this.handlePageClick}
                        containerClassName={'pagination'}
                        activeClassName={'active'}
                    /> </>: null }
                </div>
        )
    }
}

export default TicketsDisplay
