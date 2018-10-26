export const save = (name, item) => {
    try {
        const strItem = JSON.stringify(item);
        localStorage.setItem(name, strItem)
    }
    catch (e) {
        console.log(e);
    }
};

export const get = (name) => {
    try {
        const item = localStorage.getItem(name);
        return JSON.parse(item);
    }
    catch (e) {
        console.log(e);
    }
};
