## Challenge Amigo Secreto


Este es un challenge del curso proporcionado por Oracle Next Education-ONE, donde se practica la lógica de programación con JavaScript en base al HTML y CSS proporcionados.

Esta es una aplicación web interactiva para organizar sorteos de amigo secreto de manera fácil y divertida. 

## Características

- **Interfaz intuitiva**: Diseño limpio y fácil de usar para todas las edades
- **Sorteo aleatorio**: Algoritmo pseudoaleatorio que garantiza selecciones justas
- **Gestión inteligente**: Los botones aparecen y desaparecen según el contexto
- **Validación de datos**: Previene errores comunes como nombres vacíos o duplicados
- **Responsive design**: Funciona perfectamente en dispositivos móviles y desktop
- **Eliminación automática**: Una vez sorteado, el nombre se elimina de la lista
- **Función de reinicio**: Comienza un nuevo sorteo cuando quieras

## Tecnologías Utilizadas

- **HTML5**: Estructura semántica y accesible
- **CSS3**: Estilos modernos con variables CSS y flexbox
- **JavaScript ES6**: Lógica de aplicación con funciones puras y manipulación del DOM
- **Google Fonts**: Tipografías Inter y Merriweather para una mejor experiencia visual

## Estructura del Proyecto

```
amigo-secreto/
├── index.html          # Página principal
├── style.css           # Estilos de la aplicación
├── app.js             # Lógica de JavaScript
├── assets/            # Recursos multimedia
│   ├── amigo-secreto.png
│   ├── play_circle_outline.png
│   └── reset_2618245.png
└── README.md          # Documentación del proyecto
```

## Instalación y Uso

### Requisitos Previos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- No requiere instalación de dependencias adicionales

### Instrucciones de Instalación

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/amigo-secreto.git
   cd amigo-secreto
   ```

2. **Abre el proyecto**
   - Simplemente abre el archivo `index.html` en tu navegador preferido
   - O usa un servidor local como Live Server en VS Code

3. **¡Disfruta del sorteo!**

## Cómo Usar la Aplicación

### Paso a Paso

1. **Agregar participantes**: Escribe el nombre de cada persona y presiona "Añadir"
2. **Revisar la lista**: Los nombres aparecerán en una lista organizada debajo del campo de entrada
3. **Realizar el sorteo**: Una vez que tengas al menos 2 participantes, presiona "Sortear amigo"
4. **Ver el resultado**: El nombre seleccionado aparecerá destacado en verde
5. **Continuar sorteando**: Puedes seguir sorteando hasta que no queden más nombres
6. **Reiniciar**: Usa el botón "Reiniciar" para comenzar un nuevo sorteo

### Características Avanzadas

- **Validación inteligente**: La aplicación no permite nombres vacíos y requiere al menos 2 participantes para sortear
- **Interfaz adaptativa**: Los botones de sorteo solo aparecen cuando hay suficientes participantes
- **Eliminación progresiva**: Cada nombre sorteado se elimina automáticamente para evitar repeticiones

## Características Técnicas

### Funciones Principales

- `agregarAmigo()`: Valida y añade nombres a la lista de participantes
- `mostrarNombres()`: Actualiza la interfaz con los nombres actuales
- `sortearAmigo()`: Realiza la selección aleatoria y maneja la lógica del sorteo
- `reiniciarAmigo()`: Limpia todos los datos para comenzar de nuevo
- `limpiarCaja()`: Resetea el campo de entrada después de cada adición

### Validaciones Implementadas

- Prevención de nombres vacíos o solo espacios
- Verificación de cantidad mínima de participantes (2)
- Manejo de listas vacías con interfaz adaptativa

## Personalización

### Colores y Temas
El proyecto usa variables CSS para facilitar la personalización:

```css
:root {
    --color-primary: #4B69FD;      /* Azul principal */
    --color-secondary: #FFF9EB;    /* Fondo crema */
    --color-button: #fe652b;       /* Naranja de botones */
    --color-text: #444444;         /* Texto principal */
}
```

### Fuentes
- **Merriweather**: Para títulos principales (elegante y serif)
- **Inter**: Para texto del cuerpo (moderna y legible)

## Futuras Mejoras

- [ ] Almacenamiento local para persistir listas entre sesiones
- [ ] Modo oscuro/claro
- [ ] Historial de sorteos realizados
- [ ] Integración con redes sociales para compartir resultados
- [ ] Sonidos y animaciones para el sorteo

## Contribuciones

Las contribuciones son bienvenidas y apreciadas. Si quieres mejorar este proyecto:

1. **Fork** el repositorio
2. **Crea** una rama para tu feature (`git checkout -b feature/nueva-caracteristica`)
3. **Commit** tus cambios (`git commit -m 'Añade nueva característica'`)
4. **Push** a la rama (`git push origin feature/nueva-caracteristica`)
5. **Abre** un Pull Request

### Áreas de Contribución
- Mejoras en la interfaz de usuario
- Optimizaciones de rendimiento
- Nuevas características
- Corrección de bugs
- Documentación adicional
- Pruebas automatizadas

## Licencia

Este proyecto está bajo la Licencia MIT. 

## Contacto

Si tienes preguntas, sugerencias o quieres colaborar:

- **GitHub**:(https://github.com/HosmellWarthon)
- **Email**: hosmellwarthon@gmail.com

## Agradecimientos

- Oracle y Alura por permitirme desarrollar este curso 
- Iconos proporcionados por Material Design Icons
- Inspiración de diseño basada en tendencias modernas de UI/UX
- Fonts de Google Fonts por su excelente tipografía

---

⭐ Si este proyecto te ha sido útil, no olvides darle una estrella en GitHub. ¡Ayuda a otros a descubrirlo!
