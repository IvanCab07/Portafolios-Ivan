package com.Porafolio_Ivan_back.Backend.dto;

import lombok.Data;

@Data
public class ContactDto {
    private String nombre;
    private String apellido;
    private String email;
    private String mensaje;
}
