package controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import model.People;
import service.PersonaService;

@Service
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping({"/people"})//Nombre de la tabla en la base de datos  
public class Controlador{
	@Autowired
	PersonaService service;
	
	@GetMapping
	public List<People>listar(){
		return service.listar();
	}

}
