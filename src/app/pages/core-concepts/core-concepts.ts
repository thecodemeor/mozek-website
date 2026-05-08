import { Component, inject, computed } from '@angular/core';
import { ResponsiveService } from 'src/app/services/responsive.service';

@Component({
  selector: 'app-core-concepts',
  standalone: true,
  templateUrl: './core-concepts.html',
  styleUrl: './core-concepts.scss',
})
export class CoreConcepts {
  public responsive = inject(ResponsiveService);
  screen = computed(() => this.responsive.breakpoint());
}
