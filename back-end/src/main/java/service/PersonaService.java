package service;

import java.util.List;

import org.springframework.stereotype.Service;

import model.People;

@Service
public interface PersonaService {
	
	List<People>listar();
	
	People listarId(int id);
	People add(People p);
	People edit(People p);
	People delete(int id);

}
