
/* -----------  Tabs-------------- */

function openPage(pageName,elmnt,color) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.backgroundColor = color ;
}

// Krijg de element met id="defaultOpen" en klik erop
document.getElementById("defaultOpen").click();


/* ----------- Lijn diagram -------------- */
Chart.defaults.global.defaultFontColor = 'white'; 
var ctx = document.getElementById('line');
var lijndiagram = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Maart', 'April', 'Mei'],
        datasets: [{
            label: 'Verwachtig aantal porties drinken/eten',
            data: [ 850, 500, 400, 200, 100],
            backgroundColor: ["#6DBCDB"],
            
            borderColor: [
                'rgba(109, 188, 219, 1)',
                'rgba(109, 188, 219, 1)',
                'rgba(109, 188, 219, 1)',
                'rgba(109, 188, 219, 1)',
                'rgba(109, 188, 219, 1)',
                'rgba(109, 188, 219, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});


/* ----------- Piechart -------------- */
var ctx = document.getElementById('pie');
var taart = new Chart (ctx, {
    type: 'pie',
    data: {
      labels: ["Verbruikte brandstof", "Aanwezige brandstof"],
      datasets: [{
        label: "Brandstof in de tank",
        backgroundColor: ["#8e5ea2", "#6DBCDB"],
        data: [20,80]
      }]
    },
    options: {
      responsive:true,
      title: {
        display: true,
        text: 'Brandstof in het ruimteschip'
      }
    }
});


/* -----------staaf diagram (bar)-------------- */

var ctx = document.getElementById('bar');
var bar = new Chart (ctx, {
    type: 'horizontalBar',
    data: {
      labels: ["maandag", "dinsdag", "woensdag", "donderdag", "vandaag"],
      datasets: [
        {
          label: "Afgelegde afstand",
          backgroundColor: ["#6DBCDB", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: [70,120,60,80,10]
        }
      ]
    },
    options: {
      responsive:true,
      legend: { display: false },
      title: {
        display: true,
        text: 'Afstand afgelegd in km per dag (X miljard)'
      }
    }
});
