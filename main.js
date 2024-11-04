// Task 2 Fetch Tickets Using Async/Await and Handle Errors
async function fetchTicketData() {
    const errorMessage = document.getElementById("error-message")
    let tickets;

    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/`)

        if (!response.ok) {
            throw new Error("Failed to Fetch API")
        }
        tickets = await response.json();
        console.log('Tickets:', tickets);

        if (!tickets.length) {
            throw new Error('No tickets found')
        }


    } catch (error) {
        console.log(error)
        errorMessage.textContent = error.message
        return;
    }

    //Task 4- Use finally to clean up after the fetch.
    finally {

    }
    //Task 3- Display Tickets Dynamically on the Page
    const ticketDiv = document.getElementById("ticket-display");

    tickets.forEach(ticket=> {
        const ticketElement = document.createElement("div");
        ticketElement.classList.add("ticket")

        const ticketId = document.createElement("h3")
        ticketId.textContent = `Ticket ID: ${ticket.id}`;

        const customerName = document.createElement("p")
        customerName.textContent = `Customer Name: user ${ticket.userId}`

        const issueDescription = document.createElement("p")
        issueDescription.textContent = `Error Description: ${ticket.title}`

        const details = document.createElement("p")
        details.textContent = `Ticket Details: ${ticket.body}`

        ticketElement.appendChild(ticketId)
        ticketElement.appendChild(customerName)
        ticketElement.appendChild(issueDescription)
        ticketElement.appendChild(details)
        
        ticketDiv.appendChild(ticketElement)

    })
}


fetchTicketData()