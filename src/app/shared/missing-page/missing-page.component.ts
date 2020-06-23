import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-missing-page',
  templateUrl: './missing-page.component.html',
})
export class MissingPageComponent implements OnInit {
  @Input() image = '../../../assets/svg/undraw_not_found_60pq.svg';
  @Input() text = 'Not Found';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe((value) => {
      this.text = value.text || 'Not Found';
      this.image =
        value.image || '../../../assets/svg/undraw_not_found_60pq.svg';
    });
  }
}
