export class NotFoundError extends Error {
    constructor (message = "Resource not found") {
super (message);
this.name = 'NotFoundError';
this.statusCode = 404;
    }
}//constructor function 
//object,property,method