class ApiError extends Error{
    constructor(
        statusCode,
        message="something went wrong",
        error=[],
        statck=""
    ){
        super(message)
        this.statusCode=statusCode
        this.Data=null ///Assignment: read about this.data
        this.message=message
        this.success=false;
        this.error= this.errors

        if (statck){
            this.stack = stack
        }else{
            Error.captureStackTrace(this, this.constructor)
        }
    }
    
}

export{ ApiError}