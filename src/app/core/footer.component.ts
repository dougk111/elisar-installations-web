import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="bg-gray-900 text-gray-200 mt-12">
      <div class="max-w-6xl mx-auto px-4 py-8 flex flex-col gap-2 text-sm">
        <div class="font-semibold text-white">Elisar Installations</div>
        <div class="text-gray-300">Bryan, Texas</div>
        <div class="text-gray-400">Furniture storage & model home staging</div>
        <div class="text-gray-500">&copy; {{ currentYear }} Elisar Installations. All rights reserved.</div>
      </div>
    </footer>
  `,
})
export class FooterComponent {
  protected readonly currentYear = new Date().getFullYear();
}
