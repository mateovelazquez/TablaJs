let data = [
    { 'name': 'Isabella', 'age': '25 ', 'birthdate': '11/10/1989',  'address': 'Suite 50' },
    { 'name': 'Benjamín', 'age': '42', 'birthdate': '10/1/1989', 'address': '18th Floor' },
    { 'name': 'Olivia', 'age': '27', 'birthdate': '10/14/1990', 'address': 'PO Box 34699' },
    { 'name': 'Lucas', 'age': '25', 'birthdate': '11/29/1993',  'address': 'Room 1832'},
    { 'name': 'Andrea', 'age': '57', 'birthdate': '3/12/1991',  'address': 'Apt 1092'},
    { 'name': 'Isabella', 'age': '25 ', 'birthdate': '11/10/1989',  'address': 'Suite 50' },
    { 'name': 'Benjamín', 'age': '42', 'birthdate': '10/1/1989', 'address': '18th Floor' },
    { 'name': 'Olivia', 'age': '27', 'birthdate': '10/14/1990', 'address': 'PO Box 34699' },
    { 'name': 'Lucas', 'age': '25', 'birthdate': '11/29/1993',  'address': 'Room 1832'},
    { 'name': 'Andrea', 'age': '57', 'birthdate': '3/12/1991',  'address': 'Apt 1092'},
    { 'name': 'Isabella', 'age': '25 ', 'birthdate': '11/10/1989',  'address': 'Suite 50' },
    { 'name': 'Benjamín', 'age': '42', 'birthdate': '10/1/1989', 'address': '18th Floor' },
    { 'name': 'Olivia', 'age': '27', 'birthdate': '10/14/1990', 'address': 'PO Box 34699' },
    { 'name': 'Lucas', 'age': '25', 'birthdate': '11/29/1993',  'address': 'Room 1832'},
    { 'name': 'Andrea', 'age': '57', 'birthdate': '3/12/1991',  'address': 'Apt 1092'},
    { 'name': 'Isabella', 'age': '25 ', 'birthdate': '11/10/1989',  'address': 'Suite 50' },
    { 'name': 'Benjamín', 'age': '42', 'birthdate': '10/1/1989', 'address': '18th Floor' },
    { 'name': 'Olivia', 'age': '27', 'birthdate': '10/14/1990', 'address': 'PO Box 34699' },
    { 'name': 'Lucas', 'age': '25', 'birthdate': '11/29/1993',  'address': 'Room 1832'},
    { 'name': 'Andrea', 'age': '57', 'birthdate': '3/12/1991',  'address': 'Apt 1092'},
]


const tabla = document.querySelector("table");

function CrearTabla(){
const tablahead = document.createElement("thead");
tabla.appendChild(tablahead);

const filadato = document.createElement("tr");
tablahead.appendChild(filadato);

const colnombre = document.createElement("th");
colnombre.classList.add("col")
colnombre.textContent = "Nombre";
filadato.appendChild(colnombre);

const coledad = document.createElement("th");
coledad.classList.add("col");
coledad.textContent = "Edad";
filadato.appendChild(coledad);

const colcumpleaños = document.createElement("th");
colcumpleaños.classList.add("col");
colcumpleaños.textContent = "Cumpleaños";
filadato.appendChild(colcumpleaños);

const coldireccion = document.createElement("th");
coldireccion.classList.add("col");
coldireccion.textContent = "Direccion";
filadato.appendChild(coldireccion);

const tablabody = document.createElement("tbody");
tablabody.classList.add("table-body")
tabla.appendChild(tablabody);
}

function crearDatos(data){
for(i = 0; i < data.length; i++){
    const datos = document.createElement("tr");
    

    const datos1 = document.createElement("td")
    datos1.textContent = data[i].name;
    datos.appendChild(datos1);

    const datos2 = document.createElement("td")
    datos2.textContent = data[i].age;
    datos.appendChild(datos2);

    const datos3 = document.createElement("td")
    datos3.textContent = data[i].birthdate;
    datos.appendChild(datos3);

    const datos4 = document.createElement("td")
    datos4.textContent = data[i].address;
    datos.appendChild(datos4);

    tabla.appendChild(datos);
}
}

CrearTabla();
crearDatos(data);

function tableSearch(){
    let input, filtro, tbody, fila, valorTexto;
    
    input = document.getElementById("search");

    filtro = input.value.toUpperCase();

    tbody = document.querySelector(".table-body")

    fila = tbody.getElementsByTagName("tr")
    

    
    for(i = 0; i < fila.length; i++){
        td = fila[i].getElementsByTagName("td")[0];

        if(td){
            valorTexto = td.textContent || td.innerText;
            if(valorTexto.toUpperCase().indexOf(filtro) > -1){
                fila[i].style.display = "";
            }else{
                fila[i].style.display = "none";
            }
        }
    }
}







