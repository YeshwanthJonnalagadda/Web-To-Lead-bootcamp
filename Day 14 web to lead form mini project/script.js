function beforeSubmit(){
    let inputDate = document.querySelector(".inputDate");
    let outputDate = document.querySelector(".outputDate");
    console.log(inputDate.value);//string -> date (en_GB)

    let formattedDate = new Date(inputDate.value).toLocaleDateString("en-GB");
    console.log(formattedDate);
    outputDate.value = formattedDate;
}