export const validJsonNoEmpty = (jsonObj) => {
    for (const key in jsonObj) {
        if (jsonObj.hasOwnProperty(key)) {
            const value = jsonObj[key];
            if (value === "") {
                alert(`La propiedad "${key}" no puede estar vacía.`);
                return false;
            }
        }
    }
    return true;
}