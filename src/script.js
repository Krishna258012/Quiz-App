function alertRequire(){
    let ss = document.querySelector('input[name="category"]:checked');
    if(ss == null){
        alert("Please Select Category First")
        localStorage.removeItem("score");
        localStorage.removeItem("unAttemped");
        localStorage.removeItem("time");
    }
}
