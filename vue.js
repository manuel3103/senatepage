var app = new Vue({  
    el: "#app",  
    data:{
        members: [],
        stadistics: {
            "republicanos":[],
            "totalRep":0,
            "democratas":[],
            "totalDem":0,
            "independientes":[],
            "totalI":0,
            "total":0,
            "pctRep":0,
            "pctDem":0,
            "pctI":0,
            "attenMax":[],
            "attenMin":[],

        }
    }
}); 
var data = fetch(myRequest = new Request("https://api.propublica.org/congress/v1/113/senate/members.json", { 
            method: 'GET',
            headers:  {"X-Api-Key":"Hu0h0244oA4CGLaZsHl3ZOjPSZX7g3olNWb21fT1"}}));

fetch (myRequest).then(response => {
    if(response.json){
        console.log("ddd");
        console.log(response.json);
        return response.json();
    }
   
    throw new Error(response.statesText);
    }).then(data => {
        console.log("aaaa");
        console.log(data.results[0].members);
        app.members = data.results[0].members;
        console.log(app.members);
        calcular(app.members);
        atten(app.members);
        atten2(app.members);
    }).catch(function(error) {
        console.log( "Request failed " + error.message);
});


function calcular(t){
    console.log(t[0].first_name)
    for (let index = 0; index < t.length; index++)
       {
        if(t[index].party === "R") {
            app.stadistics.republicanos.push(t);
        }
        if(t[index].party === "D") {
            app.stadistics.democratas.push(t);
        }
        if(t[index].party === "I") {
            app.stadistics.independientes.push(t);
        }
    }
    console.log("shbjdhw")
    console.log(app.stadistics)
    app.stadistics.totalRep=app.stadistics.republicanos.length;
    app.stadistics.totalDem=app.stadistics.democratas.length;
    app.stadistics.totalI=app.stadistics.independientes.length;
    app.stadistics.total=app.stadistics.republicanos.length+app.stadistics.democratas.length+app.stadistics.independientes.length;
    app.stadistics.pctRep=(app.stadistics.totalRep*100)/(app.stadistics.total);
    app.stadistics.pctDem=(app.stadistics.totalDem*100)/(app.stadistics.total);
    app.stadistics.pctI=(app.stadistics.totalI*100)/(app.stadistics.total);
}

function porc(d){
    var total=d.length;
    var porcentaje=10*total/100;
    return porcentaje;
}

function atten(list) {
    x=porc(list);
    for (let index = 0; index < x; index++) {
        app.stadistics.attenMax[index]=list[index];
    }
    console.log(app.stadistics.attenMax)
}

function invertido(d){
    d.sort((a , b) => { 
        return a.votes_with_party_pct - b.votes_with_party_pct;});
    var total=d.length;
    var porcentaje=10*total/100;
    return porcentaje;
}

function atten2(list) {
    x=invertido(list);
    for (let index = 0; index < x; index++) {
        app.stadistics.attenMin[index]=list[index];
    }
    console.log(app.stadistics.attenMin)
}