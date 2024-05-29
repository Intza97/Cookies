const cookieBox = document.querySelector(".wrapper"),
  buttons = document.querySelectorAll(".button");

const executeCodes = () => {
  //si la cookie contiene "codinglab", se devolverá y el código siguiente no se ejecutará
  if (document.cookie.includes("codinglab")) return;
  cookieBox.classList.add("show");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      cookieBox.classList.remove("show");

      //si el botón tiene el id "acceptBtn"
      if (button.id == "acceptBtn") {
        //establecer cookies por 1 mes. 60 = 1 min, 60 = 1 hora, 24 = 1 día, 30 = 30 días
        document.cookie = "cookieBy=codinglab; max-age=" + 60 * 60 * 24 * 30;
      }
    });
  });
};

//la función executeCodes se llamará al cargar la página web
window.addEventListener("load", executeCodes);
