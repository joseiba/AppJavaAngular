package repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import model.People;

@org.springframework.stereotype.Repository
public interface PeopleRepository extends JpaRepository<People, Long> {
	
	List<People>findAll();
	People findOne(int id);
	People save(People p);
	void delete(People p);
	
}
