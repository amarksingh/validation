const ServiceProvider = require('@ostro/support/serviceProvider');
const Validation = require('./validationManager');
/**
 * Class validationServiceProvider.
 */
class validationServiceProvider extends ServiceProvider {
    /**
     * register method.
     * @returns {any}
     */
    register() {
        this.$app.singleton('validation', function(app) {
            return new Validation(app)
        })
    }
    /**
     * boot method.
     * @returns {any}
     */
    boot() {}

}
module.exports = validationServiceProvider