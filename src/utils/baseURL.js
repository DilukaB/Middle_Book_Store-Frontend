const getBaseUrl = () => {
    if (process.env.NODE_ENV === "production") {
        return "https://your-production-domain.com"; // Replace with your actual production URL
    }
    return "http://localhost:5000"; // Use HTTP for local development
};

export default getBaseUrl;
