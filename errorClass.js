

class ErrorEvent 
{
    constructor(message, status)
    {
        this.message = message;
        this.status = status;
        console.log("Error: ", this.message);
    }
    getStatusCode() {
        return this.status;
    }
    getErrorMessage() {
        return this.message;
    }
}

module.exports = ErrorEvent;
