import {
  Component,
  contentChild,
  EventEmitter,
  input,
  Input,
  output,
  Output, TemplateRef,
} from '@angular/core';
import { Product } from '../../models/product';
import { GsapHover } from '../../directives/gsap-hover';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-delete-confirmation',
  imports: [GsapHover, NgTemplateOutlet],
  templateUrl: './delete-confirmation.html',
  styleUrl: './delete-confirmation.scss',
})
export class DeleteConfirmation {
  productName = input.required<string>();

  onCancel = output<void>();

  onConfirm = output<void>();

  customActions = contentChild<TemplateRef<any>>('customActions');

  async confirm() {
    this.onConfirm.emit();
  }

  async cancel() {
    this.onCancel.emit();
  }
}
