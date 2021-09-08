var d = datos.results[0].members;
var tabla = "";
function table(d) {
      tabla+="<tr>" +
      "<th>Name</th>" +
      "<th>Party</th>" +
      "<th>State</th>" +
      "<th>Seniority</th>" +
      "<th>Votes</th>" +
      "</tr>";
  for (let i = 0; i < d.length; i++) {
    tabla += 
      "<tr>" +"<td><a href="+ d[i].url+">"+d[i].first_name +" " +d[i].last_name +"</a>"+"</td>" +
      "<td>" +
      d[i].party +
      "</td>" +
      "<td>" +
      d[i].state +
      "</td>" +
      "<td>" +
      d[i].seniority +
      "</td>" +
      "<td>" +
      d[i].votes_with_party_pct +
      "%" +
      "</td>" +
      "</tr>";
  }
  return tabla;
}

document.getElementById("house-data").innerHTML = table(d);