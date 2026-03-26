<!-- Design System -->
<!DOCTYPE html>

<html class="light" lang="en"><head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <link
      href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;400;700;800&amp;family=Inter:wght@300;400;600&amp;display=swap"
      rel="stylesheet" />
    <link
      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap"
      rel="stylesheet" />
    <link
      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap"
      rel="stylesheet" />
    <script
      src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
    <script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            colors: {
              "tertiary-container": "#00201a",
              "on-secondary": "#ffffff",
              "on-primary": "#ffffff",
              "tertiary-fixed": "#afefdd",
              "on-primary-fixed": "#151c24",
              "primary-fixed-dim": "#c0c7d2",
              "on-tertiary-container": "#518f7f",
              "error": "#ba1a1a",
              "on-tertiary-fixed-variant": "#065043",
              "surface-bright": "#f8f9ff",
              "tertiary-fixed-dim": "#94d3c1",
              "on-error-container": "#93000a",
              "surface-tint": "#585f69",
              "outline-variant": "#c5c6cb",
              "on-tertiary": "#ffffff",
              "on-primary-fixed-variant": "#404751",
              "on-surface": "#151c24",
              "primary-container": "#151c24",
              "on-secondary-fixed": "#261900",
              "secondary-container": "#fed488",
              "surface-variant": "#dce3ee",
              "on-secondary-container": "#785a1a",
              "on-background": "#151c24",
              "surface-container-highest": "#dce3ee",
              "surface-container-high": "#e2e9f4",
              "surface-container-lowest": "#ffffff",
              "surface-container": "#e8eefa",
              "background": "#f8f9ff",
              "primary": "#000000",
              "secondary-fixed": "#ffdea5",
              "on-secondary-fixed-variant": "#5d4201",
              "inverse-surface": "#2a313a",
              "error-container": "#ffdad6",
              "surface-dim": "#d4dae6",
              "on-surface-variant": "#44474b",
              "surface-container-low": "#eef4ff",
              "inverse-on-surface": "#eaf1fd",
              "tertiary": "#000000",
              "on-error": "#ffffff",
              "on-tertiary-fixed": "#00201a",
              "on-primary-container": "#7d848f",
              "secondary": "#775a19",
              "inverse-primary": "#c0c7d2",
              "outline": "#75777c",
              "primary-fixed": "#dce3ee",
              "surface": "#f8f9ff",
              "secondary-fixed-dim": "#e9c176"
            },
            fontFamily: {
              "headline": ["Manrope"],
              "body": ["Inter"],
              "label": ["Inter"]
            },
            borderRadius: {"DEFAULT": "0px", "lg": "0px", "xl": "0px", "full": "9999px"},
          },
        },
      }
    </script>
    <style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
        }
        body {
            font-family: 'Inter', sans-serif;
            background-color: #f8f9ff;
        }
        h1, h2, h3 {
            font-family: 'Manrope', sans-serif;
        }
        /* Custom scrollbar for minimalist look */
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #dce3ee; }
    </style>
  </head>
  <body class="bg-surface text-on-surface">
    <!-- TopNavBar -->
    <nav
      class="fixed top-0 w-full z-50 bg-[#f8f9ff]/90 dark:bg-[#121921]/90 backdrop-blur-xl no-border transition-colors duration-300">
      <div
        class="flex justify-between items-center w-full px-8 py-6 max-w-[1920px] mx-auto">
        <div
          class="text-2xl font-black tracking-tighter text-black dark:text-white">MONOLITH</div>
        <div class="hidden md:flex gap-12">
          <a
            class="font-['Manrope'] tracking-tight font-bold uppercase text-sm text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
            href="#">Shop</a>
          <a
            class="font-['Manrope'] tracking-tight font-bold uppercase text-sm text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
            href="#">Collections</a>
          <a
            class="font-['Manrope'] tracking-tight font-bold uppercase text-sm text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
            href="#">Archive</a>
          <a
            class="font-['Manrope'] tracking-tight font-bold uppercase text-sm text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
            href="#">Story</a>
        </div>
        <div class="flex items-center gap-6">
          <button
            class="material-symbols-outlined text-black dark:text-white hover:scale-95 duration-200">shopping_bag</button>
          <button
            class="material-symbols-outlined text-black dark:text-white hover:scale-95 duration-200">person</button>
        </div>
      </div>
    </nav>
    <!-- Main Content Canvas -->
    <main class="pt-32 pb-24 px-8 max-w-[1440px] mx-auto">
      <header class="mb-16">
        <h1
          class="text-6xl font-extrabold tracking-tighter text-on-primary-fixed">YOUR
          CART</h1>
        <p
          class="text-on-surface-variant mt-4 font-body tracking-widest uppercase text-xs">2
          Items Selected — Architectural Integrity in Every Piece</p>
      </header>
      <div class="flex flex-col lg:flex-row gap-16 items-start">
        <!-- Cart Items Table Section -->
        <section class="flex-grow w-full">
          <div class="space-y-12">
            <!-- Item 1 -->
            <div
              class="group flex flex-col md:flex-row items-start md:items-center gap-8 pb-12 transition-all">
              <div
                class="w-48 h-64 bg-surface-container overflow-hidden flex-shrink-0">
                <img
                  class="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  data-alt="Minimalist architectural chair with clean sharp lines in a brutalist concrete room with dramatic lighting and shadows"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKyNI4CnNcldWAp1DPROp81HQ_Ij9eimnboJ0e7vbCH1A8q0E27B3qH5ta230gB3aSFAZ33drWCYO8DeAQOvafqzCON2V2xCbi-hi8Zwvp_p6eMFz7qINT57dVTPUgj08A1bIOLvJvW-QR3s_72BQi4S8dNqtvJpy3T3aLIM7cO0Pc8xYV8ZJnJ7diTd5zAfrBG4S73NxSXa49uOe1EG3G0xj9C4edfG3QsfQTp4HRhjkQKtp5DyYJMTY_OAThRjBC5ZSdtvAV2yU" />
              </div>
              <div
                class="flex-grow flex flex-col md:flex-row justify-between w-full">
                <div class="space-y-2">
                  <span
                    class="text-[10px] tracking-[0.3em] font-label text-secondary uppercase">Limited
                    Edition</span>
                  <h3
                    class="text-2xl font-headline font-bold uppercase tracking-tight">BRUTALIST
                    ARMCHAIR v.01</h3>
                  <p
                    class="text-on-surface-variant text-sm font-body max-w-xs">Cast
                    resin and steel structure. Matte black finish.</p>
                </div>
                <div class="mt-6 md:mt-0 flex items-center gap-12">
                  <div class="flex items-center border-b border-outline">
                    <button
                      class="p-2 hover:text-secondary transition-colors"><span
                        class="material-symbols-outlined text-sm">remove</span></button>
                    <span class="px-4 font-headline font-bold text-lg">01</span>
                    <button
                      class="p-2 hover:text-secondary transition-colors"><span
                        class="material-symbols-outlined text-sm">add</span></button>
                  </div>
                  <div class="text-right">
                    <p class="font-headline font-bold text-xl">$1,450.00</p>
                    <button
                      class="text-[10px] uppercase tracking-widest text-on-surface-variant hover:text-error mt-2 block ml-auto">Remove</button>
                  </div>
                </div>
              </div>
            </div>
            <!-- Item 2 -->
            <div
              class="group flex flex-col md:flex-row items-start md:items-center gap-8 pb-12 transition-all">
              <div
                class="w-48 h-64 bg-surface-container overflow-hidden flex-shrink-0">
                <img
                  class="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  data-alt="Abstract monolithic black sculpture on a white pedestal in a high-end art gallery with clinical white lighting"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMCjY25cuoFPjUqtlPqoGNXXpTCrbWaXgwocHyqw_vJaZGXDPcE86653qvEch6J7j9Yvflazt60VP4Ytrxy3ONGBBCJJ1MV_4m9Rm45ScJEkRKORijHurAiJLohQJ0znMxpQZkyUwF1ciKFeHDSd-EuJHJCcfYnGtqftOObhGQOHBXe9jHwvQqbKDTzUbzEM4N6E9pqBe4Qe7QAs8YQmQVy8a-NOjtrjMAqVfuKH4mGdmmzhjgMziwCgvICjrZU92ofAytBp3XSiU" />
              </div>
              <div
                class="flex-grow flex flex-col md:flex-row justify-between w-full">
                <div class="space-y-2">
                  <span
                    class="text-[10px] tracking-[0.3em] font-label text-secondary uppercase">Signature
                    Collection</span>
                  <h3
                    class="text-2xl font-headline font-bold uppercase tracking-tight">MONOLITH
                    SCULPTURE</h3>
                  <p
                    class="text-on-surface-variant text-sm font-body max-w-xs">Obsidian
                    glass, hand-polished. Sequential numbering.</p>
                </div>
                <div class="mt-6 md:mt-0 flex items-center gap-12">
                  <div class="flex items-center border-b border-outline">
                    <button
                      class="p-2 hover:text-secondary transition-colors"><span
                        class="material-symbols-outlined text-sm">remove</span></button>
                    <span class="px-4 font-headline font-bold text-lg">01</span>
                    <button
                      class="p-2 hover:text-secondary transition-colors"><span
                        class="material-symbols-outlined text-sm">add</span></button>
                  </div>
                  <div class="text-right">
                    <p class="font-headline font-bold text-xl">$820.00</p>
                    <button
                      class="text-[10px] uppercase tracking-widest text-on-surface-variant hover:text-error mt-2 block ml-auto">Remove</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Shipping Calculator -->
          <div
            class="mt-16 pt-16 border-t border-surface-container-high max-w-md">
            <h4
              class="font-headline font-bold text-sm uppercase tracking-widest mb-8">Calculate
              Shipping</h4>
            <div class="space-y-6">
              <div class="relative">
                <select
                  class="w-full bg-transparent border-0 border-b border-outline py-3 focus:ring-0 focus:border-secondary transition-all font-body text-sm uppercase tracking-wider appearance-none">
                  <option>United States</option>
                  <option>United Kingdom</option>
                  <option>Germany</option>
                  <option>Japan</option>
                </select>
                <span
                  class="material-symbols-outlined absolute right-0 top-3 text-sm pointer-events-none">expand_more</span>
              </div>
              <div class="flex gap-4">
                <input
                  class="flex-grow bg-transparent border-0 border-b border-outline py-3 focus:ring-0 focus:border-secondary transition-all font-body text-sm placeholder:text-outline_variant uppercase tracking-widest"
                  placeholder="ZIP / POSTAL CODE" type="text" />
                <button
                  class="font-label text-[10px] tracking-widest uppercase bg-primary text-on-primary px-6 py-2 hover:bg-on-primary-fixed-variant transition-colors">Apply</button>
              </div>
              <p
                class="text-[10px] text-on-surface-variant tracking-wider font-body">ESTIMATED
                DELIVERY: 4-6 BUSINESS DAYS VIA WHITE GLOVE SERVICE</p>
            </div>
          </div>
        </section>
        <!-- Order Summary Sidebar -->
        <aside
          class="w-full lg:w-[400px] bg-surface-container-low p-10 space-y-12">
          <div class="space-y-8">
            <h2
              class="text-3xl font-headline font-extrabold tracking-tighter uppercase">Summary</h2>
            <div class="space-y-4">
              <div
                class="flex justify-between text-xs tracking-widest uppercase text-on-surface-variant">
                <span>Subtotal</span>
                <span>$2,270.00</span>
              </div>
              <div
                class="flex justify-between text-xs tracking-widest uppercase text-on-surface-variant">
                <span>Shipping</span>
                <span>$45.00</span>
              </div>
              <div
                class="flex justify-between text-xs tracking-widest uppercase text-on-surface-variant">
                <span>Insurance</span>
                <span class="text-secondary">Complimentary</span>
              </div>
              <div
                class="pt-6 border-t border-surface-container-high flex justify-between items-end">
                <span
                  class="font-headline font-bold text-sm uppercase tracking-widest">Total</span>
                <span
                  class="font-headline font-extrabold text-3xl tracking-tight">$2,315.00</span>
              </div>
            </div>
          </div>
          <div class="space-y-4">
            <button
              class="w-full bg-primary text-on-primary py-6 px-4 font-headline font-bold text-sm tracking-[0.2em] uppercase hover:bg-on-primary-fixed-variant transition-all active:scale-95 duration-200">
              Proceed to Checkout
            </button>
            <p
              class="text-center text-[10px] tracking-[0.2em] uppercase text-on-surface-variant flex items-center justify-center gap-2">
              <span class="material-symbols-outlined text-xs">lock</span> Secure
              Encryption Guaranteed
            </p>
          </div>
          <div class="pt-8 border-t border-surface-container-high">
            <h4
              class="text-[10px] font-bold tracking-[0.3em] uppercase mb-4">Payment
              Methods</h4>
            <div class="flex gap-4 opacity-40">
              <div class="h-6 w-10 bg-on-surface"></div>
              <div class="h-6 w-10 bg-on-surface"></div>
              <div class="h-6 w-10 bg-on-surface"></div>
              <div class="h-6 w-10 bg-on-surface"></div>
            </div>
          </div>
        </aside>
      </div>
    </main>
    <!-- Footer -->
    <footer
      class="w-full px-12 py-24 flex flex-col md:flex-row justify-between content-start bg-[#151c24] text-white">
      <div class="mb-12 md:mb-0">
        <span class="text-xl font-bold text-white mb-8 block">MONOLITH</span>
        <p
          class="font-['Inter'] text-xs tracking-widest uppercase max-w-xs leading-loose text-gray-400">
          Curating structural elegance for modern living spaces.
        </p>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-1 gap-8 md:gap-4 text-right">
        <a
          class="font-['Inter'] text-xs tracking-widest uppercase text-gray-400 hover:text-white transition-all hover:tracking-[0.2em]"
          href="#">Privacy Policy</a>
        <a
          class="font-['Inter'] text-xs tracking-widest uppercase text-gray-400 hover:text-white transition-all hover:tracking-[0.2em]"
          href="#">Terms of Service</a>
        <a
          class="font-['Inter'] text-xs tracking-widest uppercase text-gray-400 hover:text-white transition-all hover:tracking-[0.2em]"
          href="#">Shipping &amp; Returns</a>
        <a
          class="font-['Inter'] text-xs tracking-widest uppercase text-gray-400 hover:text-white transition-all hover:tracking-[0.2em]"
          href="#">Contact</a>
      </div>
      <div class="mt-16 md:mt-0 flex items-end">
        <p
          class="font-['Inter'] text-xs tracking-widest uppercase text-gray-500">
          © 2024 THE ARCHITECTURAL BOUTIQUE. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  </body></html>

<!-- 4. Panier (Cart) -->
<!DOCTYPE html>

