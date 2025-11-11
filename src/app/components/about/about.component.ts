import { Component } from '@angular/core';

@Component({
  selector: 'about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {



  descargarCV() {
    // 1. Define la ruta relativa al archivo dentro de 'assets'
    const rutaArchivo = 'cv.pdf'; 
    
    // 2. Crea un elemento <a> temporal en el DOM
    const link = document.createElement('a');
    
    // 3. Asigna la ruta como el href
    link.href = rutaArchivo;
    
    // 4. Usa el atributo 'download' para forzar la descarga y darle un nombre de archivo
    // Si no pones 'download', el navegador intentará abrirlo en una nueva pestaña (si es PDF, por ejemplo)
    link.download = 'Curriculum_Vitae_Rodrigo_Ayelef.pdf'; 
    
    // 5. Agrega el elemento al cuerpo del documento (es necesario para que el .click() funcione en todos los navegadores)
    document.body.appendChild(link);
    
    // 6. Simula el clic
    link.click();
    
    // 7. Limpia el DOM eliminando el elemento temporal
    document.body.removeChild(link);
  }

}
