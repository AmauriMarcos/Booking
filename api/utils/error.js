export const createError = (status, message) => {
    const err = new Error('Something went wrong');
    err.status = status;
    err.message = message;    
    return err;
}