# MoviesDatabase API Integration

## API Overview
The **MoviesDatabase API** is a comprehensive data service providing access to millions of records spanning the history of cinema and television. It allows developers to programmatically retrieve detailed metadata, including cast lists, plot summaries, release schedules, and high-resolution imagery. Designed for flexibility, it supports complex filtering, making it an ideal backend for movie discovery apps, streaming aggregators, or cinema research tools.

## Version
**Current Version:** 1.0.0

## Available Endpoints
The API is organized into several key endpoints to help you find specific types of data:

* **`GET /titles`**: The primary search endpoint. Use this to list movies and series with filters for year, genre, and list type.
* **`GET /titles/{id}`**: A lookup endpoint that provides exhaustive details for a single title using its unique identifier (e.g., IMDb ID).
* **`GET /titles/utils/genres`**: A helper endpoint that returns all valid genres used within the database.
* **`GET /titles/x/upcoming`**: A specialized feed for titles with confirmed future release dates.
* **`GET /actors`**: Accesses biographical information and filmographies for actors and crew members.



## Request and Response Format
The API follows REST conventions and uses **JSON** for all data exchange.

### Request Structure
Requests must be sent via `HTTPS`. Filtering is handled through URL query parameters.
**Example:** `https://moviesdatabase.p.rapidapi.com/titles?year=2024&genre=Horror`

### Response Structure
Responses consist of a standardized JSON object. For list-based queries, the API includes pagination metadata to help you navigate large datasets.

**Example Response:**
```json
{
  "page": 1,
  "next": "/titles?page=2",
  "entries": 10,
  "results": [
    {
      "id": "tt0111161",
      "primaryImage": {
        "url": "[https://m.media-amazon.com/images/example.jpg](https://m.media-amazon.com/images/example.jpg)",
        "width": 1000,
        "height": 1500
      },
      "titleText": { "text": "The Shawshank Redemption" },
      "releaseYear": { "year": 1994 }
    }
  ]
}


## Authentication

Authentication is handled via **RapidAPI**. Every request must include your private API key in the headers. Requests without these headers will result in a `401 Unauthorized` error.

**Required Headers:**

| Header | Description |
| :--- | :--- |
| `X-RapidAPI-Key` | Your unique API subscription key. |
| `X-RapidAPI-Host` | `moviesdatabase.p.rapidapi.com` |

---

## Error Handling

The API communicates errors using standard HTTP status codes. Handling these gracefully in your code ensures a better user experience.

* **400 Bad Request:** Often caused by a missing parameter or a typo in the query string.
* **401 Unauthorized:** Your API key is either missing or invalid.
* **404 Not Found:** The specific resource (like a movie ID) does not exist in the database.
* **429 Too Many Requests:** You have hit your rate limit. You must wait before sending more requests.
* **500 Internal Server Error:** A temporary issue on the API server side.

> **Note:** Most client libraries (like `axios` or `fetch`) will throw an error for codes in the 400-500 range. Use `try...catch` blocks to manage these scenarios.

---

## Usage Limits and Best Practices

To maintain high performance and avoid service interruptions, please follow these guidelines:

1.  **Respect Rate Limits:** Monitor the `X-RateLimit-Requests-Remaining` header in the API response to avoid being throttled.
2.  **Use Pagination:** Instead of attempting to fetch all data, use the `page` parameter to load content as the user scrolls.
3.  **Cache Frequently Used Data:** Store lists like Genres locally for 24 hours, as they rarely change, to save on your request quota.
4.  **Debounce Search:** If implementing a live search bar, use a "debounce" function to ensure you only call the API after the user has finished typing.
