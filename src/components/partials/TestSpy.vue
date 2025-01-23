<template>
  <div id="scrollspy-scrollable-parent" class="vertical-scrollbar max-h-96">
  <div class="grid grid-cols-5">
    <div class="col-span-2 sm:col-span-1">
      <ul class="sticky top-0 text-sm leading-6" data-scrollspy="#scrollspy" data-scrollspy-scrollable-parent="#scrollspy-scrollable-parent">
        <li class="text-base-content text-xl font-medium">Index</li>
        <li data-scrollspy-group="">
          <a href="#chapter-1" class="text-base-content/80 hover:text-base-content scrollspy-active:text-primary active block py-0.5 font-medium">
            Chapter 1
          </a>
          <ul>
            <li class="ms-0.5 sm:ms-4">
              <a href="#chapter-1-1" class="text-base-content/80 hover:text-base-content scrollspy-active:text-primary flex items-center gap-x-2 py-0.5">
                <span class="icon-[tabler--point] size-4"></span>
                Chapter 1-1
              </a>
            </li>
            <li class="ms-0.5 sm:ms-4">
              <a href="#chapter-1-2" class="text-base-content/80 hover:text-base-content scrollspy-active:text-primary flex items-center gap-x-2 py-0.5">
                <span class="icon-[tabler--point] size-4"></span>
                Chapter 1-2
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#chapter-2" class="text-base-content/80 hover:text-base-content scrollspy-active:text-primary block py-0.5 font-medium">
            Chapter 2
          </a>
        </li>
        <li data-scrollspy-group="">
          <a href="#chapter-3" class="text-base-content/80 hover:text-base-content scrollspy-active:text-primary block py-0.5 font-medium">
            Chapter 3
          </a>
          <ul>
            <li class="ms-0.5 sm:ms-4">
              <a href="#chapter-3-1" class="text-base-content/80 hover:text-base-content scrollspy-active:text-primary flex items-center gap-x-2 py-0.5">
                <span class="icon-[tabler--point] size-4"></span>
                Chapter 3-1
              </a>
            </li>
            <li class="ms-0.5 sm:ms-4">
              <a href="#chapter-3-2" class="text-base-content/80 hover:text-base-content scrollspy-active:text-primary flex items-center gap-x-2 py-0.5">
                <span class="icon-[tabler--point] size-4"></span>
                Chapter 3-2
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="col-span-3 sm:col-span-4">
      <div id="scrollspy" class="space-y-4 pe-1">
        <div id="chapter-1">
          <p class="text-base-content text-lg font-semibold">Chapter 1</p>
          <p class="mt-1 text-sm leading-6">
            This placeholder content serves to demonstrate the functionality of the scrollspy page. As you scroll down,
            the corresponding navigation link is highlighted to indicate the active section. This example copy is
            continuously added to underscore the scrolling and highlighting feature.
          </p>
        </div>
        <div id="chapter-1-1">
          <p class="text-base-content text-lg font-semibold">Chapter 1-1</p>
          <p class="mt-1 text-sm leading-6">
            This placeholder content serves to demonstrate the functionality of the scrollspy page. As you scroll down,
            the corresponding navigation link is highlighted to indicate the active section. This example copy is
            continuously added to underscore the scrolling and highlighting feature.
          </p>
        </div>
        <div id="chapter-1-2">
          <p class="text-base-content text-lg font-semibold">Chapter 1-2</p>
          <p class="mt-1 text-sm leading-6">
            This placeholder content serves to demonstrate the functionality of the scrollspy page. As you scroll down,
            the corresponding navigation link is highlighted to indicate the active section. This example copy is
            continuously added to underscore the scrolling and highlighting feature.
          </p>
        </div>
        <div id="chapter-2">
          <p class="text-base-content text-lg font-semibold">Chapter 2</p>
          <p class="mt-1 text-sm leading-6">
            This placeholder content serves to demonstrate the functionality of the scrollspy page. As you scroll down,
            the corresponding navigation link is highlighted to indicate the active section. This example copy is
            continuously added to underscore the scrolling and highlighting feature.
          </p>
        </div>
        <div id="chapter-3">
          <p class="text-base-content text-lg font-semibold">Chapter 3</p>
          <p class="mt-1 text-sm leading-6">
            This placeholder content serves to demonstrate the functionality of the scrollspy page. As you scroll down,
            the corresponding navigation link is highlighted to indicate the active section. This example copy is
            continuously added to underscore the scrolling and highlighting feature.
          </p>
        </div>
        <div id="chapter-3-1">
          <p class="text-base-content text-lg font-semibold">Chapter 3-1</p>
          <p class="mt-1 text-sm leading-6">
            This placeholder content serves to demonstrate the functionality of the scrollspy page. As you scroll down,
            the corresponding navigation link is highlighted to indicate the active section. This example copy is
            continuously added to underscore the scrolling and highlighting feature.
          </p>
        </div>
        <div id="chapter-3-2">
          <p class="text-base-content text-lg font-semibold">Chapter 3-2</p>
          <p class="mt-1 text-sm leading-6">
            This placeholder content serves to demonstrate the functionality of the scrollspy page. As you scroll down,
            the corresponding navigation link is highlighted to indicate the active section. This example copy is
            continuously added to underscore the scrolling and highlighting feature.
          </p>
        </div>
        <div class="h-[16.5rem]"></div>
      </div>
    </div>
  </div>
</div>
</template>