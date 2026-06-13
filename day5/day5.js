//27 ReferenceError

//28 

//29 ReferenceError

//30 ReferenceError

//32 ReferenceError

//33 jab user type karega toh input event kam karega par jab user tab dabayega toh change event kam karega

//36 is in 
// Q36.html

//38 
function virtualDOM(config) {
    const element = document.createElement(config.tag);

    if (config.props) {
        for (let key in config.props) {
            element.setAttribute(key, config.props[key]);
        }
    }

    if (config.text) {
        element.textContent = config.text;
    }

    if (config.children) {
        config.children.forEach(child => {
            element.appendChild(virtualDOM(child));
        });
    }

    return element;
}


//41
class StorageWrapper {
    set(key, value, ttlSeconds = null) {
        const data = {
            value,
            expiry: ttlSeconds
                ? Date.now() + ttlSeconds * 1000
                : null
        };

        localStorage.setItem(key, JSON.stringify(data));
    }

    get(key) {
        const item = localStorage.getItem(key);

        if (!item) return null;

        const data = JSON.parse(item);

        if (data.expiry && Date.now() > data.expiry) {
            localStorage.removeItem(key);
            return null;
        }

        return data.value;
    }

    remove(key) {
        localStorage.removeItem(key);
    }

    clear() {
        localStorage.clear();
    }
}



//45
function createPubSub() {
    const events = {};

    return {
        subscribe(event, fn) {
            if (!events[event]) {
                events[event] = [];
            }
            events[event].push(fn);
        },

        publish(event, data) {
            if (!events[event]) return;

            events[event].forEach(fn => fn(data));
        },

        unsubscribe(event, fn) {
            if (!events[event]) return;

            events[event] = events[event].filter(
                listener => listener !== fn
            );
        }
    };
}


//46
function getSiblings(el) {
    return [...el.parentElement.children]
        .filter(child => child !== el);
}

function getAncestors(el) {
    const ancestors = [];

    let current = el.parentElement;

    while (current) {
        ancestors.push(current);
        current = current.parentElement;
    }

    return ancestors;
}

function getAllDescendants(el) {
    const descendants = [];

    function traverse(node) {
        [...node.children].forEach(child => {
            descendants.push(child);
            traverse(child);
        });
    }

    traverse(el);

    return descendants;
}


//48
const shortcuts = {
    "Ctrl+s": () => console.log("Saved!"),
    "Ctrl+z": () => console.log("Undo!"),
    "Escape": () => console.log("Cancelled")
};

function addShortcut(key, fn) {
    shortcuts[key] = fn;
}

function removeShortcut(key) {
    delete shortcuts[key];
}

document.addEventListener("keydown", (e) => {
    let key = "";

    if (e.ctrlKey) {
        key = `Ctrl+${e.key.toLowerCase()}`;
    } else {
        key = e.key;
    }

    if (shortcuts[key]) {
        e.preventDefault();
        shortcuts[key]();
    }
});


//56 ReferenceError

//67
class Modal {
    constructor({ title, content, onClose }) {
        this.onClose = onClose;

        this.backdrop = document.createElement("div");
        this.backdrop.style.cssText = `
            position:fixed;
            inset:0;
            background:rgba(0,0,0,0.5);
            display:flex;
            justify-content:center;
            align-items:center;
        `;

        this.modal = document.createElement("div");
        this.modal.style.cssText = `
            background:white;
            padding:20px;
            min-width:300px;
        `;

        this.modal.innerHTML = `
            <button id="closeBtn">X</button>
            <h2>${title}</h2>
            <p>${content}</p>
            <button>OK</button>
        `;

        this.backdrop.appendChild(this.modal);
        document.body.appendChild(this.backdrop);

        this.focusable =
            this.modal.querySelectorAll("button");

        this.focusable[0].focus();

        this.addEvents();
    }

    addEvents() {
        this.modal
            .querySelector("#closeBtn")
            .addEventListener("click", () => this.close());

        this.backdrop.addEventListener("click", (e) => {
            if (e.target === this.backdrop) {
                this.close();
            }
        });

        document.addEventListener(
            "keydown",
            this.handleKeyDown
        );
    }

    handleKeyDown = (e) => {
        if (e.key === "Escape") {
            this.close();
        }

        if (e.key === "Tab") {
            e.preventDefault();

            const active =
                document.activeElement;

            const index =
                [...this.focusable].indexOf(active);

            const next =
                (index + 1) %
                this.focusable.length;

            this.focusable[next].focus();
        }
    };

