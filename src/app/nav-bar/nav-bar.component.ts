import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CategoryService} from '../services/category.service';
import {EsResponse} from '../model/es-response';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(public router: Router, private categoryService: CategoryService) { }
  categories;
  async ngOnInit() {
    this.categoryService.loadCategories().subscribe( (res: EsResponse) => {
      if (res.status === 1) {
        this.categories = res.body;
      }
    });
  }
  gotoAbout() {
    return this.router.navigateByUrl('about');
  }

}