# Plotlydeploy

## Overview of the project
In this project, researchers are searching for a bacterial species that can synthesize proteins that taste like beef. Since human body is the source of thousands of types of bacteria, researchers believe that ideal bacterial species to make synthetic beef is found in human belly button. A sample is taken from navels of people across the country to identify bacterial species that is present in human belly.

We have used Javascript and Plotly.js( a JavaScript data visualization library) to create an interactive data visualization for bacterial data in the web.

Tools used: VS Code, Web Browser, Command Line Interface, Github, HTML

## Purpose of the project

- Create basic plots with Plotly, including bar charts, line charts, and pie charts.
- Use D3.json() to fetch external data, such as CSV files and web APIs.
- Parse data in JSON format.
- Use functional programming in JavaScript to manipulate data.
- Use JavaScript's Math library to manipulate numbers.
- Use event handlers in JavaScript to add interactivity to a data visualization.
- How to use interactivity to enhance your visualizations.
- Deploy an interactive chart to GitHub Pages

## Result

### Belly button demographic panel
When a test subject ID no. option is selected, demographic panel displays the respective demographic data. When the dashboard is first opened in a browser, ID 940’s data is displayed in the dashboard.

<img width="147" alt="Screen Shot 2022-09-22 at 8 43 38 AM" src="https://user-images.githubusercontent.com/107566776/191750267-a719a464-e7a2-48d3-942b-711174fb7365.png">

### A horizontal bar chart that displays top 10 bacterial species
<img width="506" alt="Screen Shot 2022-09-22 at 8 40 34 AM" src="https://user-images.githubusercontent.com/107566776/191750066-dc76cbe1-ba9f-42d2-8a85-53a60b2e1020.png">

- Horizontal bar chart components are;
1. The y values are the otu_ids in descending order
2. The x values are the sample_values in descending order
3. The hover text is the otu_labels in descending order.

- Bar chart summarizes the following result;
1. The top 10 sample_values are sorted in descending order
2. The top 10 sample_values as values
3. The otu_ids as the labels

### A bubble chart that displays bacteria cultures per sample
 When an individual’s ID is selected from the dropdown menu webpage, bubble chart displays bacteria cultures per sample. 

<img width="1283" alt="Screen Shot 2022-09-22 at 8 41 08 AM" src="https://user-images.githubusercontent.com/107566776/191750018-0840c084-c118-4527-9405-4798a44471f5.png">

The bubble chart components are;
1. The otu_ids are the x-axis values.
2. The sample_values are the y-axis values.
3. The sample_values are the marker size.
4. The otu_ids are the marker colors.
5. The otu_labels are the hover-text values.


### A gauge chart that displays the weekly washing frequency's value
When a individual ID is selected from dropdown menu, the gauge chart displays the weekly washing frequency's value as a measure from 0-10 on the progress bar

<img width="406" alt="Screen Shot 2022-09-22 at 8 43 23 AM" src="https://user-images.githubusercontent.com/107566776/191750354-4ffc176b-63c8-4a8f-89bc-31b6c85573ff.png">


### Final customized webpage
<img width="605" alt="Screen Shot 2022-09-21 at 11 15 07 PM" src="https://user-images.githubusercontent.com/107566776/191745319-e70b8933-2a88-4a20-9135-9ab707d4a07f.png">

Link to webpage: https://sirjanashrestha.github.io/Plotlydeploy/
