import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface NavItem {
  label: string;
  path: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <header class="bg-white shadow-sm sticky top-0 z-20">
      <div class="max-w-6xl mx-auto px-4">
        <div class="flex items-center justify-between h-16">
          <a routerLink="/" class="flex items-center gap-3">
            <img src="assets/images/elisar-logo.png" alt="Elisar Installations logo" class="h-16 w-auto" />
            <div class="text-lg font-semibold text-gray-900">Elisar Installations</div>
          </a>
          <div class="flex items-center gap-4">
            <nav class="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
              <a *ngFor="let item of navItems" [routerLink]="item.path" routerLinkActive="text-green-700" class="hover:text-green-700 transition-colors">
                {{ item.label }}
              </a>
            </nav>
            <button type="button" (click)="toggleMenu()" class="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-green-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-600">
              <span class="sr-only">Toggle navigation</span>
              <svg class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
                <path *ngIf="!isMenuOpen()" stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                <path *ngIf="isMenuOpen()" stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        <div *ngIf="isMenuOpen()" class="md:hidden border-t border-gray-200 pb-4">
          <nav class="flex flex-col gap-2 pt-3 text-sm font-medium text-gray-700">
            <a *ngFor="let item of navItems" [routerLink]="item.path" routerLinkActive="text-green-700" class="px-1 py-2 rounded hover:bg-gray-50" (click)="closeMenu()">
              {{ item.label }}
            </a>
          </nav>
        </div>
      </div>
    </header>
  `,
})
export class HeaderComponent {
  protected readonly navItems: NavItem[] = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  private readonly menuOpen = signal(false);
  protected readonly isMenuOpen = computed(() => this.menuOpen());

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }
}