<html lang="en"><head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>Order Confirmation | MONOLITH</title>
    <script
      src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
    <link
      href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;700;800&amp;family=Inter:wght@400;500;700&amp;display=swap"
      rel="stylesheet" />
    <link
      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap"
      rel="stylesheet" />
    <link
      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap"
      rel="stylesheet" />
    <script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            colors: {
              "tertiary-container": "#00201a",
              "on-secondary": "#ffffff",
              "on-primary": "#ffffff",
              "tertiary-fixed": "#afefdd",
              "on-primary-fixed": "#151c24",
              "primary-fixed-dim": "#c0c7d2",
              "on-tertiary-container": "#518f7f",
              "error": "#ba1a1a",
              "on-tertiary-fixed-variant": "#065043",
              "surface-bright": "#f8f9ff",
              "tertiary-fixed-dim": "#94d3c1",
              "on-error-container": "#93000a",
              "surface-tint": "#585f69",
              "outline-variant": "#c5c6cb",
              "on-tertiary": "#ffffff",
              "on-primary-fixed-variant": "#404751",
              "on-surface": "#151c24",
              "primary-container": "#151c24",
              "on-secondary-fixed": "#261900",
              "secondary-container": "#fed488",
              "surface-variant": "#dce3ee",
              "on-secondary-container": "#785a1a",
              "on-background": "#151c24",
              "surface-container-highest": "#dce3ee",
              "surface-container-high": "#e2e9f4",
              "surface-container-lowest": "#ffffff",
              "surface-container": "#e8eefa",
              "background": "#f8f9ff",
              "primary": "#000000",
              "secondary-fixed": "#ffdea5",
              "on-secondary-fixed-variant": "#5d4201",
              "inverse-surface": "#2a313a",
              "error-container": "#ffdad6",
              "surface-dim": "#d4dae6",
              "on-surface-variant": "#44474b",
              "surface-container-low": "#eef4ff",
              "inverse-on-surface": "#eaf1fd",
              "tertiary": "#000000",
              "on-error": "#ffffff",
              "on-tertiary-fixed": "#00201a",
              "on-primary-container": "#7d848f",
              "secondary": "#775a19",
              "inverse-primary": "#c0c7d2",
              "outline": "#75777c",
              "primary-fixed": "#dce3ee",
              "surface": "#f8f9ff",
              "secondary-fixed-dim": "#e9c176"
            },
            fontFamily: {
              "headline": ["Manrope"],
              "body": ["Inter"],
              "label": ["Inter"]
            },
            borderRadius: {"DEFAULT": "0px", "lg": "0px", "xl": "0px", "full": "9999px"},
          },
        },
      }
    </script>
    <style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .celebration-gradient {
            background: linear-gradient(135deg, rgba(254, 212, 136, 0.1) 0%, rgba(248, 249, 255, 0) 50%);
        }
        .asymmetric-grid {
            display: grid;
            grid-template-columns: 1.5fr 1fr;
            gap: 4rem;
        }
        @media (max-width: 1024px) {
            .asymmetric-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
  </head>
  <body
    class="bg-surface font-body text-on-surface selection:bg-secondary-container">
    <!-- Header Suppression: Since this is a Success/Confirmation screen, we prioritize content focus per instructions -->
    <main
      class="min-h-screen flex flex-col pt-16 pb-32 px-6 md:px-12 max-w-[1440px] mx-auto celebration-gradient">
      <!-- Success Hero Section -->
      <section class="mb-24 flex flex-col items-start">
        <div class="flex items-center gap-4 mb-8">
          <div class="bg-primary text-white p-4">
            <span class="material-symbols-outlined text-3xl"
              style="font-variation-settings: 'FILL' 1;">check_circle</span>
          </div>
          <p
            class="font-label text-xs tracking-[0.3em] text-secondary uppercase">Order
            Confirmed</p>
        </div>
        <h1
          class="font-headline text-6xl md:text-8xl font-black tracking-tighter text-on-primary-fixed mb-6 max-w-4xl">
          THANK YOU FOR YOUR PURCHASE.
        </h1>
        <div
          class="flex flex-col md:flex-row md:items-end justify-between w-full border-l-4 border-primary pl-8 mt-12">
          <div>
            <p
              class="font-label text-xs text-on-surface-variant uppercase tracking-widest mb-2">Order
              Number</p>
            <p
              class="font-headline text-3xl font-bold tracking-tight">#MNLTH-99284-01X</p>
          </div>
          <div class="mt-8 md:mt-0">
            <p
              class="font-label text-xs text-on-surface-variant uppercase tracking-widest mb-2 text-right">Estimated
              Arrival</p>
            <p
              class="font-headline text-3xl font-bold tracking-tight text-right">OCTOBER
              24, 2024</p>
          </div>
        </div>
      </section>
      <!-- Main Content Asymmetric Grid -->
      <div class="asymmetric-grid">
        <!-- Left Column: Order Summary -->
        <section class="space-y-12">
          <div class="flex justify-between items-baseline mb-8">
            <h2
              class="font-headline text-2xl font-bold uppercase tracking-tight">Order
              Summary</h2>
            <span class="font-label text-xs text-on-surface-variant uppercase">3
              ITEMS TOTAL</span>
          </div>
          <div class="space-y-0 border-t border-outline-variant/30">
            <!-- Product 1 -->
            <div
              class="flex gap-8 py-10 group bg-surface hover:bg-surface-container-low transition-colors duration-300">
              <div class="w-32 h-40 bg-surface-container overflow-hidden">
                <img
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  data-alt="Minimalist white designer sneakers on a clean gray concrete background with hard shadows"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQZydqCYsV62PmRtxhckIY22UxJ7Y1mPLBYVDqkGs7AqOyQrApUNOZCqeG-iMeKCJ9y6NbFtt1pz0xducFXQNd-O0wzy6bZlRJilA_uqlUl6v-AFRH_UfIrMPXe6mzM5Q6cNUqq9grLoNMfx9V2k1OppnkQrJNchm2KkO9MRB4_h3cJAuhNRSogKyLX9-qdmCJ-nnpwhYFxtWxpJGgbve7V_ly2-qpUlK6kRcQkb7iO5o7TZ5VnJ99aj1uGAK2o-mTiw9nmCzXs6Y" />
              </div>
              <div class="flex-1 flex flex-col justify-between py-1">
                <div>
                  <h3
                    class="font-headline text-lg font-bold tracking-tight uppercase mb-1">MONOLITH
                    '01 SNEAKER</h3>
                  <p
                    class="text-xs text-on-surface-variant uppercase tracking-widest mb-4">ARCHITECTURAL
                    WHITE / SIZE 10</p>
                  <p
                    class="font-label text-xs text-secondary font-bold uppercase tracking-widest">LIMITED
                    RELEASE</p>
                </div>
                <p class="font-headline text-lg font-bold">$340.00</p>
              </div>
            </div>
            <!-- Product 2 -->
            <div
              class="flex gap-8 py-10 group bg-surface hover:bg-surface-container-low transition-colors duration-300 border-t border-outline-variant/30">
              <div class="w-32 h-40 bg-surface-container overflow-hidden">
                <img
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  data-alt="High-quality textured wool overcoat in charcoal grey hanging against a minimalist white studio background"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuASXlIKODYvowFvRBfb1GSWFznxn4yInNK0IT6pP4rO5sScIqqpW4heDlhCW4fjlSfCSQ-NDMWjMQZBQuiQLEf3_kcnWIpwIL9Ask0HUqC8EReOiwQsIPTK_6Rpzc9sIILm3u1kNsZeRG2-UMcJTM9QwqEImJvLU4lsznyWfLVsF588to9sg5BN3UcxQlyzetTXfmpzu9dRjcRgx50gsW4JOU7N6BGIM36x341iFtCIKnCMRzJ8GOo7L_BneQdxqSDBf8p0F--qSxk" />
              </div>
              <div class="flex-1 flex flex-col justify-between py-1">
                <div>
                  <h3
                    class="font-headline text-lg font-bold tracking-tight uppercase mb-1">STRUCTURED
                    WOOL OVERCOAT</h3>
                  <p
                    class="text-xs text-on-surface-variant uppercase tracking-widest mb-4">CHARCOAL
                    MELANGE / SIZE L</p>
                </div>
                <p class="font-headline text-lg font-bold">$1,250.00</p>
              </div>
            </div>
          </div>
          <!-- Totals Section -->
          <div class="bg-primary-container p-12 text-white">
            <div class="space-y-4 mb-8">
              <div
                class="flex justify-between text-xs tracking-widest uppercase text-on-primary-container">
                <span>Subtotal</span>
                <span>$1,590.00</span>
              </div>
              <div
                class="flex justify-between text-xs tracking-widest uppercase text-on-primary-container">
                <span>Shipping (Express)</span>
                <span>$0.00</span>
              </div>
              <div
                class="flex justify-between text-xs tracking-widest uppercase text-on-primary-container">
                <span>Tax</span>
                <span>$127.20</span>
              </div>
            </div>
            <div
              class="flex justify-between items-baseline pt-8 border-t border-on-primary-container/20">
              <span
                class="font-headline text-sm font-bold uppercase tracking-widest">Total
                Amount</span>
              <span class="font-headline text-4xl font-black">$1,717.20</span>
            </div>
          </div>
        </section>
        <!-- Right Column: Shipping & Tracking -->
        <section class="space-y-16">
          <!-- Status Card -->
          <div
            class="bg-surface-container-lowest p-12 relative overflow-hidden">
            <div class="absolute top-0 right-0 p-4 opacity-5">
              <span
                class="material-symbols-outlined text-9xl">local_shipping</span>
            </div>
            <h2
              class="font-headline text-2xl font-bold uppercase tracking-tight mb-8">Next
              Steps</h2>
            <div class="space-y-8 relative">
              <div class="flex gap-6">
                <div class="flex flex-col items-center">
                  <span class="material-symbols-outlined text-secondary"
                    style="font-variation-settings: 'FILL' 1;">radio_button_checked</span>
                  <div class="w-[2px] h-12 bg-outline-variant/30 my-2"></div>
                </div>
                <div>
                  <p
                    class="font-label text-xs font-bold uppercase tracking-widest mb-1">Order
                    Processed</p>
                  <p class="text-sm text-on-surface-variant">Your order is being
                    prepared in our London atelier.</p>
                </div>
              </div>
              <div class="flex gap-6">
                <div class="flex flex-col items-center">
                  <span
                    class="material-symbols-outlined text-outline-variant">radio_button_unchecked</span>
                  <div class="w-[2px] h-12 bg-outline-variant/30 my-2"></div>
                </div>
                <div class="opacity-50">
                  <p
                    class="font-label text-xs font-bold uppercase tracking-widest mb-1">Quality
                    Inspection</p>
                  <p class="text-sm">Scheduled for Oct 21</p>
                </div>
              </div>
              <div class="flex gap-6">
                <div class="flex flex-col items-center">
                  <span
                    class="material-symbols-outlined text-outline-variant">radio_button_unchecked</span>
                </div>
                <div class="opacity-50">
                  <p
                    class="font-label text-xs font-bold uppercase tracking-widest mb-1">Global
                    Shipping</p>
                  <p class="text-sm">Tracking will be updated soon</p>
                </div>
              </div>
            </div>
            <button
              class="w-full mt-12 bg-primary text-white py-6 font-label text-xs font-bold uppercase tracking-[0.2em] hover:bg-on-surface transition-all duration-300">
              Track Order Status
            </button>
          </div>
          <!-- Shipping Address -->
          <div class="px-4">
            <h2
              class="font-headline text-xs font-bold uppercase tracking-[0.3em] text-on-surface-variant mb-6">Delivery
              Address</h2>
            <div class="font-headline text-lg leading-relaxed">
              <p class="font-bold">Julian V. Sterling</p>
              <p>1422 North Brutalist Ave</p>
              <p>Apartment 4B, The Monolith</p>
              <p>New York, NY 10012</p>
              <p>United States</p>
            </div>
          </div>
          <!-- Support Section -->
          <div class="px-4 pt-12 border-t border-outline-variant/30">
            <h2
              class="font-headline text-xs font-bold uppercase tracking-[0.3em] text-on-surface-variant mb-6">Need
              Assistance?</h2>
            <div class="flex flex-col gap-4">
              <a
                class="font-label text-xs uppercase tracking-widest hover:text-secondary transition-colors inline-flex items-center gap-2"
                href="#">
                <span class="material-symbols-outlined text-sm">mail</span>
                concierge@monolith.com
              </a>
              <a
                class="font-label text-xs uppercase tracking-widest hover:text-secondary transition-colors inline-flex items-center gap-2"
                href="#">
                <span
                  class="material-symbols-outlined text-sm">support_agent</span>
                +1 800 992 000
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
    <!-- Footer -->
    <footer
      class="w-full px-12 py-24 flex flex-col md:flex-row justify-between content-start bg-[#151c24] text-white">
      <div class="md:w-1/3">
        <span
          class="text-xl font-bold text-white mb-8 block font-headline">MONOLITH</span>
        <p
          class="font-body text-xs text-gray-400 tracking-widest uppercase mb-12 md:mb-0">
          © 2024 THE ARCHITECTURAL BOUTIQUE. ALL RIGHTS RESERVED.
        </p>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-2 gap-12 md:w-1/2">
        <div class="flex flex-col gap-4">
          <a
            class="font-label text-xs tracking-widest uppercase text-gray-400 hover:text-white transition-all hover:tracking-[0.2em]"
            href="#">Privacy Policy</a>
          <a
            class="font-label text-xs tracking-widest uppercase text-gray-400 hover:text-white transition-all hover:tracking-[0.2em]"
            href="#">Terms of Service</a>
        </div>
        <div class="flex flex-col gap-4">
          <a
            class="font-label text-xs tracking-widest uppercase text-gray-400 hover:text-white transition-all hover:tracking-[0.2em]"
            href="#">Shipping &amp; Returns</a>
          <a
            class="font-label text-xs tracking-widest uppercase text-gray-400 hover:text-white transition-all hover:tracking-[0.2em]"
            href="#">Contact</a>
        </div>
      </div>
    </footer>
  </body></html>

<!-- 6. Confirmation de Commande (Success) -->
<!DOCTYPE html>

<html class="light" lang="en"><head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <link
      href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;400;700;800&amp;family=Inter:wght@300;400;600&amp;family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap"
      rel="stylesheet" />
    <link
      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap"
      rel="stylesheet" />
    <script
      src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
    <script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            colors: {
              "tertiary-container": "#00201a",
              "on-secondary": "#ffffff",
              "on-primary": "#ffffff",
              "tertiary-fixed": "#afefdd",
              "on-primary-fixed": "#151c24",
              "primary-fixed-dim": "#c0c7d2",
              "on-tertiary-container": "#518f7f",
              "error": "#ba1a1a",
              "on-tertiary-fixed-variant": "#065043",
              "surface-bright": "#f8f9ff",
              "tertiary-fixed-dim": "#94d3c1",
              "on-error-container": "#93000a",
              "surface-tint": "#585f69",
              "outline-variant": "#c5c6cb",
              "on-tertiary": "#ffffff",
              "on-primary-fixed-variant": "#404751",
              "on-surface": "#151c24",
              "primary-container": "#151c24",
              "on-secondary-fixed": "#261900",
              "secondary-container": "#fed488",
              "surface-variant": "#dce3ee",
              "on-secondary-container": "#785a1a",
              "on-background": "#151c24",
              "surface-container-highest": "#dce3ee",
              "surface-container-high": "#e2e9f4",
              "surface-container-lowest": "#ffffff",
              "surface-container": "#e8eefa",
              "background": "#f8f9ff",
              "primary": "#000000",
              "secondary-fixed": "#ffdea5",
              "on-secondary-fixed-variant": "#5d4201",
              "inverse-surface": "#2a313a",
              "error-container": "#ffdad6",
              "surface-dim": "#d4dae6",
              "on-surface-variant": "#44474b",
              "surface-container-low": "#eef4ff",
              "inverse-on-surface": "#eaf1fd",
              "tertiary": "#000000",
              "on-error": "#ffffff",
              "on-tertiary-fixed": "#00201a",
              "on-primary-container": "#7d848f",
              "secondary": "#775a19",
              "inverse-primary": "#c0c7d2",
              "outline": "#75777c",
              "primary-fixed": "#dce3ee",
              "surface": "#f8f9ff",
              "secondary-fixed-dim": "#e9c176"
            },
            fontFamily: {
              "headline": ["Manrope"],
              "body": ["Inter"],
              "label": ["Inter"]
            },
            borderRadius: {"DEFAULT": "0px", "lg": "0px", "xl": "0px", "full": "9999px"},
          },
        },
      }
    </script>
    <style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
        }
        body { font-family: 'Inter', sans-serif; }
        h1, h2, h3 { font-family: 'Manrope', sans-serif; }
    </style>
  </head>
  <body class="bg-surface text-on-surface selection:bg-secondary-container">
    <!-- TopNavBar -->
    <nav
      class="fixed top-0 w-full z-50 bg-[#f8f9ff]/90 backdrop-blur-xl no-border transition-colors duration-300">
      <div
        class="flex justify-between items-center w-full px-8 py-6 max-w-[1920px] mx-auto">
        <div
          class="text-2xl font-black tracking-tighter text-black uppercase">MONOLITH</div>
        <div class="hidden md:flex items-center space-x-12">
          <a
            class="font-['Manrope'] tracking-tight font-bold uppercase text-sm text-gray-500 hover:text-black transition-colors"
            href="#">Shop</a>
          <a
            class="font-['Manrope'] tracking-tight font-bold uppercase text-sm text-gray-500 hover:text-black transition-colors"
            href="#">Collections</a>
          <a
            class="font-['Manrope'] tracking-tight font-bold uppercase text-sm text-gray-500 hover:text-black transition-colors"
            href="#">Archive</a>
          <a
            class="font-['Manrope'] tracking-tight font-bold uppercase text-sm text-black border-b-2 border-black pb-1"
            href="#">Story</a>
        </div>
        <div class="flex items-center space-x-6">
          <button
            class="material-symbols-outlined text-black scale-100 hover:scale-95 duration-200">shopping_bag</button>
          <button
            class="material-symbols-outlined text-black scale-100 hover:scale-95 duration-200">person</button>
        </div>
      </div>
    </nav>
    <main>
      <!-- Hero Section -->
      <section
        class="relative h-screen flex items-center justify-center overflow-hidden">
        <div class="absolute inset-0 z-0">
          <img
            alt="Minimalist architectural interior with sharp shadows and concrete textures"
            class="w-full h-full object-cover grayscale brightness-50"
            data-alt="Interior of a minimalist brutalist building with dramatic sunlight hitting grey concrete walls creating sharp geometric shadows"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDa2VsqWt_4CxkYB89hn0bR59tKOjP6G6H9uBEpGy7urdX9c2FRXyQobRnGzLRcBIHkzcRRMrTJpFsSm31fe0n592lmIObEaT70T1SpPcziSZmm-LdQiwZm4EHLiO_4WFauREbyGzk0-O-zvFeiAv0tuKKP3pqxWoAeVRqFMBcWsH6-PDsJQdBQ62MEVMXb1v_wL126gRs5cSdvHAiIFmXb7OFl-uq-TyRJADKASwrL5Zcc0bGZKiBkOZumNlSbXnqLqNX2gq-_imE" />
        </div>
        <div class="relative z-10 text-center px-4">
          <span
            class="block font-label text-xs tracking-[0.4em] uppercase text-secondary mb-6">Est.
            2014</span>
          <h1
            class="text-7xl md:text-9xl font-extrabold tracking-tighter text-white uppercase leading-none">
            The<br />Architectural<br />Boutique
          </h1>
        </div>
      </section>
      <!-- Chapter 1: The Origin -->
      <section class="py-32 px-8 max-w-7xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
          <div class="md:col-span-5">
            <span
              class="font-label text-xs tracking-widest uppercase text-secondary mb-4 block">Chapter
              I</span>
            <h2
              class="text-5xl font-extrabold tracking-tighter mb-8 leading-tight">THE
              SILENCE OF STRUCTURE.</h2>
            <p
              class="text-on-surface-variant text-lg leading-relaxed mb-6 font-body">
              Founded in the quiet corners of Copenhagen, MONOLITH began as a
              reaction to the noise of modern excess. We believe that true
              luxury isn't found in what is added, but in what remains when
              everything else is stripped away.
            </p>
            <p
              class="text-on-surface-variant text-lg leading-relaxed font-body">
              Our philosophy is architectural at its core—treating every garment
              and object as a permanent fixture of your personal space.
            </p>
          </div>
          <div class="md:col-span-7">
            <div
              class="relative aspect-[4/5] overflow-hidden bg-surface-container-low p-12">
              <img alt="Detail of a minimalist black fabric texture"
                class="w-full h-full object-cover grayscale"
                data-alt="Ultra close-up of heavy black wool fabric with a subtle structural weave illuminated by soft directional light showing depth"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-_hi_-1yJ2PfxOW-PCey2pVJrKA2zhmG6oQ0Af9bEOH0sQFPWwZ0kueBpqFa8BV1hDhGvhM2833dT3WYA2fS0MglHnDy7fkre-tRCBw_AQ4SJyq6IzGxqPzY4Xkh0M1e68Knhchvda_juuTiADW8j3-KVVcHO8hMRP52oStlMxi7h-ZDnCTveyVTA4sHKiQaWZ-4TM0mO7CGsLgI9Bwtgxuv1LKh2XF66ZPo-rXS6BXuBTbd5XZrfztXnXut-K9pcJugi8lG2hh4" />
            </div>
          </div>
        </div>
      </section>
      <!-- Chapter 2: The Craft -->
      <section class="bg-primary-container text-white py-40">
        <div class="max-w-[1920px] mx-auto px-8">
          <div
            class="flex flex-col md:flex-row items-end justify-between mb-24">
            <div class="max-w-2xl">
              <span
                class="font-label text-xs tracking-widest uppercase text-secondary-fixed mb-4 block">Chapter
                II</span>
              <h2
                class="text-6xl font-extrabold tracking-tighter leading-none mb-12">OBSIDIAN
                &amp; GILT.</h2>
            </div>
            <div class="max-w-md pb-2">
              <p
                class="text-primary-fixed-dim text-sm tracking-wide leading-relaxed font-body italic border-l border-secondary pl-6">
                "Precision is not just a measurement; it is an act of respect for the material."
              </p>
            </div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-1">
            <div class="group relative aspect-square overflow-hidden">
              <img alt="Artisan hands working with material"
                class="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-110"
                data-alt="Close-up of artisan's hands meticulously cutting deep black leather with a silver tool on a dark workbench"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDc3RoPxSPOUxVM1C-_hwUlbWvB4yREE46zJHxGSzPhgrLu0XIY57EEQ_kkGS3YrtVZOF_7tlk6sJevYw2ZMbbPaGAAJXrXT4OOG_dEFUGdqj6nU6uxEvMGPa5EYVBbgsktaWxC6pIP-SPjWN1R71QHYmojx0Bo0cCSO1pLBW9tOJPStQ-2zVcSF_i_UgEi53ZlINUU3eu4gtgmkEDA0FAWhjh3hkxU1utLEEbXY26d7joO0N4iak_CNPSZcn2-2fueHLItyTWC8_E" />
              <div
                class="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <span
                  class="text-[10px] uppercase tracking-widest bg-black/40 backdrop-blur px-3 py-1">Source
                  Traceability</span>
              </div>
            </div>
            <div class="group relative aspect-square overflow-hidden md:mt-12">
              <img alt="Clean showroom aesthetic"
                class="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-110"
                data-alt="Modern high-end clothing store interior with one single black coat hanging on a thin gold rail against white walls"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDrW-QtrvLm-vRWwObWKc2g66KYE_h3f5o9pujS3bbgVOL2ZzGEP6vozPAKmdDN_Bn6_OKTSjHOWXScNOhqAHZNYzidHJOGgsT4Kzbk6tB1oEIWTUkQd3KwE0n5WWngENZQ4PxEWnUiZK-c0XoiqG6odpxxK1R3ypu0-m1L67NZVeVmY9LtTjB5pWauqNNmFZSBRkolm70_3RotzCJynYPPncO7QeXZW4tsO9uo-bykR8isYG-ui05QQgXA0-_lb-CgXWX5J_rjT8" />
              <div
                class="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <span
                  class="text-[10px] uppercase tracking-widest bg-black/40 backdrop-blur px-3 py-1">Ethical
                  Curation</span>
              </div>
            </div>
            <div class="group relative aspect-square overflow-hidden">
              <img alt="Geometric architecture"
                class="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-110"
                data-alt="Brutalist stairs spiraling upwards into bright light with sharp dark edges and high contrast lighting"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4xsXNa0NljGyTbDnz09Me3IVhJm5tsvlxVysz2bcmAuOGKOasyYCxT_kZ3lcsgHQ6P9iQWAlhNYQSQHlEj8_fYMzJMFc-HIhbOrynzkmfvUWfmFqim-9Hft0G6snEYVJ6vaMmcjjaQ3l9HNq7dHeTWtcyd-7rJLzdw6Q3mg6_GsiKNbl8Ie6hr_sOrLM0KeMEyr4yJVsCsp9syMp5rrLP4B2ZSMK058Rl_Ty4ZOOqv6yK4weH2K45PhYk9EKwIn0Elk9bTBgL9qM" />
              <div
                class="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <span
                  class="text-[10px] uppercase tracking-widest bg-black/40 backdrop-blur px-3 py-1">Zero
                  Waste Policy</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Chapter 3: Ethics -->
      <section class="py-40 bg-white">
        <div class="max-w-4xl mx-auto px-8 text-center">
          <span
            class="font-label text-xs tracking-widest uppercase text-secondary mb-6 block">Chapter
            III</span>
          <h2
            class="text-5xl md:text-7xl font-extrabold tracking-tighter mb-12">RADICAL
            DURABILITY.</h2>
          <div
            class="space-y-12 text-on-surface-variant font-body text-xl leading-relaxed max-w-2xl mx-auto">
            <p>
              We do not believe in seasons. We believe in cycles. Our garments
              are designed to age, to patina, and to outlive the trends that
              dominate the industry.
            </p>
            <p class="font-bold text-primary">
              Every piece in the MONOLITH archive is constructed using 100%
              biodegradable fibers or recycled post-consumer architectural
              plastics.
            </p>
            <div class="pt-8">
              <button
                class="bg-primary text-on-primary px-12 py-5 font-label tracking-[0.2em] text-xs uppercase hover:bg-secondary transition-colors duration-300">
                Read the Impact Report
              </button>
            </div>
          </div>
        </div>
      </section>
      <!-- Signature Quote -->
      <section
        class="relative h-[614px] flex items-center justify-center bg-surface-container-lowest">
        <div
          class="absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <span
            class="text-[25vw] font-black text-surface-container-high select-none opacity-40 leading-none">MONO</span>
        </div>
        <div class="relative z-10 text-center max-w-lg px-8">
          <h3
            class="font-headline text-3xl font-light italic text-primary-container leading-relaxed">
            "We build the frames, you provide the light."
          </h3>
          <div class="w-12 h-[1px] bg-secondary mx-auto mt-8"></div>
        </div>
      </section>
    </main>
    <!-- Footer -->
    <footer
      class="bg-[#151c24] text-white w-full px-12 py-24 flex flex-col md:flex-row justify-between content-start">
      <div class="mb-12 md:mb-0">
        <span
          class="text-xl font-bold text-white mb-8 block uppercase tracking-tighter">MONOLITH</span>
        <div class="flex flex-col space-y-4">
          <a
            class="font-['Inter'] text-xs tracking-widest uppercase text-gray-400 hover:text-white hover:tracking-[0.2em] transition-all duration-300"
            href="#">Privacy Policy</a>
          <a
            class="font-['Inter'] text-xs tracking-widest uppercase text-gray-400 hover:text-white hover:tracking-[0.2em] transition-all duration-300"
            href="#">Terms of Service</a>
          <a
            class="font-['Inter'] text-xs tracking-widest uppercase text-gray-400 hover:text-white hover:tracking-[0.2em] transition-all duration-300"
            href="#">Shipping &amp; Returns</a>
          <a
            class="font-['Inter'] text-xs tracking-widest uppercase text-gray-400 hover:text-white hover:tracking-[0.2em] transition-all duration-300"
            href="#">Contact</a>
        </div>
      </div>
      <div class="flex flex-col justify-between items-start md:items-end">
        <div class="mb-12 md:mb-0">
          <span
            class="font-['Inter'] text-[10px] tracking-[0.3em] uppercase text-secondary-fixed block mb-2">Join
            the Collective</span>
          <div class="flex items-center border-b border-gray-700 pb-2 w-64">
            <input
              class="bg-transparent border-none text-xs tracking-widest focus:ring-0 p-0 w-full placeholder:text-gray-600"
              placeholder="Email Address" type="email" />
            <button
              class="material-symbols-outlined text-sm">arrow_forward</button>
          </div>
        </div>
        <p
          class="font-['Inter'] text-[10px] tracking-widest uppercase text-gray-500 mt-12 md:mt-0">
          © 2024 THE ARCHITECTURAL BOUTIQUE. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  </body></html>

<!-- 9. À Propos / Histoire de la Marque (Story) -->
# Plan de Design pour le Site E-commerce

Basé sur votre structure de base de données (produits, catégories, commandes,
utilisateurs) et les standards du e-commerce moderne en 2026, voici les 10 pages
que je propose de concevoir pour votre projet :

### Parcours Client & Vente
1. **Page d'Accueil (Home)** : Une vitrine immersive avec un "Bento Grid" pour
les catégories phares, les meilleures ventes et une narration de marque
(Scrollytelling).
2. **Catalogue de Produits (Listing)** : Une grille dynamique avec filtres
avancés (prix, catégories, stocks) et options de tri.
3. **Fiche Produit (Detail)** : Présentation détaillée avec images haute
résolution, gestion des stocks, avis clients et suggestions de produits liés.
4. **Panier (Cart)** : Récapitulatif clair des articles, modification des
quantités et calcul des frais de livraison en temps réel.

### Conversion & Paiement
5. **Tunnel de Commande (Checkout)** : Un processus de paiement simplifié en une
page (ou étapes claires) incluant la saisie de l'adresse et le choix du mode de
paiement.
6. **Confirmation de Commande (Success)** : Remerciements, récapitulatif final
et suivi de commande initial.

### Compte Utilisateur
7. **Connexion / Inscription (Auth)** : Formulaires épurés pour l'accès aux
comptes clients.
8. **Tableau de Bord Client (Dashboard)** : Vue d'ensemble des commandes
passées, gestion du profil et des adresses.

### Information & Support
9. **À Propos / Histoire de la Marque (Story)** : Page narrative pour renforcer
la confiance et présenter l'éthique de l'entreprise.
10. **FAQ / Support** : Aide aux utilisateurs, politiques de retour et
formulaire de contact.

---
**Style Visuel :** Je partirai sur un design moderne, propre et aéré, avec des
micro-interactions pour une expérience utilisateur fluide.

Souhaitez-vous valider ce plan ou apporter des modifications à cette liste avant
que je ne lance la création du Design System ?

