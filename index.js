window.onload = ()=>{
    FetchData()
}

function FetchData(){
    var xhr = new XMLHttpRequest()
    xhr.open("GET","https://api.covid19api.com/summary")
    xhr.setRequestHeader('Content-Type', 'application/json', 'charset=utf-8')
    xhr.send()
    xhr.onload = () => {
        var data = JSON.parse(xhr.response)
        console.log(data)
    }

}