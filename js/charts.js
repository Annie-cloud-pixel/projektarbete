/* BAR CHART */
const barCtx = document.getElementById("bar");
new Chart(barCtx, {
  type: "bar",
  data: {
    labels: ["Norge", "Danmark", "Island", "Sverige", "Finland"],
    datasets: [{
      label: 'Bar Plot',
      data: [78, 70, 66, 64, 59],
      backgroundColor: "#212529",
      barPercentage: 0.8
    }]
  },

  options: {
    scales: {
      x: {
        ticks: {
          padding: 12
        },
        grid: {
          drawTicks: false,
          drawOnChartArea: false
        },
        title: {
          display: true,
          text: "x",
          font: {
            size: 12
          }
        }
      },
      y: {
        beginAtZero: true,
        min: 0,
        max: 100,
        ticks: {
          stepSize: 20,
          callback: function (value, index, ticks) {
            return "$" + value;
          }
        },
        grid: {
          drawOnChartArea: false
        },
        title: {
          display: true,
          text: "y",
          font: {
            size: 12
          }
        }
      }
    },
    plugins: {
      title: {
        display: false,
        text: "Title",
        font: {
          size: 16
        }
      },
      subtitle: {
        display: false,
        text: "Subtitle",
        position: "top",
        padding: {
          top: 0,
          bottom: 15
        },
        font: {
          size: 12
        }
      },
      legend: {
        display: false
      },
      elements: {
        line: {
          borderWidth: 3
      },
    }
  }
}
});

/* RADAR CHART */
const radarCtx = document.getElementById("radar");
new Chart(radarCtx, {
  type: 'radar',
  data: {
    labels: ["Kommunikation", "Problemlösning", "Ledarskap", "Samarbete",
"Kreativitet"],
    datasets: [{
      label: 'Radar Plot',
      data: [85, 75, 90, 80, 70],
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
      borderColor: "#212529"
  }]
  },

  options: {
    scales: {
      r: {
          angleLines: {
              display: false
          },
          suggestedMin: 0,
          suggestedMax: 100
      }
    }, 
    plugins: {
      title: {
        display: false,
        text: "Title",
        font: {
          size: 16
        }
      },
      subtitle: {
        display: false,
        text: "Subtitle",
        position: "top",
        padding: {
          top: 0,
          bottom: 15
        },
        font: {
          size: 12
        }
      },
      legend: {
        display: true,
        position: "bottom"
      },
      elements: {
        line: {
          borderWidth: 2.5
      },
    }
  }
}
});

/* SCATTER CHART */
const scatterCtx = document.getElementById("scatter");
new Chart(scatterCtx, {
  type: 'scatter',
  data: {
    datasets: [{
    label: "Scatter Plot",
    data: dataScatter,
    backgroundColor: "#212529"
  }]
  },
  
  options: {
    scales: {
      x: {
        ticks: {
          padding: 12
        },
        grid: {
          drawTicks: false,
          drawOnChartArea: false
        },
        title: {
          display: true,
          text: "x",
          font: {
            size: 12
          }
        }
      },
      y: {
        beginAtZero: true,
        suggestedMin: 0,
        suggestedMax: 100,
        ticks: {
          stepSize: 20,
          callback: function (value, index, ticks) {
            return value;
          }
        },
        grid: {
          drawOnChartArea: false
        },
        title: {
          display: true,
          text: "y",
          font: {
            size: 12
          }
        }
      }
    },
    plugins: {
      title: {
        display: false,
        text: "Title",
        font: {
          size: 16
        }
      },
      subtitle: {
        display: false,
        text: "Subtitle",
        position: "top",
        padding: {
          top: 0,
          bottom: 15
        },
        font: {
          size: 12
        }
      },
      legend: {
        display: true,
        position: "bottom"
      },
      elements: {
        line: {
          borderWidth: 3
      },
    }
  }
}
});

