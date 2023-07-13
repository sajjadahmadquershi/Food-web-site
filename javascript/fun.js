let course = [
  ['sajjad', 'ahmad', '03215302092', 'zahoor', '1993-03-01'],
['waj', 'ahmad', '0321530', 'zahoor', '1994-03-01'],
['abjjad', 'ahmad', '15302092', 'zahoor', '1998-03-01'],
['abjjad', 'ahmad', '15302092', 'zahoor', '1998-03-01'],
['abjjad', 'ahmad', '15302092', 'zahoor', '1998-03-01'],
['abjjad', 'ahmad', '15302092', 'zahoor', '1998-03-01'],
['abjjad', 'ahmad', '15302092', 'zahoor', '1998-03-01'],
['abjjad', 'ahmad', '15302092', 'zahoor', '1998-03-01'],
];
editform = (indexnum) => {
    return (`      
    <div class="leftsection">
        <div class="row">
            <div class="col">
            <input type='hidden' id='recordID' value='${indexnum}'/>
                <input type="text" class="form-control" placeholder="First name" aria-label="First name" id="editfname" value="${course[indexnum][0]}"/>
            </div>
            <div class="col">
                <input type="tel" class="form-control" placeholder="phone no" aria-label="Last name" id="editlname" value="${course[indexnum][1]}"/>
            </div>
        
            <div class="col">
                <input type="text" class="form-control" placeholder="last name" aria-label="First name" id="editphone" value="${course[indexnum][2]}">
            </div>
            <div class="col">
                <input type="text" class="form-control" placeholder="father namr name" aria-label="Last name"
                    id="editfathername" value="${course[indexnum][3]}">
            </div>
            <div class="col">
                <input type="date" class="form-control" placeholder="date of barth" aria-label="Last name"
                    id="editdate" value="${course[indexnum][4]}">
            </div>
            <div class="col-12">
                <button type="submit" class="btn btn-primary" onclick="restore()">restore</button>
            </div>
        </div>
    </div>
`)
}
let formleft = () => {
    return (`
    <div class="row">
    <div class="col">
        <input type="text" value="" class="form-control" placeholder="First name" aria-label="First name" id="inp1">
    </div>
    <div class="col">
        <input type="tel" class="form-control" placeholder="phone no" aria-label="Last name" id="inp2">
    </div>

    <div class="col">
        <input type="text" class="form-control" placeholder="last name" aria-label="First name" id="inp3">
    </div>
    <div class="col">
        <input type="text" class="form-control" placeholder="father namr name" aria-label="Last name"
            id="inp4">
    </div>
    <div class="col">
        <input type="date" class="form-control" placeholder="date of barth" aria-label="Last name"
            id="inp5">
    </div>
    <div class="col-12">
        <button type="submit" class="btn btn-primary" onclick="addcourse()">submit</button>
    </div>
</div>`)
};
let addcourse = () => { 
    course.push([inp1.value, inp2.value, inp3.value, inp4.value, inp5.value]);
    rowrightt.innerHTML = listcourse();
    rowleft.innerHTML = formleft();
    if (option==5) {
      rowrightt.innerHTML = null;
      contanierr.innerHTML = listcourse();
      
    }
};
var listcourse = () => {
  if (option==5) {
    let b = "<table border = '1'>"
    b += '<tr>' +
        '<th>' + 'ID'            + '</th>' +
        '<th>' + 'First Name'    + '</th>' +
        '<th>' + 'last name'     + '</th>' +
        '<th>' + 'Phone'         + '</th>' +
        '<th>' + 'Father name'   + '</th>' +
        '<th>' + 'Date of barth' + '</th>' +
        '<th colspan="2">' + 'Buttons' + '</th>' +
        '</tr>';
    for (let i = 0; i < course.length; i++) {
       b += '<tr>' +
            '<td>' + [i+1]        + '</td>' + 
            '<td>' + course[i][0] + '</td>' + //i + '<br>' + k.length + '<br>' + '</td>' +
            '<td>' + course[i][1] + '</td>' +
            '<td>' + course[i][2] + '</td>' +
            '<td>' + course[i][3] + '</td>' +
            '<td>' + course[i][4] + '</td>' +
            '<td>' + '<button class="btn btn-primary" onclick="edit(' + i + ')">edit</button>' + '</td>' +
            '<td>' + '<button class="btn btn-primary" onclick="coursedelete(' + i + ')">Delete</button>' + '</td>' +
            '<td>' + '<button class="btn adbtn" btn-primary" onclick="addd()">Add</button>' + '</td>' +
            '</tr>';
    };
    b += '</table>'
    return (b)
  }else{
    let b = "<table border = '1'>"
    b += '<tr>' +
        '<th>' + 'ID'            + '</th>' +
        '<th>' + 'First Name'    + '</th>' +
        '<th>' + 'last name'     + '</th>' +
        '<th>' + 'Phone'         + '</th>' +
        '<th>' + 'Father name'   + '</th>' +
        '<th>' + 'Date of barth' + '</th>' +
        '<th colspan="2">' + 'Buttons' + '</th>' +
        '</tr>';
    for (let i = 0; i < course.length; i++) {
       b += '<tr>' +
            '<td>' + [i+1]        + '</td>' + 
            '<td>' + course[i][0] + '</td>' + //i + '<br>' + k.length + '<br>' + '</td>' +
            '<td>' + course[i][1] + '</td>' +
            '<td>' + course[i][2] + '</td>' +
            '<td>' + course[i][3] + '</td>' +
            '<td>' + course[i][4] + '</td>' +
            '<td>' + '<button class="btn btn-primary" onclick="edit(' + i + ')">edit</button>' + '</td>' +
            '<td>' + '<button class="btn btn-primary" onclick="coursedelete(' + i + ')">Delete</button>' + '</td>' +
            
            '</tr>';
    };
    b += '</table>'
    return (b)
  }
};
let addd=()=>{
  if (option==5) {
    rowleft.innerHTML =formleft();
  }
};
let edit = (indexnum) => {
  rowleft.innerHTML = editform(indexnum)
};
restore = () => {
    let id = recordID.value;
    let fname = editfname.value;
    let lname = editlname.value;
    let phone = editphone.value;
    let fathname = editfathername.value;
    let dfb = editdate.value;
    course[id][0] = fname;
    course[id][1] = lname;
    course[id][2] = phone;
    course[id][3] = fathname;
    course[id][4] = dfb;
    rowrightt.innerHTML = listcourse();
    rowleft.innerHTML = formleft();
    if (option==5) {
      rowrightt.innerHTML = null;
      contanierr.innerHTML = listcourse();
    }
};
let coursedelete = (indexnum) => {
    course.splice(indexnum, 1);
    rowrightt.innerHTML = listcourse();
    if (option==5) {
      rowrightt.innerHTML = null;
      contanierr.innerHTML = listcourse();
    }
};
filterFunction=()=>{
  let inpval = document.getElementById('serchid').value;
  let dropdown = document.getElementById('dropdown');
  inpval = parseInt(inpval)-1;
  console.log('ya ha',inpval);
  let drpitm = "<table>"
  for (let i = inpval; i < course.length; i++) {
    //const element = course[i];
    drpitm+='<tr><div id="dropdiv" onclick="shoscrch('+i+')">'+(i+1)+'<div></tr>'
    //console.log(i);
  }
  drpitm+="</table>"
  dropdown.innerHTML=drpitm;
 let a= course.indexOf(inpval);
}
sho=(ind)=>{
  let shotab = "<table border = '1'><tr>"
  + 
  '<td>'+(ind+1)+'</td>' +
  '<td>'+course[ind][0]+'</td>' + 
  '<td>'+course[ind][1]+'</td>' + 
  '<td>'+course[ind][2]+'</td>' + 
  '<td>'+course[ind][3]+'</td>' +
  '<td>'+course[ind][4]+'</td>' +
  '<td>' + '<button class="btn btn-primary" onclick="edit(' + ind + ')">edit</button>' + '</td>' +
  '<td>' + '<button class="btn btn-primary" onclick="coursedelete(' + ind + ')">Delete</button>' + '</td>' +
  "</tr></table>"
  return(shotab);
}
shoscrch=(ind)=>{
  contanierr.innerHTML=sho(ind)
}
function myFunction() {
  document.getElementById("dropdown").classList.toggle("show");
}
