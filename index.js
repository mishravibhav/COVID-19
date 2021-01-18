window.onload = () => {
    AllData()
    var form = document.querySelector('form')
    form.addEventListener('submit', FilterData)
}

function AllData() {
    var xhr = new XMLHttpRequest()
    xhr.open('GET', ' https://api.covid19api.com/summary')
    xhr.setRequestHeader('Content-Type', 'application/json', 'charset=utf-8')
    xhr.send()
    xhr.onload = () => {

        var data = JSON.parse(xhr.response)
        var display = document.getElementById('Display')

        // console.log(data)

        for (var i = 0; i < data.Countries.length; i++) {
            var div = document.createElement('div')
            var div1 = document.createElement('div')
            var div2 = document.createElement('div')
            var div3 = document.createElement('div')
            var div4 = document.createElement('div')
            var div5 = document.createElement('div')
            var div6 = document.createElement('div')
            div.append(data.Countries[i].Country)
            div1.append(data.Countries[i].NewConfirmed)
            div2.append(data.Countries[i].NewDeaths)
            div2.style.color = 'red'
            div3.append(data.Countries[i].NewRecovered)
            div3.style.color = 'green'
            div4.append(data.Countries[i].TotalConfirmed)
            div5.append(data.Countries[i].TotalDeaths)
            div5.style.color = 'red'
            div6.append(data.Countries[i].TotalRecovered)
            div6.style.color = 'green'
            display.append(div, div1, div2, div3, div4, div5, div6)

        }

        var NC = document.getElementById('NC')
        NC.innerHTML = (data.Global.NewConfirmed)

        var ND = document.getElementById('ND')
        ND.innerHTML = (data.Global.NewDeaths)

        var NR = document.getElementById('NR')
        NR.innerHTML = (data.Global.NewRecovered)

        var TC = document.getElementById('TC')
        TC.innerHTML = (data.Global.TotalConfirmed)

        var TD = document.getElementById('TD')
        TD.innerHTML = (data.Global.TotalDeaths)

        var TR = document.getElementById('TR')
        TR.innerHTML = (data.Global.TotalRecovered)
    }
}

function FilterData() {
    event.preventDefault()

    var form = new FormData(event.target)
    var payload = {}
    payload.Country = form.get('country-Name')

    // console.log(payload)

    var xhr = new XMLHttpRequest()
    xhr.open('GET', ' https://api.covid19api.com/summary')
    xhr.setRequestHeader('Content-Type', 'application/json', 'charset=utf-8')
    xhr.send()
    xhr.onload = () => {
        var data2 = JSON.parse(xhr.response)
        var Display_filter = document.getElementById('Display-filter-Data')

        // console.log(data2)
        Display_filter.innerHTML ='' 
        for (var i = 0; i < data2.Countries.length; i++) {

            if (data2.Countries[i].Country === payload.Country) {

                var div7 = document.createElement('div')
                var div8 = document.createElement('div')

                var div9 = document.createElement('div')
                div9.style.color = 'red'

                var div10 = document.createElement('div')
                div10.style.color = 'green'

                var div11 = document.createElement('div')

                var div12 = document.createElement('div')
                div12.style.color = 'red'

                var div13 = document.createElement('div')
                div13.style.color = 'green'

                div7.append(data2.Countries[i].Country)
                div8.append(data2.Countries[i].NewConfirmed)
                div9.append(data2.Countries[i].NewDeaths)
                div10.append(data2.Countries[i].NewRecovered)
                div11.append(data2.Countries[i].TotalConfirmed)
                div12.append(data2.Countries[i].TotalDeaths)
                div13.append(data2.Countries[i].TotalRecovered)
                Display_filter.append(div7, div8, div9, div10, div11, div12, div13)
            }

        }
        document.querySelector('form').reset()
    }

}

