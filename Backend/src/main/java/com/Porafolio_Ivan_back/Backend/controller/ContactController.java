package com.Porafolio_Ivan_back.Backend.controller;

import com.Porafolio_Ivan_back.Backend.dto.ContactDto;
import com.Porafolio_Ivan_back.Backend.service.EmailService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/contacto")
@CrossOrigin("*")
@RequiredArgsConstructor
public class ContactController {

    private final EmailService emailService;

    @PostMapping
    public ResponseEntity<String> recibirFormulario(@RequestBody ContactDto contacto) {
        try {
            emailService.enviarEmail(contacto);
            return ResponseEntity.ok("Email enviado correctamente");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error al enviar el email: " + e.getMessage());
        }
    }
}
