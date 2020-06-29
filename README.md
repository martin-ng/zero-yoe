# Zero Yoe

https://zeroyoe.herokuapp.com/

## Introduction

Finding that first job is always challenge especially in the CS industry especially for bootcamp graduates. To assist with the job search, Zero Yoe was created to filter jobs designated for graduates with 0 YOE.

## Technologies

- React: Keeps the UI and state in sync through its virtual DOM.

- Express: Node framework to develop RESTful API endpoints.

- Node: Run-time environment running our server.

- Redis: Open-source in-memory data structure store to persist our data.

## MVP Requirements

1. User will see a list of entry-level positions specifically in the US.

2. User should only see recent job postings that were made within 1 week.

3. The front-end querying jobs from the back-end must not exceed 200 ms.

4. Implement a scheduler that will periodically pull jobs and store them into Redis. This will ensure the data in Redis does not become stale.

## Design Process

1. The back-end is developed with Node. Node will allow the use of JavaScript code to build the front and back-end.

2. Express will be used on top of Node to create our RESTFUL APIs that will interface with public APIs to pull job openings and store them into our database.

3. Data does not require long-term persistence and retrieval speed is more desired. Redis, an in-memory data store is used for these reasons.

4. Cron scheduler will be used to consistently pull data from public APIs at an interval.

5. This web application's front-end will utilize React. React uses the virtual DOM to keep the UI in sync with state. This is a lot less expensive than manipulating the DOM.

## Planned Future Updates

1. Add support for additional public APIs.

2. Restructure the algorithm to transform the data from multiple data sources due to varying data model.

3. In the far future, implement clusters of Redis instance to ensure scalability of this web application.
