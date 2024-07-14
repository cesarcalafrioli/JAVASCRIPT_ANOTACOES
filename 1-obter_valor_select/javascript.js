function atualizouSelect(){
    let select = document.querySelector("#opcoes");
    let optionValue = select.options[select.selectedIndex];

    let value = optionValue.value;
    let text = optionValue.text;

    console.log(value, text)
}

atualizouSelect()