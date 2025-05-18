Nombre: Estefania Sandoval
🌐 Descripción

Reserseat es una aplicación para la gestión eficiente de reservas en restaurantes. Automatiza la creación, modificación, confirmación y cancelación de reservas, centralizando toda la información para facilitar la tarea del personal y mejorar la experiencia del cliente.
🎯 Objetivo

Minimizar errores y confusiones en las reservas, agilizar la atención al cliente y mejorar la reputación del restaurante mediante una plataforma accesible y centralizada.
👥 Actores del sistema

    Administrador: controla usuarios y permisos del sistema.

    Recepcionista: gestiona reservas, confirma o cancela solicitudes.

    Cliente: puede crear y cancelar reservas, y solicitar modificaciones a través del personal recepcionista.

🆕 Nuevas funcionalidades y mejoras
Persistencia con localStorage (en App.js)

    Las reservas y el usuario actual se guardan en el navegador.

    Esto permite mantener la sesión activa y los datos tras recargar la página.

    Brinda una experiencia básica de “estado persistente” sin necesidad de backend.

Selector de roles en Login.js

    Mejor usabilidad en el login gracias a un menú desplegable para seleccionar el rol.

    Evita errores de tipeo y garantiza que solo se elijan roles válidos desde el inicio.

IDs únicos con uuid en ClientePanel

    Cada reserva creada tiene un identificador único (UUID).

    Previene conflictos o errores con reservas duplicadas o mal identificadas.

    Facilita el manejo de reservas para editar, cancelar o confirmar.

Validaciones y feedback en ClientePanel

    Validación completa: si falta algún campo, se muestra un mensaje de error.

    Validación de horario: no permite reservar si ya hay una reserva en la misma fecha y hora.

    Botón para crear reserva deshabilitado si faltan datos obligatorios.

    Mensajes de éxito y error con colores: rojo para errores, verde para éxito.

    Los mensajes desaparecen automáticamente después de 5 segundos.

    Feedback visual básico con estilos inline (puede mejorarse con CSS).

Restricciones según rol

    Los clientes no pueden modificar reservas directamente, solo cancelar.

    Para modificar reservas, deben contactar al recepcionista o al restaurante.

    El recepcionista puede confirmar, cancelar y editar reservas.

Navegación basada en roles

    Diferentes vistas y permisos según el rol de usuario (administrador, recepcionista, cliente).

    Control de acceso a rutas y opciones según rol.

🖥️ Tecnologías utilizadas (hasta ahora)

    React (Frontend)

    React Router DOM (Navegación)

    HTML + CSS

    UUID (para generación de IDs únicos)