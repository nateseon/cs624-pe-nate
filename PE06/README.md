# Input
Users input city and country names via the AddCity and AddCountry forms, respectively. Both inputs also have extra optional location or currency information along with them.

# Process
Data is added to state and passed through props to other screens when the form is submitted. Stack Navigators individually serve Cities and Countries. Users can tap on a city or country to view information in detail, such as its locations or currency.

# Output
The app displays a scrollable list of countries and cities. Tapping on any item opens up a detail screen using stack navigation. The styling is uniform on all the screens, and the empty states are handled beautifully with messages.