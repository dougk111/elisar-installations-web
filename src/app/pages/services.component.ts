import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  template: `
    <section class="max-w-6xl mx-auto px-4 py-14 space-y-10">
      <div class="max-w-2xl space-y-3">
        <p class="text-sm font-semibold text-green-700 uppercase tracking-wide">Services</p>
        <h1 class="text-3xl sm:text-4xl font-bold text-gray-900">Built for model home builders</h1>
        <p class="text-lg text-gray-700">We handle storage, staging, and installations so your projects stay on schedule and look impeccable.</p>
      </div>

      <div class="grid gap-6 md:grid-cols-2">
        <div class="rounded-xl border border-gray-100 bg-white p-6 shadow-sm space-y-3">
          <h2 class="text-xl font-semibold text-gray-900">Warehousing & Storage</h2>
          <p class="text-gray-700">Clean, organized space for furniture and decor with careful labeling and photo verification on request.</p>
          <ul class="list-disc list-inside text-sm text-gray-600 space-y-1">
            <li>Inventory management and condition checks</li>
            <li>Protective wrapping and secure handling</li>
            <li>Flexible scheduling for pickups and drop-offs</li>
          </ul>
        </div>

        <div class="rounded-xl border border-gray-100 bg-white p-6 shadow-sm space-y-3">
          <h2 class="text-xl font-semibold text-gray-900">Model Home Staging</h2>
          <p class="text-gray-700">Coordinated staging that highlights each plan with clean lines, balanced palettes, and welcoming flow.</p>
          <ul class="list-disc list-inside text-sm text-gray-600 space-y-1">
            <li>Room-by-room styling and final polish</li>
            <li>Protection for floors, walls, and railings</li>
            <li>Walkthrough-ready delivery</li>
          </ul>
        </div>

        <div class="rounded-xl border border-gray-100 bg-white p-6 shadow-sm space-y-3">
          <h2 class="text-xl font-semibold text-gray-900">Install & Removal</h2>
          <p class="text-gray-700">Tidy installs and removals with attention to finishes and builder timelines.</p>
          <ul class="list-disc list-inside text-sm text-gray-600 space-y-1">
            <li>Coordinated scheduling with site teams</li>
            <li>Padding, straps, and floor protection standard</li>
            <li>Quick clean-up after every visit</li>
          </ul>
        </div>

        <div class="rounded-xl border border-gray-100 bg-white p-6 shadow-sm space-y-3">
          <h2 class="text-xl font-semibold text-gray-900">Support Services</h2>
          <p class="text-gray-700">Day-2 requests covered touch-ups, swaps, and refreshes to keep models showing their best.</p>
          <ul class="list-disc list-inside text-sm text-gray-600 space-y-1">
            <li>Accessory refresh and seasonal adjustments</li>
            <li>Quick response for fixes or replacements</li>
            <li>Photo updates after service visits</li>
          </ul>
        </div>
      </div>
    </section>
  `,
})
export class ServicesComponent {}