<!-- Plan des 10 pages E-commerce -->
<!DOCTYPE html>

<html class="light" lang="en"><head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>MONOLITH | Authentication</title>
    <script
      src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
    <link
      href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;700;800&amp;family=Inter:wght@400;500;600&amp;display=swap"
      rel="stylesheet" />
    <link
      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap"
      rel="stylesheet" />
    <link
      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap"
      rel="stylesheet" />
    <script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            colors: {
              "tertiary-container": "#00201a",
              "on-secondary": "#ffffff",
              "on-primary": "#ffffff",
              "tertiary-fixed": "#afefdd",
              "on-primary-fixed": "#151c24",
              "primary-fixed-dim": "#c0c7d2",
              "on-tertiary-container": "#518f7f",
              "error": "#ba1a1a",
              "on-tertiary-fixed-variant": "#065043",
              "surface-bright": "#f8f9ff",
              "tertiary-fixed-dim": "#94d3c1",
              "on-error-container": "#93000a",
              "surface-tint": "#585f69",
              "outline-variant": "#c5c6cb",
              "on-tertiary": "#ffffff",
              "on-primary-fixed-variant": "#404751",
              "on-surface": "#151c24",
              "primary-container": "#151c24",
              "on-secondary-fixed": "#261900",
              "secondary-container": "#fed488",
              "surface-variant": "#dce3ee",
              "on-secondary-container": "#785a1a",
              "on-background": "#151c24",
              "surface-container-highest": "#dce3ee",
              "surface-container-high": "#e2e9f4",
              "surface-container-lowest": "#ffffff",
              "surface-container": "#e8eefa",
              "background": "#f8f9ff",
              "primary": "#000000",
              "secondary-fixed": "#ffdea5",
              "on-secondary-fixed-variant": "#5d4201",
              "inverse-surface": "#2a313a",
              "error-container": "#ffdad6",
              "surface-dim": "#d4dae6",
              "on-surface-variant": "#44474b",
              "surface-container-low": "#eef4ff",
              "inverse-on-surface": "#eaf1fd",
              "tertiary": "#000000",
              "on-error": "#ffffff",
              "on-tertiary-fixed": "#00201a",
              "on-primary-container": "#7d848f",
              "secondary": "#775a19",
              "inverse-primary": "#c0c7d2",
              "outline": "#75777c",
              "primary-fixed": "#dce3ee",
              "surface": "#f8f9ff",
              "secondary-fixed-dim": "#e9c176"
            },
            fontFamily: {
              "headline": ["Manrope"],
              "body": ["Inter"],
              "label": ["Inter"]
            },
            borderRadius: {"DEFAULT": "0px", "lg": "0px", "xl": "0px", "full": "9999px"},
          },
        },
      }
    </script>
    <style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        body {
            font-family: 'Inter', sans-serif;
            background-color: #f8f9ff;
        }
        .editorial-shadow {
            box-shadow: 0px 20px 40px rgba(21, 28, 36, 0.06);
        }
        input:focus {
            outline: none;
            border-bottom: 2px solid #775a19 !important;
        }
    </style>
  </head>
  <body class="bg-background text-on-background min-h-screen flex flex-col">
    <!-- TopNavBar (Shared Component Placeholder Logic) -->
    <!-- Suppressed for focused authentication journey per "Relevance Check" rule -->
    <main class="flex-grow flex items-stretch min-h-screen">
      <!-- Brand Visual Side (Asymmetric Layout) -->
      <div
        class="hidden lg:flex lg:w-1/2 relative bg-primary-container overflow-hidden items-center justify-center">
        <div class="absolute inset-0 opacity-40">
          <img class="w-full h-full object-cover"
            data-alt="Interior of a minimalist architectural boutique with concrete walls, high ceilings, and dramatic natural light filtering through linear windows."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoSdHh2kwyPZ8beo4w5V6FCCvSUs_e0raliKbXmF_nClhjyvvZwjRhW7Ie89yx5FR7x7Oh2wtuEFmSAA7UTucCnxMe-0rATfIoC5ogGYiED05cvC_FU-no8WwTD2hS7-HuyDudRXvIM2QdNGW28MXfrklBy6VgtIm3EF_B5d0pTuLhxl9qbU8WVgJd6M3umQDQPTs_vKZnLee-Iyy6myeb25wHFEUE8ETQvzfl07_F-LIVyfA68jgAbqDTXMX8_G8YOOWexo2izAo" />
        </div>
        <div class="relative z-10 p-16 max-w-xl">
          <h1
            class="font-headline text-6xl font-black tracking-tighter text-white mb-6 leading-none">
            MONOLITH
          </h1>
          <p
            class="font-body text-surface-variant text-lg leading-relaxed tracking-wide opacity-80">
            ACCESS THE CURATED ARCHIVE. A SANCTUARY FOR ARCHITECTURAL PRECISION
            AND MINIMALIST DESIGN.
          </p>
          <div class="mt-12 w-24 h-1 bg-secondary"></div>
        </div>
      </div>
      <!-- Auth Form Side -->
      <div
        class="w-full lg:w-1/2 flex flex-col justify-center items-center p-8 md:p-16 bg-surface">
        <div class="w-full max-w-md">
          <!-- Mobile Logo -->
          <div class="lg:hidden mb-12 text-center">
            <span
              class="font-headline text-3xl font-black tracking-tighter text-primary">MONOLITH</span>
          </div>
          <!-- Toggle Navigation (Editorial Style) -->
          <div class="flex gap-8 mb-16 border-b border-outline-variant/20">
            <button
              class="pb-4 font-headline text-sm font-bold uppercase tracking-widest text-primary border-b-2 border-primary">
              Login
            </button>
            <button
              class="pb-4 font-headline text-sm font-bold uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors">
              Register
            </button>
          </div>
          <!-- Form Section -->
          <div class="space-y-10">
            <header>
              <h2
                class="font-headline text-2xl font-bold text-on-primary-fixed mb-2">Welcome
                Back.</h2>
              <p class="font-body text-sm text-on-surface-variant">Please enter
                your credentials to access your profile.</p>
            </header>
            <form class="space-y-8">
              <!-- Input Field: Clinical Legibility -->
              <div class="relative">
                <label
                  class="block font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant mb-1">Email
                  Address</label>
                <input
                  class="w-full bg-transparent border-t-0 border-x-0 border-b border-outline py-3 px-0 font-body text-sm transition-all focus:ring-0 placeholder:text-outline-variant"
                  placeholder="arch@monolith.com" type="email" />
              </div>
              <div class="relative">
                <label
                  class="block font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant mb-1">Password</label>
                <input
                  class="w-full bg-transparent border-t-0 border-x-0 border-b border-outline py-3 px-0 font-body text-sm transition-all focus:ring-0 placeholder:text-outline-variant"
                  placeholder="••••••••" type="password" />
              </div>
              <div class="flex items-center justify-between">
                <label class="flex items-center group cursor-pointer">
                  <input
                    class="w-4 h-4 rounded-none border-outline text-primary focus:ring-0 focus:ring-offset-0"
                    type="checkbox" />
                  <span
                    class="ml-2 font-label text-xs uppercase tracking-wider text-on-surface-variant group-hover:text-primary">Remember
                    Me</span>
                </label>
                <a
                  class="font-label text-xs uppercase tracking-wider text-secondary hover:underline"
                  href="#">Forgot Password?</a>
              </div>
              <button
                class="w-full bg-primary text-on-primary py-5 font-headline text-sm font-bold uppercase tracking-[0.2em] hover:bg-primary-container transition-all active:scale-[0.98]"
                type="submit">
                Sign In
              </button>
            </form>
            <!-- Divider -->
            <div class="relative flex items-center py-4">
              <div class="flex-grow border-t border-outline-variant/30"></div>
              <span
                class="flex-shrink mx-4 font-label text-[10px] text-outline uppercase tracking-widest">Or
                Continue With</span>
              <div class="flex-grow border-t border-outline-variant/30"></div>
            </div>
            <!-- Social Logins (Bento Style Minor) -->
            <div class="grid grid-cols-2 gap-4">
              <button
                class="flex items-center justify-center gap-3 bg-surface-container-lowest border border-outline-variant/10 py-4 hover:bg-surface-container transition-colors active:scale-95">
                <span class="material-symbols-outlined text-[18px]"
                  data-icon="cloud">cloud</span>
                <span
                  class="font-label text-[10px] font-bold uppercase tracking-widest">Google</span>
              </button>
              <button
                class="flex items-center justify-center gap-3 bg-surface-container-lowest border border-outline-variant/10 py-4 hover:bg-surface-container transition-colors active:scale-95">
                <span class="material-symbols-outlined text-[18px]"
                  data-icon="terminal">terminal</span>
                <span
                  class="font-label text-[10px] font-bold uppercase tracking-widest">Github</span>
              </button>
            </div>
            <!-- Footnote -->
            <p
              class="text-center font-body text-xs text-on-surface-variant mt-12">
              By signing in, you agree to our <a class="text-primary underline"
                href="#">Terms of Service</a> and <a
                class="text-primary underline" href="#">Privacy Policy</a>.
            </p>
          </div>
        </div>
      </div>
    </main>
    <!-- Footer (Shared Component) -->
    <footer
      class="w-full px-12 py-12 flex flex-col md:flex-row justify-between content-start bg-[#151c24] text-white">
      <div class="mb-8 md:mb-0">
        <span
          class="text-xl font-bold text-white mb-8 block font-headline tracking-tighter">THE
          ARCHITECTURAL BOUTIQUE</span>
        <p
          class="font-['Inter'] text-xs tracking-widest uppercase text-gray-400">
          © 2024 THE ARCHITECTURAL BOUTIQUE. ALL RIGHTS RESERVED.
        </p>
      </div>
      <div class="flex flex-wrap gap-8">
        <a
          class="font-['Inter'] text-xs tracking-widest uppercase text-gray-400 hover:text-white hover:tracking-[0.2em] transition-all duration-300"
          href="#">Privacy Policy</a>
        <a
          class="font-['Inter'] text-xs tracking-widest uppercase text-gray-400 hover:text-white hover:tracking-[0.2em] transition-all duration-300"
          href="#">Terms of Service</a>
        <a
          class="font-['Inter'] text-xs tracking-widest uppercase text-gray-400 hover:text-white hover:tracking-[0.2em] transition-all duration-300"
          href="#">Shipping &amp; Returns</a>
        <a
          class="font-['Inter'] text-xs tracking-widest uppercase text-gray-400 hover:text-white hover:tracking-[0.2em] transition-all duration-300"
          href="#">Contact</a>
      </div>
    </footer>
  </body></html>

<!-- 7. Connexion / Inscription (Auth) -->
<!DOCTYPE html>

