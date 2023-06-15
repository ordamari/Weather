## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Images](#images)
* [Features](#features)
* [Setup](#setup)

## General info
This is a simple and responsive weather app developed using Angular. It allows users to search for weather details of cities, save them as favorites, and view a 5-day forecast. The app integrates with the AccuWeather API to retrieve weather data.<br/>
[Link to preview project](https://ordamari.github.io/Weather)
## Technologies
Angular, Docker, Zod, Toastr, TypeScript
## Images

## Features
* Search and Weather Details: Users can search for the weather details of any city using the search field. The app displays the current weather conditions and a 5-day forecast for the searched location.

* Favorites Management: Users can save their favorite cities and quickly access them on the favorites page. Each favorite location includes an ID, name. Clicking on a favorite location navigates to the main screen, showing detailed weather information for that location.

* Default Location: The app defaults to displaying the weather details of Tel Aviv. Users can easily switch to their preferred location by searching for it. Additionally, the Geolocation API is integrated to set the default location based on the user's current latitude and longitude.

* Responsive Design: The app is designed to be responsive, ensuring an optimal user experience across various devices and screen sizes. It utilizes flexbox and grid layouts to enhance visual appeal and maintain usability.

* Error Handling: Error handling is implemented to provide a smooth user experience. Errors, such as failed API requests, are handled gracefully using toast notifications or modal dialogs.

* Dark/Light Theme Support: Personalize your app experience by toggling between dark and light themes. Choose the theme that best suits your preferences and enhances readability.

* Celsius/Fahrenheit Toggle: Switch between Celsius and Fahrenheit temperature units effortlessly. Adjust the temperature display to match your preferred metric system.

* Animations: The app includes tasteful animations that enhance the user interface and provide a visually engaging experience

## Setup

### Docker compose for EZ setup
### App will be serve at http://localhost:3031 - you can change the port in the docker compose if you like 

```
version: '3.8'

services:
    web-app:
        image: 'ordamari/weather:latest'
        ports:
            - '3031:80'
```

### Local run
`pnpm i && pnpm start`

Note: npm should work the same.

