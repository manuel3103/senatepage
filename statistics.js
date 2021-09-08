var d = datos.results[0].members;
var list=datos.results[0].members;
var democratas=0;
var republicanos=0;
var tabla = "";
var votos=0;
function dr(d){
    tabla+="<tr>"+
        "<th>Party</th>"+
        "<th>Number of Reps</th>"+
        "<th>% Voted w/Party</th>"+
        "</tr>";
        for (let i = 0; i < d.length; i++) {
            if(d[i].party=="R"){
                republicanos++;
            }
            if(d[i].party=="D"){
                democratas++;
            }
            votos=votos=d[i].votes_with_party_pct;
        }
        votosR=votos/republicanos;
        votosD=votos/democratas;
        tabla+="<tr>"+
        "<td>Republican</td>"+
        "<td>"+republicanos+"</td>"+
        "<td>"+votosR+"</td>"+
        "</tr>"+
        "<tr>"+
        "<td>Democrat</td>"+
        "<td>"+democratas+"</td>"+
        "<td>"+votosD+"</td>"+
        "</tr>"+
        "<tr>"+
        "<td>Total</td>"+
        "<td>"+(democratas+republicanos)+"</td>"+
        "<td>"+(votosD+votosR)+"</td>"+
        "</tr>";
    return tabla;
}
document.getElementById("house-aten").innerHTML = dr(d);
tabla="";

function porc(d){
    var total=d.length;
    var porcentaje=10*total/100;
    return porcentaje;
}
function invertido(d){
    d.sort((a , b) => { 
        return a.votes_with_party_pct - b.votes_with_party_pct;});
    var total=d.length;
    var porcentaje=10*total/100;
    return porcentaje;
}

function atten(list) {
    x=porc(d);
    tabla+="<tr>"+
        "<th>Name</th>"+
        "<th>Number of Missed Votes</th>"+
        "<th>% Missed</th>"+
    "</tr>";
    for (let i = 0; i < x; i++) {
        tabla+=
        "<tr>"+
        "<td><a href="+list[i].url+">"+list[i].first_name+" "+list[i].last_name+"</a>"+"</td>"+
        "<td>"+list[i].missed_votes+"</td>"+
        "<td>"+list[i].missed_votes_pct+"%"+"</td>"+
    "</tr>";
    } 
    return tabla;
}
document.getElementById("atten").innerHTML = atten(list);

tabla="";
list=datos.results[0].members;
function atten2(list) {
    x=invertido(d);
    tabla+="<tr>"+
        "<th>Name</th>"+
        "<th>Number of Missed Votes</th>"+
        "<th>% Missed</th>"+
    "</tr>";
    for (let i = 0; i < x; i++) {
        tabla+=
        "<tr>"+
        "<td><a href="+list[i].url+">"+list[i].first_name+" "+list[i].last_name+"</a>"+"</td>"+
        "<td>"+list[i].missed_votes+"</td>"+
        "<td>"+list[i].missed_votes_pct+"%"+"</td>"+
    "</tr>";
    } 
    return tabla;
}

document.getElementById("atten2").innerHTML = atten2(list);