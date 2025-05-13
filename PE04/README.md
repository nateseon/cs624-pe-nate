# Input
The application starts with a single ProfileCard component containing user information such as an image, name, occupation, and description. This card accepts props that determine its content and whether it should be displayed in full size or as a thumbnail.

# Process
First, a full-sized card layout is created using StyleSheet and styled to center on the screen. Next, a cardThumbnail style is introduced using a transform scale to shrink the card to 20% of its original size. A TouchableHighlight component toggles between full and thumbnail view when pressed. Finally, this single card structure is reused and rendered multiple times using an array of data. The layout is reorganized with flexDirection: 'row' and flexWrap: 'wrap' to display a responsive grid of six cards. Each card maintains its individual toggle state using immutability-helper and onPress handlers.

# Output
The final UI displays a gallery of six profile cards. Each card appears in thumbnail mode by default. When any card is tapped, it expands into full size; tapping again collapses it. The layout adapts fluidly on the screen and provides an interactive, clean gallery experience using Flexbox.