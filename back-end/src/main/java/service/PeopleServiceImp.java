package service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import model.People;
import repository.PeopleRepository;

@Service
@Transactional
public class PeopleServiceImp implements PersonaService{
	@Autowired
	private PeopleRepository repositorio;
	
	@Override
	public List<People> listar() {
	
		return repositorio.findAll();
	}

	@Override
	public People listarId(int id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public People add(People p) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public People edit(People p) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public People delete(int id) {
		// TODO Auto-generated method stub
		return null;
	}

}
