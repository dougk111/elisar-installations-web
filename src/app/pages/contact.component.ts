import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  template: `
    <section class="max-w-3xl mx-auto px-4 py-14 space-y-6">
      <p class="text-sm font-semibold text-green-700 uppercase tracking-wide">Contact</p>
      <h1 class="text-3xl sm:text-4xl font-bold text-gray-900">Let\'s plan your next install</h1>
      <p class="text-lg text-gray-700">Tell us about your model home schedule and how we can help. We\'ll follow up with timing and next steps.</p>

      <!-- TODO: Replace placeholders with real contact details once provided. -->
      <div class="grid gap-4 rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
        <div class="flex items-center justify-between">
          <div>
            <div class="text-sm text-gray-500">Phone</div>
            <div class="text-lg font-semibold text-gray-900">(916) 955-6026</div>
          </div>
          <span class="text-xs font-semibold text-green-700 bg-green-50 px-3 py-1 rounded-full">Call to schedule</span>
        </div>
        <div class="flex items-center justify-between">
          <div>
            <div class="text-sm text-gray-500">Email</div>
            <div class="text-lg font-semibold text-gray-900">ryan@elisarinstallations.com</div>
          </div>
          <a href="mailto:contact@elisarinstallations.com" class="text-sm font-semibold text-green-700 hover:text-green-800">Email us ?</a>
        </div>
        <div class="text-xs text-gray-500">
          <span class="font-semibold text-gray-700">Business Hours:</span> Mon-Thu, 9:00 AM-2:00 PM
        </div>
      </div>
    </section>
  `,
})
export class ContactComponent {}