<html class="scroll-smooth" lang="en"><head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <script
      src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
    <link
      href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;700;800&amp;family=Inter:wght@400;500;600&amp;display=swap"
      rel="stylesheet" />
    <link
      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap"
      rel="stylesheet" />
    <link
      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap"
      rel="stylesheet" />
    <script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            colors: {
              "tertiary-container": "#00201a",
              "on-secondary": "#ffffff",
              "on-primary": "#ffffff",
              "tertiary-fixed": "#afefdd",
              "on-primary-fixed": "#151c24",
              "primary-fixed-dim": "#c0c7d2",
              "on-tertiary-container": "#518f7f",
              "error": "#ba1a1a",
              "on-tertiary-fixed-variant": "#065043",
              "surface-bright": "#f8f9ff",
              "tertiary-fixed-dim": "#94d3c1",
              "on-error-container": "#93000a",
              "surface-tint": "#585f69",
              "outline-variant": "#c5c6cb",
              "on-tertiary": "#ffffff",
              "on-primary-fixed-variant": "#404751",
              "on-surface": "#151c24",
              "primary-container": "#151c24",
              "on-secondary-fixed": "#261900",
              "secondary-container": "#fed488",
              "surface-variant": "#dce3ee",
              "on-secondary-container": "#785a1a",
              "on-background": "#151c24",
              "surface-container-highest": "#dce3ee",
              "surface-container-high": "#e2e9f4",
              "surface-container-lowest": "#ffffff",
              "surface-container": "#e8eefa",
              "background": "#f8f9ff",
              "primary": "#000000",
              "secondary-fixed": "#ffdea5",
              "on-secondary-fixed-variant": "#5d4201",
              "inverse-surface": "#2a313a",
              "error-container": "#ffdad6",
              "surface-dim": "#d4dae6",
              "on-surface-variant": "#44474b",
              "surface-container-low": "#eef4ff",
              "inverse-on-surface": "#eaf1fd",
              "tertiary": "#000000",
              "on-error": "#ffffff",
              "on-tertiary-fixed": "#00201a",
              "on-primary-container": "#7d848f",
              "secondary": "#775a19",
              "inverse-primary": "#c0c7d2",
              "outline": "#75777c",
              "primary-fixed": "#dce3ee",
              "surface": "#f8f9ff",
              "secondary-fixed-dim": "#e9c176"
            },
            fontFamily: {
              "headline": ["Manrope"],
              "body": ["Inter"],
              "label": ["Inter"]
            },
            borderRadius: {"DEFAULT": "0px", "lg": "0px", "xl": "0px", "full": "9999px"},
          },
        },
      }
    </script>
    <style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
    </style>
  </head>
  <body class="bg-background font-body text-on-surface">
    <!-- TopNavBar -->
    <nav
      class="fixed top-0 w-full z-50 bg-[#f8f9ff]/90 dark:bg-[#121921]/90 backdrop-blur-xl no-border transition-colors duration-300">
      <div
        class="flex justify-between items-center w-full px-8 py-6 max-w-[1920px] mx-auto">
        <div class="flex items-center gap-12">
          <a
            class="text-2xl font-black tracking-tighter text-black dark:text-white"
            href="#">MONOLITH</a>
          <div class="hidden md:flex gap-8 items-center">
            <a
              class="font-['Manrope'] tracking-tight font-bold uppercase text-sm text-black dark:text-white border-b-2 border-black dark:border-white pb-1"
              href="#">Shop</a>
            <a
              class="font-['Manrope'] tracking-tight font-bold uppercase text-sm text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
              href="#">Collections</a>
            <a
              class="font-['Manrope'] tracking-tight font-bold uppercase text-sm text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
              href="#">Archive</a>
            <a
              class="font-['Manrope'] tracking-tight font-bold uppercase text-sm text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
              href="#">Story</a>
          </div>
        </div>
        <div class="flex items-center gap-6">
          <div
            class="hidden lg:flex items-center border-b border-outline/30 px-2 py-1">
            <span
              class="material-symbols-outlined text-sm opacity-50">search</span>
            <input
              class="bg-transparent border-none focus:ring-0 text-[10px] tracking-widest uppercase w-32"
              placeholder="SEARCH" type="text" />
          </div>
          <button
            class="material-symbols-outlined text-black dark:text-white hover:scale-95 duration-200">shopping_bag</button>
          <button
            class="material-symbols-outlined text-black dark:text-white hover:scale-95 duration-200">person</button>
        </div>
      </div>
    </nav>
    <main class="pt-[88px]">
      <!-- Hero Section -->
      <section
        class="relative h-[921px] w-full overflow-hidden bg-primary-container">
        <div class="absolute inset-0 opacity-80">
          <img class="w-full h-full object-cover"
            data-alt="Cinematic shot of high-end minimalist luxury apparel hanging on a sculptural metal rack in a brutalist concrete gallery space with dramatic lighting"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPd-o4xLc4oUQognvHJ1ndL_k1Qu-FJxR7OE8p-3q_sYw7yiphWoewtcrApwnIhi9Ima1d-qw7rR6DUOW5cYvNIhjdJH4Re2MKp9qgsd4QCziQPTHTPfvbrliWEP0qyta7xH4IiGcrRfoWtkVl-RUFsaCYgodqjZZyFbu0cWNnk7KM1ANCoXAjS-0XAF9s_p9CI5ybLO4wX6sXj3skNtZn1BlnXE1Atwat-TAEg2I7CjYU5DHznptLJ90vw_q23DDVBsOHemW9A8Y" />
          <div
            class="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
        </div>
        <div
          class="relative h-full flex flex-col justify-center px-12 md:px-24">
          <span
            class="font-label text-secondary text-xs tracking-[0.3em] uppercase mb-4">Spring
            / Summer 2024</span>
          <h1
            class="font-headline text-5xl md:text-8xl font-extrabold text-white tracking-tighter leading-[0.9] max-w-4xl">
            ARCHITECTURAL<br />PRECISION.
          </h1>
          <p
            class="font-body text-gray-300 mt-8 max-w-md text-sm leading-relaxed">
            A collection defined by structural integrity and monochromatic
            depth. Designed for the modern monolith.
          </p>
          <div class="mt-12 flex gap-4">
            <button
              class="bg-white text-black px-10 py-4 font-label text-xs font-bold tracking-widest uppercase hover:bg-secondary-container hover:text-on-secondary-container transition-all">Explore
              Collection</button>
            <button
              class="border border-white/30 text-white px-10 py-4 font-label text-xs font-bold tracking-widest uppercase hover:bg-white/10 transition-all">Lookbook</button>
          </div>
        </div>
      </section>
      <!-- Bento Grid Categories -->
      <section class="py-24 px-8 max-w-[1920px] mx-auto">
        <div class="flex flex-col mb-16">
          <h2
            class="font-headline text-3xl font-bold tracking-tighter uppercase">Curated
            Pillars</h2>
          <div class="w-12 h-1 bg-secondary mt-2"></div>
        </div>
        <div
          class="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[800px]">
          <!-- Large Item -->
          <div
            class="md:col-span-2 md:row-span-2 relative group overflow-hidden">
            <img
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              data-alt="Editorial portrait of a man in a structured charcoal overcoat against a minimalist grey background with high contrast shadows"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKlk0cfwXSOt6vixDRqQ4md-EY9MZg_CEAQhgjAQwFl0meMJhlgFtanmGV4vqrHRBS2VaxZ_D03YDcAkjuOHszETqNhSnvKSV9S7_oMJh1atWISCSTXiH1ra9G54uL-IhtCMZD74SbaQAWFVO6tZKLfGwqjWePu04Ozn4-vg52zMKTuI6TUipCSvSINtWf91lgy_-Kz1sJfnopDqsJVGAsJxtc5adfWSx9lKsUwNRAqi-8z9zlJTfqXYj4YBa9gOy0tnPk4m6gDuc" />
            <div
              class="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all"></div>
            <div class="absolute bottom-10 left-10">
              <h3
                class="font-headline text-4xl text-white font-black tracking-tighter mb-4">OUTERWEAR</h3>
              <a
                class="font-label text-xs text-white border-b border-white/50 pb-1 tracking-widest uppercase"
                href="#">View Series</a>
            </div>
          </div>
          <!-- Wide Item -->
          <div class="md:col-span-2 relative group overflow-hidden">
            <img
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              data-alt="Close up of high quality textile texture with neutral beige tones and sharp geometric shadows"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGu0fUrtYrTonhqP_wGyARbdM0DMqK7_UCHqJLnZazHkb3nHDytATMO7JpQaJHEWtlBIMYabE_7ClqgzXYRB686C2ptUOkAdoeC17FdnyOvwSGSvYhWxxolMPopyaN7WAn_s8V_LYP1mt199YitnAzbZjgdrVePlVUDVQWXxj8_JFrczxgP01erv6Uhg7V4D--Tzkb58rSIl0py1yTRqWvZJ7zZdKDw1IH14e3YYs9N0Y0dqPxZJCKUH9Jbi_uIuo4H_8oEkRz7PM" />
            <div
              class="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-all"></div>
            <div class="absolute top-8 right-8 text-right">
              <h3
                class="font-headline text-2xl text-white font-black tracking-tighter">ESSENTIALS</h3>
            </div>
          </div>
          <!-- Small Item 1 -->
          <div class="relative group overflow-hidden">
            <img
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              data-alt="High-end leather accessories on a dark stone surface with artistic spotlighting"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIMJaBxMzTkdVubYAFg-w5zkHw_U_QLfmVBMkjisDI2ZmZaNjqXrG_yJlHI-Sp96Kb_Cua1-vYmILAbU1GfTcbhjqHtXcOTnTH_8jrA8Iq8TZ3AaegaplSJrXNU5_T6lgdjmUvZ0sIX9raollGkkG1c0bbuSRjoTwr1nL9_F7gsmEthXgDQpbNKDzkEbxg54KJH3MrtPDjVUUsymXaHHSmZ96BBiXAaAPolXMaV1vfsnXVXhAYA9SpR0xRuXDab_fHnIzwjQz_hOE" />
            <div class="absolute inset-0 bg-black/20"></div>
            <div class="absolute inset-0 flex items-center justify-center">
              <h3
                class="font-headline text-xl text-white font-black tracking-tighter uppercase">Objects</h3>
            </div>
          </div>
          <!-- Small Item 2 -->
          <div
            class="relative group overflow-hidden bg-surface-container-highest">
            <img
              class="w-full h-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
              data-alt="Interior of a luxury fashion boutique with clean lines and minimalist metal displays"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZN6JTZQTk3uQftGPr2hQdv1qedV-mPh_-9xeME_cOaAsBFTuoGAe0yFRfVf_QCsbVuLBU7OcOhKGKvMV0IxSmYHanhMStGYyBDR0B3o8pjxlgAgr1-xNAa20thnvp60zscwuXhblXGoq_4SY3O261rU3I72ACczjkf-bF0fJygfZQUddS6JFlarHIqGWelcELu_sLGMCpwJ5XbjyfLGx9eFrB6Uu1386A_ZdlP3eC5aCEE9TS3_fKabRtbKCTK9CfbANrfJfqLDs" />
            <div
              class="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
              <h3
                class="font-headline text-xl text-primary font-black tracking-tighter uppercase mb-2">The
                Archive</h3>
              <p
                class="text-[10px] font-label tracking-widest text-on-surface-variant uppercase">Previous
                Seasons Redefined</p>
            </div>
          </div>
        </div>
      </section>
      <!-- Best Sellers Section -->
      <section class="bg-surface-container-low py-24 overflow-hidden">
        <div
          class="px-8 max-w-[1920px] mx-auto flex justify-between items-end mb-16">
          <div>
            <span
              class="font-label text-secondary text-[10px] tracking-[0.4em] uppercase block mb-2">Global
              Favorites</span>
            <h2
              class="font-headline text-5xl font-extrabold tracking-tighter">THE
              BESTSELLERS</h2>
          </div>
          <a
            class="font-label text-xs font-bold tracking-widest border-b-2 border-primary pb-1 uppercase hover:text-secondary hover:border-secondary transition-all"
            href="#">Shop All Products</a>
        </div>
        <div class="flex gap-8 px-8 overflow-x-auto hide-scrollbar pb-12">
          <!-- Product Card 1 -->
          <div class="min-w-[350px] group">
            <div
              class="relative aspect-[3/4] bg-surface-container-lowest overflow-hidden">
              <img
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                data-alt="Full length shot of a minimalist black turtleneck sweater on a mannequin with sharp studio lighting"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9mHfvmoLozlc1YbFRqZTKAzYKnayhOeOAeFRcllrywkQt7Hv9WitPhEYqgoyaGHyvcXCrCYypxABgH0tKx0IElrGZv3ec9QbEXCG29Q8sADgfbsxYceDxUlYVgRdhaJZ_w_tXDc37e8LLr-pga6eHG_8dCHsyRL1w3_lLAJS-jemVQ6DuMBug6QLLFHJAuPX_VUTINpzfNrqBydT40EVmEi70RGcJTSkKEB3ozYefDq_SZvd82DZJWxuQbKZtLLoes1L6-vVHOnM" />
              <div
                class="absolute top-4 left-4 bg-primary text-white text-[10px] px-3 py-1 font-label tracking-widest uppercase">New</div>
              <button
                class="absolute bottom-0 w-full bg-primary text-white py-4 font-label text-xs tracking-widest uppercase translate-y-full group-hover:translate-y-0 transition-transform duration-300">Add
                to Cart</button>
            </div>
            <div class="mt-6">
              <div class="flex justify-between items-start">
                <h4
                  class="font-headline font-bold text-lg tracking-tight">Structured
                  Wool Blazer</h4>
                <span class="font-body text-sm font-semibold">$540</span>
              </div>
              <p
                class="font-body text-xs text-on-surface-variant mt-1 uppercase tracking-widest">Obsidian
                Black</p>
            </div>
          </div>
          <!-- Product Card 2 -->
          <div class="min-w-[350px] group mt-12">
            <div
              class="relative aspect-[3/4] bg-surface-container-lowest overflow-hidden">
              <img
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                data-alt="Minimalist luxury white shirt with precise collar detail and premium fabric texture"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZYhgOo_TZiFM_hiRWaad9jpJ7I88xgzt06j4V-1WtIYMzOjcghtHrPj1tZ53Ll4l0-3LwqiRY-jP3QyRP6eS_n5Ydfdm-JRr4HLdN8Vl4JfHc2B_YUyR7Q4mr1S5Eex0r15vpfl-FdNR4KUa8r2AoVkww8mq2UtZG0S7xw48FI-PKyl13FVgfSoEYHMcZWSpuJNc92mgAxzQavhCiop7dD_rWZTlqTNE6j_FEjfhUZcNAvg9FACsvJT4QixhgpXOJ_1Obh1AeNwE" />
              <button
                class="absolute bottom-0 w-full bg-primary text-white py-4 font-label text-xs tracking-widest uppercase translate-y-full group-hover:translate-y-0 transition-transform duration-300">Add
                to Cart</button>
            </div>
            <div class="mt-6">
              <div class="flex justify-between items-start">
                <h4
                  class="font-headline font-bold text-lg tracking-tight">Architectural
                  Shirt</h4>
                <span class="font-body text-sm font-semibold">$290</span>
              </div>
              <p
                class="font-body text-xs text-on-surface-variant mt-1 uppercase tracking-widest">Bone
                White</p>
            </div>
          </div>
          <!-- Product Card 3 -->
          <div class="min-w-[350px] group">
            <div
              class="relative aspect-[3/4] bg-surface-container-lowest overflow-hidden">
              <img
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                data-alt="High-fashion tailored trousers in charcoal grey hanging on a minimalist bronze rack"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0cRd2JkpquC_8QAdzprDlcbrSyp_NdWcjUqz5feymux7sl3eUrVrfa90_BY6p0D99wqe6ZGOrT7Cl9piySkbPMCptvjPBxf72NiaJwiKQh0WOB3Z_6tUnxikzyoU4w5NHpjOxYfykAvlG1Fnyzfeqi8OnPfb11i2lBoH7tH7GxWSHa4utBQTcAhT4SeBjpvSir96KnqI23HmirJIFQflxB9RCrA6rgxVmRzbSDk1IGv2uCYyhxNOPi9qbfSqWjRqiqoLOtyGsdTw" />
              <div
                class="absolute top-4 left-4 bg-secondary-container text-on-secondary-container text-[10px] px-3 py-1 font-label tracking-widest uppercase">Best
                Seller</div>
              <button
                class="absolute bottom-0 w-full bg-primary text-white py-4 font-label text-xs tracking-widest uppercase translate-y-full group-hover:translate-y-0 transition-transform duration-300">Add
                to Cart</button>
            </div>
            <div class="mt-6">
              <div class="flex justify-between items-start">
                <h4
                  class="font-headline font-bold text-lg tracking-tight">Pleated
                  Tapered Trouser</h4>
                <span class="font-body text-sm font-semibold">$380</span>
              </div>
              <p
                class="font-body text-xs text-on-surface-variant mt-1 uppercase tracking-widest">Slate
                Grey</p>
            </div>
          </div>
          <!-- Product Card 4 -->
          <div class="min-w-[350px] group mt-12">
            <div
              class="relative aspect-[3/4] bg-surface-container-lowest overflow-hidden">
              <img
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                data-alt="Close up of high quality leather tote bag with subtle logo and premium stitching"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwIHwnAG75ohca93lYOv4V5-OeguRnMgRrLrMW6p2JB74fQawc3VX65klxOa0cKOPzmUucUbsfEKNMn1AkvVGqQ2Rpg89PhMgU02v2P2ARd1k5t6EGU0yoMiSQwuPCzENgYBJdLSZpmKmm09yHZD8LzsSxFNKPiOblIHTrFiEqfbDfg_0hWAOe4AMxlNSjuFV6mrT2L7Jmx2DP8-IOnyr35dJJwuorfSN3tP-MyxbIxuYRmYjghfeGJ1GpjW85UEdLllkwIDpTgXM" />
              <button
                class="absolute bottom-0 w-full bg-primary text-white py-4 font-label text-xs tracking-widest uppercase translate-y-full group-hover:translate-y-0 transition-transform duration-300">Add
                to Cart</button>
            </div>
            <div class="mt-6">
              <div class="flex justify-between items-start">
                <h4
                  class="font-headline font-bold text-lg tracking-tight">Monolith
                  Carry-All</h4>
                <span class="font-body text-sm font-semibold">$850</span>
              </div>
              <p
                class="font-body text-xs text-on-surface-variant mt-1 uppercase tracking-widest">Matte
                Grain Leather</p>
            </div>
          </div>
        </div>
      </section>
      <!-- Brand Storytelling / Scrollytelling Element -->
      <section class="relative bg-primary py-32 overflow-hidden">
        <div
          class="absolute top-0 right-0 w-1/2 h-full opacity-20 hidden lg:block">
          <img class="w-full h-full object-cover"
            data-alt="Atmospheric shot of a high-end designer studio with sketches and fabric swatches on a heavy oak table"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzC5jSGMKlKYqnXXTcHgDPnOAUVQYBxMyPk88E8ZG_GxMvM0TyZ5LwMz3orhz-ByhIT98gCEtdG19m6jwiW4WlQ3_4GsFWSku7F3pyI0Y312NvzjbV7K02Z2yj6_OJHrNqd9_scOGML8nsXSku8om8ibGcAXES6WY5mWdjPYKUoQmqRaDwjz7Tya-KxU0Z9hpNfosZyBLR8frzAWuLW8GI6D45LF1H_6v8Rvepxy522Fz_JyRJT1kw_jg3KsT8pD-j2Q931GKDV9s" />
        </div>
        <div
          class="relative px-8 md:px-24 max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div class="space-y-12">
            <div class="inline-block border-l-2 border-secondary pl-6">
              <h2
                class="font-headline text-white text-5xl md:text-7xl font-extrabold tracking-tighter leading-none mb-4">THE
                STORY OF<br />SILENCE.</h2>
            </div>
            <div class="space-y-8 max-w-lg">
              <div class="group cursor-default">
                <span
                  class="text-secondary font-label text-[10px] tracking-[0.5em] uppercase block mb-2 opacity-50 group-hover:opacity-100 transition-opacity">Philosophy
                  01</span>
                <h3
                  class="text-white font-headline text-2xl font-bold tracking-tight mb-4">Architectural
                  Integrity</h3>
                <p class="text-gray-400 font-body text-sm leading-relaxed">We
                  view clothing as a personal habitat. Every seam is a
                  load-bearing wall, every silhouette an intentional space.</p>
              </div>
              <div class="group cursor-default">
                <span
                  class="text-secondary font-label text-[10px] tracking-[0.5em] uppercase block mb-2 opacity-50 group-hover:opacity-100 transition-opacity">Philosophy
                  02</span>
                <h3
                  class="text-white font-headline text-2xl font-bold tracking-tight mb-4">Ethical
                  Durability</h3>
                <p class="text-gray-400 font-body text-sm leading-relaxed">True
                  luxury is lasting. We partner with family-owned mills in Italy
                  to ensure textiles that age with character.</p>
              </div>
            </div>
            <div class="pt-8">
              <a
                class="inline-flex items-center gap-4 text-white font-label text-xs tracking-widest uppercase group"
                href="#">
                Read the Full Manifesto
                <span
                  class="material-symbols-outlined transition-transform group-hover:translate-x-2">arrow_right_alt</span>
              </a>
            </div>
          </div>
          <div class="hidden lg:block relative h-[600px]">
            <div
              class="absolute inset-0 bg-surface-container-high translate-x-12 translate-y-12"></div>
            <img class="absolute inset-0 w-full h-full object-cover"
              data-alt="Monochromatic fashion photography of a model in a long dark coat walking through a concrete tunnel with sharp light rays"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_NhfqGlDTj9AAy68kU_fEHqiQa1z6MTK7xakYZwDpxLZd8h7Atta02uXs7n7M9eN42d08uLfzV88JGxNQKECvYicBgPj8uEUzZncEM6B6kiCliy_YUGLlnPgtIqnIh4AbxcLt1KD1nPxYKJIv7syaFLSWoxtB2kXHf0NNdA1yl4BYzcv1-zAN0O9C5BtlmNgQEAO1B977bP58kgkW6kOLdwWjstTcPDkXXSAK3Tioyzp5KC9eceplqdIxH9sAHhorGXEMw_SdeOw" />
          </div>
        </div>
      </section>
      <!-- Newsletter / Social Proof Section -->
      <section class="py-24 px-8 bg-white">
        <div class="max-w-4xl mx-auto text-center">
          <h2
            class="font-headline text-4xl font-extrabold tracking-tighter mb-6">JOIN
            THE MONOLITH</h2>
          <p
            class="text-on-surface-variant font-body text-sm max-w-xl mx-auto mb-12">
            Subscribe to receive exclusive access to the Archive, private
            collections, and the biannual Architectural Journal.
          </p>
          <form class="flex flex-col md:flex-row gap-0 border-b border-primary">
            <input
              class="flex-grow bg-transparent border-none py-6 px-4 font-label text-xs tracking-widest focus:ring-0"
              placeholder="ENTER YOUR EMAIL ADDRESS" type="email" />
            <button
              class="bg-primary text-white py-6 px-12 font-label text-xs font-bold tracking-[0.3em] uppercase hover:bg-secondary transition-colors"
              type="submit">Join Now</button>
          </form>
        </div>
      </section>
    </main>
    <!-- Footer -->
    <footer
      class="bg-[#151c24] dark:bg-[#000000] w-full px-12 py-24 flex flex-col md:flex-row justify-between content-start">
      <div class="mb-12 md:mb-0">
        <span class="text-xl font-bold text-white mb-8 block">MONOLITH</span>
        <div class="flex flex-col gap-4">
          <a
            class="font-['Inter'] text-xs tracking-widest uppercase text-gray-400 hover:text-white transition-all hover:tracking-[0.2em]"
            href="#">Privacy Policy</a>
          <a
            class="font-['Inter'] text-xs tracking-widest uppercase text-gray-400 hover:text-white transition-all hover:tracking-[0.2em]"
            href="#">Terms of Service</a>
          <a
            class="font-['Inter'] text-xs tracking-widest uppercase text-gray-400 hover:text-white transition-all hover:tracking-[0.2em]"
            href="#">Shipping &amp; Returns</a>
          <a
            class="font-['Inter'] text-xs tracking-widest uppercase text-gray-400 hover:text-white transition-all hover:tracking-[0.2em]"
            href="#">Contact</a>
        </div>
      </div>
      <div class="flex flex-col items-start md:items-end justify-between">
        <div class="flex gap-8 mb-12">
          <a class="text-white hover:text-secondary-fixed-dim transition-colors"
            href="#"><span
              class="material-symbols-outlined">brand_family</span></a>
          <a class="text-white hover:text-secondary-fixed-dim transition-colors"
            href="#"><span
              class="material-symbols-outlined">alternate_email</span></a>
          <a class="text-white hover:text-secondary-fixed-dim transition-colors"
            href="#"><span class="material-symbols-outlined">public</span></a>
        </div>
        <p class="font-['Inter'] text-xs tracking-widest uppercase text-white">©
          2024 THE ARCHITECTURAL BOUTIQUE. ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  </body></html>

<!-- 1. Page d'Accueil (Home) -->
<!DOCTYPE html>

