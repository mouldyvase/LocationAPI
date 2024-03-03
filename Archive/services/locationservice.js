import sportsLocations from "../models/location.js";

export const getAlllocation = async (filters = {}) => {
    try {
        let query = {};

        // Log the incoming filters to ensure they're what you expect
        console.log("Incoming filters:", filters);

        if (filters.sport) {
            query.sport = { '$regex': new RegExp(filters.sport, 'i') };
        }

        if (filters.country) {
            query.country = { '$regex': new RegExp(filters.country, 'i') };
        }

        // Log the constructed query to verify its structure
        console.log("Constructed query:", query);

        // Fetch filtered locations from the database
        const locations = await sportsLocations.find(query);

        // Log the query result to debug the output
        console.log("Query result:", locations);

        return locations;
    } catch (error) {
        console.error("Error fetching locations:", error);
        throw error;
    }
};
