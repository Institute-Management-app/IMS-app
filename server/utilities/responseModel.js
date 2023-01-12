class ResponseModel{
    constructor(data = null, message = null, errors = []){
        this.data = data;
        this.message = message;
        this.errors = errors;
        this.success = true;
        if(errors.length > 0){
            this.success = false;
        }
    }
}

module.exports = ResponseModel;