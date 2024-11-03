// Task 2 Fetch Tickets Using Async/Await and Handle Errors
async function fetchTicketData() {
    const ticketDiv = document.getElementById("ticket-display");
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






fetchTicketData()