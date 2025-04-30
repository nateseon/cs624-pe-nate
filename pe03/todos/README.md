# Input
The program begins by allowing the user to enter a todo item using a text input field. The input is managed through a controlled component pattern where the inputValue state reflects the user’s typed text. Users can submit new todos, which are stored in the component's todos array.

# Process
Submitted todos are appended to the list with a unique index and a default completion status of false. The user can toggle each todo’s completion state or delete it. A custom TabBar component enables users to filter todos by type: All, Active, or Complete. One of the biggest challenges I faced was that the TabBar appeared fine on web but was hidden on mobile devices due to the existing tab navigation structure in the app. I resolved this by moving the TabBar inside the ScrollView, ensuring it renders properly across all platforms.

# Output
Filtered todos are dynamically rendered based on the selected type.