package com.ctd.proyectointegrador.persistance.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.*;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@JsonInclude(JsonInclude.Include.NON_NULL)
public class CaracteristicaDTO {

    @NotEmpty(message = "no debe estar vacio")
    @NotNull(message = "no debe ser nulo")
    private Integer id;

    @NotEmpty(message = "no debe estar vacio")
    @NotNull(message = "no debe ser nulo")
    private String titulo;

    @NotEmpty(message = "no debe estar vacio")
    @NotNull(message = "no debe ser nulo")
    private String url;


}
