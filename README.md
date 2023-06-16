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
Angular, Docker, Zod, Toastr, TypeScript, ngrx , ngx-charts
## Images
![image](https://github.com/ordamari/Weather/assets/63239238/18fb031a-6f25-494e-8ce0-77377dbb8ad6)

![image](https://github.com/ordamari/Weather/assets/63239238/a37470f4-12bf-4f06-8838-180628ab55e2)

## Features
* Search and Weather Details: Users can search for the weather details of any city using the search field. The app displays the current weather conditions and a 5-day forecast for the searched location.

* Favorites Management: Users can save their favorite cities and quickly access them on the favorites page. Each favorite location includes an ID, name. Clicking on a favorite location navigates to the main screen, showing detailed weather information for that location.

* Default Location: The app defaults to displaying the weather details of Tel Aviv. Users can easily switch to their preferred location by searching for it. Additionally, the Geolocation API is integrated to set the  location based on the user's current latitude and longitude.

* Responsive Design: The app is designed to be responsive, ensuring an optimal user experience across various devices and screen sizes. It utilizes flexbox and grid layouts to enhance visual appeal and maintain usability.

* Celsius/Fahrenheit Toggle: Switch between Celsius and Fahrenheit temperature units effortlessly. Adjust the temperature display to match your preferred metric system.

* Skeleton Loading: The app utilizes skeleton loading to improve the user experience when loading data. Skeleton screens provide a visual placeholder that mimics the structure of the content being loaded, giving users a sense of progress and reducing perceived loading times.

* Zod Validation: The app uses Zod, a powerful validation library, to validate data retrieved from the API. This ensures that the data is properly structured and conforms to the expected format before being displayed to the user.
  
* Chart: The app includes a chart to visualize the 5-day forecast data. The chart provides an intuitive representation of temperature trends, allowing users to easily understand and compare weather conditions over time.

* System Theme Integration: The app integrates with the default system theme of the user's browser. It automatically adapts to the user's system theme, providing a consistent and personalized experience.

* Content Security Policy (CSP): The app implements a Content Security Policy to protect against cross-site scripting (XSS) attacks. By setting strict policies, the app reduces the risk of malicious scripts being injected into the application.
  
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

