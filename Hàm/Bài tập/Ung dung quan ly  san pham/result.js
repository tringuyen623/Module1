let listOfProduct = ['Iphone', 'Samsung', 'Oppo','Nokia', 'Xiaomi'];

function showProduct(){
    let list = '';
    for (let i = 0; i < listOfProduct.length; i++){
        list += '<tr><td>' + 'No.' + (i + 1) + '<td>' + listOfProduct[i] + '</td>' + '<td><button id="edit" onclick="editProduct(' + i + ')">Edit</button></td>'
         + '<td><button id="del" onclick="deleteProduct(' + i + ')">Delete</button></td> </tr>';
        //  document.getElementById('main').innerHTML = mainBody
    }   
    document.getElementById('showProduct').innerHTML = list;
}

function addNewproduct(){
    let newProduct = document.getElementById('add').value;
    listOfProduct.push(newProduct);
    showProduct();
}

function editProduct(i){
    let edit = prompt('Enter the value');
    if (edit !== '')
    listOfProduct[i] = edit;
    showProduct();
}

function deleteProduct(i){
    listOfProduct.splice(i,1);
    showProduct();
}
showProduct();