function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  d3.json("samples.json").then((data) => {
    var sampleNames = data.names;

    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });

    // Use the first sample from the list to build the initial plots
    var firstSample = sampleNames[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

// Initialize the dashboard
init();

function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildMetadata(newSample);
  buildCharts(newSample);
}

// Demographics Panel 
function buildMetadata(sample) {
  d3.json("samples.json").then((data) => {
    var metadata = data.metadata;
    // Filter the data for the object with the desired sample number
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0];
    // Use d3 to select the panel with id of `#sample-metadata`
    var PANEL = d3.select("#sample-metadata");

    // Use `.html("") to clear any existing metadata
    PANEL.html("");

    // Use `Object.entries` to add each key and value pair to the panel
    // Hint: Inside the loop, you will need to use d3 to append new
    // tags for each key-value in the metadata.
    Object.entries(result).forEach(([key, value]) => {
      PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
    });

  });
}

// 1. Create the buildCharts function.
function buildCharts(sample) {
  // 2. Use d3.json to load and retrieve the samples.json file 
  d3.json("samples.json").then((data) => {
    // 3. Create a variable that holds the samples array. 
    console.log(data);
    var sampleArray=data.samples;
    var metadataArray=data.metadata;

    // 4. Create a variable that filters the samples for the object with the desired sample number.
    var filteredArray=sampleArray.filter(sampleObj=>sampleObj.id==sample);
    console.log(filteredArray);
    var filteredMetadata=metadataArray.filter(sampleObj=>sampleObj.id==sample);  

    //  5. Create a variable that holds the first sample in the array.
    var resultSample=filteredArray[0];
    console.log(resultSample);

    var metadataResult=filteredMetadata[0];

    // 6. Create variables that hold the otu_ids, otu_labels, and sample_values.
    var otuIds=resultSample.otu_ids;
    var otuLabels=resultSample.otu_labels;
    var sampleValues=resultSample.sample_values;

    //Create a variable that holds the washing frequency.
     var washFrequency=metadataResult.wfreq;
   
    // 7. Create the yticks for the bar chart.
    // Hint: Get the the top 10 otu_ids and map them in descending order  
    //  so the otu_ids with the most bacteria are last. 

    var yticks = otuIds.slice(0,10).map(otuid=>"OTU"+otuid).reverse();
    var xticks=sampleValues.slice(0,10).reverse();
    var hoverlabels=otuLabels.slice(0,10).reverse();

    const color_grad1 = {
      linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
      stops: [
      [0, '#fdfc47'],
      [1, '0x0000ff']
        ]};
        
// Deliverable 1: Create bar chart
    // 8. Create the trace for the bar chart. 
    var barData = [{
      x:xticks,
      y:yticks,
      type:'bar',
      text:hoverlabels,
      orientation:"h",
      marker:{
        color: color_grad1
        
      }
    }
    ];
    // 9. Create the layout for the bar chart. 
    var barLayout = {
      title:"Top 10 Bacteria Cultures Trend",
      paper_bgcolor: '#F0F8FF',
      plot_bgcolor: '#F0F8FF'
     
    };
    // 10. Use Plotly to plot the data with the layout. 
    Plotly.newPlot("bar", barData, barLayout);

//Deliverable 2: Create Bubble Chart
    // Create the trace for the bubble chart.
    var bubbleData = [{
      type:'bubble',
      x:otuIds,
      y:sampleValues,
      text:hoverlabels,
      mode:'markers',
      marker: {
        size:sampleValues,
        color:otuIds
      }
     
    }
   
    ];

    // Create the layout for the bubble chart.
    var bubbleLayout = {
      title:'Bacteria Cultures Per Sample',
      xaxis:{title:"OTU ID"},
      hovermode:'closest',
      paper_bgcolor: '#F0F8FF',
      plot_bgcolor: '#F0F8FF'
      
    };

    // Use Plotly to plot the data with the layout.
    Plotly.newPlot("bubble",bubbleData,bubbleLayout); 
  

//Deliverable 3: Create a Gauge Chart

   // Create the trace for the gauge chart.
   var gaugeData = [{
    type:'indicator',
    mode:"gauge+number",
    value:washFrequency,
    gauge: {
      axis: { range: [null, 10], tickcolor: "black" },
      bar: { color: "black" },
      bgcolor: "white",
      borderwidth: 2,
      bordercolor: "gray",
      steps: [
        { range: [0,2], color: '#009a60' },
        { range: [2,4], color: '#4aa84e' },
        { range: [4,6], color: '#92b73a' },
        { range: [6,8], color: '#c6bf22' },
        { range: [8,10], color: '#edbd02' },
      ],
    }
  }
   
  ];
  
  // Create the layout for the gauge chart.
  var gaugeLayout = { 
    title:"Belly Button Washing Frequency<br> Scrubs Per Week",
    width: 500,
    height:400,
    paper_bgcolor:'#F0F8FF',
    plot_bgcolor:'#F0F8FF',
    font: {color: "black", family: "Arial"}
  };

  // Use Plotly to plot the gauge data and layout.
  Plotly.newPlot("gauge",gaugeData,gaugeLayout);

  })
};

