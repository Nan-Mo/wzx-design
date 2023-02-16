declare const tokenUtils: {
    setToken: (nextToken: string) => void;
    getToken: () => string;
    clearToken: () => void;
    hasToken: () => boolean;
};
export default tokenUtils;
