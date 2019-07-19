import { Component, OnInit, Input } from '@angular/core';
import { Idea } from '../edit-idea/models';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';
import { EditIdeaService } from '../edit-idea/edit-idea.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-my-ideas-list',
  templateUrl: './my-ideas-list.component.html',
  styleUrls: ['./my-ideas-list.component.scss']
})
export class MyIdeasListComponent implements OnInit {

  @Input() myIdeasList: Idea[] = [];

  constructor(

  ) { }

  async ngOnInit() {

  }

  ngOnDestroy(): void {

  }

}