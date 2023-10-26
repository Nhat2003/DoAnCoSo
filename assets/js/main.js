$(".info-nav").mousemove(function(){
    $(".info-sub").show(200)
})
$(".info-nav").mouseleave(function(){
    $(".info-sub").hide(100)
})
$(".nutrition-nav").mousemove(function(){
    $(".nutrition-sub").show(200)
})
$(".nutrition-nav").mouseleave(function(){
    $(".nutrition-sub").hide(100)
})
const listIcon = document.querySelectorAll(".line-box")
for(const icon of listIcon){
    const titleLine = icon.querySelector(".title-line h3")
    const iconPlus = icon.querySelector("i:nth-child(2)")
    const iconMinus = icon.querySelector("i:nth-child(3)")
    const listLine = icon.querySelector(".list-line")
    $(titleLine).click(function(){
        $(listLine).toggle(200)
        $(iconPlus).toggle()
        $(iconMinus).toggle()
    })
    $(iconPlus).click(function(){
        $(iconPlus).hide()
        $(iconMinus).show()
        $(listLine).show(200)
    })
    $(iconMinus).click(function(){
        $(iconMinus).hide()
        $(iconPlus).show()
        $(listLine).hide(200)
    })
}
$(".open-box-search").click(function(){
    $(".box-search").toggle(200)
})
$(".btn-box-search").click(function(){
    $(".box-search").hide(200)
})