const generateID = () => crypto.randomUUID().replace(/-/g, "").slice(0, 10);
const convertDateToObj = (str) => (str ? new Date(str) : null);

export { generateID, convertDateToObj };