/* LINE CHART */
const lineCtx = document.getElementById("line");
new Chart(lineCtx, {
  type: 'line',
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep",
    "Okt", "Nov", "Dec"],
    datasets: [{
      label: 'Line Plot',
      data: [10, 20, 30, 40, 35, 45, 60, 70, 65, 80, 90, 100],
      fill: false,
      borderColor: "#212529",
      tension: 0.1
  }]
},

options: {
    scales: {
      x: {
        ticks: {
          padding: 12
        },
        grid: {
          drawTicks: false,
          drawOnChartArea: false
        },
        title: {
          display: true,
          text: "x",
          font: {
            size: 12
          }
        }
      },
      y: {
        beginAtZero: true,
        suggestedMin: 0,
        suggestedMax: 100,
        ticks: {
          stepSize: 20,
          callback: function (value, index, ticks) {
            return value;
          }
        },
        grid: {
          drawOnChartArea: false
        },
        title: {
          display: true,
          text: "y",
          font: {
            size: 12
          }
        }
      }
    },
    plugins: {
      title: {
        display: false,
        text: "Title",
        font: {
          size: 16
        }
      },
      subtitle: {
        display: false,
        text: "Subtitle",
        position: "top",
        padding: {
          top: 0,
          bottom: 15
        },
        font: {
          size: 12
        }
      },
      legend: {
        display: false,
        position: "bottom"
      },
      elements: {
        line: {
          borderWidth: 3
      },
    }
  }
}
});

/* PIE CHART */
const pieCtx = document.getElementById("pie");
new Chart(pieCtx, {
  type: 'pie',
  data: {
    labels: ["Ja", "Nej", "Kanske"],
    datasets: [{
      data: [35, 20, 45],
      backgroundColor: [
        'rgba(0, 0, 0, 0.8)',
        'rgba(0, 0, 0, 0.6)',
        'rgba(0, 0, 0, 0.2)'
      ],
      hoverOffset: 4 
  }]
},

options: {
  plugins: {
    title: {
      display: false,
      text: "Title",
      font: {
        size: 16
      }
    },
    subtitle: {
      display: false,
      text: "Subtitle",
      position: "top",
      padding: {
        top: 0,
        bottom: 15
      },
      font: {
        size: 12
      }
    },
    legend: {
      display: true,
      position: "bottom"
    },
    elements: {
      line: {
        borderWidth: 3
      }
    }
  }
}
});

/* MIXED CHART */
const mixedCtx = document.getElementById("mixed");
new Chart(mixedCtx, {
  type: 'bar',
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul"],
    datasets: [{
    label: "Sales",
    data: [65, 59, 80, 81, 56, 55, 40],
    backgroundColor: "#212529",
    barPercentage: 0.8
    }, {
    label: "Expenses",
    data: [28, 48, 40, 19, 86, 27, 90],
    type: "line",
    borderColor: "#DC3545"
    }]
  },

  options: {
    scales: {
      x: {
        ticks: {
          padding: 12
        },
        grid: {
          drawTicks: false,
          drawOnChartArea: false
        },
        title: {
          display: false,
          text: "x",
          font: {
            size: 12
          }
        }
      },
      y: {
        beginAtZero: true,
        min: 0,
        max: 100,
        ticks: {
          stepSize: 20,
          callback: function (value, index, ticks) {
            return "$" + value;
          }
        },
        grid: {
          drawOnChartArea: false
        },
        title: {
          display: true,
          text: "Amount",
          font: {
            size: 12
          }
        }
      }
    },
    plugins: {
      title: {
        display: false,
        text: "Title",
        font: {
          size: 16
        }
      },
      subtitle: {
        display: false,
        text: "Subtitle",
        position: "top",
        padding: {
          top: 0,
          bottom: 15
        },
        font: {
          size: 12
        }
      },
      legend: {
        display: true,
        position: "bottom"
      },
      elements: {
        line: {
          borderWidth: 3
      },
    }
  }
}
});

