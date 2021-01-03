var hd__menu_controller = false;

window.addEventListener("resize", () => {
  if ($(document).width() > 991) {
    hd__closeMenu();
  }
});

$("#hd__btn").click(() => {
  if (!$("#hd__wrapper").hasClass("hd__menu-open")) {
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
    document.getElementsByTagName("body")[0].style.position = "fixed";

    $("#hd__btn").addClass("hd__btn-active");
    $("#hd__wrapper").addClass("hd__menu-open");

    setTimeout(() => {
      hd__menu_controller = true;
    }, 0);
  } else {
    hd__closeMenu();
  }
});

$("#hd__wrapper").click((event) => {
  let x_event = event.originalEvent.clientX;
  if (x_event > $("#hd__menu")[0].clientWidth && hd__menu_controller) {
    hd__closeMenu();
    hd__menu_controller = false;
  }
});

$(".hd__menu-subMenu > a").click((event) => {
  let subMenu = event.target.nextElementSibling;
  let liSubMenu = event.currentTarget.offsetParent;

  console.log($(liSubMenu).hasClass("hd__subMenu-movile-open"));
  if (!$(liSubMenu).hasClass("hd__subMenu-movile-open")) {
    $(subMenu).slideDown();
    $(liSubMenu).addClass("hd__subMenu-movile-open");
  } else {
    $(subMenu).slideUp();
    $(liSubMenu).removeClass("hd__subMenu-movile-open");
  }
});

function hd__closeMenu() {
  document.getElementsByTagName("body")[0].style.overflow = "auto";
  document.getElementsByTagName("body")[0].style.position = "initial";

  $("#hd__btn").removeClass("hd__btn-active");
  $("#hd__wrapper").removeClass("hd__menu-open");

  $(".hd__menu-subMenu").removeClass("hd__subMenu-movile-open");
  $(".hd__subMenu").slideUp();
}
