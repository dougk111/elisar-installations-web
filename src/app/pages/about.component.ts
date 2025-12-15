import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section class="max-w-4xl mx-auto px-4 py-14 space-y-6">
      <p class="text-sm font-semibold text-green-700 uppercase tracking-wide">About</p>
      <h1 class="text-3xl sm:text-4xl font-bold text-gray-900">Focused on builder-ready service</h1>
      <p class="text-lg text-gray-700 leading-relaxed">
        Elisar Installations supports builders with reliable storage, careful handling, and staging that makes model homes feel complete. We coordinate logistics, protect your finishes, and deliver spaces that welcome buyers from the first walkthrough.
      </p>
      <div class="grid gap-6 md:grid-cols-3">
        <div class="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
          <div class="text-3xl font-bold text-green-700">Responsive Scheduling</div>
          <div class="mt-2 text-sm text-gray-600">
            Fast turnaround for installs and removals during business hours.
          </div>
        </div>
        <div class="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
          <div class="text-3xl font-bold text-green-700">Detail</div>
          <div class="mt-2 text-sm text-gray-600">Protection-first handling from warehouse to model home.</div>
        </div>
        <div class="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
          <div class="text-3xl font-bold text-green-700">Trust</div>
          <div class="mt-2 text-sm text-gray-600">Consistent crews who know your standards and sites.</div>
        </div>
      </div>
    </section>
  `,
})
export class AboutComponent {}
