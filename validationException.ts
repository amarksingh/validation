const ValidationExceptionContract = require('@ostro/contracts/validation/validationException')
/**
 * Class ValidationException.
 */
class ValidationException extends ValidationExceptionContract {
    /**
     * Create a new instance.
     */
    constructor() {
        super()
        this.name = this.constructor.name;
        this.message = 'Given data was invalid';
        this.errors = {};
        this.status = 422;
        Error.captureStackTrace(this, this.constructor);
    }
    /**
     * add method.
     * @param {*} attribute
     * @param {*} message
     * @returns {any}
     */
    add(attribute: string, message: string) {
        if (!this.has(attribute)) {
            this.errors[attribute] = [];
        }

        if (this.errors[attribute].indexOf(message) === -1) {
            this.errors[attribute].push(message);
        }
    }

    /**
     * getMessage method.
     * @returns {any}
     */
    getMessage() {
        return this.message
    }

    /**
     * get method.
     * @param {*} attribute
     * @returns {any}
     */
    get(attribute: string) {
        if (this.has(attribute)) {
            return this.errors[attribute];
        }

        return [];
    }

    /**
     * getErrors method.
     * @returns {any}
     */
    getErrors() {
        return this.errors
    }
    /**
     * first method.
     * @param {*} attribute
     * @returns {any}
     */
    first(attribute: string) {
        if (this.has(attribute)) {
            return this.errors[attribute][0];
        }

        return false;
    }

    /**
     * all method.
     * @returns {any}
     */
    all() {
        return this.errors;
    }

    /**
     * has method.
     * @param {*} attribute
     * @returns {any}
     */
    has(attribute: string) {
        if (this.errors.hasOwnProperty(attribute)) {
            return true;
        }

        return false;
    }
}
module.exports = ValidationException