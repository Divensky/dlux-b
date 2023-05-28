document.addEventListener(
        "DOMContentLoaded", () => {
            const menu = new Mmenu( "#menu", {
                slidingSubmenus: false
            }, {
                    classNames: {
                        selected: "active"
                        },
                    offCanvas: {
                        page: {
                            selector: "#page"
                        }
                    }
                });
        }
    );