
setInterval(()=>{
    fetch("https://api.cricapi.com/v1/cricScore?apikey=%APIKEY%")
    .then((res)=>{
        return res.json()
    }).then ((data)=>{
        console.log(data)
    }).catch((err)=>{
        console.log(err)
    })
})