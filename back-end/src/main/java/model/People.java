package model;
import javax.persistence.*;

import org.springframework.stereotype.Service;
@Service
@Entity//
@Table(name="people")//Direcciona a la tabla peole de la base de datos bask-end
public class People {

		@Id
		@Column
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		private int id;
		@Column
		private String name;
		@Column
		private String last_name;
		public int getId() {
			return id;
		}
		public void setId(int id) {
			this.id = id;
		}
		public String getName() {
			return name;
		}
		public void setName(String name) {
			this.name = name;
		}
		public String getLast_name() {
			return last_name;
		}
		public void setLast_name(String last_name) {
			this.last_name = last_name;
		}
		
}
