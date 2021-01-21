window.onload = () => {
    var xhr = new XMLHttpRequest()
    xhr.open("GET", "https://api.covid19api.com/summary")
    xhr.setRequestHeader('Content-Type', 'application/json', 'charset=utf-8')
    xhr.send()
    xhr.onload = () => {
        var data = (xhr.response)
        FetchData(data)
        GlobalChart(data)
        IndiaChart(data)
    }

}

function FetchData(data) {
    var data = JSON.parse(data)
    console.log(data)
    var Countries = data.Countries

    var Global_Newcnf = document.getElementById('Newcnf')
    var Global_Newrecovered = document.getElementById('Newrecoveries')
    var Global_Newdeath = document.getElementById('Newdeath')

    Global_Newcnf.innerHTML = "+" +  data.Global.NewConfirmed
    Global_Newrecovered.innerHTML = "+" +  data.Global.NewRecovered
    Global_Newdeath.innerHTML = "+" +  data.Global.NewDeaths

    var selectbox = document.getElementById("Selectbox")
    for (var i = 0; i < Countries.length; i++) {
        var option = document.createElement('option')
        option.value = Countries[i].Country
        option.innerHTML =  Countries[i].Country
        selectbox.append(option)
    }

}

function IndiaChart(data) {

    var data = JSON.parse(data)
    var Countries = data.Countries
    console.log(Countries)

    for (var i = 0; i < Countries.length; i++) {
        if (Countries[i].CountryCode == "IN") {
            var Recovered = data.Countries[i].TotalRecovered
            var Case = data.Countries[i].TotalConfirmed
            var Deaths = data.Countries[i].TotalDeaths
        }
    }

    var ctx = document.getElementById('India').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Recovered', 'Cases', 'Deaths'],
            datasets: [{
                data: [Recovered, Case, Deaths],
                backgroundColor: [
                    'rgb(0, 255, 0)',
                    'rgb(255, 204, 0)',
                    'rgb(255, 0, 0)'
                ],
                borderWidth: 1
            }]
        },
    });


}

function GlobalChart(data) {

    var data = JSON.parse(data)

    var Recovered = data.Global.TotalRecovered
    var Case = data.Global.TotalConfirmed
    var Deaths = data.Global.TotalDeaths

    console.log(Recovered, Case, Deaths)



    var ctx = document.getElementById('Global').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Recovered', 'Cases', 'Deaths'],
            datasets: [{
                data: [Recovered, Case, Deaths],
                backgroundColor: [
                    'rgb(0, 255, 0)',
                    'rgb(255, 204, 0)',
                    'rgb(255, 0, 0)'
                ],
                borderWidth: 1
            }]
        }
    });
}