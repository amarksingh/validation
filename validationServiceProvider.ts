import ServiceProvider = require('@ostro/support/serviceProvider');
import Validation = require('./validationManager');

/**
 * Class validationServiceProvider.
 */
class validationServiceProvider extends ServiceProvider {
    /**
     * Register validation service provider in the container.
     */
    public register(): void {
        this.$app.singleton('validation', function(app: any) {
            return new Validation(app);
        });
    }

    /**
     * Boot the service provider.
     */
    public boot(): void {}
}

export = validationServiceProvider;