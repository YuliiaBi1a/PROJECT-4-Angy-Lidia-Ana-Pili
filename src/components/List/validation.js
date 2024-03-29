import Swal from 'sweetalert2';
import './alert.css'

function Validar(user) {
    const validateEmail = /^[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ]+[\w.-]*[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ]+@[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ]+\.[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ]+$/;
    const resultEmail = validateEmail.test(user.userEmail);

    const validateName = /^[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ\s]+$/;
    const resultName = validateName.test(user.userName + user.userSurname + user.userSecondSurname);

    if (!user.userName ||
        !user.userSurname ||
        !user.userSecondSurname ||
        !user.userRol ||
        !user.userCourse ||
        !user.userClass ||
        !user.userEmail) {
        Swal.fire({
            imageUrl: '../public/images/iconoError.svg',
            title: 'Oops...',
            text: 'Rellene todos los campos obligatorios',
        });
        return false;
    } else if (!resultEmail) {
        Swal.fire({
            imageUrl: '../public/images/iconoError.svg',
            title: 'Oops...',
            text: 'Formato del correo electrónico incorrecto. Por favor, corrige el email según el siguiente ejemplo: example@mail.com',
        });
        return false;
    } else if (!resultName) {
        Swal.fire({
            imageUrl: '../public/images/iconoError.svg',
            title: 'Oops...',
            text: 'Formato de nombre incorrecto. El nombre y los apellidos deben contener sólo minúsculas y/o mayúsculas',
        });
        return false;
    } else {
        return true;
    }
};

export default Validar;