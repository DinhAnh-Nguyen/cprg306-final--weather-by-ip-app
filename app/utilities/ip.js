// Fetch user's IP
// Create a data value to hold the .json value
// Return only the ip value of the data object
export const fetchIPAddress = async () => {
    const response = await fetch("https://api64.ipify.org?format=json");
    const data = await response.json();
    return data.ip;
};
