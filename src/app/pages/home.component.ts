import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="bg-gradient-to-b from-gray-50 to-white py-16">
      <div class="max-w-6xl mx-auto px-4 grid gap-12 lg:grid-cols-2 lg:items-center">
        <div class="space-y-6">
          <p class="text-sm font-semibold text-green-700 uppercase tracking-wide">Elisar Installations</p>
          <h1 class="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
            Furniture Storage & Model Home Staging
          </h1>
          <p class="text-lg text-gray-700 leading-relaxed">
            Reliable warehousing and staging support tailored for builders who demand fast, careful installs and pristine model homes.
          </p>
          <div class="flex flex-col sm:flex-row gap-3">
            <a routerLink="/contact" class="inline-flex items-center justify-center rounded-md bg-green-700 px-5 py-3 text-white font-semibold shadow-sm hover:bg-green-800 transition-colors">
              Request a Quote
            </a>
            <a routerLink="/services" class="inline-flex items-center justify-center rounded-md border border-gray-300 px-5 py-3 text-gray-900 font-semibold hover:border-gray-400 hover:bg-gray-50 transition-colors">
              View Services
            </a>
          </div>
        </div>
        <div class="bg-white border border-gray-100 shadow-sm rounded-xl p-6 grid gap-4">
          <div class="flex items-center gap-3">
            <div class="h-10 w-10 rounded-lg bg-green-50 text-green-700 flex items-center justify-center font-bold">01</div>
            <div>
              <div class="font-semibold text-gray-900">Secure warehousing</div>
              <div class="text-sm text-gray-600">Clean, organized storage with careful inventory management.</div>
            </div>
          </div>
          <div class="flex items-center gap-3">
            <div class="h-10 w-10 rounded-lg bg-green-50 text-green-700 flex items-center justify-center font-bold">02</div>
            <div>
              <div class="font-semibold text-gray-900">Turnkey staging</div>
              <div class="text-sm text-gray-600">From load-in to styling, we stage model homes to impress buyers.</div>
            </div>
          </div>
          <div class="flex items-center gap-3">
            <div class="h-10 w-10 rounded-lg bg-green-50 text-green-700 flex items-center justify-center font-bold">03</div>
            <div>
              <div class="font-semibold text-gray-900">Careful removal</div>
              <div class="text-sm text-gray-600">Fast, respectful de-installs with protection for your finishes.</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="max-w-6xl mx-auto px-4 py-14">
      <div class="flex items-center justify-between flex-wrap gap-4 mb-8">
        <h2 class="text-2xl font-bold text-gray-900">Services at a glance</h2>
        <a routerLink="/services" class="text-sm font-semibold text-green-700 hover:text-green-800">Explore services ?</a>
      </div>
      <div class="grid gap-6 md:grid-cols-3">
        <div class="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
          <h3 class="text-lg font-semibold text-gray-900">Warehousing / Storage</h3>
          <p class="mt-3 text-sm text-gray-600">Climate-conscious storage, organized inventory, and careful handling.</p>
        </div>
        <div class="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
          <h3 class="text-lg font-semibold text-gray-900">Model Home Staging</h3>
          <p class="mt-3 text-sm text-gray-600">Polished, buyer-ready spaces with coordinated logistics and styling.</p>
        </div>
        <div class="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
          <h3 class="text-lg font-semibold text-gray-900">Install / Removal</h3>
          <p class="mt-3 text-sm text-gray-600">On-time installs and removals with floor and wall protection throughout.</p>
        </div>
      </div>
    </section>
  `,
})
export class HomeComponent {}
