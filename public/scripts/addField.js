// procurar botão
document.querySelector("#add-time")

//quando clicar o botão
.addEventListener('click', cloneField)

//executar uma ação
function cloneField() {
    //duplicar campos
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    //pegar os campos
    const fields = newFieldContainer.querySelectorAll('input')

    //para cada campo, limpar
    fields.forEach(function(field){
        field.value = ''
    })
    //colocar na página
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}
