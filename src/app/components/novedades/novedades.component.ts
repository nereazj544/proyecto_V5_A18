import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReleasesService } from '../../../service/release.service';


@Component({
  selector: 'app-novedades',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './novedades.component.html',
  styleUrls: ['./novedades.component.css']
})
export class NovedadesComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
}