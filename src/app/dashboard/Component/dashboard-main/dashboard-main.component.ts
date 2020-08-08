import { Component, OnInit, Input } from '@angular/core';
import { LanguageService } from 'src/app/language/language.service';
import { Observable } from 'rxjs';
import { UserDetails } from 'src/app/models/loginModels';

@Component({
  selector: 'app-dashboard-main',
  templateUrl: './dashboard-main.component.html',
  styleUrls: ['./dashboard-main.component.scss']
})
export class DashboardMainComponent implements OnInit {
  @Input() user$ : Observable<UserDetails>
  constructor(public languageService: LanguageService) { }

  ngOnInit() {
  }

}
