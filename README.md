# Zero Yoe

## Introduction

Finding that first job is always challenge especially in the CS industry, especially for bootcamp graduates. To assist with the job search, Zero Yoe was created to filter jobs designated for graduates with 0 YOE.

## MVP

1. This web application will be a single page application. React is used for it virtual DOM and ability to keep the UI in sync with state.

2. The back-end will be developed using Node and JavaScript. This will allow for quick prototype as both the front-end and back-end will be written in the same programming language.

3. Express will be used on top of Node to create our RESTFUL APIs that will interface with public APIs to pull job openings.

4. Redis will be used to persist our data temporarily.

5. Cron in our Node module will be utilized to consistently pull jobs from public APIs at an interval.

## Design Process

Positions marked as entry-level with the expectations of having at least 2+ YOE can be quite frustrating. The premise behind Zero Yoe is to collect job openings from various public APIs and run an algorithm to filter them. Long term storage is not necessary as the web application will run a cron schedular to pull jobs at an interval. The jobs will then be stored in a in-memory data store such as redis to quickly server that data.

## Future Updates
