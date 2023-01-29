// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'//estamos llamando modo stricto de js para que nos pinte los errores

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')//accedemos al form a través de la clase .needs-validation

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()