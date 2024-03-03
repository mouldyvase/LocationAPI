import * as locationservice from '../services/locationservice.js';

export const getAlllocation = async (req, res) => {
    const { sport, country } = req.query;

    // Validate input
    if(!sport || !country){
        return res.status(400).json({message:'Sports and Country should be passed.'})
    }
    if(sport && !(/^[A-Za-z]+$/.test(sport))){
        return res.status(400).json({message: 'Sports should be string'});
    }
    if(country && !(/^[A-Za-z]+$/.test(country))){
        return res.status(400).json({message: 'Country should be string'});
    }

    try {
        // Await the async operation
        const workshops = await locationservice.getAlllocation({ sport, country });

        // Check if no locations were found
        if(workshops.length === 0){
            return res.status(404).json({message: 'No Location found for the sport and country mentioned'});
        }

        // Send the result as JSON
        res.json(workshops);
    } catch (error) {
        console.error("Error fetching locations:", error);
        // Handle errors properly, potentially sending back an error response
        res.status(500).json({message: 'Internal server error'});
    }
};
