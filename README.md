
# Sports Location Finder API

Welcome to the Sports Location Finder API!This API service provides access to a comprehensive list of sports locations based on user interests and various other parameters. Whether you're looking for cricket pitches in India or soccer fields in Brazil, the API is designed to offer detailed information on sports grounds across the globe.

## Features

- **GET /location**: Retrieve a list of sports locations with the ability to filter results based on specific criteria such as sport and country.
- **GET /location/details/:id**: Retrieve details of a specific sports location by its unique identifier.

## Getting Started

To start using the Sports Location Finder API, ensure you have the following prerequisites:

- An API client like Postman or cURL
- Access to the internet

## Base URL

The API is accessible at `[https://dzomxfjyq1.execute-api.us-east-1.amazonaws.com/dev-env/location](https://dzomxfjyq1.execute-api.us-east-1.amazonaws.com/dev-env/location?sport=cricket&country=india)`.

## Authentication

Currently, the API does not require authentication.

## Endpoints

### GET /location

Retrieves a list of available sports locations. You can apply filters to narrow down the search results based on your preferences.

**Query Parameters:**

- `sport` : Filter locations by sport type.
- `country` : Filter locations by country.

### GET /location/details/:id

Retrieves the details of a specific sports location by its unique identifier.

**Path Parameters:**

- `id` (required): The unique identifier of the sports location to retrieve.

## Response Format

The response will be in JSON format. Here is an example of a successful response for the `GET /location` endpoint:

```json
[
  {
    "_id": "65d759358cc578630581a3b8",
    "sport": "Cricket",
    "country": "India",
    "details": [
      {
        "city": "Mumbai",
        "address": "Wankhede Stadium, D Road, Churchgate",
        "pincode": "400020",
        "_id": "65d759358cc578630581a3b9"
      },
      {
        "city": "Kolkata",
        "address": "Eden Gardens, BBD Bagh",
        "pincode": "700021",
        "_id": "65d759358cc578630581a3ba"
      }
    ],
    "__v": 0
  }
]
```

This JSON response provides detailed information about sports locations, including the sport type, country, city, address, and pincode for each location.
