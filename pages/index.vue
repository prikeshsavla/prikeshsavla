<template>
  <main>
    <section class="self-center flex flex-col flex-1 items-center justify-center">
      <img src="img/prikesh.jpg" alt="A Picture of Prikesh Savla" width="300" />

      <h4 class="mt-4">Hello 👋 My name is</h4>
      <h1 class="title text-center">Prikesh Savla</h1>
      <div class="mt-4 text-center max-w-md">
        Full Stack Developer and Open Source Contributor. Making high performance Webapps and Prototypes with Ruby on
        Rails, NuxtJs and Vue.js. <br /><br />
        🎮🕹⌨ Gamer & Love Food Vlogs & Documentaries
        <br /><br />
        <div class="text-center">
          <a target="_blank" rel="noopener" href="https://prikeshsavla.com/github">
            github
          </a>
          |
          <a target="_blank" rel="noopener" href="https://prikeshsavla.com/twitter">
            twitter
          </a>
          |
          <a target="_blank" rel="noopener" href="https://prikeshsavla.com/linkedin">
            linkedin
          </a>
          |
          <a target="_blank" rel="noopener" href="https://prikeshsavla.com/instagram">
            instagram
          </a>
        </div>
      </div>
      <nav class="scrim-bg z-40 top-0 inset-x-0 pt-3 px-3 mt-2" aria-label="Main Menu">
        <ul class="flex">
          <li class="flex-2 ml-4 ">
            <nuxt-link class="btn block text-center" to="/blog">📝blog</nuxt-link>
          </li>
          <li class="flex-2 ml-4">
            <nuxt-link class="btn block text-center" to="/projects">💻 projects</nuxt-link>
          </li>
          <li class="flex-2 ml-4">
            <a target="_blank" rel="noopener" class="btn block text-center" href="https://prikeshsavla.com/newsletter">
              📩 newsletter
            </a>
          </li>
        </ul>
      </nav>
      <iframe
        class="mt-4 "
        src="https://openpullrequest.substack.com/embed"
        width="100%"
        height="250"
        style="border:1px solid #EEE; background:white;"
        frameborder="0"
        scrolling="no"
      ></iframe>
    </section>
  </main>
</template>
