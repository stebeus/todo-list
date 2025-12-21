const generateID = () => crypto.randomUUID().replace(/-/g, "").slice(0, 10);

export { generateID };
