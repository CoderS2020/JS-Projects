console.log("This is Post Man Clone");

//Utlity functions
//1.Utlity function to get DOM element from string
function getElementfromString(string) {
    let div = document.createElement('div');
    div.innerHTML = string;
    return div.firstElementChild;
}

//Intialise number of parameters
let addedparamCount = 0;


//Hide the parameters box initially
let parametersBox = document.getElementById('parametersBox');
// parametersBox.style.display='none';

//IF the user clicks on params,hide json
let paramsRadio = document.getElementById('paramsRadio');
paramsRadio.addEventListener('click', () => {
    document.getElementById('requestJsonBox').style.display = 'none';
    document.getElementById('parametersBox').style.display = 'block';

})

//IF the user clicks on json,hide params
let JSONRadio = document.getElementById('JSONRadio');
JSONRadio.addEventListener('click', () => {
    document.getElementById('requestJsonBox').style.display = 'block';
    document.getElementById('parametersBox').style.display = 'none';

})
//If the user clicks on + button , add more parameters
let addParam = document.getElementById('AddParams');
addParam.addEventListener('click', () => {
    let params = document.getElementById('params');
    let string =
        `<div class="form-row my-2">
                <label for="urlField" class="col-sm-2 col-form-label">Parameter ${addedparamCount + 2}</label>
                <div class="col-md-4">
                    <input type="text" class="form-control" id="ParameterKey${addedparamCount + 2}" placeholder="Enter Parameter ${addedparamCount + 2} Key">
                </div>
                <div class="col-md-4">

                    <input type="text" class="form-control" id="ParameterValue${addedparamCount + 2}" placeholder="Enter Parameter ${addedparamCount + 2} Value">
                </div>
                <button class="btn btn-primary deleteParam">-</button>
            </div>`;

    //Convert the element to DOM node
    let paramElement = getElementfromString(string);
    params.appendChild(paramElement);

    //Add an event listener on clicking on -
    let deleteParam = document.getElementsByClassName('deleteParam');
    for (item of deleteParam) {
        item.addEventListener('click', (event) => {
            event.target.parentElement.remove();
        })
    }
    addedparamCount++;
})

//If the user clicks on submit 
let submit = document.getElementById('submit');
submit.addEventListener('click', () => {
    //Show please wait in the response box to request patience from the user
    document.getElementById('responseJsonText').value = 'Please Wait fetching response....';

    //Fetch all the values user has entered
    let url = document.getElementById('url').value;
    let requestType = document.querySelector("input[name='requestType']:checked").value;
    let contentType = document.querySelector("input[name='contentType']:checked").value;



    //If users has used params option instead of json, collect all the parameters in an object
    if (contentType == 'params') {
        data = {};
        for (i = 0; i < addedparamCount + 1; i++) {
            if (document.getElementById('ParameterKey' + (i + 1)) != undefined) {
                let key = document.getElementById('ParameterKey' + (i + 1)).value;
                let value = document.getElementById('ParameterValue' + (i + 1)).value;
                data[key] = value;
            }
        }
        data=JSON.stringify(data);
    }
    else{
        data=document.getElementById('requestJsonText').value;
    }

    
    //Log all the values in the Console for debugging
    console.log('URL is ', url);
    console.log('requestType is ', requestType);
    console.log('contentType is ', contentType);
    console.log(data);

    
    //IF the request type is GET, invoke FETCH API to post
    if(requestType=='GET'){
        fetch(url,{
            method:'GET',
        })
        .then(response=>response.text())
        .then((text)=>{
            document.getElementById('responseJsonText').value=text;
        })
    }
    //IF the request type is POSt, invoke FETCH API to post
    else{
        fetch(url,{
            method:'POST',
            body:data,
            headers:{
                "Content-type":'application/json; charset=UTF-8'
            }
        })
        .then(response=>response.text())
        .then((text)=>{
            document.getElementById('responseJsonText').value=text;
        })
    }
})