<html class="light" lang="en"><head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>MONOLITH | Checkout</title>
    <script
      src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
    <link
      href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;700;800&amp;family=Inter:wght@400;500;600&amp;display=swap"
      rel="stylesheet" />
    <link
      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap"
      rel="stylesheet" />
    <link
      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap"
      rel="stylesheet" />
    <script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            colors: {
              "tertiary-container": "#00201a",
              "on-secondary": "#ffffff",
              "on-primary": "#ffffff",
              "tertiary-fixed": "#afefdd",
              "on-primary-fixed": "#151c24",
              "primary-fixed-dim": "#c0c7d2",
              "on-tertiary-container": "#518f7f",
              "error": "#ba1a1a",
              "on-tertiary-fixed-variant": "#065043",
              "surface-bright": "#f8f9ff",
              "tertiary-fixed-dim": "#94d3c1",
              "on-error-container": "#93000a",
              "surface-tint": "#585f69",
              "outline-variant": "#c5c6cb",
              "on-tertiary": "#ffffff",
              "on-primary-fixed-variant": "#404751",
              "on-surface": "#151c24",
              "primary-container": "#151c24",
              "on-secondary-fixed": "#261900",
              "secondary-container": "#fed488",
              "surface-variant": "#dce3ee",
              "on-secondary-container": "#785a1a",
              "on-background": "#151c24",
              "surface-container-highest": "#dce3ee",
              "surface-container-high": "#e2e9f4",
              "surface-container-lowest": "#ffffff",
              "surface-container": "#e8eefa",
              "background": "#f8f9ff",
              "primary": "#000000",
              "secondary-fixed": "#ffdea5",
              "on-secondary-fixed-variant": "#5d4201",
              "inverse-surface": "#2a313a",
              "error-container": "#ffdad6",
              "surface-dim": "#d4dae6",
              "on-surface-variant": "#44474b",
              "surface-container-low": "#eef4ff",
              "inverse-on-surface": "#eaf1fd",
              "tertiary": "#000000",
              "on-error": "#ffffff",
              "on-tertiary-fixed": "#00201a",
              "on-primary-container": "#7d848f",
              "secondary": "#775a19",
              "inverse-primary": "#c0c7d2",
              "outline": "#75777c",
              "primary-fixed": "#dce3ee",
              "surface": "#f8f9ff",
              "secondary-fixed-dim": "#e9c176"
            },
            fontFamily: {
              "headline": ["Manrope"],
              "body": ["Inter"],
              "label": ["Inter"]
            },
            borderRadius: {"DEFAULT": "0px", "lg": "0px", "xl": "0px", "full": "9999px"},
          },
        },
      }
    </script>
    <style>
      .material-symbols-outlined {
        font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
      }
      ::-webkit-scrollbar { width: 4px; }
      ::-webkit-scrollbar-track { background: #f8f9ff; }
      ::-webkit-scrollbar-thumb { background: #151c24; }
    </style>
  </head>
  <body class="bg-surface font-body text-on-surface">
    <!-- TopNavBar: Architectural Monolith -->
    <nav
      class="fixed top-0 w-full z-50 bg-[#f8f9ff]/90 backdrop-blur-xl no-border transition-colors duration-300">
      <div
        class="flex justify-between items-center w-full px-8 py-6 max-w-[1920px] mx-auto">
        <div
          class="text-2xl font-black tracking-tighter text-black">MONOLITH</div>
        <div class="hidden md:flex gap-10">
          <a
            class="font-['Manrope'] tracking-tight font-bold uppercase text-sm text-gray-500 hover:text-black transition-colors"
            href="#">Shop</a>
          <a
            class="font-['Manrope'] tracking-tight font-bold uppercase text-sm text-gray-500 hover:text-black transition-colors"
            href="#">Collections</a>
          <a
            class="font-['Manrope'] tracking-tight font-bold uppercase text-sm text-gray-500 hover:text-black transition-colors"
            href="#">Archive</a>
          <a
            class="font-['Manrope'] tracking-tight font-bold uppercase text-sm text-gray-500 hover:text-black transition-colors"
            href="#">Story</a>
        </div>
        <div class="flex items-center gap-6">
          <button class="material-symbols-outlined text-on-surface"
            data-icon="shopping_bag">shopping_bag</button>
          <button class="material-symbols-outlined text-on-surface"
            data-icon="person">person</button>
        </div>
      </div>
    </nav>
    <main class="pt-32 pb-24 px-8 max-w-[1440px] mx-auto">
      <header class="mb-16">
        <h1
          class="font-headline text-5xl font-extrabold tracking-tighter text-on-primary-fixed mb-2">CHECKOUT</h1>
        <p
          class="font-body text-sm tracking-widest uppercase text-on-surface-variant">Review
          and confirm your acquisition</p>
      </header>
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <!-- Left Column: Checkout Details -->
        <div class="lg:col-span-7 space-y-16">
          <!-- Section 01: Shipping Address -->
          <section>
            <div class="flex items-center gap-4 mb-8">
              <span
                class="font-headline text-xl font-bold bg-primary text-on-primary w-8 h-8 flex items-center justify-center">01</span>
              <h2
                class="font-headline text-2xl font-bold tracking-tight uppercase">Shipping
                Address</h2>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div
                class="group border-b border-outline/30 focus-within:border-secondary transition-all">
                <label
                  class="block text-[10px] uppercase tracking-[0.2em] text-on-surface-variant mb-1">Full
                  Name</label>
                <input
                  class="w-full bg-transparent border-none p-0 pb-2 focus:ring-0 text-on-surface font-medium placeholder:text-outline-variant/50"
                  placeholder="ALEXANDER VANE" type="text" />
              </div>
              <div
                class="group border-b border-outline/30 focus-within:border-secondary transition-all">
                <label
                  class="block text-[10px] uppercase tracking-[0.2em] text-on-surface-variant mb-1">Email
                  Address</label>
                <input
                  class="w-full bg-transparent border-none p-0 pb-2 focus:ring-0 text-on-surface font-medium placeholder:text-outline-variant/50"
                  placeholder="A.VANE@ARCHITECTS.COM" type="email" />
              </div>
              <div
                class="md:col-span-2 group border-b border-outline/30 focus-within:border-secondary transition-all">
                <label
                  class="block text-[10px] uppercase tracking-[0.2em] text-on-surface-variant mb-1">Street
                  Address</label>
                <input
                  class="w-full bg-transparent border-none p-0 pb-2 focus:ring-0 text-on-surface font-medium placeholder:text-outline-variant/50"
                  placeholder="122 BRUTALIST WAY, STUDIO 4" type="text" />
              </div>
              <div
                class="group border-b border-outline/30 focus-within:border-secondary transition-all">
                <label
                  class="block text-[10px] uppercase tracking-[0.2em] text-on-surface-variant mb-1">City</label>
                <input
                  class="w-full bg-transparent border-none p-0 pb-2 focus:ring-0 text-on-surface font-medium placeholder:text-outline-variant/50"
                  placeholder="NEW YORK" type="text" />
              </div>
              <div
                class="group border-b border-outline/30 focus-within:border-secondary transition-all">
                <label
                  class="block text-[10px] uppercase tracking-[0.2em] text-on-surface-variant mb-1">Postal
                  Code</label>
                <input
                  class="w-full bg-transparent border-none p-0 pb-2 focus:ring-0 text-on-surface font-medium placeholder:text-outline-variant/50"
                  placeholder="10013" type="text" />
              </div>
            </div>
          </section>
          <!-- Section 02: Delivery Method -->
          <section>
            <div class="flex items-center gap-4 mb-8">
              <span
                class="font-headline text-xl font-bold bg-primary text-on-primary w-8 h-8 flex items-center justify-center">02</span>
              <h2
                class="font-headline text-2xl font-bold tracking-tight uppercase">Delivery
                Method</h2>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label
                class="relative block p-6 bg-surface-container-lowest border border-outline-variant/10 cursor-pointer hover:bg-surface-container-low transition-all">
                <input checked class="absolute right-6 top-6 accent-primary"
                  name="delivery" type="radio" value="standard" />
                <div class="pr-8">
                  <p
                    class="font-headline font-bold text-sm tracking-widest uppercase">Standard
                    Courier</p>
                  <p class="text-xs text-on-surface-variant mt-1">3-5 BUSINESS
                    DAYS</p>
                  <p
                    class="font-headline font-bold text-secondary mt-4">$0.00</p>
                </div>
              </label>
              <label
                class="relative block p-6 bg-surface-container-lowest border border-outline-variant/10 cursor-pointer hover:bg-surface-container-low transition-all">
                <input class="absolute right-6 top-6 accent-primary"
                  name="delivery" type="radio" value="priority" />
                <div class="pr-8">
                  <p
                    class="font-headline font-bold text-sm tracking-widest uppercase">Priority
                    Vault</p>
                  <p class="text-xs text-on-surface-variant mt-1">NEXT DAY
                    DELIVERY</p>
                  <p
                    class="font-headline font-bold text-secondary mt-4">$45.00</p>
                </div>
              </label>
            </div>
          </section>
          <!-- Section 03: Payment Details -->
          <section>
            <div class="flex items-center gap-4 mb-8">
              <span
                class="font-headline text-xl font-bold bg-primary text-on-primary w-8 h-8 flex items-center justify-center">03</span>
              <h2
                class="font-headline text-2xl font-bold tracking-tight uppercase">Payment
                Details</h2>
            </div>
            <div class="space-y-8">
              <div class="flex gap-4 p-1 bg-surface-container-low w-fit mb-8">
                <button
                  class="px-8 py-3 bg-primary text-on-primary font-headline text-[10px] font-bold tracking-widest uppercase">Credit
                  Card</button>
                <button
                  class="px-8 py-3 hover:bg-surface-container-high transition-all font-headline text-[10px] font-bold tracking-widest uppercase">PayPal</button>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div
                  class="md:col-span-2 group border-b border-outline/30 focus-within:border-secondary transition-all">
                  <label
                    class="block text-[10px] uppercase tracking-[0.2em] text-on-surface-variant mb-1">Card
                    Number</label>
                  <input
                    class="w-full bg-transparent border-none p-0 pb-2 focus:ring-0 text-on-surface font-medium placeholder:text-outline-variant/50"
                    placeholder="0000 0000 0000 0000" type="text" />
                </div>
                <div
                  class="group border-b border-outline/30 focus-within:border-secondary transition-all">
                  <label
                    class="block text-[10px] uppercase tracking-[0.2em] text-on-surface-variant mb-1">Expiry
                    Date</label>
                  <input
                    class="w-full bg-transparent border-none p-0 pb-2 focus:ring-0 text-on-surface font-medium placeholder:text-outline-variant/50"
                    placeholder="MM / YY" type="text" />
                </div>
                <div
                  class="group border-b border-outline/30 focus-within:border-secondary transition-all">
                  <label
                    class="block text-[10px] uppercase tracking-[0.2em] text-on-surface-variant mb-1">CVV</label>
                  <input
                    class="w-full bg-transparent border-none p-0 pb-2 focus:ring-0 text-on-surface font-medium placeholder:text-outline-variant/50"
                    placeholder="***" type="text" />
                </div>
              </div>
              <div
                class="flex items-start gap-3 mt-12 p-6 bg-surface-container-low">
                <span class="material-symbols-outlined text-secondary"
                  data-icon="shield">shield</span>
                <p
                  class="text-[11px] leading-relaxed text-on-surface-variant uppercase tracking-wider">
                  Your transaction is secured with 256-bit encryption. We do not
                  store full credit card details on our architectural servers.
                </p>
              </div>
            </div>
          </section>
        </div>
        <!-- Right Column: Order Summary Sidebar -->
        <aside class="lg:col-span-5">
          <div
            class="bg-surface-container-lowest p-12 sticky top-32 border border-outline-variant/5 shadow-[0px_20px_40px_rgba(21,28,36,0.06)]">
            <h3
              class="font-headline text-lg font-bold tracking-widest uppercase mb-10 pb-4 border-b border-surface-container-high">Order
              Summary</h3>
            <div class="space-y-8 mb-12">
              <!-- Product Item 1 -->
              <div class="flex gap-6">
                <div class="w-24 h-32 bg-surface-container-low flex-shrink-0">
                  <img class="w-full h-full object-cover"
                    data-alt="Minimalist architectural stone incense burner on a clean white gallery pedestal with sharp shadows"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4hODkfc0E7a8d79mHVNGVXXks5EvYF8N2Q0cff24ftmw2p-96CSKoDrukgK6mphd24gzg1ZD5a5eczIfoQwrRfuurBQRIhsmO34B_8jFuywlGw0hDSIIcLN93BgcPJkuVj-1OHBryYBreac6NsDMIFLXoPjXtMselmuaFzy_gS-mdKi6hmL2SXDNbhbnlzwbjaj_7uneTUp2Nzfg0s7TYmVObPGFvyNI4iCz9BQgHBJ4ffRu1y1dEDN3kWmeo1aD6OEa_3vIllqk" />
                </div>
                <div class="flex flex-col justify-between py-1">
                  <div>
                    <h4
                      class="font-headline font-bold text-xs tracking-widest uppercase">Monolith
                      Incense Burner</h4>
                    <p
                      class="text-[10px] text-on-surface-variant mt-1">MATERIAL:
                      OBSIDIAN STONE</p>
                  </div>
                  <p class="font-headline font-bold text-sm">$420.00</p>
                </div>
              </div>
              <!-- Product Item 2 -->
              <div class="flex gap-6">
                <div class="w-24 h-32 bg-surface-container-low flex-shrink-0">
                  <img class="w-full h-full object-cover"
                    data-alt="Matte black minimalist wristwatch with a simple architectural dial on a textured grey background"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXFI59vF313lahZ7yxUvL-5eZcc4PMgj5HJjFbZ3xnaV4urVbqPWFrnHzjuvpN1tLZPS7nQlUGhk2TxOjwnG5T0iB1LKSKlI8tts5OmWdb6DjMpBxqG31o0_5V4HIvOmXaJE9g_1-s-7RaYuSnThpSh1CIHnDLldNEehdNFlk7HQ3k1rKTddy7JNwEBZ6gPCjmmRdPPeGoZONU51elGZE3P_pvxCHC7ioCM1lSs-N1SrCwFw1J8K56yEkGhtLEEufk5j8wewEbxt0" />
                </div>
                <div class="flex flex-col justify-between py-1">
                  <div>
                    <h4
                      class="font-headline font-bold text-xs tracking-widest uppercase">Void
                      Chronograph</h4>
                    <p class="text-[10px] text-on-surface-variant mt-1">FINISH:
                      MATTE BLACK</p>
                  </div>
                  <p class="font-headline font-bold text-sm">$1,850.00</p>
                </div>
              </div>
            </div>
            <div class="space-y-4 pt-8 border-t border-surface-container-high">
              <div
                class="flex justify-between text-xs tracking-widest uppercase text-on-surface-variant">
                <span>Subtotal</span>
                <span>$2,270.00</span>
              </div>
              <div
                class="flex justify-between text-xs tracking-widest uppercase text-on-surface-variant">
                <span>Vault Shipping</span>
                <span>$0.00</span>
              </div>
              <div
                class="flex justify-between text-xs tracking-widest uppercase text-on-surface-variant">
                <span>Tax (Calculated)</span>
                <span>$181.60</span>
              </div>
              <div
                class="flex justify-between pt-6 mt-6 border-t border-surface-container-high">
                <span
                  class="font-headline font-bold text-sm tracking-widest uppercase">Total
                  Investment</span>
                <span class="font-headline font-bold text-xl">$2,451.60</span>
              </div>
            </div>
            <button
              class="w-full mt-12 bg-primary text-on-primary font-headline text-xs font-bold tracking-[0.3em] uppercase py-6 hover:bg-secondary-container hover:text-on-secondary-container transition-all scale-100 active:scale-95 duration-200">
              Complete Purchase
            </button>
            <div
              class="mt-8 flex items-center justify-center gap-2 text-[10px] text-on-surface-variant tracking-widest uppercase">
              <span class="material-symbols-outlined text-[14px]"
                data-icon="lock">lock</span>
              Encrypted Connection
            </div>
          </div>
        </aside>
      </div>
    </main>
    <!-- Footer: Tonal Shift -->
    <footer
      class="w-full bg-[#151c24] px-12 py-24 flex flex-col md:flex-row justify-between content-start">
      <div class="mb-12 md:mb-0">
        <span
          class="text-xl font-bold text-white mb-8 block font-headline tracking-tighter">MONOLITH</span>
        <p
          class="font-['Inter'] text-xs tracking-widest uppercase text-gray-400 max-w-xs leading-relaxed">
          Defining the intersection of brutalist architecture and wearable
          design.
        </p>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-12">
        <div class="flex flex-col gap-4">
          <h5
            class="font-['Inter'] text-xs tracking-widest uppercase text-white font-bold mb-2">Legal</h5>
          <a
            class="font-['Inter'] text-xs tracking-widest uppercase text-gray-400 hover:text-white transition-all hover:tracking-[0.2em] duration-300"
            href="#">Privacy Policy</a>
          <a
            class="font-['Inter'] text-xs tracking-widest uppercase text-gray-400 hover:text-white transition-all hover:tracking-[0.2em] duration-300"
            href="#">Terms of Service</a>
        </div>
        <div class="flex flex-col gap-4">
          <h5
            class="font-['Inter'] text-xs tracking-widest uppercase text-white font-bold mb-2">Logistics</h5>
          <a
            class="font-['Inter'] text-xs tracking-widest uppercase text-gray-400 hover:text-white transition-all hover:tracking-[0.2em] duration-300"
            href="#">Shipping &amp; Returns</a>
          <a
            class="font-['Inter'] text-xs tracking-widest uppercase text-gray-400 hover:text-white transition-all hover:tracking-[0.2em] duration-300"
            href="#">Contact</a>
        </div>
      </div>
      <div
        class="mt-24 md:mt-0 w-full md:w-auto text-left md:text-right flex flex-col justify-end">
        <p
          class="font-['Inter'] text-xs tracking-widest uppercase text-gray-500">©
          2024 THE ARCHITECTURAL BOUTIQUE. ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  </body></html>

<!-- 5. Tunnel de Commande (Checkout) -->
<!DOCTYPE html>

<html class="light" lang="en"><head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>Support &amp; FAQ | MONOLITH</title>
    <script
      src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
    <link
      href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;400;700;800&amp;family=Inter:wght@300;400;600&amp;display=swap"
      rel="stylesheet" />
    <link
      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap"
      rel="stylesheet" />
    <link
      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap"
      rel="stylesheet" />
    <script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            colors: {
              "tertiary-container": "#00201a",
              "on-secondary": "#ffffff",
              "on-primary": "#ffffff",
              "tertiary-fixed": "#afefdd",
              "on-primary-fixed": "#151c24",
              "primary-fixed-dim": "#c0c7d2",
              "on-tertiary-container": "#518f7f",
              "error": "#ba1a1a",
              "on-tertiary-fixed-variant": "#065043",
              "surface-bright": "#f8f9ff",
              "tertiary-fixed-dim": "#94d3c1",
              "on-error-container": "#93000a",
              "surface-tint": "#585f69",
              "outline-variant": "#c5c6cb",
              "on-tertiary": "#ffffff",
              "on-primary-fixed-variant": "#404751",
              "on-surface": "#151c24",
              "primary-container": "#151c24",
              "on-secondary-fixed": "#261900",
              "secondary-container": "#fed488",
              "surface-variant": "#dce3ee",
              "on-secondary-container": "#785a1a",
              "on-background": "#151c24",
              "surface-container-highest": "#dce3ee",
              "surface-container-high": "#e2e9f4",
              "surface-container-lowest": "#ffffff",
              "surface-container": "#e8eefa",
              "background": "#f8f9ff",
              "primary": "#000000",
              "secondary-fixed": "#ffdea5",
              "on-secondary-fixed-variant": "#5d4201",
              "inverse-surface": "#2a313a",
              "error-container": "#ffdad6",
              "surface-dim": "#d4dae6",
              "on-surface-variant": "#44474b",
              "surface-container-low": "#eef4ff",
              "inverse-on-surface": "#eaf1fd",
              "tertiary": "#000000",
              "on-error": "#ffffff",
              "on-tertiary-fixed": "#00201a",
              "on-primary-container": "#7d848f",
              "secondary": "#775a19",
              "inverse-primary": "#c0c7d2",
              "outline": "#75777c",
              "primary-fixed": "#dce3ee",
              "surface": "#f8f9ff",
              "secondary-fixed-dim": "#e9c176"
            },
            fontFamily: {
              "headline": ["Manrope"],
              "body": ["Inter"],
              "label": ["Inter"]
            },
            borderRadius: {"DEFAULT": "0", "lg": "0", "xl": "0", "full": "9999px"},
          },
        },
      }
    </script>
    <style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
        }
        body { font-family: 'Inter', sans-serif; }
        h1, h2, h3 { font-family: 'Manrope', sans-serif; }
    </style>
  </head>
  <body class="bg-background text-on-surface">
    <!-- TopNavBar -->
    <nav
      class="fixed top-0 w-full z-50 bg-[#f8f9ff]/90 dark:bg-[#121921]/90 backdrop-blur-xl no-border transition-colors duration-300">
      <div
        class="flex justify-between items-center w-full px-8 py-6 max-w-[1920px] mx-auto">
        <div class="flex items-center gap-12">
          <a
            class="text-2xl font-black tracking-tighter text-black dark:text-white"
            href="#">MONOLITH</a>
          <div class="hidden md:flex gap-8">
            <a
              class="font-['Manrope'] tracking-tight font-bold uppercase text-sm text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
              href="#">Shop</a>
            <a
              class="font-['Manrope'] tracking-tight font-bold uppercase text-sm text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
              href="#">Collections</a>
            <a
              class="font-['Manrope'] tracking-tight font-bold uppercase text-sm text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
              href="#">Archive</a>
            <a
              class="font-['Manrope'] tracking-tight font-bold uppercase text-sm text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
              href="#">Story</a>
          </div>
        </div>
        <div class="flex items-center gap-6">
          <div class="relative hidden lg:block">
            <input
              class="bg-transparent border-b border-outline w-64 py-1 focus:outline-none focus:border-secondary text-sm transition-all"
              placeholder="Search our archives..." type="text" />
          </div>
          <button
            class="material-symbols-outlined text-black dark:text-white hover:scale-95 duration-200">person</button>
          <button
            class="material-symbols-outlined text-black dark:text-white hover:scale-95 duration-200">shopping_bag</button>
        </div>
      </div>
    </nav>
    <main class="pt-32 pb-24">
      <!-- Hero Section -->
      <section class="px-8 max-w-[1920px] mx-auto mb-24">
        <div class="flex flex-col md:flex-row gap-16 items-end">
          <div class="md:w-1/2">
            <span
              class="font-label text-xs tracking-[0.3em] uppercase text-secondary mb-4 block">Concierge
              &amp; Care</span>
            <h1
              class="text-6xl md:text-8xl font-black tracking-tighter leading-none text-on-primary-fixed mb-8">
              HOW CAN WE<br />ASSIST?
            </h1>
            <p class="text-on-surface-variant max-w-md text-lg leading-relaxed">
              The Monolith support experience is designed with the same
              architectural precision as our collections. Find clarity on
              orders, returns, and craftsmanship.
            </p>
          </div>
          <div
            class="md:w-1/2 aspect-[16/7] bg-surface-container overflow-hidden">
            <img class="w-full h-full object-cover grayscale opacity-80"
              data-alt="minimalist architectural interior with clean lines, soft natural light reflecting off polished concrete surfaces and abstract geometric shadows"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0H8Hw8n4noaRibzGVg3WL7Rd_T6uswyoGB_xwwyhmjuirrlqpPYmxT7zqoPZX8Um5xwRMkihVOGvvaHbAMdTRVjw-EkXmP9p0fjnFMhGWRUNSEyld79_uHKi1Dtap1HK7HB8LaSr5mG5ujVs_LjtG36bggs7ootCuSy58lNTkDz6CVdD8BITDRqVCVV_P2Ga9B5V2_vmC0JyfJXBFQ8UzimO7cnrb3Jz6j7PQ5uEfNa9EX3WW0UtL748UeyF5hdObbswtXdcL_1U" />
          </div>
        </div>
      </section>
      <!-- Search & Categories Bento -->
      <section class="px-8 max-w-[1920px] mx-auto mb-32">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div
            class="md:col-span-2 p-12 bg-surface-container-low flex flex-col justify-between aspect-square md:aspect-auto h-[400px]">
            <h2 class="text-3xl font-bold tracking-tight">KNOWLEDGE BASE</h2>
            <div class="relative">
              <input
                class="w-full bg-transparent border-b-2 border-primary py-4 text-xl focus:outline-none focus:border-secondary transition-all placeholder:text-outline-variant"
                placeholder="Search for topics (e.g. 'International Shipping')"
                type="text" />
              <span
                class="material-symbols-outlined absolute right-0 bottom-4 text-3xl">search</span>
            </div>
          </div>
          <div
            class="p-8 bg-primary text-white flex flex-col justify-between aspect-square group cursor-pointer hover:bg-primary-container transition-colors">
            <span
              class="material-symbols-outlined text-4xl">local_shipping</span>
            <div>
              <h3 class="text-xl font-bold mb-2">SHIPPING</h3>
              <p
                class="text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">Global
                logistics and duty details.</p>
            </div>
          </div>
          <div
            class="p-8 bg-surface-container-highest flex flex-col justify-between aspect-square group cursor-pointer hover:bg-surface-variant transition-colors">
            <span class="material-symbols-outlined text-4xl">history</span>
            <div>
              <h3 class="text-xl font-bold mb-2">RETURNS</h3>
              <p
                class="text-sm text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity">14-day
                archival return policy.</p>
            </div>
          </div>
          <div
            class="p-8 bg-secondary-container flex flex-col justify-between aspect-square group cursor-pointer">
            <span
              class="material-symbols-outlined text-4xl text-on-secondary-container">diamond</span>
            <div>
              <h3
                class="text-xl font-bold text-on-secondary-container mb-2">WARRANTY</h3>
              <p
                class="text-sm text-on-secondary-container opacity-0 group-hover:opacity-100 transition-opacity">Lifetime
                structural guarantee.</p>
            </div>
          </div>
          <div
            class="md:col-span-2 p-8 bg-surface-container-high flex flex-col justify-between h-[300px]">
            <h3
              class="text-xl font-bold mb-4 uppercase tracking-widest text-secondary">Return
              Policy Highlights</h3>
            <div class="grid grid-cols-2 gap-8">
              <div>
                <p class="font-bold text-sm mb-1">Timeframe</p>
                <p class="text-sm text-on-surface-variant">Returns must be
                  initiated within 14 days of delivery receipt.</p>
              </div>
              <div>
                <p class="font-bold text-sm mb-1">Condition</p>
                <p class="text-sm text-on-surface-variant">Items must be in
                  original architectural packaging with security tags
                  intact.</p>
              </div>
            </div>
          </div>
          <div
            class="p-8 bg-surface-container-low flex flex-col justify-between aspect-square group cursor-pointer hover:bg-surface-container transition-colors">
            <span class="material-symbols-outlined text-4xl">payments</span>
            <div>
              <h3 class="text-xl font-bold mb-2">PAYMENT</h3>
              <p
                class="text-sm text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity">Secure
                checkout and crypto options.</p>
            </div>
          </div>
        </div>
      </section>
      <!-- Accordion FAQ -->
      <section
        class="px-8 max-w-[1920px] mx-auto mb-32 flex flex-col md:flex-row gap-16">
        <div class="md:w-1/3">
          <h2
            class="text-4xl font-black tracking-tighter sticky top-40 uppercase">Frequent<br />Inquiries</h2>
        </div>
        <div class="md:w-2/3 border-t border-outline-variant">
          <!-- FAQ Item 1 -->
          <div
            class="border-b border-outline-variant py-8 group cursor-pointer">
            <div class="flex justify-between items-center mb-4">
              <h4 class="text-lg font-bold tracking-tight">Do you offer
                international architectural assembly?</h4>
              <span
                class="material-symbols-outlined group-hover:rotate-45 transition-transform">add</span>
            </div>
            <p class="text-on-surface-variant leading-relaxed max-w-xl">
              Yes. For our large-scale furniture pieces and lighting
              installations, we provide a specialized white-glove assembly
              service in over 45 countries. Costs vary by region and are
              calculated at the final stage of acquisition.
            </p>
          </div>
          <!-- FAQ Item 2 -->
          <div
            class="border-b border-outline-variant py-8 group cursor-pointer">
            <div class="flex justify-between items-center mb-4">
              <h4 class="text-lg font-bold tracking-tight">How do I track my
                limited edition shipment?</h4>
              <span
                class="material-symbols-outlined group-hover:rotate-45 transition-transform">add</span>
            </div>
            <p class="text-on-surface-variant leading-relaxed max-w-xl">
              Once your order is processed, a unique tracking signature is
              generated. You can monitor your shipment through our dedicated
              concierge portal or via the logistics partner's secure link
              provided in your shipping confirmation.
            </p>
          </div>
          <!-- FAQ Item 3 -->
          <div
            class="border-b border-outline-variant py-8 group cursor-pointer">
            <div class="flex justify-between items-center mb-4">
              <h4 class="text-lg font-bold tracking-tight">What materials are
                utilized in the Monolith series?</h4>
              <span
                class="material-symbols-outlined group-hover:rotate-45 transition-transform">add</span>
            </div>
            <p class="text-on-surface-variant leading-relaxed max-w-xl">
              We prioritize structural integrity. The Monolith series utilizes
              aerospace-grade aluminum, hand-finished charcoal concrete, and
              sustainably sourced walnut. Every material is chosen for its
              ability to age with character.
            </p>
          </div>
          <!-- FAQ Item 4 -->
          <div
            class="border-b border-outline-variant py-8 group cursor-pointer">
            <div class="flex justify-between items-center mb-4">
              <h4 class="text-lg font-bold tracking-tight">Can I cancel a
                pre-order from the Archive?</h4>
              <span
                class="material-symbols-outlined group-hover:rotate-45 transition-transform">add</span>
            </div>
            <p class="text-on-surface-variant leading-relaxed max-w-xl">
              Archive pre-orders can be cancelled within 24 hours of the
              transaction. After this period, production begins, and the item
              becomes a reserved asset that follows our standard return policy
              upon delivery.
            </p>
          </div>
        </div>
      </section>
      <!-- Contact Form & Image Asymmetry -->
      <section class="px-8 max-w-[1920px] mx-auto">
        <div class="flex flex-col md:flex-row gap-0">
          <div class="md:w-1/2 bg-primary-container p-16 md:p-24 text-white">
            <h2 class="text-4xl font-bold mb-12 tracking-tighter">DIRECT
              INQUIRY</h2>
            <form class="space-y-12">
              <div class="relative">
                <input
                  class="w-full bg-transparent border-b border-outline py-4 focus:outline-none focus:border-secondary-container transition-all text-sm tracking-widest uppercase"
                  placeholder="FULL NAME" type="text" />
              </div>
              <div class="relative">
                <input
                  class="w-full bg-transparent border-b border-outline py-4 focus:outline-none focus:border-secondary-container transition-all text-sm tracking-widest uppercase"
                  placeholder="EMAIL ADDRESS" type="email" />
              </div>
              <div class="relative">
                <select
                  class="w-full bg-transparent border-b border-outline py-4 focus:outline-none focus:border-secondary-container transition-all text-sm tracking-widest uppercase appearance-none">
                  <option class="bg-primary-container">ORDER INQUIRY</option>
                  <option class="bg-primary-container">PRODUCT
                    CUSTOMIZATION</option>
                  <option class="bg-primary-container">ARCHIVAL
                    AUTHENTICATION</option>
                  <option class="bg-primary-container">OTHER</option>
                </select>
              </div>
              <div class="relative">
                <textarea
                  class="w-full bg-transparent border-b border-outline py-4 focus:outline-none focus:border-secondary-container transition-all text-sm tracking-widest uppercase resize-none"
                  placeholder="HOW CAN WE ASSIST?" rows="4"></textarea>
              </div>
              <button
                class="w-full py-6 bg-secondary-container text-on-secondary-container font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-primary transition-all duration-300">
                TRANSMIT MESSAGE
              </button>
            </form>
          </div>
          <div class="md:w-1/2 relative min-h-[500px]">
            <img class="absolute inset-0 w-full h-full object-cover"
              data-alt="close-up detail of a minimalist metal chair against a dark charcoal wall, focused on craftsmanship and industrial textures"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3ts_XEOG0orFWfcfanYkt4p6UaVCYMYXI6sOmOYG97qV2D01Vt6pEl2Kdjn59X3LPCb7CIzJrT_HBNYaAuTyEtTlwuHWNIGFmPBI76i5mnk3aE2p-Cd0ehoEuX_PuPDxhGdnwjl5PvH_9fWgEPnzqyTuz1gpNKZtbJCGuqetyNRCCaUChE6nhPOyfIbbqP9nGmajZNJAfTQKBnTxTZjt2E0w0JUAts478V4_plGK0Ji5xSjNJ505W2HYg-7jiTnseZrlFJBwskBk" />
            <div
              class="absolute bottom-12 left-12 p-8 bg-surface-container-lowest/10 backdrop-blur-xl max-w-xs text-white">
              <p
                class="text-xs uppercase tracking-widest mb-2 opacity-60">Response
                Time</p>
              <p class="text-xl font-bold tracking-tight">OUR CONCIERGE
                TYPICALLY RESPONDS WITHIN 12 ARCHIVAL HOURS.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
    <!-- Footer -->
    <footer
      class="bg-[#151c24] dark:bg-[#000000] w-full px-12 py-24 flex flex-col md:flex-row justify-between content-start">
      <div class="mb-12 md:mb-0">
        <span class="text-xl font-bold text-white mb-8 block">MONOLITH</span>
        <p
          class="font-['Inter'] text-xs tracking-widest uppercase text-gray-400 mb-4 max-w-xs leading-loose">
          Architectural essentials for the modern gallery life. Built for
          endurance.
        </p>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-12">
        <div class="flex flex-col gap-4">
          <span
            class="font-['Inter'] text-xs tracking-widest uppercase text-white font-bold">Inquiries</span>
          <a
            class="font-['Inter'] text-xs tracking-widest uppercase text-gray-400 hover:text-white transition-all hover:tracking-[0.2em]"
            href="#">Privacy Policy</a>
          <a
            class="font-['Inter'] text-xs tracking-widest uppercase text-gray-400 hover:text-white transition-all hover:tracking-[0.2em]"
            href="#">Terms of Service</a>
        </div>
        <div class="flex flex-col gap-4">
          <span
            class="font-['Inter'] text-xs tracking-widest uppercase text-white font-bold">Support</span>
          <a
            class="font-['Inter'] text-xs tracking-widest uppercase text-gray-400 hover:text-white transition-all hover:tracking-[0.2em]"
            href="#">Shipping &amp; Returns</a>
          <a
            class="font-['Inter'] text-xs tracking-widest uppercase text-gray-400 hover:text-white transition-all hover:tracking-[0.2em]"
            href="#">Contact</a>
        </div>
        <div class="flex flex-col gap-4">
          <span
            class="font-['Inter'] text-xs tracking-widest uppercase text-white font-bold">Social</span>
          <a
            class="font-['Inter'] text-xs tracking-widest uppercase text-gray-400 hover:text-white transition-all hover:tracking-[0.2em]"
            href="#">Instagram</a>
          <a
            class="font-['Inter'] text-xs tracking-widest uppercase text-gray-400 hover:text-white transition-all hover:tracking-[0.2em]"
            href="#">LinkedIn</a>
        </div>
        <div class="flex flex-col gap-4">
          <span
            class="font-['Inter'] text-xs tracking-widest uppercase text-white font-bold">Location</span>
          <p
            class="font-['Inter'] text-xs tracking-widest uppercase text-gray-400 leading-loose">
            Berlin Studio<br />Prenzlauer Berg
          </p>
        </div>
      </div>
      <div class="mt-24 md:mt-0 md:self-end">
        <p
          class="font-['Inter'] text-xs tracking-widest uppercase text-gray-500">©
          2024 THE ARCHITECTURAL BOUTIQUE. ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  </body></html>

