// Router - Handle URL navigation

class Router {
    constructor() {
        this.routes = {};
        this.currentRoute = null;
    }

    register(path, callback) {
        this.routes[path] = callback;
    }

    navigate(path) {
        if (this.routes[path]) {
            this.currentRoute = path;
            this.routes[path]();
            window.history.pushState({ path }, '', `#/${path}`);
        }
    }

    init() {
        window.addEventListener('popstate', (e) => {
            if (e.state && e.state.path) {
                this.navigate(e.state.path);
            }
        });
    }
}

// Export Router
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Router;
}