(function (root) {
    const DEFAULT_FRUIT = 'banana';
    
    let Router = root.Routy.Router;
    
    function render(context) {
        let $view = $('#view');
        let $source = $("#fruits-template").html();
        let $template = Handlebars.compile($source);
        $view.html($template(context));
    }
    
    class Application {
        constructor() {
            this.setup();
        }

        setup() {
            let router = new Router();
            
            router
                .add('/home')
                .add('/fruits/:name')
                .otherwise('/home')
                .on('change', (req) => {
                    let context = { name: req.namedParams.name || DEFAULT_FRUIT };
                    render(context);
                });
            
            router.run();
        }
    }
    
    document.addEventListener('DOMContentLoaded', function () {
        new Application();
    });
}(window));