<!-- 10. FAQ / Support -->
<!DOCTYPE html>

<html lang="en"><head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <script
      src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
    <link
      href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;700;800&amp;family=Inter:wght@400;500;600&amp;display=swap"
      rel="stylesheet" />
    <link
      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap"
      rel="stylesheet" />
    <link
      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap"
      rel="stylesheet" />
    <script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            colors: {
              "tertiary-container": "#00201a",
              "on-secondary": "#ffffff",
              "on-primary": "#ffffff",
              "tertiary-fixed": "#afefdd",
              "on-primary-fixed": "#151c24",
              "primary-fixed-dim": "#c0c7d2",
              "on-tertiary-container": "#518f7f",
              "error": "#ba1a1a",
              "on-tertiary-fixed-variant": "#065043",
              "surface-bright": "#f8f9ff",
              "tertiary-fixed-dim": "#94d3c1",
              "on-error-container": "#93000a",
              "surface-tint": "#585f69",
              "outline-variant": "#c5c6cb",
              "on-tertiary": "#ffffff",
              "on-primary-fixed-variant": "#404751",
              "on-surface": "#151c24",
              "primary-container": "#151c24",
              "on-secondary-fixed": "#261900",
              "secondary-container": "#fed488",
              "surface-variant": "#dce3ee",
              "on-secondary-container": "#785a1a",
              "on-background": "#151c24",
              "surface-container-highest": "#dce3ee",
              "surface-container-high": "#e2e9f4",
              "surface-container-lowest": "#ffffff",
              "surface-container": "#e8eefa",
              "background": "#f8f9ff",
              "primary": "#000000",
              "secondary-fixed": "#ffdea5",
              "on-secondary-fixed-variant": "#5d4201",
              "inverse-surface": "#2a313a",
              "error-container": "#ffdad6",
              "surface-dim": "#d4dae6",
              "on-surface-variant": "#44474b",
              "surface-container-low": "#eef4ff",
              "inverse-on-surface": "#eaf1fd",
              "tertiary": "#000000",
              "on-error": "#ffffff",
              "on-tertiary-fixed": "#00201a",
              "on-primary-container": "#7d848f",
              "secondary": "#775a19",
              "inverse-primary": "#c0c7d2",
              "outline": "#75777c",
              "primary-fixed": "#dce3ee",
              "surface": "#f8f9ff",
              "secondary-fixed-dim": "#e9c176"
            },
            fontFamily: {
              "headline": ["Manrope"],
              "body": ["Inter"],
              "label": ["Inter"]
            },
            borderRadius: {"DEFAULT": "0px", "lg": "0px", "xl": "0px", "full": "9999px"},
          },
        },
      }
    </script>
    <style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        body { font-family: 'Inter', sans-serif; }
        h1, h2, h3 { font-family: 'Manrope', sans-serif; }
    </style>
  </head>
  <body class="bg-background text-on-background selection:bg-secondary-fixed">
    <!-- TopNavBar from Shared Components -->
    <nav
      class="fixed top-0 w-full z-50 bg-[#f8f9ff]/90 dark:bg-[#121921]/90 backdrop-blur-xl transition-colors duration-300">
      <div
        class="flex justify-between items-center w-full px-8 py-6 max-w-[1920px] mx-auto">
        <div
          class="text-2xl font-black tracking-tighter text-black dark:text-white">MONOLITH</div>
        <div class="hidden md:flex space-x-12 items-center">
          <a
            class="font-['Manrope'] tracking-tight font-bold uppercase text-sm text-black dark:text-white border-b-2 border-black dark:border-white pb-1"
            href="#">Shop</a>
          <a
            class="font-['Manrope'] tracking-tight font-bold uppercase text-sm text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
            href="#">Collections</a>
          <a
            class="font-['Manrope'] tracking-tight font-bold uppercase text-sm text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
            href="#">Archive</a>
          <a
            class="font-['Manrope'] tracking-tight font-bold uppercase text-sm text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
            href="#">Story</a>
        </div>
        <div class="flex items-center space-x-6">
          <button
            class="p-2 hover:bg-gray-100/50 dark:hover:bg-white/5 active:scale-95 duration-200">
            <span
              class="material-symbols-outlined text-black dark:text-white">shopping_bag</span>
          </button>
          <button
            class="p-2 hover:bg-gray-100/50 dark:hover:bg-white/5 active:scale-95 duration-200">
            <span
              class="material-symbols-outlined text-black dark:text-white">person</span>
          </button>
        </div>
      </div>
    </nav>
    <main class="pt-32 pb-24 px-8 max-w-[1920px] mx-auto">
      <!-- Editorial Header Section -->
      <header class="mb-24">
        <h1
          class="text-[5rem] md:text-[8rem] font-black tracking-tighter leading-none mb-8 -ml-1 text-on-primary-fixed">
          OBJECTS <br />
          <span class="text-secondary">001—024</span>
        </h1>
        <div
          class="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <p class="max-w-xl text-on-surface-variant text-lg leading-relaxed">
            A curated selection of architectural elements and functional
            sculptures designed to define the modern living environment. Silent
            forms, loud intentions.
          </p>
          <div
            class="flex items-center gap-4 border-b border-outline/30 pb-2 min-w-[200px]">
            <span
              class="material-symbols-outlined text-on-surface-variant">sort</span>
            <select
              class="bg-transparent border-none focus:ring-0 text-sm font-bold tracking-widest uppercase cursor-pointer p-0">
              <option>Newest Arrivals</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Curated Popularity</option>
            </select>
          </div>
        </div>
      </header>
      <div class="flex flex-col lg:flex-row gap-16">
        <!-- Sidebar Filters -->
        <aside class="w-full lg:w-64 flex-shrink-0 space-y-12">
          <div class="space-y-6">
            <h3
              class="font-bold text-xs tracking-[0.2em] uppercase text-on-surface">Categories</h3>
            <ul class="space-y-3">
              <li><label
                  class="flex items-center text-sm cursor-pointer group hover:text-secondary transition-colors"><input
                    class="mr-3 border-outline focus:ring-secondary text-primary rounded-none"
                    type="checkbox" /> Architectural Glass</label></li>
              <li><label
                  class="flex items-center text-sm cursor-pointer group hover:text-secondary transition-colors"><input
                    class="mr-3 border-outline focus:ring-secondary text-primary rounded-none"
                    type="checkbox" /> Brutalist Stone</label></li>
              <li><label
                  class="flex items-center text-sm cursor-pointer group hover:text-secondary transition-colors"><input
                    class="mr-3 border-outline focus:ring-secondary text-primary rounded-none"
                    type="checkbox" /> Metallic Void</label></li>
              <li><label
                  class="flex items-center text-sm cursor-pointer group hover:text-secondary transition-colors"><input
                    class="mr-3 border-outline focus:ring-secondary text-primary rounded-none"
                    type="checkbox" /> Raw Wood</label></li>
            </ul>
          </div>
          <div class="space-y-6">
            <h3
              class="font-bold text-xs tracking-[0.2em] uppercase text-on-surface">Price
              Range</h3>
            <div class="space-y-4">
              <input
                class="w-full accent-primary bg-surface-container h-1 appearance-none cursor-pointer"
                type="range" />
              <div
                class="flex justify-between text-[10px] font-bold tracking-widest text-on-surface-variant">
                <span>$500</span>
                <span>$5,000+</span>
              </div>
            </div>
          </div>
          <div class="space-y-6">
            <h3
              class="font-bold text-xs tracking-[0.2em] uppercase text-on-surface">Finish</h3>
            <div class="flex flex-wrap gap-3">
              <button
                class="w-8 h-8 bg-[#151c24] border border-outline/20 hover:scale-110 transition-transform"
                title="Obsidian"></button>
              <button
                class="w-8 h-8 bg-[#dce3ee] border border-outline/20 hover:scale-110 transition-transform"
                title="Brushed Chrome"></button>
              <button
                class="w-8 h-8 bg-[#775a19] border border-outline/20 hover:scale-110 transition-transform"
                title="Antique Brass"></button>
              <button
                class="w-8 h-8 bg-[#f8f9ff] border border-outline/20 hover:scale-110 transition-transform"
                title="Raw Plaster"></button>
            </div>
          </div>
          <div class="space-y-6">
            <h3
              class="font-bold text-xs tracking-[0.2em] uppercase text-on-surface">Availability</h3>
            <label class="flex items-center text-sm cursor-pointer group">
              <input checked
                class="mr-3 border-outline focus:ring-secondary text-primary rounded-none"
                type="checkbox" />
              <span class="text-xs font-bold tracking-widest uppercase">In Stock
                Only</span>
            </label>
          </div>
        </aside>
        <!-- Product Grid -->
        <div class="flex-grow">
          <div
            class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-12 gap-y-24">
            <!-- Card 1 (Asymmetric Offset Example) -->
            <div class="group">
              <div
                class="relative aspect-[4/5] bg-surface-container-low overflow-hidden transition-colors duration-500 group-hover:bg-surface-container">
                <img
                  class="w-full h-full object-cover mix-blend-multiply opacity-90 transition-transform duration-700 group-hover:scale-105"
                  data-alt="Minimalist geometric black vase on a raw concrete pedestal with dramatic architectural lighting and sharp shadows"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRcHY1pVKPrJqR9jHHn0MtTWqn41sybjYG6m_Q5GOy3oIEfzARJRLp7FfKkdxqMobNCXMzc4Kh6H-Hk86F8FkldyAAcYDeNk_tzdlR8Hx74ghlX3KIQt0VldU1i4urwbmHqStMQ61GwaPWLWOfGAQTye5y_Far72mCioV4ZTc5K-kC3UMI77mjKtxxZaMwnoeL75ICHUS4YxaQKviC6R6ufvB1B59BYIcpJmOx_0eKIj-mhiQQeDNyouMERxR2Q1fHTy9ds-7uVlM" />
                <button
                  class="absolute bottom-0 right-0 bg-primary text-on-primary p-6 opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <span
                    class="material-symbols-outlined">add_shopping_cart</span>
                </button>
              </div>
              <div class="mt-8 space-y-2">
                <div class="flex justify-between items-start">
                  <h3
                    class="font-headline font-bold text-xl tracking-tight uppercase">Void
                    Vessel I</h3>
                  <span class="text-secondary font-bold text-sm">$840</span>
                </div>
                <div class="flex justify-between items-center">
                  <p
                    class="text-on-surface-variant text-xs tracking-widest uppercase">Obsidion
                    Glass / 12kg</p>
                  <div class="flex items-center text-[10px] gap-1">
                    <span class="material-symbols-outlined text-[12px]"
                      style="font-variation-settings: 'FILL' 1;">star</span>
                    <span class="font-bold">4.9</span>
                  </div>
                </div>
              </div>
            </div>
            <!-- Card 2 (Staggered Grid Feel) -->
            <div class="group md:mt-24">
              <div
                class="relative aspect-[4/5] bg-surface-container-low overflow-hidden transition-colors duration-500 group-hover:bg-surface-container">
                <img
                  class="w-full h-full object-cover mix-blend-multiply opacity-90 transition-transform duration-700 group-hover:scale-105"
                  data-alt="Brutalist concrete desk lamp with integrated warm LED light glowing against a minimalist dark grey wall"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNoFCTRVYZBVomqnZWq9LSXzRriVde-iTrvjCTvTHa98hS74m6ETon8tSNXJA5H6Iowz1mTWXBbvl7VHi6Idk8oaV094W8ts1w-bru1hShv7HXHFVLoNnMVIFIpmJoJCdN_FozfWsjYXcbwJUnB8AxF0pKg0JVDq5dpXE2RqqpJrXEUwNbcef1DjMpQeF4PDNnjiG26zvwPZ_-Z6g_PQL1Qy2s8-GGjb2_tbgcBdeZIpvHIlk5B5agcvFlsOjbOPOnbKtM7hYkDSI" />
                <button
                  class="absolute bottom-0 right-0 bg-primary text-on-primary p-6 opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <span
                    class="material-symbols-outlined">add_shopping_cart</span>
                </button>
                <span
                  class="absolute top-6 left-6 bg-secondary text-white text-[10px] font-bold tracking-[0.2em] px-3 py-1 uppercase">Limited</span>
              </div>
              <div class="mt-8 space-y-2">
                <div class="flex justify-between items-start">
                  <h3
                    class="font-headline font-bold text-xl tracking-tight uppercase">Mono-Light
                    04</h3>
                  <span class="text-secondary font-bold text-sm">$1,200</span>
                </div>
                <div class="flex justify-between items-center">
                  <p
                    class="text-on-surface-variant text-xs tracking-widest uppercase">Cast
                    Concrete / LED</p>
                  <div class="flex items-center text-[10px] gap-1">
                    <span class="material-symbols-outlined text-[12px]"
                      style="font-variation-settings: 'FILL' 1;">star</span>
                    <span class="font-bold">5.0</span>
                  </div>
                </div>
              </div>
            </div>
            <!-- Card 3 -->
            <div class="group">
              <div
                class="relative aspect-[4/5] bg-surface-container-low overflow-hidden transition-colors duration-500 group-hover:bg-surface-container">
                <img
                  class="w-full h-full object-cover mix-blend-multiply opacity-90 transition-transform duration-700 group-hover:scale-105"
                  data-alt="Abstract sculptural chair made of raw brushed aluminum in a bright sunlit art gallery space"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5H5vTfpFWj8gV6Xp-D9zfChINacv0_t-1zplYdu8bz9jnqgdRbe8rYV9f82UwGjstKEJKhJYja-92y2QX-GAQaFAGpt9tJrpZbVZbxS253d4dGa0SshPhb38RX0LM4bsTahD1ro70YbcGrI6s887JkGzYETMCom68m3nLa-kvNoGYybv9ZBAKQYbP5okISADbuK8hTVFcixva8VL6sa4A8HleUF8dhva85tvx5JeErkwyueBg8YDNYOja3FTjgQiZwdtgA3di3tI" />
                <button
                  class="absolute bottom-0 right-0 bg-primary text-on-primary p-6 opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <span
                    class="material-symbols-outlined">add_shopping_cart</span>
                </button>
              </div>
              <div class="mt-8 space-y-2">
                <div class="flex justify-between items-start">
                  <h3
                    class="font-headline font-bold text-xl tracking-tight uppercase">Structure
                    88</h3>
                  <span class="text-secondary font-bold text-sm">$3,450</span>
                </div>
                <div class="flex justify-between items-center">
                  <p
                    class="text-on-surface-variant text-xs tracking-widest uppercase">Brushed
                    Aluminum</p>
                  <div class="flex items-center text-[10px] gap-1">
                    <span class="material-symbols-outlined text-[12px]"
                      style="font-variation-settings: 'FILL' 1;">star</span>
                    <span class="font-bold">4.8</span>
                  </div>
                </div>
              </div>
            </div>
            <!-- Card 4 -->
            <div class="group">
              <div
                class="relative aspect-[4/5] bg-surface-container-low overflow-hidden transition-colors duration-500 group-hover:bg-surface-container">
                <img
                  class="w-full h-full object-cover mix-blend-multiply opacity-90 transition-transform duration-700 group-hover:scale-105"
                  data-alt="Set of three hand-carved dark wood bowls on a textured linen tablecloth with soft morning light"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6OBprcvJBNsz39CLgaflY6Fsk2lqK6x4EcjOFVYnnK2wC12yxq5U39xp6NEkjD-mLCA_BzrSEG9zZnMKptkoY4lHoin1pWefQEy2KnEcLLk6yhKb6UnEDr-Q_p1JCTF9DTojicARR43PU90tbcHTadWIX0SKGHP5YI2A53jxgOlla-X99f0I4mSqoUOfVNQFYtWHwt-uQaX-DAGzA1ToiHdz6ZoyfwwLRbTpfgeOC772a3SnutU8y_aqcryJD8sJbXT4I3kGkD34" />
                <button
                  class="absolute bottom-0 right-0 bg-primary text-on-primary p-6 opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <span
                    class="material-symbols-outlined">add_shopping_cart</span>
                </button>
              </div>
              <div class="mt-8 space-y-2">
                <div class="flex justify-between items-start">
                  <h3
                    class="font-headline font-bold text-xl tracking-tight uppercase">Ebony
                    Trio</h3>
                  <span class="text-secondary font-bold text-sm">$620</span>
                </div>
                <div class="flex justify-between items-center">
                  <p
                    class="text-on-surface-variant text-xs tracking-widest uppercase">Solid
                    Walnut / Matte Finish</p>
                  <div class="flex items-center text-[10px] gap-1">
                    <span class="material-symbols-outlined text-[12px]"
                      style="font-variation-settings: 'FILL' 1;">star</span>
                    <span class="font-bold">4.7</span>
                  </div>
                </div>
              </div>
            </div>
            <!-- Card 5 -->
            <div class="group md:mt-24">
              <div
                class="relative aspect-[4/5] bg-surface-container-low overflow-hidden transition-colors duration-500 group-hover:bg-surface-container">
                <img
                  class="w-full h-full object-cover mix-blend-multiply opacity-90 transition-transform duration-700 group-hover:scale-105"
                  data-alt="Modern architectural glass side table with sharp edges reflecting a sunset through a window"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLBPZkZ6C5k8u-0F7fHsAEuM1ydBdKjvLk1jpaFS1HSrgMZVLQ7eWjgx3UvGFY3hU6i8G3ISIxau6vaYb7HjAVkx4Bh6cmqAsAQ5wLTU0s6ZvPwz3l4crZjj9YO17kqZ4GnICoZUeMWSe_0v-WsRGOunh1qCZ7xTBPKYhAvuh1tto2iIxLyA0TE7U6DVcGEIvp2lDHfkT7bQoSolv-xNmhlaWp4JDrYmZ6IhqoqyixZc6OEe6s27hr0NvXyzAz8NQpYZwa6b663b4" />
                <button
                  class="absolute bottom-0 right-0 bg-primary text-on-primary p-6 opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <span
                    class="material-symbols-outlined">add_shopping_cart</span>
                </button>
              </div>
              <div class="mt-8 space-y-2">
                <div class="flex justify-between items-start">
                  <h3
                    class="font-headline font-bold text-xl tracking-tight uppercase">Prism
                    Table</h3>
                  <span class="text-secondary font-bold text-sm">$1,890</span>
                </div>
                <div class="flex justify-between items-center">
                  <p
                    class="text-on-surface-variant text-xs tracking-widest uppercase">Tempered
                    Smoked Glass</p>
                  <div class="flex items-center text-[10px] gap-1">
                    <span class="material-symbols-outlined text-[12px]"
                      style="font-variation-settings: 'FILL' 1;">star</span>
                    <span class="font-bold">4.9</span>
                  </div>
                </div>
              </div>
            </div>
            <!-- Card 6 -->
            <div class="group">
              <div
                class="relative aspect-[4/5] bg-surface-container-low overflow-hidden transition-colors duration-500 group-hover:bg-surface-container">
                <img
                  class="w-full h-full object-cover mix-blend-multiply opacity-90 transition-transform duration-700 group-hover:scale-105"
                  data-alt="Textured white plaster wall sculpture with organic shapes and deep shadows in a neutral tone room"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuATq-o-0R05FWidC42ryetpg7OPe75DPtUSiiKk_22N8WAMdWB2C5hR0CqU4lvR1fJ5SNXNnGPcAVZfwCXbR6-uvJaAEAZdJNYRG7tkpuyINiOS1uXcxou8Q0rZnXFNWUmA1Hc7LrIcyVijmR_-lueh0NLWrngDub3LjvXaUWW_2Xr_rxHS9M1cba5h8GzQHvi1dOBGk5uA4lV0rSH3xrx9jxcIxd3CdZ-Lky9BF8nWCuf-jwRRUazfIGAASenu0PpwOf-hrGzMHu4" />
                <button
                  class="absolute bottom-0 right-0 bg-primary text-on-primary p-6 opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <span
                    class="material-symbols-outlined">add_shopping_cart</span>
                </button>
              </div>
              <div class="mt-8 space-y-2">
                <div class="flex justify-between items-start">
                  <h3
                    class="font-headline font-bold text-xl tracking-tight uppercase">Plaster
                    Form 02</h3>
                  <span class="text-secondary font-bold text-sm">$1,100</span>
                </div>
                <div class="flex justify-between items-center">
                  <p
                    class="text-on-surface-variant text-xs tracking-widest uppercase">Hand-molded
                    Plaster</p>
                  <div class="flex items-center text-[10px] gap-1">
                    <span class="material-symbols-outlined text-[12px]"
                      style="font-variation-settings: 'FILL' 1;">star</span>
                    <span class="font-bold">5.0</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Load More / Pagination -->
          <div class="mt-32 flex flex-col items-center">
            <div class="w-full max-w-sm h-[1px] bg-outline/20 mb-8 relative">
              <div class="absolute inset-0 bg-primary w-1/3"></div>
            </div>
            <p
              class="text-[10px] font-bold tracking-[0.3em] uppercase mb-8">Showing
              6 of 24 Objects</p>
            <button
              class="group relative px-12 py-5 bg-primary text-on-primary overflow-hidden">
              <span
                class="relative z-10 font-bold tracking-widest uppercase text-xs">Explore
                more archive</span>
              <div
                class="absolute inset-0 bg-secondary translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>
          </div>
        </div>
      </div>
    </main>
    <!-- Footer from Shared Components -->
    <footer
      class="bg-[#151c24] dark:bg-[#000000] text-white w-full px-12 py-24 flex flex-col md:flex-row justify-between content-start">
      <div class="mb-12 md:mb-0">
        <span class="text-xl font-bold text-white mb-8 block">MONOLITH</span>
        <p
          class="font-['Inter'] text-xs tracking-widest uppercase text-gray-400 max-w-xs leading-loose">
          Architectural essentials for the discerning collector. Designed in
          Berlin, sourced globally.
        </p>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-12">
        <div class="flex flex-col space-y-4">
          <span
            class="font-bold text-[10px] tracking-[0.3em] uppercase text-on-secondary-container">Menu</span>
          <a
            class="font-['Inter'] text-xs tracking-widest uppercase text-gray-400 hover:text-white hover:tracking-[0.2em] transition-all duration-300"
            href="#">Shop</a>
          <a
            class="font-['Inter'] text-xs tracking-widest uppercase text-gray-400 hover:text-white hover:tracking-[0.2em] transition-all duration-300"
            href="#">Collections</a>
          <a
            class="font-['Inter'] text-xs tracking-widest uppercase text-gray-400 hover:text-white hover:tracking-[0.2em] transition-all duration-300"
            href="#">Archive</a>
        </div>
        <div class="flex flex-col space-y-4">
          <span
            class="font-bold text-[10px] tracking-[0.3em] uppercase text-on-secondary-container">Support</span>
          <a
            class="font-['Inter'] text-xs tracking-widest uppercase text-gray-400 hover:text-white hover:tracking-[0.2em] transition-all duration-300"
            href="#">Privacy Policy</a>
          <a
            class="font-['Inter'] text-xs tracking-widest uppercase text-gray-400 hover:text-white hover:tracking-[0.2em] transition-all duration-300"
            href="#">Terms of Service</a>
          <a
            class="font-['Inter'] text-xs tracking-widest uppercase text-gray-400 hover:text-white hover:tracking-[0.2em] transition-all duration-300"
            href="#">Shipping &amp; Returns</a>
          <a
            class="font-['Inter'] text-xs tracking-widest uppercase text-gray-400 hover:text-white hover:tracking-[0.2em] transition-all duration-300"
            href="#">Contact</a>
        </div>
      </div>
      <div class="mt-16 md:mt-0 md:self-end">
        <span
          class="font-['Inter'] text-xs tracking-widest uppercase text-gray-500">©
          2024 THE ARCHITECTURAL BOUTIQUE. ALL RIGHTS RESERVED.</span>
      </div>
    </footer>
  </body></html>

