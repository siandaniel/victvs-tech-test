# VICTVS 'My Exams' Exam Scheduling Web App

## Introduction

'My Exams' is an interactive exam scheduling web application that allows users to keep track of their upcoming assessments in one, easy-to-navigate user interface. The app uses a back-end API to fetch a list of all upcoming exams, then allows the user to filter the exams on the front-end by candidate name, candidtate ID, date or location. Each exam card has a 'View Map' button, allowing the user to view an interactive map (courtesy of Mapbox) of the precise location of their assessment. The app is responsively designed for optimum accessibility via both mobile and desktop browsers.

## Features

With 'My Exams', you can:

- Access a list of all upcoming exams via GET request to the back-end API;
- Filter the exams by candidate (name or ID), date or location;
- View an interactive Mapbox map of the precise location of your chosen exam;
- Switch between dark mode and light mode to suit your viewing preferences;
- Scroll back to the top of the exam list with ease using the 'back to top' button.

## Run 'My Exams' Locally:

1. Clone this repository to your local machine via your terminal using command _'git clone https://github.com/siandaniel/victvs-tech-test.git'_ in your chosen directory location.

2. Use your terminal's 'cd' comment to navigate into your chosen directory and open it with your chosen code editor, e.g. VS Code.

3. Navigate into the 'api' folder and run _'npm install'_ to install the required dependencies for the API:

   > - **node** _v18.13.0_
   > - **express** _v4.18.2_
   > - **jest** _v29.5.0_
   > - **supertest** _v6.3.3_
   > - **nodemon** _v2.0.22_

4. Use command _'npm start'_ to start the API running on local port 4000. If you wish to use another port, you can change the 'port' variable in the 'listen.js' file. Note: This must be done before running the user interface in order for the locally-hosted data to be accessible on the front-end.

5. Navigate into the 'exam-schedule-system-ui' folder and run _'npm install'_ to install the required dependencies for the user interface:

   > - **node** _v18.13.0_
   > - **axios** _v1.3.6_
   > - **react** _v18.2.0_
   > - **react-dom** _v18.2.0_
   > - **react-router-dom** _v6.10.0_
   > - **react-scripts** _v5.0.1_
   > - **mapbox-gl** _v2.14.1_
   > - **moment** _v2.29.4_

6. Use command _'npm start'_ to open up a version of the app on your local server.

7. You should now be able to view the web app in your browser and make changes as you wish.
