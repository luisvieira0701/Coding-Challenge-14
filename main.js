// Task 2 Fetch Tickets Using Async/Await and Handle Errors
async function fetchTicketData() {
    const errorMessage = document.getElementById("error-message")


    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/`)

        if (!response.ok) {
            throw new Error("Failed to Fetch API")
        }
        const tickets = await response.json();
        console.log('Tickets:', tickets);

        if (!tickets.length) {
            throw new Error('No tickets found')
        }


    } catch (error) {
        console.log(error)
        errorMessage.textContent = error.message
    }  
}

//Task 3- Display Tickets Dynamically on the Page

tickets.forEach(ticket=>{
    const ticketDiv = document.getElementById("ticket-display");
    ticketDiv.classList.add("ticket")

    const ticketId = document.createElement("h3")
    ticketId.textContent = `Ticket ID: ${ticket.id}`;

    const customerName = document.createElement("p")
    customerName.textContent = `Customer Name: user ${ticket.userID}`

    const issueDescription = document.createElement("p")
    issueDescription.textContent = `Error Description: ${ticket.title}`

    const details = document.createElement("p")
    details.textContent = `Ticket Details: ${ticket.body}`

    ticketDiv.appendChild(ticketId)
    ticketDiv.appendChild(customerName)
    ticketDiv.appendChild(issueDescription)
    ticketDiv.appendChild(details)
        

})

fetchTicketData()