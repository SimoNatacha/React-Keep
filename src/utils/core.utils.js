export const isEmptyOrNull = value => {
    if (
        value === '' ||
    value === null ||
    value === undefined ||
    value === 'undefined'
    ) {
        return true;
    }
    return false;
};