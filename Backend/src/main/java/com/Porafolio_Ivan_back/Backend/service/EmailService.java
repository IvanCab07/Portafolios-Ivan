package com.Porafolio_Ivan_back.Backend.service;

import com.Porafolio_Ivan_back.Backend.dto.ContactDto;
import lombok.RequiredArgsConstructor;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class EmailService {

    private final JavaMailSender mailSender;

    public void enviarEmail(ContactDto contacto) {
        SimpleMailMessage mensaje = new SimpleMailMessage();

        mensaje.setTo("ivancab072@gmail.com");
        mensaje.setSubject("Nuevo mensaje de: " + contacto.getNombre() + " " + contacto.getApellido());
        mensaje.setText(
                        "Nombre: "   + contacto.getNombre()   + "\n" +
                        "Apellido: " + contacto.getApellido() + "\n" +
                        "Email: "    + contacto.getEmail()    + "\n" +
                        "Mensaje: "  + contacto.getMensaje()
        );

        mailSender.send(mensaje);

        SimpleMailMessage confirmacion = new SimpleMailMessage();
        confirmacion.setTo(contacto.getEmail());
        confirmacion.setSubject("Confirmación de tu mensaje");
        confirmacion.setText("Tu gmail se mandó con éxito. Pronto recibirás una respuesta.");

        mailSender.send(confirmacion);
    }
}
