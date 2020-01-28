import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ServiceService } from "../../Service/service.service";
import { People} from 'src/app/Models/People';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  personas: People[];
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit() {
    this.service.getPeople().subscribe(data=>{this.personas=data;})

  }

}
