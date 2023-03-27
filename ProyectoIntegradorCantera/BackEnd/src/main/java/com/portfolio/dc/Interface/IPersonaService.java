package com.portfolio.dc.Interface;

import com.portfolio.dc.Entity.Persona;
import java.util.List;


public interface IPersonaService {
    //Traer una lista de persona
    public List<Persona> getPersona();
    
    //Guardar un objeto de tipo persona
    public void savePersona(Persona persona);
    
    //Eliminar un onjeto pero lo buscamos por ID
    public void deletePersona(Long id);
    
    //Buscar una persona por ID
    public Persona findPersona(Long id);
}
