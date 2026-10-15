const validation = require('./validation')
const {
    Macroable
} = require('@ostro/support/macro')
const kApp = Symbol('app')
/**
 * Class ValidationManager.
 */
class ValidationManager extends Macroable {
    /**
     * Create a new instance.
     * @param {*} app
     */
    constructor(app: any) {
        super()
        Object.defineProperty(this, kApp, {
            value: app,
        })

    }
    /**
     * make method.
     * @param {*} inputs
     * @param {*} schema
     * @param {*} messages
     * @returns {any}
     */
    make(inputs: any, schema: any, messages: Record<string, any> = {}) {
        return Promise.resolve(new validation(inputs, schema, messages))
    }
    /**
     * validate method.
     * @param {*} inputs
     * @param {*} schema
     * @param {*} messages
     * @returns {any}
     */
    validate(inputs: any, schema: any, messages: Record<string, any> = {}) {
        return this.make(inputs, schema, messages).then(async validation => {
            if (await validation.fails()) {
                return Promise.reject(validation.errors())
            } else {
                return Promise.resolve(true)
            }
        })
    }
    /**
     * extend method.
     * @static
     * @param {*} name
     * @param {*} cb
     * @param {*} message
     * @returns {any}
     */
    static extend(name: string, cb: any, message: string) {
        validation.register(name, cb, message)
    }
    /**
     * extendAsync method.
     * @static
     * @param {*} name
     * @param {*} cb
     * @param {*} message
     * @returns {any}
     */
    static extendAsync(name: string, cb: any, message: string) {
        validation.registerAsync(name, cb, message)
    }
    /**
     * extend method.
     * @param {*} name
     * @param {*} cb
     * @param {*} message
     * @returns {any}
     */
    extend(name: string, cb: any, message: string) {
        validation.register(name, cb, message)
    }
    /**
     * extendAsync method.
     * @param {*} name
     * @param {*} cb
     * @param {*} message
     * @returns {any}
     */
    extendAsync(name: string, cb: any, message: string) {
        validation.registerAsync(name, cb, message)
    }

    /**
     * __call method.
     * @static
     * @param {*} target
     * @param {*} method
     * @param {*} args
     * @returns {any}
     */
    static __call(target: Record<string, any>, method: string, args: any[]) {
        return validation[method](...args);
    }
    /**
     * __call method.
     * @param {*} target
     * @param {*} method
     * @param {*} args
     * @returns {any}
     */
    __call(target: Record<string, any>, method: string, args: any[]) {
        return validation[method](...args);
    }
}

module.exports = ValidationManager
