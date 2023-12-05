function loginInfo(){
    var user = document.getElementById("loginuser").value; 
    var pass = document.getElementById("loginpass").value;
alert(pass);
}
function coursePlanner(){
    var courseChosen = document.getElementById("subject").value;
    console.log(courseChosen);
}
function tableMaker(id){
    if(id == null){
     id = "Classes.csv";   
    }

     fetch(id).then(res => res.text()).then(csv => {

            table.innerHTML = "";

            let rows = csv.split("\n");
            for(let row of rows){
            
            let cols = row.match(/(?:\"([^\"]*(?:\"\"[^\"]*)*)\")|([^\",]+)/g);

            if (cols != null){
                let tr = table.insertRow();
                for(let col of cols){
                    let td = tr.insertCell();                  
                    td.innerHTML = col;
                }
            }
        }
    });    
    };

    function searchTable() {
        var input, filter, found, table, tr, td, i, j;
        input = document.getElementById("search");
        filter = input.value.toUpperCase();
        table = document.getElementById("table");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td");
            for (j = 0; j < td.length; j++) {
                if (td[j].innerHTML.toUpperCase().indexOf(filter) > -1) {
                    found = true;
                }
            }
            if (found) {
                tr[i].style.display = "";
                found = false;
            } else {
                    tr[i].style.display = "none";
            }
        }
    }