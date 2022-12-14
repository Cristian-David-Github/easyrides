package com.ctd.proyectointegrador.persistance.model;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Table(name = "imagenes")
public class Imagen {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Integer id;

    @Column(name = "url", nullable = false)
    private String url;
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "producto_id")
    @JsonIgnore
    private Producto producto;
}
