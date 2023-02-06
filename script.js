function abrirEmail() {
    $(".l2").css("color","var(--c2)").css("font-weight","400")
    $(".l3").css("height","8%")
}
function fecharEmail() {
    $(".l2").css("color","gray").css("font-weight","300")
}
function abrirSenha() {
    $(".l4").css("color","var(--c2)").css("font-weight","400")
    $(".l5").css("height","8%")
}
function fecharSenha() {
    $(".l4").css("color","gray").css("font-weight","300")
}
function abrirSenha2() {
    $(".l6").css("color","var(--c2)").css("font-weight","400")
    $(".l7").css("height","8%")
}
function fecharSenha2() {
    $(".l6").css("color","gray").css("font-weight","300")
}
function showL7() {
    $(".l6").css("display","flex")
    $(".l7").css("display","flex")
}
function resetP() {
    $(".l6").css("display","none")
    $(".l7").css("display","none")
    $(".notify").css("display","flex").css("border-bottom","3px solid rgb(9, 255, 0)")
    $(".titleNot").css("color","rgb(9, 255, 0)").css("filter","drop-shadow(0px 0px 5px rgb(9, 255, 0, 0.5))")
    $(".suNot").css("display","flex")
    $(".alNot").css("display","none")
    $(".erNot").css("display","none")
    var titlesucNot = document.querySelector('.titleNot');
    var textsucNot = document.querySelector('.textNot');
    titlesucNot.innerHTML = "Sucesso!";
    textsucNot.innerHTML = "Logado com sucesso.";
    setTimeout (function() {
        $(".notify").css("opacity","100%")
    }, 100);
    setTimeout (function() {
        $(".notify").css("opacity","0%")
        $(".notify").css("display","none")
    }, 3000);
}
function dia() {
    $(".a1").css("display","none")
    $(".a2").css("display","flex")
    $(":root").css("--c1","white").css("--c2","black").css("--c3","#e6e6e6")
    $(".l-main").css("filter","drop-shadow(0px 0px 15px #808080)")
}
function noite() {
    $(".a1").css("display","flex")
    $(".a2").css("display","none")
    $(":root").css("--c1","#111").css("--c2","white").css("--c3","#212121")
    $(".l-main").css("filter","drop-shadow(0px 0px 15px black)")
}


const inputs1 = document.querySelectorAll(".l3");
const inputs2 = document.querySelectorAll(".l5");
const inputs3 = document.querySelectorAll(".l7");

inputs1.forEach(function(input) {
  input.addEventListener("blur", function() {
    const pattern = /^[a-zA-Z0-9]+$/;
    if (!pattern.test(input.value)) {
        $(".l3").css("height","1%")
    }
  });
});
inputs2.forEach(function(input) {
    input.addEventListener("blur", function() {
      const pattern = /^[a-zA-Z0-9]+$/;
      if (!pattern.test(input.value)) {
          $(".l5").css("height","1%")
      }
    });
  });
  inputs3.forEach(function(input) {
    input.addEventListener("blur", function() {
      const pattern = /^[a-zA-Z0-9]+$/;
      if (!pattern.test(input.value)) {
          $(".l7").css("height","1%")
      }
    });
  });