<!-- 2. Catalogue de Produits (Listing) -->
<!DOCTYPE html>

<html class="light" lang="en"><head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>MONOLITH | PRODUCT DETAIL</title>
    <script
      src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
    <link
      href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;400;700;800&amp;family=Inter:wght@300;400;600&amp;display=swap"
      rel="stylesheet" />
    <link
      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap"
      rel="stylesheet" />
    <link
      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap"
      rel="stylesheet" />
    <script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            colors: {
              "tertiary-container": "#00201a",
              "on-secondary": "#ffffff",
              "on-primary": "#ffffff",
              "tertiary-fixed": "#afefdd",
              "on-primary-fixed": "#151c24",
              "primary-fixed-dim": "#c0c7d2",
              "on-tertiary-container": "#518f7f",
              "error": "#ba1a1a",
              "on-tertiary-fixed-variant": "#065043",
              "surface-bright": "#f8f9ff",
              "tertiary-fixed-dim": "#94d3c1",
              "on-error-container": "#93000a",
              "surface-tint": "#585f69",
              "outline-variant": "#c5c6cb",
              "on-tertiary": "#ffffff",
              "on-primary-fixed-variant": "#404751",
              "on-surface": "#151c24",
              "primary-container": "#151c24",
              "on-secondary-fixed": "#261900",
              "secondary-container": "#fed488",
              "surface-variant": "#dce3ee",
              "on-secondary-container": "#785a1a",
              "on-background": "#151c24",
              "surface-container-highest": "#dce3ee",
              "surface-container-high": "#e2e9f4",
              "surface-container-lowest": "#ffffff",
              "surface-container": "#e8eefa",
              "background": "#f8f9ff",
              "primary": "#000000",
              "secondary-fixed": "#ffdea5",
              "on-secondary-fixed-variant": "#5d4201",
              "inverse-surface": "#2a313a",
              "error-container": "#ffdad6",
              "surface-dim": "#d4dae6",
              "on-surface-variant": "#44474b",
              "surface-container-low": "#eef4ff",
              "inverse-on-surface": "#eaf1fd",
              "tertiary": "#000000",
              "on-error": "#ffffff",
              "on-tertiary-fixed": "#00201a",
              "on-primary-container": "#7d848f",
              "secondary": "#775a19",
              "inverse-primary": "#c0c7d2",
              "outline": "#75777c",
              "primary-fixed": "#dce3ee",
              "surface": "#f8f9ff",
              "secondary-fixed-dim": "#e9c176"
            },
            fontFamily: {
              "headline": ["Manrope"],
              "body": ["Inter"],
              "label": ["Inter"]
            },
            borderRadius: {"DEFAULT": "0px", "lg": "0px", "xl": "0px", "full": "9999px"},
          },
        },
      }
    </script>
    <style>
      .material-symbols-outlined {
        font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
      }
      ::-webkit-scrollbar { width: 4px; }
      ::-webkit-scrollbar-track { background: transparent; }
      ::-webkit-scrollbar-thumb { background: #151c24; }
    </style>
  </head>
  <body
    class="bg-surface font-body text-on-surface selection:bg-secondary-container selection:text-on-secondary-container">
    <!-- TopNavBar -->
    <nav
      class="fixed top-0 w-full z-50 bg-[#f8f9ff]/90 dark:bg-[#121921]/90 backdrop-blur-xl no-border transition-colors duration-300">
      <div
        class="flex justify-between items-center w-full px-8 py-6 max-w-[1920px] mx-auto">
        <div
          class="text-2xl font-black tracking-tighter text-black dark:text-white font-headline">MONOLITH</div>
        <div class="hidden md:flex gap-10">
          <a
            class="font-headline tracking-tight font-bold uppercase text-sm text-black dark:text-white border-b-2 border-black dark:border-white pb-1"
            href="#">Shop</a>
          <a
            class="font-headline tracking-tight font-bold uppercase text-sm text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
            href="#">Collections</a>
          <a
            class="font-headline tracking-tight font-bold uppercase text-sm text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
            href="#">Archive</a>
          <a
            class="font-headline tracking-tight font-bold uppercase text-sm text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
            href="#">Story</a>
        </div>
        <div class="flex items-center gap-6">
          <button
            class="hover:bg-gray-100/50 p-2 transition-all active:scale-95">
            <span class="material-symbols-outlined"
              data-icon="search">search</span>
          </button>
          <button
            class="hover:bg-gray-100/50 p-2 transition-all active:scale-95 relative">
            <span class="material-symbols-outlined"
              data-icon="shopping_bag">shopping_bag</span>
            <span
              class="absolute top-1 right-1 w-2 h-2 bg-secondary rounded-full"></span>
          </button>
          <button
            class="hover:bg-gray-100/50 p-2 transition-all active:scale-95">
            <span class="material-symbols-outlined"
              data-icon="person">person</span>
          </button>
        </div>
      </div>
    </nav>
    <main class="pt-24 min-h-screen">
      <!-- Product Section -->
      <div
        class="max-w-[1920px] mx-auto px-8 lg:px-12 py-16 grid grid-cols-1 lg:grid-cols-12 gap-16">
        <!-- Gallery Grid: Asymmetric Editorial Layout -->
        <div class="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4 h-fit">
          <div
            class="md:col-span-2 overflow-hidden aspect-[4/5] bg-surface-container">
            <img
              class="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              data-alt="High-end studio shot of a tailored charcoal wool overcoat with sharp lapels and minimal hardware against a soft grey background"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdNB_EBStbg4rClDiBihgAs1LwDHlurWUprtU9r4Nmxzu36pn4iPUndKStG0Taeb6iJB13o9i5_doCDzyAg37ZI_CcHm4O_EbHtdVTofNcpeBiUWCjXtCe-soqsRkPC2smdULD8yrNwiXcVySSEMI8JQYvPdrU7A04gO3xr7mhnNNXcx8itv3UFDqt3DfnicLTFZpkugNrluQr7gvj_jqxDnMIuQkgDl7kikC49jrIobaLaqkS9aOHN5eJ4kPIbFKibmVT4VCshWc" />
          </div>
          <div class="overflow-hidden aspect-[1/1] bg-surface-container">
            <img
              class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              data-alt="Close up detail of high-quality fabric texture and precision stitching on a luxury garment sleeve"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDloZg5Sq6fqnnogoJIdz-O4UFrzc97aX1rQJVsNiwiKrJ5pjMnzEg21JQWHJk3GvKeC8-EtEVghNOFnxA7Q9p_GR-njknGDMbQJMndovxLdcKECv4iPEvfp4949byWoff3oKh69fKoA8xsMJkUoiIPAIPHOcnkXB5Lfk2TsdmcLNXI2ExRcDccUpL9tcnM258afIlM5QcFXYbckLYj7dSYrXTTANi7hiKz_NLqAqxNxo2qT2GJUAynM1MYIdwNAqImkc8_K5nTSM0" />
          </div>
          <div
            class="overflow-hidden aspect-[1/1] bg-surface-container mt-8 md:mt-0">
            <img
              class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              data-alt="Lifestyle shot of a model wearing a minimalist dark outfit standing in an architectural concrete space with dramatic lighting"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLb40lwUjhZF720X9e7olWxlzPa_0jTvaag1SNZliyLD5wnrRBB3UtHIZUDNFpypOOZ5C5jwqNT2kmwM0mEqCDselV1shWJ3Ewts-cMhY5skYZgL-L6inGIeyjn5Jr3KZdqU-kYoBliIs9lWMoO24gdBcl76WuPZqhNKhlRgCtf1BZZPnGBL1NuB5lr3KlIDTKpI5Qsme3gFte29QEjX8bDofwyZgkcLS035L7Qsoy9_6UH89pwGgGlPHwwKzN-7DbiUT8M4duRP8" />
          </div>
          <div
            class="md:col-span-2 overflow-hidden aspect-[16/9] bg-surface-container">
            <img
              class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              data-alt="Editorial fashion wide shot showing multiple pieces of a collection hanging on a minimalist black metal rail in a bright white gallery"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPal32AEW-7TmcSrClv1CvqpnJzxxN6Evofb_kq4Tsthk4dgff2ex1yiH9m0YjqgstqggfD7pJ89TFlhAVZ8fJtkhn_pQDylOEb7rHsTkRZ_YAYemkPfucNtqiP8uo2h1ajJyu41vl17ZYKL5DCh-3MjuTaoOPeeMV3Tf1iiPejSxBDeC0iyLaLnIGLCX8wsIe0ECKr1jw0Nstjxpq0jLIwmQeB4bSOie6GtxsQDH_R-LUOTH1N_i6811atOd9wr3BEx1ud7yVPWE" />
          </div>
        </div>
        <!-- Product Details Sidebar -->
        <div
          class="lg:col-span-5 flex flex-col gap-10 lg:sticky lg:top-32 h-fit">
          <div class="space-y-4">
            <div class="flex items-center gap-4">
              <span
                class="font-label text-xs tracking-widest text-secondary uppercase bg-secondary-container/20 px-3 py-1">Limited
                Edition</span>
              <span
                class="flex items-center gap-1 text-on-tertiary-container font-label text-[10px] tracking-widest uppercase">
                <span
                  class="w-2 h-2 rounded-full bg-on-tertiary-container"></span>
                In Stock
              </span>
            </div>
            <h1
              class="font-headline text-5xl font-black tracking-tighter text-on-primary-fixed uppercase">Architectural
              Wool Overcoat</h1>
            <div class="flex items-baseline gap-4">
              <p
                class="font-headline text-3xl font-light text-on-surface">$1,450.00</p>
              <p
                class="font-body text-sm text-outline line-through">$1,800.00</p>
            </div>
          </div>
          <div class="space-y-6">
            <p
              class="font-body text-on-surface-variant leading-relaxed text-sm max-w-md">
              A definitive study in silhouette and material. Crafted from
              ultra-dense Italian melton wool, this piece features hidden
              plackets, raw-edge finishing, and an oversized architectural
              drape.
            </p>
            <div class="space-y-4">
              <span
                class="font-label text-xs tracking-widest uppercase text-outline">Select
                Color: <span class="text-on-surface">Obsidian</span></span>
              <div class="flex gap-3">
                <button
                  class="w-10 h-10 bg-primary ring-2 ring-primary ring-offset-2"></button>
                <button
                  class="w-10 h-10 bg-[#2a2a2e] hover:ring-1 ring-outline transition-all"></button>
                <button
                  class="w-10 h-10 bg-[#44474b] hover:ring-1 ring-outline transition-all"></button>
              </div>
            </div>
            <div class="space-y-4">
              <div class="flex justify-between items-end">
                <span
                  class="font-label text-xs tracking-widest uppercase text-outline">Select
                  Size</span>
                <button
                  class="text-[10px] tracking-widest uppercase underline text-on-surface">Size
                  Guide</button>
              </div>
              <div class="grid grid-cols-4 gap-2">
                <button
                  class="py-4 border border-outline-variant hover:border-primary transition-colors text-sm font-label uppercase">S</button>
                <button
                  class="py-4 border-2 border-primary text-sm font-label uppercase">M</button>
                <button
                  class="py-4 border border-outline-variant hover:border-primary transition-colors text-sm font-label uppercase">L</button>
                <button
                  class="py-4 border border-outline-variant opacity-30 cursor-not-allowed text-sm font-label uppercase">XL</button>
              </div>
            </div>
          </div>
          <div class="flex flex-col gap-4 pt-4">
            <button
              class="w-full bg-secondary-container text-on-secondary-container font-headline font-bold py-5 uppercase tracking-widest text-sm hover:brightness-95 transition-all">
              Add to Cart
            </button>
            <button
              class="w-full border border-primary text-primary font-headline font-bold py-5 uppercase tracking-widest text-sm hover:bg-primary hover:text-white transition-all">
              Find in Boutique
            </button>
          </div>
          <div
            class="pt-8 grid grid-cols-2 gap-8 border-t border-outline-variant/20">
            <div class="space-y-2">
              <span
                class="font-label text-[10px] tracking-widest uppercase text-outline block">Material</span>
              <p class="text-xs uppercase font-bold">100% Virgin Wool</p>
            </div>
            <div class="space-y-2">
              <span
                class="font-label text-[10px] tracking-widest uppercase text-outline block">Origin</span>
              <p class="text-xs uppercase font-bold">Made in Italy</p>
            </div>
          </div>
        </div>
      </div>
      <!-- Editorial Content / Reviews Section -->
      <section class="bg-surface-container-low py-24">
        <div
          class="max-w-[1920px] mx-auto px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div class="lg:col-span-4">
            <h2
              class="font-headline text-4xl font-black tracking-tighter uppercase mb-8">The
              Review</h2>
            <div class="space-y-12">
              <div class="space-y-4">
                <div class="flex gap-1 text-secondary">
                  <span class="material-symbols-outlined"
                    style="font-variation-settings: 'FILL' 1;">star</span>
                  <span class="material-symbols-outlined"
                    style="font-variation-settings: 'FILL' 1;">star</span>
                  <span class="material-symbols-outlined"
                    style="font-variation-settings: 'FILL' 1;">star</span>
                  <span class="material-symbols-outlined"
                    style="font-variation-settings: 'FILL' 1;">star</span>
                  <span class="material-symbols-outlined"
                    style="font-variation-settings: 'FILL' 1;">star</span>
                </div>
                <p
                  class="font-body text-sm leading-relaxed italic text-on-surface">"The silhouette is uncompromising. It feels like wearing architecture rather than clothing. Truly a masterpiece of tailoring."</p>
                <div class="font-label text-[10px] tracking-widest uppercase">—
                  Julian V., Creative Director</div>
              </div>
              <div class="space-y-4">
                <div class="flex gap-1 text-secondary">
                  <span class="material-symbols-outlined"
                    style="font-variation-settings: 'FILL' 1;">star</span>
                  <span class="material-symbols-outlined"
                    style="font-variation-settings: 'FILL' 1;">star</span>
                  <span class="material-symbols-outlined"
                    style="font-variation-settings: 'FILL' 1;">star</span>
                  <span class="material-symbols-outlined"
                    style="font-variation-settings: 'FILL' 1;">star</span>
                  <span class="material-symbols-outlined">star</span>
                </div>
                <p
                  class="font-body text-sm leading-relaxed italic text-on-surface">"Unbelievable weight and texture. The drape is heavy and structured exactly as described. Worth every penny for the archive."</p>
                <div class="font-label text-[10px] tracking-widest uppercase">—
                  Elena M., Collector</div>
              </div>
            </div>
          </div>
          <div class="lg:col-span-8 overflow-hidden">
            <div class="aspect-[16/9] relative group">
              <img
                class="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 transition-all duration-1000"
                data-alt="Monochromatic editorial photo of a man in a structured overcoat walking through a brutalist concrete building with harsh shadows"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAX5aPwNZs4eZ4wmwInJqLgebcGTJE1BtZP9uW2tagWPl3Naexpz_8VhtTROf0ObBmKaC5oXMHB7GrdT1xyD7jrBt7nW552GSiEcan-wl_CXTTOCNZC4KX2nCB1zxIkYBMC7OSj6_nFoOKDJ6i6PPR31bZGIQcYXnObIvhrNlof92aABzoT9mE_FL_Wbn_0DwVRVBviVj2Hje40_ZisTxgEyxG5XSu9R619Uhlb1bAXgXqpe6xqJZ2eZbiBoP0P6iR3j7_N8ORWDgY" />
              <div class="absolute inset-0 flex items-center justify-center">
                <button
                  class="bg-white/10 backdrop-blur-md p-6 border border-white/20 hover:scale-110 transition-transform">
                  <span
                    class="material-symbols-outlined text-white text-4xl">play_arrow</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Related Products Carousel -->
      <section class="py-24 max-w-[1920px] mx-auto px-8 lg:px-12">
        <div class="flex justify-between items-end mb-12">
          <h2
            class="font-headline text-4xl font-black tracking-tighter uppercase">Complementary
            Objects</h2>
          <div class="flex gap-4">
            <button
              class="p-3 border border-outline-variant hover:bg-on-surface hover:text-surface transition-all">
              <span class="material-symbols-outlined">west</span>
            </button>
            <button
              class="p-3 border border-outline-variant hover:bg-on-surface hover:text-surface transition-all">
              <span class="material-symbols-outlined">east</span>
            </button>
          </div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Product Card 1 -->
          <div class="group cursor-pointer">
            <div class="aspect-[3/4] overflow-hidden bg-surface-container mb-6">
              <img
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                data-alt="Minimalist white dress shirt with hidden buttons on a simple grey background"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVSOJT5ZMWsfrL3I8fMw1IJzlKosvW_qmUbCTLnxdb56d-iYnL6aaVJ2toppFU1SESiFETSGEsED9_2bUDlQRqtkRxpbeC8Cpyt1naU5EQjmQgONedk2GGqM_e8Kiz6eTXgIuUUWwuBBUzD4j-mfqqW5vTadwG5IOPofNut9ZG24a9MXAIUDHF-AAvGbmHpO7JedncgS5Itu1YhBzE1eMZ4pBMGFhMwNu5_HzTM5uDR4JWvXMImYIfCX76FSrQVICUCuHnydx1ovA" />
            </div>
            <div class="space-y-1">
              <span
                class="font-label text-[10px] tracking-widest uppercase text-outline">Apparel</span>
              <h3 class="font-headline font-bold uppercase text-sm">Linear
                Poplin Shirt</h3>
              <p class="font-body text-sm">$320.00</p>
            </div>
          </div>
          <!-- Product Card 2 (Staggered) -->
          <div class="group cursor-pointer lg:mt-12">
            <div class="aspect-[3/4] overflow-hidden bg-surface-container mb-6">
              <img
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                data-alt="Luxury black leather boots with a high architectural sole and clean silhouette"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6GuXQf4H7rWZ0Gfyv8wp_jqvxyjttPB5hNvYnmUlp2xkaJ5pcrQ2hWPVhQH1bDwURUzM4jAyDfp6-L7f11rQsmY6QgyLfBjWzUCpmSnq5HuP2ZD3Zk-gOTab2UK0sqoJlfTkkoEjjSR9W6noiVybbvrHMXekVE6rfJBiCcd5BO7BlPkvDHGfKKahqC7RstBuN0bCksIocX-ZPeCRL67eh5_SW7GJ_K4HIp2RwIWF2rivq5gUMj6xJxpgF4dptVK2rB6h2RL44Ko0" />
            </div>
            <div class="space-y-1">
              <span
                class="font-label text-[10px] tracking-widest uppercase text-outline">Footwear</span>
              <h3 class="font-headline font-bold uppercase text-sm">Platform
                Chelsea Boot</h3>
              <p class="font-body text-sm">$890.00</p>
            </div>
          </div>
          <!-- Product Card 3 -->
          <div class="group cursor-pointer">
            <div class="aspect-[3/4] overflow-hidden bg-surface-container mb-6">
              <img
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                data-alt="Deep charcoal tailored wool trousers displayed against a minimalist concrete floor"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFxx-EGDOEPNQCX7ZHq8G9jtnhND5jZ6VmuKkepDstTSQxl_k7STovPJt9JNIZ-J_ZKjRoN_wbEEQ4zT1G6qO5vjanEOQeBqpTUxPKqTN34kjujTrEzbr9CmD6iSipahqLJZA2wYwwM581RTyNemGXl9z3svLuegd18oP4Xy6hChvMW887ghaJlBy2RIeZ7MoPMKaQZCsWH-jKcsaSZBaYFNl2JU7l14l-lRhKkf7_fX_eOsGatnLU3QWxPLK5ZlZ5zU94YzPm1zo" />
            </div>
            <div class="space-y-1">
              <span
                class="font-label text-[10px] tracking-widest uppercase text-outline">Apparel</span>
              <h3 class="font-headline font-bold uppercase text-sm">Pleated
                Serge Trouser</h3>
              <p class="font-body text-sm">$550.00</p>
            </div>
          </div>
          <!-- Product Card 4 (Staggered) -->
          <div class="group cursor-pointer lg:mt-12">
            <div class="aspect-[3/4] overflow-hidden bg-surface-container mb-6">
              <img
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                data-alt="Modern sculptural eyewear with thick black frames on a reflective surface"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGmsMjlduqOgIcG34nKyfZNsf_JGH5irbj9XHWk45UmnjNveaa3dT_37G-ZI3wlHAGCpng0FqcUdz_JcO0AYTmTEGNML0XYlb9dDVbQ15P9wYhRvkMB_Y8bmy_ECDq4HNd9JxwOzrqStKpNQY7kXmJxf-u_FpZ2ygIrAGEMxaPYz7SYSnqV2MVeoVJKUzvRSpGNm1M-Zs6qtGUpEDzT5PiKVZjdC8ThQ-cQQMNegAq8zPpC5cCk3iK63CVS-BgbIHCn342fr5aDyQ" />
            </div>
            <div class="space-y-1">
              <span
                class="font-label text-[10px] tracking-widest uppercase text-outline">Accessories</span>
              <h3 class="font-headline font-bold uppercase text-sm">Shield Frame
                Eyewear</h3>
              <p class="font-body text-sm">$410.00</p>
            </div>
          </div>
        </div>
      </section>
    </main>
    <!-- Footer -->
    <footer
      class="bg-[#151c24] dark:bg-[#000000] text-white w-full 0px-radius tonal-shift via surface-container-low">
      <div
        class="w-full px-12 py-24 flex flex-col md:flex-row justify-between content-start max-w-[1920px] mx-auto">
        <div class="mb-12 md:mb-0">
          <span
            class="text-xl font-bold text-white mb-8 block font-headline">MONOLITH</span>
          <p class="font-body text-xs text-gray-400 max-w-xs leading-loose">
            Defining the boundary between architecture and attire. Our studio
            creates objects of permanence for the modern collector.
          </p>
        </div>
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24">
          <div class="space-y-6">
            <h4
              class="font-headline text-xs tracking-widest uppercase font-bold">Inquiry</h4>
            <ul class="space-y-4 font-label text-xs tracking-widest uppercase">
              <li><a
                  class="text-gray-400 hover:text-white transition-all hover:tracking-[0.2em]"
                  href="#">Contact</a></li>
              <li><a
                  class="text-gray-400 hover:text-white transition-all hover:tracking-[0.2em]"
                  href="#">Shipping</a></li>
              <li><a
                  class="text-gray-400 hover:text-white transition-all hover:tracking-[0.2em]"
                  href="#">Returns</a></li>
            </ul>
          </div>
          <div class="space-y-6">
            <h4
              class="font-headline text-xs tracking-widest uppercase font-bold">Legal</h4>
            <ul class="space-y-4 font-label text-xs tracking-widest uppercase">
              <li><a
                  class="text-gray-400 hover:text-white transition-all hover:tracking-[0.2em]"
                  href="#">Privacy Policy</a></li>
              <li><a
                  class="text-gray-400 hover:text-white transition-all hover:tracking-[0.2em]"
                  href="#">Terms of Service</a></li>
            </ul>
          </div>
          <div class="space-y-6 md:col-span-2">
            <h4
              class="font-headline text-xs tracking-widest uppercase font-bold">Dispatch</h4>
            <div class="flex border-b border-gray-700 py-2">
              <input
                class="bg-transparent border-none focus:ring-0 text-xs w-full uppercase tracking-widest placeholder:text-gray-600"
                placeholder="EMAIL ADDRESS" type="email" />
              <button
                class="text-xs uppercase tracking-widest font-bold">Join</button>
            </div>
          </div>
        </div>
      </div>
      <div
        class="w-full px-12 py-8 border-t border-gray-800 text-center md:text-left">
        <span
          class="font-label text-xs tracking-widest uppercase text-gray-500">©
          2024 THE ARCHITECTURAL BOUTIQUE. ALL RIGHTS RESERVED.</span>
      </div>
    </footer>
  </body></html>

<!-- 3. Fiche Produit (Detail) -->
<!DOCTYPE html>

<html class="light" lang="en"><head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>MONOLITH | Customer Dashboard</title>
    <script
      src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
    <link
      href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;700;800&amp;family=Inter:wght@300;400;500;600&amp;display=swap"
      rel="stylesheet" />
    <link
      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap"
      rel="stylesheet" />
    <link
      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap"
      rel="stylesheet" />
    <script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "tertiary-container": "#00201a",
                        "on-secondary": "#ffffff",
                        "on-primary": "#ffffff",
                        "tertiary-fixed": "#afefdd",
                        "on-primary-fixed": "#151c24",
                        "primary-fixed-dim": "#c0c7d2",
                        "on-tertiary-container": "#518f7f",
                        "error": "#ba1a1a",
                        "on-tertiary-fixed-variant": "#065043",
                        "surface-bright": "#f8f9ff",
                        "tertiary-fixed-dim": "#94d3c1",
                        "on-error-container": "#93000a",
                        "surface-tint": "#585f69",
                        "outline-variant": "#c5c6cb",
                        "on-tertiary": "#ffffff",
                        "on-primary-fixed-variant": "#404751",
                        "on-surface": "#151c24",
                        "primary-container": "#151c24",
                        "on-secondary-fixed": "#261900",
                        "secondary-container": "#fed488",
                        "surface-variant": "#dce3ee",
                        "on-secondary-container": "#785a1a",
                        "on-background": "#151c24",
                        "surface-container-highest": "#dce3ee",
                        "surface-container-high": "#e2e9f4",
                        "surface-container-lowest": "#ffffff",
                        "surface-container": "#e8eefa",
                        "background": "#f8f9ff",
                        "primary": "#000000",
                        "secondary-fixed": "#ffdea5",
                        "on-secondary-fixed-variant": "#5d4201",
                        "inverse-surface": "#2a313a",
                        "error-container": "#ffdad6",
                        "surface-dim": "#d4dae6",
                        "on-surface-variant": "#44474b",
                        "surface-container-low": "#eef4ff",
                        "inverse-on-surface": "#eaf1fd",
                        "tertiary": "#000000",
                        "on-error": "#ffffff",
                        "on-tertiary-fixed": "#00201a",
                        "on-primary-container": "#7d848f",
                        "secondary": "#775a19",
                        "inverse-primary": "#c0c7d2",
                        "outline": "#75777c",
                        "primary-fixed": "#dce3ee",
                        "surface": "#f8f9ff",
                        "secondary-fixed-dim": "#e9c176"
                    },
                    fontFamily: {
                        "headline": ["Manrope"],
                        "body": ["Inter"],
                        "label": ["Inter"]
                    },
                    borderRadius: {"DEFAULT": "0px", "lg": "0px", "xl": "0px", "full": "9999px"},
                },
            },
        }
    </script>
    <style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
            font-size: 20px;
        }
        .editorial-grid {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 2rem;
        }
        input:focus {
            outline: none !important;
            box-shadow: none !important;
        }
    </style>
  </head>
  <body
    class="bg-surface font-body text-on-surface selection:bg-secondary-container selection:text-on-secondary-container">
    <!-- Top Navigation Shell -->
    <nav
      class="fixed top-0 w-full z-50 bg-[#f8f9ff]/90 dark:bg-[#121921]/90 backdrop-blur-xl no-border transition-colors duration-300">
      <div
        class="flex justify-between items-center w-full px-8 py-6 max-w-[1920px] mx-auto">
        <span
          class="text-2xl font-black tracking-tighter text-black dark:text-white font-headline">MONOLITH</span>
        <div class="hidden md:flex items-center space-x-12">
          <a
            class="font-['Manrope'] tracking-tight font-bold uppercase text-sm text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
            href="#">Shop</a>
          <a
            class="font-['Manrope'] tracking-tight font-bold uppercase text-sm text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
            href="#">Collections</a>
          <a
            class="font-['Manrope'] tracking-tight font-bold uppercase text-sm text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
            href="#">Archive</a>
          <a
            class="font-['Manrope'] tracking-tight font-bold uppercase text-sm text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
            href="#">Story</a>
        </div>
        <div class="flex items-center space-x-6">
          <button
            class="material-symbols-outlined text-black dark:text-white active:scale-95 duration-200">shopping_bag</button>
          <button
            class="text-black dark:text-white border-b-2 border-black dark:border-white pb-1 font-['Manrope'] tracking-tight font-bold uppercase text-sm active:scale-95 duration-200">
            <span class="material-symbols-outlined align-middle mr-1"
              data-icon="person">person</span>
          </button>
        </div>
      </div>
    </nav>
    <main class="pt-32 pb-24 px-8 max-w-[1920px] mx-auto">
      <!-- Header Section -->
      <header class="mb-20">
        <h1
          class="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter text-on-primary-fixed mb-4">DASHBOARD</h1>
        <p class="text-on-surface-variant font-body text-lg max-w-2xl">Welcome
          back. Manage your architectural curation, track pending shipments, and
          refine your profile details.</p>
      </header>
      <div class="editorial-grid">
        <!-- Left Column: Navigation & Stats -->
        <aside class="col-span-12 lg:col-span-3 flex flex-col space-y-12">
          <section class="space-y-4">
            <h3
              class="font-label text-xs font-bold tracking-[0.2em] text-secondary uppercase">Quick
              Access</h3>
            <nav class="flex flex-col space-y-2">
              <a
                class="group flex items-center justify-between py-3 border-b border-outline-variant/20 hover:border-primary transition-all"
                href="#">
                <span class="font-headline font-bold text-sm uppercase">Order
                  History</span>
                <span
                  class="material-symbols-outlined text-xs group-hover:translate-x-1 transition-transform">arrow_forward_ios</span>
              </a>
              <a
                class="group flex items-center justify-between py-3 border-b border-outline-variant/20 hover:border-primary transition-all"
                href="#">
                <span class="font-headline font-bold text-sm uppercase">Saved
                  Designs</span>
                <span
                  class="material-symbols-outlined text-xs group-hover:translate-x-1 transition-transform">arrow_forward_ios</span>
              </a>
              <a
                class="group flex items-center justify-between py-3 border-b border-outline-variant/20 hover:border-primary transition-all"
                href="#">
                <span
                  class="font-headline font-bold text-sm uppercase">Membership
                  Status</span>
                <span
                  class="material-symbols-outlined text-xs group-hover:translate-x-1 transition-transform">arrow_forward_ios</span>
              </a>
            </nav>
          </section>
          <section class="bg-primary-container p-8 text-white">
            <div class="mb-8">
              <span
                class="font-label text-[10px] tracking-[0.3em] uppercase opacity-60">Loyalty
                Tier</span>
              <p class="font-headline text-2xl font-black mt-1">PLATINUM
                ARCHITECT</p>
            </div>
            <div class="flex items-end justify-between">
              <div>
                <span
                  class="font-label text-[10px] tracking-[0.3em] uppercase opacity-60">Points
                  Balance</span>
                <p class="font-headline text-3xl font-black">4,820</p>
              </div>
              <span
                class="material-symbols-outlined text-4xl text-secondary-container"
                data-icon="architecture"
                style="font-variation-settings: 'FILL' 1;">architecture</span>
            </div>
          </section>
        </aside>
        <!-- Main Content: Orders & Tracking -->
        <div class="col-span-12 lg:col-span-6 space-y-16">
          <!-- Recent Orders -->
          <section>
            <div class="flex justify-between items-end mb-8">
              <h2
                class="font-headline text-2xl font-bold tracking-tight uppercase">Recent
                Orders</h2>
              <a
                class="font-label text-xs border-b border-primary pb-1 hover:text-secondary hover:border-secondary transition-colors uppercase"
                href="#">View All</a>
            </div>
            <div class="space-y-6">
              <!-- Order Card 1 -->
              <div
                class="bg-surface-container-lowest p-6 flex flex-col md:flex-row gap-6 transition-all hover:bg-surface-container-low group">
                <div class="w-24 h-32 bg-surface-variant flex-shrink-0">
                  <img class="w-full h-full object-cover"
                    data-alt="Minimalist architectural matte black vase on a white plinth with sharp shadows and editorial lighting"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGL3ZXfmCW6qbD_pAx8oJG3UOUDeKfHZQde2xYCsI0YKbbSS0JiW3lO6qQFnTmXdp83lZGI7qPlIcqqR1GACSwAYfhF8VoSy9QJT0gC5SsTSOtvuNN1P4hJPfcBkIVziQzITwautbm5u_X_lekwceRpAtk7wZEiQ4LM5QGk5R0JUtdXHQEZNlnFS547OqzGAppe0W06-mDvYMS9SG8tkiQky1SsDDB90fUdoqkGaOWvkxa66mP40zt-6cjlNUMfEOOdU3cksWBq80" />
                </div>
                <div class="flex-grow flex flex-col justify-between">
                  <div class="flex justify-between items-start">
                    <div>
                      <span
                        class="font-label text-[10px] text-secondary font-bold tracking-widest uppercase mb-1 block">In
                        Transit</span>
                      <h4
                        class="font-headline font-extrabold text-lg">AXONOMETRIC
                        VASE 01</h4>
                      <p class="text-on-surface-variant text-xs mt-1">Order
                        #MN-92841 • Placed Oct 12, 2023</p>
                    </div>
                    <p class="font-headline font-black text-xl">$420.00</p>
                  </div>
                  <div class="mt-4 flex gap-4">
                    <button
                      class="bg-primary text-white px-6 py-2 font-headline text-[10px] font-bold tracking-widest uppercase hover:bg-on-primary-fixed transition-colors active:scale-95 duration-200">Track
                      Shipment</button>
                    <button
                      class="border border-outline-variant px-6 py-2 font-headline text-[10px] font-bold tracking-widest uppercase hover:bg-surface-container-high transition-colors active:scale-95 duration-200">Details</button>
                  </div>
                </div>
              </div>
              <!-- Order Card 2 -->
              <div
                class="bg-surface-container-lowest p-6 flex flex-col md:flex-row gap-6 transition-all hover:bg-surface-container-low group">
                <div class="w-24 h-32 bg-surface-variant flex-shrink-0">
                  <img class="w-full h-full object-cover"
                    data-alt="Abstract brutalist concrete sculpture with geometric angles and smooth grey texture against a neutral studio background"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGuo1zLj2H1yU18XvdYpefYVRmLvnhlFyeWn1_4EIGdMOpwBYCD1o1gNxvpsg1mo_2BgdJdRnwy5ZThENfHExW0A5mYl0yivmSGdWoVe4tbcI9Q5_JBaVY5KAxghZo1MkAzjwDJiu1Aj0_oVQvMmb68-z99RgGiybaCpabsbm4j4-QFoFAvsKgflld8YzGDDp-T0KiDv1S3wAF-WU4NDD58N8Vz_RRWQYpP0TvhE0Rp283SYVdNd8IHh5VRahCGe8380OMVilU5EQ" />
                </div>
                <div class="flex-grow flex flex-col justify-between">
                  <div class="flex justify-between items-start">
                    <div>
                      <span
                        class="font-label text-[10px] text-on-surface-variant font-bold tracking-widest uppercase mb-1 block">Delivered</span>
                      <h4 class="font-headline font-extrabold text-lg">BRUTALIST
                        SERIES 04</h4>
                      <p class="text-on-surface-variant text-xs mt-1">Order
                        #MN-92755 • Placed Sep 28, 2023</p>
                    </div>
                    <p class="font-headline font-black text-xl">$1,150.00</p>
                  </div>
                  <div class="mt-4">
                    <button
                      class="border border-outline-variant px-6 py-2 font-headline text-[10px] font-bold tracking-widest uppercase hover:bg-surface-container-high transition-colors active:scale-95 duration-200">Buy
                      Again</button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <!-- Profile Edit -->
          <section class="bg-surface-container-lowest p-10">
            <h2
              class="font-headline text-2xl font-bold tracking-tight uppercase mb-8">Personal
              Credentials</h2>
            <form class="space-y-8">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="relative">
                  <label
                    class="font-label text-[10px] tracking-widest text-on-surface-variant uppercase block mb-1">Full
                    Name</label>
                  <input
                    class="w-full bg-transparent border-0 border-b border-outline py-2 font-headline font-bold text-sm focus:border-secondary transition-colors"
                    type="text" value="Julian Architecture" />
                </div>
                <div class="relative">
                  <label
                    class="font-label text-[10px] tracking-widest text-on-surface-variant uppercase block mb-1">Email
                    Address</label>
                  <input
                    class="w-full bg-transparent border-0 border-b border-outline py-2 font-headline font-bold text-sm focus:border-secondary transition-colors"
                    type="email" value="julian@arch-studio.com" />
                </div>
                <div class="relative">
                  <label
                    class="font-label text-[10px] tracking-widest text-on-surface-variant uppercase block mb-1">Phone
                    Number</label>
                  <input
                    class="w-full bg-transparent border-0 border-b border-outline py-2 font-headline font-bold text-sm focus:border-secondary transition-colors"
                    type="text" value="+1 (555) 012-3456" />
                </div>
                <div class="relative">
                  <label
                    class="font-label text-[10px] tracking-widest text-on-surface-variant uppercase block mb-1">Primary
                    Language</label>
                  <select
                    class="w-full bg-transparent border-0 border-b border-outline py-2 font-headline font-bold text-sm focus:border-secondary transition-colors appearance-none cursor-pointer">
                    <option>English (International)</option>
                    <option>French (European)</option>
                    <option>Japanese</option>
                  </select>
                </div>
              </div>
              <div class="pt-4">
                <button
                  class="bg-primary text-white px-10 py-4 font-headline text-xs font-bold tracking-[0.2em] uppercase hover:bg-on-primary-fixed transition-all active:scale-95 duration-200"
                  type="submit">Update Profile</button>
              </div>
            </form>
          </section>
        </div>
        <!-- Right Column: Address Book & Preferences -->
        <div class="col-span-12 lg:col-span-3 space-y-12">
          <section>
            <div class="flex justify-between items-end mb-8">
              <h2
                class="font-headline text-xl font-bold tracking-tight uppercase">Address
                Book</h2>
              <button
                class="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors">add_circle</button>
            </div>
            <div class="space-y-4">
              <div
                class="p-6 bg-surface-container-low border-l-4 border-secondary">
                <div class="flex justify-between items-start mb-4">
                  <span
                    class="font-label text-[10px] font-bold tracking-widest uppercase px-2 py-1 bg-secondary-container text-on-secondary-container">Default
                    Shipping</span>
                  <button
                    class="material-symbols-outlined text-xs">edit</button>
                </div>
                <p class="font-headline font-bold text-sm mb-1">THE PENTHOUSE
                  STUDIO</p>
                <p
                  class="font-body text-xs text-on-surface-variant leading-relaxed">
                  482 Lexinton Ave, Suite 402<br />
                  Manhattan, New York 10017<br />
                  United States
                </p>
              </div>
              <div
                class="p-6 border border-outline-variant/30 hover:bg-surface-container-low transition-all group cursor-pointer">
                <div class="flex justify-between items-start mb-4">
                  <span
                    class="font-label text-[10px] font-bold tracking-widest uppercase text-on-surface-variant">Billing
                    Address</span>
                  <button
                    class="material-symbols-outlined text-xs">edit</button>
                </div>
                <p class="font-headline font-bold text-sm mb-1">ARCH BUREAU
                  HQ</p>
                <p
                  class="font-body text-xs text-on-surface-variant leading-relaxed">
                  12 Industrial Way<br />
                  Brooklyn, New York 11201<br />
                  United States
                </p>
              </div>
            </div>
          </section>
          <section class="bg-surface-variant/30 p-8">
            <h3
              class="font-headline text-sm font-bold tracking-widest uppercase mb-6">Concierge
              Support</h3>
            <p
              class="font-body text-xs text-on-surface-variant mb-6 leading-loose">Need
              assistance with a custom commission or shipping logistics? Our
              specialists are available 24/7.</p>
            <button
              class="w-full py-4 border border-primary font-headline text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-primary hover:text-white transition-all duration-300">Contact
              Specialist</button>
          </section>
        </div>
      </div>
    </main>
    <!-- Footer -->
    <footer
      class="w-full px-12 py-24 flex flex-col md:flex-row justify-between content-start bg-[#151c24] text-white">
      <div class="mb-12 md:mb-0">
        <span
          class="text-xl font-bold text-white mb-8 block font-headline tracking-tighter">MONOLITH</span>
        <p
          class="font-['Inter'] text-xs tracking-widest uppercase text-gray-400">©
          2024 THE ARCHITECTURAL BOUTIQUE. ALL RIGHTS RESERVED.</p>
      </div>
      <div class="grid grid-cols-2 gap-x-12 gap-y-4">
        <a
          class="font-['Inter'] text-xs tracking-widest uppercase text-gray-400 hover:text-white hover:tracking-[0.2em] transition-all duration-300"
          href="#">Privacy Policy</a>
        <a
          class="font-['Inter'] text-xs tracking-widest uppercase text-gray-400 hover:text-white hover:tracking-[0.2em] transition-all duration-300"
          href="#">Terms of Service</a>
        <a
          class="font-['Inter'] text-xs tracking-widest uppercase text-gray-400 hover:text-white hover:tracking-[0.2em] transition-all duration-300"
          href="#">Shipping &amp; Returns</a>
        <a
          class="font-['Inter'] text-xs tracking-widest uppercase text-gray-400 hover:text-white hover:tracking-[0.2em] transition-all duration-300"
          href="#">Contact</a>
      </div>
    </footer>
  </body></html>