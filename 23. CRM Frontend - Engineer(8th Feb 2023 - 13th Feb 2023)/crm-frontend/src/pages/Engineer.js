import React, { useEffect, useState} from "react";
import Sidebar from "../componenets/Sidebar"
import TicketsCard from "../componenets/TicketsCard";
import MaterialTable from "@material-table/core";
import { ExportCsv, ExportPdf } from "@material-table/exporters";
import fetchTickets from "../utils/fetchTickets"; 
import updateTicketCounts from "../utils/updateTicketCounts";
import { Modal } from 'react-bootstrap'

function Enginner() {
    const [ticketUpdateModal, setTicketUpadteModal] = useState(false)
    const [ticketStatusCount, setTicketStatusCount] = useState({
        open: 0,
        closed: 0,
        in_progress: 0,
        blocked: 0,
        total: 1
        })
        const [message, setMessage] = useState("")
        const [ticketDetails, setTicketDetails] = useState([])
        const [selectedTicket, setSeletedTicket] = useState({})

        useEffect(() => {
            (async () => {
                let tickets = await fetchTickets(localStorage)
                updateTicketCounts(tickets, setTicketStatusCount)
                setTicketDetails(tickets)
           })()
        },[]) 

        const closeTicketUpdationModal = () => setTicketUpadteModal(false)
        const editTicket = (ticket) => {
            const ticketCopy = {...ticket}
            setSeletedTicket(ticketCopy)
            setTicketUpadteModal(true)

        }
        const onTicketUpdate = (e) => {
            if(e.target.name === 'title') 
            selectedTicket.title = e.target.value
            else if(e.target.name === 'description')
                 selectedTicket.description = e. target.value
            else if(e.target.name === "status")
                 selectedTicket.status = e.target.value
            else if(e.target.name === "ticketPriority")
                 selectedTicket.ticketPriority = e.target.value
            setSeletedTicket({ ...selectedTicket })            
        }

    return (
        <div className="bg-light">
            <div className="col-1"><Sidebar home= '/'/></div>
            <div className="container vh-100">
                <div className="pt-4">
                <h3 className="text-primary text-center">Welcome {localStorage.name},</h3>
                <p className="text-muted text-center">Take a  look at your dashboard.</p>
                </div>
                {/* cards */}
                <div className="row my-4 mx-2 text-center">
                   {/* Open */}
                    <TicketsCard 
                    color='bg-primary' 
                    icon='bi-pencil' 
                    type= 'open' 
                    count = {ticketStatusCount.open} 
                    total={ticketStatusCount.total}
                    borders = 'borders-b'  />

                {/* In Progress */}
                <TicketsCard 
                    color='bg-warning' 
                    icon='bi-lightning-charge' 
                    type= 'In Progress' 
                    count = {ticketStatusCount.in_progress} 
                    total={ticketStatusCount.total}  
                    borders = 'borders-y'  />

                {/* Closed */}
                <TicketsCard 
                    color='bg-success' 
                    icon='bi-check2-circle' 
                    type= 'Closed' 
                    count = {ticketStatusCount.closed} 
                    total={ticketStatusCount.total}  
                    borders = 'borders-g'  />

                    {/* Blocked */}
                    <TicketsCard 
                    color='bg-secondery' 
                    icon='bi-slash-circle' 
                    type= 'Blocked' 
                    count = {ticketStatusCount.blocked} 
                    total={ticketStatusCount.total}  
                    borders = 'borders-grey'  />

                </div>
                <hr />
                <p className="text-success">{message}</p>
                <MaterialTable
                  onRowClick={(event, rowData) => editTicket(rowData)} 
                   data={ticketDetails}
                   title="TICKETS ASSIGNED TO YOU"
                    columns={[
                        {
                            title: "Ticket ID",
                            field: "id",
                        },
                        {
                            title: "TITLE",
                            field: "title",
                        },
                        {
                            title: "DESCRIPTIONS",
                            field: "description",
                            filtering: false
                        },
                        {
                            title: "REPORTER",
                            field: "reporter",
                        },
                        {
                            title: "PRIORITY",
                            field: "ticketPriority",
                        }, {
                            title: "ASSIGNEE",
                            field: "assignee",
                        },
                        {
                            title: "Status",
                            field: "status",
                            lookup: {
                                "OPEN": "OPEN",
                                "In_PROGRESS": "IN_PROGRESS",
                                "BLOCKED": "BLOCKED",
                                "CLOSED": "CLOSED"

                            },
                        },
                    ]}  
                    options={{
                        filtering: true,
                        sorting: true,
                        exportMenu: [{
                            label: 'Export PDF',
                            exportFunc: (cols, datas) => ExportPdf(cols, datas, 'ticketsRecords')
                    }, {
                        label: 'Export CSV',
                        exportFun: (cols, datas) => ExportCsv(cols, datas, 'userRecord')
                    }],
                    headerStyle: {
                        backgroundColor: 'darkblue',
                        color: '#FFF'
                    },
                    rowStyle: { //#222222, #333333, #444444
                        backgroundColor: '#EEE'
                    }
                }}        
                />
                {
                    ticketUpdateModal? (
                        <Modal
                           show={ticketUpdateModal}
                           onHide={closeTicketUpdationModal}
                           backdrop="static"
                           keyboard={false}
                           centered
                        >
                            <Modal.Header closeButton>
                                <Modal.Title>UPDATE TICKET</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <form onSubmit={() => console.log("submitted")}>
                                    <div className="p-1">
                                        <h5 className="card-subtitle mb-2 text-primary lead">Ticket ID: {selectedTicket.id}</h5>
                                        <hr />
                                        <div  className="input-group mb-3">
                                            <span className="input-group-text" id="basic-addon2">Title</span>
                                            <input type='text' className="form-control" name='title' value={selectedTicket.title} onChange={onTicketUpdate} required/>
                                        </div>

                                    </div>
                                </form>
                            </Modal.Body>
                            <Modal.Footer></Modal.Footer>
                        </Modal>
                    ): (
                        ""
                        )
                }
                </div>
            </div>
    );
}

export default Enginner;