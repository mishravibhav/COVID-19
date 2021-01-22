window.onload = () => {
    var form = document.querySelector('form')
    form.addEventListener('submit', FilterData)
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

function FilterData() {

    event.preventDefault()
    var form = new FormData(event.target)
    var name = form.get("Selectbox")
    // console.log(name)

    var display = document.getElementById('Display')
    display.innerHTML = ""

    var Countries =""

    var xhr = new XMLHttpRequest()
    xhr.open("GET", "https://api.covid19api.com/summary")
    xhr.setRequestHeader('Content-Type', 'application/json', 'charset=utf-8')
    xhr.send()
    xhr.onload = () => {
        var data = (xhr.response)
        var data2 = JSON.parse(data)

        Countries = data2.Countries

        if(name == "All"){
            FetchData(data)
        }

       else{
        var div1 = document.createElement('div')
        div1.innerHTML = "Country"
        div1.style.border = "1px solid black"
        div1.style.backgroundColor = "DodgerBlue"
        div1.style.color = "white"
    
        var div2 = document.createElement('div')
        div2.innerHTML = "TotalConfirmed"
        div2.style.border = "1px solid black"
        div2.style.backgroundColor = "Tomato"
        div2.style.color = "white"
    
        var div3 = document.createElement('div')
        div3.innerHTML = "TotalRecovered"
        div3.style.border = "1px solid black"
        div3.style.backgroundColor = "green"
        div3.style.color = "white"
    
        var div4 = document.createElement('div')
        div4.innerHTML = "TotalDeaths"
        div4.style.border = "1px solid black"
        div4.style.backgroundColor = "Red"
        div4.style.color = "white"
    
        var div5 = document.createElement('div')
        div5.innerHTML = "NewConfirmed"
        div5.style.border = "1px solid black"
        div5.style.backgroundColor = "Tomato"
        div5.style.color = "white"
    
    
        display.append(div1, div2, div3, div4, div5)
            
    
            for (var i = 0; i < Countries.length; i++) {
                if (Countries[i].Country === name) {
        
                    // console.log(Countries)
        
                    var div1 = document.createElement('div')
                    div1.innerHTML = Countries[i].Country
                    div1.style.border = "1px solid black"
        
                    var div2 = document.createElement('div')
                    div2.innerHTML = Countries[i].TotalConfirmed
                    div2.style.border = "1px solid black"
                    div2.style.color = "Orange"
        
                    var div3 = document.createElement('div')
                    div3.innerHTML = Countries[i].TotalRecovered
                    div3.style.border = "1px solid black"
                    div3.style.color = "green"
        
                    var div4 = document.createElement('div')
                    div4.innerHTML = Countries[i].TotalDeaths
                    div4.style.border = "1px solid black"
                    div4.style.color = "Red"
        
                    var div5 = document.createElement('div')
                    div5.innerHTML = "+" + Countries[i].NewConfirmed
                    div5.style.border = "1px solid black"
                    div5.style.color = "Orange"
        
                    display.append(div1, div2, div3, div4, div5)
        
                }
                
            }
            
            
        }
    }


}

function FetchData(data) {
    var data = JSON.parse(data)
    // console.log(data)
    var Countries = data.Countries

    var Global_Newcnf = document.getElementById('Newcnf')
    var Global_Newrecovered = document.getElementById('Newrecoveries')
    var Global_Newdeath = document.getElementById('Newdeath')

    Global_Newcnf.innerHTML = "+" + data.Global.NewConfirmed
    Global_Newrecovered.innerHTML = "+" + data.Global.NewRecovered
    Global_Newdeath.innerHTML = "+" + data.Global.NewDeaths

    var selectbox = document.getElementById("Selectbox")
    for (var i = 0; i < Countries.length; i++) {
        var option = document.createElement('option')
        option.value = Countries[i].Country
        option.innerHTML = Countries[i].Country
        selectbox.append(option)
    }

    var display = document.getElementById('Display')

    var div1 = document.createElement('div')
    div1.innerHTML = "Country"
    div1.style.border = "1px solid black"
    div1.style.backgroundColor = "DodgerBlue"
    div1.style.color = "white"

    var div2 = document.createElement('div')
    div2.innerHTML = "TotalConfirmed"
    div2.style.border = "1px solid black"
    div2.style.backgroundColor = "Tomato"
    div2.style.color = "white"

    var div3 = document.createElement('div')
    div3.innerHTML = "TotalRecovered"
    div3.style.border = "1px solid black"
    div3.style.backgroundColor = "green"
    div3.style.color = "white"

    var div4 = document.createElement('div')
    div4.innerHTML = "TotalDeaths"
    div4.style.border = "1px solid black"
    div4.style.backgroundColor = "Red"
    div4.style.color = "white"

    var div5 = document.createElement('div')
    div5.innerHTML = "NewConfirmed"
    div5.style.border = "1px solid black"
    div5.style.backgroundColor = "Tomato"
    div5.style.color = "white"

    display.append(div1, div2, div3, div4, div5)

    for (var i = 0; i < Countries.length; i++) {
        var div1 = document.createElement('div')
        div1.innerHTML = Countries[i].Country
        div1.style.border = "1px solid black"

        var div2 = document.createElement('div')
        div2.innerHTML = Countries[i].TotalConfirmed
        div2.style.border = "1px solid black"
        div2.style.color = "Orange"

        var div3 = document.createElement('div')
        div3.innerHTML = Countries[i].TotalRecovered
        div3.style.border = "1px solid black"
        div3.style.color = "green"

        var div4 = document.createElement('div')
        div4.innerHTML = Countries[i].TotalDeaths
        div4.style.border = "1px solid black"
        div4.style.color = "Red"

        var div5 = document.createElement('div')
        div5.innerHTML = "+" + Countries[i].NewConfirmed
        div5.style.border = "1px solid black"
        div5.style.color = "Orange"

        display.append(div1, div2, div3, div4, div5)
    }

}

function IndiaChart(data) {

    var data = JSON.parse(data)
    var Countries = data.Countries
    // console.log(Countries)

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

    // console.log(Recovered, Case, Deaths)



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