    close() {
        this.backdrop.remove();

        document.removeEventListener(
            "keydown",
            this.handleKeyDown
        );

        if (this.onClose) {
            this.onClose();
        }
    }
}


//69
class Router {
    constructor() {
        this.routes = [];

        window.addEventListener("popstate", () => {
            this.resolve(location.pathname);
        });
    }

    on(path, handler) {
        this.routes.push({ path, handler });
    }

    navigate(path) {
        history.pushState({}, "", path);
        this.resolve(path);
    }

    back() {
        history.back();
    }

    resolve(url) {
        for (const route of this.routes) {
            const paramNames = [];

            const regex = route.path.replace(
                /:([^/]+)/g,
                (_, name) => {
                    paramNames.push(name);
                    return "([^/]+)";
                }
            );

            const match = url.match(
                new RegExp(`^${regex}$`)
            );

            if (match) {
                const params = {};

                paramNames.forEach((name, index) => {
                    params[name] = match[index + 1];
                });

                route.handler(params);
                return;
            }
        }

        console.log("Route not found");
    }
}


//70
function diff(oldVNode, newVNode, domNode) {
    // Text change
    if (oldVNode.text !== newVNode.text) {
        domNode.textContent = newVNode.text || "";
    }

    // Props update
    const oldProps = oldVNode.props || {};
    const newProps = newVNode.props || {};

    for (let key in newProps) {
        if (oldProps[key] !== newProps[key]) {
            domNode.setAttribute(key, newProps[key]);
        }
    }

    // Children compare
    const oldChildren = oldVNode.children || [];
    const newChildren = newVNode.children || [];

    for (let i = 0; i < newChildren.length; i++) {
        if (oldChildren[i] && domNode.children[i]) {
            diff(
                oldChildren[i],
                newChildren[i],
                domNode.children[i]
            );
        }
    }
}


//74 ReferenceError


//81
class CustomEventTarget {
    constructor() {
        this.events = {};
    }

    addEventListener(type, listener) {
        if (!this.events[type]) {
            this.events[type] = [];
        }

        this.events[type].push(listener);
    }

    removeEventListener(type, listener) {
        if (!this.events[type]) return;

        this.events[type] = this.events[type].filter(
            l => l !== listener
        );
    }

    dispatchEvent(event) {
        if (!this.events[event.type]) return;

        this.events[event.type].forEach(listener => {
            listener(event);
        });
    }
}

class CustomEvent {
    constructor(type, detail = null) {
        this.type = type;
        this.detail = detail;
    }
}


//84 ReferenceError


//86
class SortableTable {
    constructor(data, container) {
        this.data = data;
        this.container = container;
        this.sortColumn = null;
        this.sortDirection = "asc";

        this.render();
    }

    sort(column) {
        if (this.sortColumn === column) {
            this.sortDirection =
                this.sortDirection === "asc" ? "desc" : "asc";
        } else {
            this.sortColumn = column;
            this.sortDirection = "asc";
        }

        this.data.sort((a, b) => {
            if (a[column] < b[column]) {
                return this.sortDirection === "asc" ? -1 : 1;
            }

            if (a[column] > b[column]) {
                return this.sortDirection === "asc" ? 1 : -1;
            }

            return 0;
        });

        this.render();
    }

    render() {
        this.container.innerHTML = "";

        const table = document.createElement("table");
        table.border = "1";

        const headerRow = document.createElement("tr");

        Object.keys(this.data[0]).forEach(column => {
            const th = document.createElement("th");

            let arrow = "";

            if (this.sortColumn === column) {
                arrow =
                    this.sortDirection === "asc"
                        ? " ↑"
                        : " ↓";
            }

            th.textContent = column + arrow;

            th.addEventListener("click", () => {
                this.sort(column);
            });

            headerRow.appendChild(th);
        });

        table.appendChild(headerRow);

        this.data.forEach(row => {
            const tr = document.createElement("tr");

            Object.values(row).forEach(value => {
                const td = document.createElement("td");
                td.textContent = value;
                tr.appendChild(td);
            });

            table.appendChild(tr);
        });

        this.container.appendChild(table);
    }
}


//98 ReferenceErrort