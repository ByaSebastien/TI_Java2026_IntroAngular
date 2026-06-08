import {
  Component,
  inject,
  input,
} from '@angular/core';
import { YuGiService } from '../../services/yu-gi-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-yugi-details',
  imports: [
    RouterLink
  ],
  templateUrl: './yugi-details.html',
  styleUrl: './yugi-details.scss',
})
export class YugiDetails {
  private readonly _yuGiService: YuGiService = inject(YuGiService);

  id = input<number>();

  card = this._yuGiService.getCard(this.id);
}
