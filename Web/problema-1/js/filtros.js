
window.onload = () => {
    console.log(document.querySelector(".table > tbody > tr:nth-child(1) > td:nth-child(1) ").innerHTML);
};

FuncionFiltros = () => {

    var valorFiltrado = {}

    allFilters = document.querySelectorAll("#Nacionalidad");
    allFilters.forEach((filter_i) => {
        col_index = filter_i.parentElement.innerHTML;
        alert(col_index);
    });
}

//Ejecución de la  Función
FuncionFiltros();