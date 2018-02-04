
trace1 = {
    x: data.year,
    y: data.long_jump,
    type: 'scatter',
    name: 'Long Jump',
    mode: 'markers',
    marker: {
        color: "#2077b4",
        symbol: "hexagram"
    }
};

trace2 = {
    x: data.year,
    y: data.high_jump,
    type: 'scatter',
    name: 'High Jump',
    mode: 'markers',
    marker: {
        color: "orange",
        symbol: "diamond-x"
      }
}

trace3 = {
    x: data.year,
    y: data.discus_throw,
    type: 'scatter',
    name: 'Discus Throw',
    mode: 'markers',
    marker: {
        color: "rgba(156, 165, 196, 1.0)",
        symbol: "cross"
      }
}

data = [trace1, trace2, trace3]

layout = {
    title: "Olympics Trends of 1900"
}

Plotly.newPlot('plot', data, layout)