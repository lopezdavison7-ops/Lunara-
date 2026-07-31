/*
==================================
 LUNARA TEMPLATES SCRIPT
 Creado por Luis González
==================================
*/


const templateButtons = document.querySelectorAll(
    "[data-template]"
);



templateButtons.forEach(button => {


    button.addEventListener(
        "click",
        () => {


            const selectedTemplate =
                button.dataset.template;



            localStorage.setItem(
                "lunara_template",
                selectedTemplate
            );



            window.location.href =
                "editor.html";


        }
    );


});