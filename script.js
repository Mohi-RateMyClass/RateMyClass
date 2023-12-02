function loginInfo(){
    var user = document.getElementById("loginuser").value; 
    var pass = document.getElementById("loginpass").value;
alert(pass);
}



function tableMaker(id){
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
    
