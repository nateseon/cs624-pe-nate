# Input

The program is inputted by user input through the interactive screens of the mobile app. The users add new cities and countries using special forms, and for every city, specific locations are added by the users. The input is text-based mostly, i.e., city names, country names, and location information, entered via the user interface of the app.

# Process

Upon receiving the input, React Native state management processes the app's data. When a user enters a city, country, or location, the corresponding handler function (`addCity`, `addCountry`, or `addLocation`) updates the app's state. The transition between pages is managed by a navigation system that was built using React Navigation, ensuring the latest data is propagated to all components. The app maintains arrays of cities and countries, which are dynamically refreshed as users work within the app.

# Output

The output is graphically presented on the app. Users see updated lists of countries and cities, and can see details for any city, including its locations. The app's interface presents all changes in real time, with instant feedback and an unbroken user experience.