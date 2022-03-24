$("#Tlacidlo1").click((event) =>{
    console.log('Yeah, you clicked me');
})

$("#Tlacidlo2").click((event) =>{
    $("#Tlacidlo1").text("ssss");
})

$("#Tlacidlo3").click((event) =>{
    $("button").css("background-color", "green");
})


let color= "purple";


$("#Tlacidlo3").click((event) =>{
    $("button").css("background-color", color);
    })


for (let i = 0; i < 1; i++) {
$("#Tlacidlo3").click((event) =>{
    $("button").css("background-color", color);
    })
}
