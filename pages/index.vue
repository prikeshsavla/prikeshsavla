<template>
  <main>
    <section class="self-center flex flex-col flex-1 items-center justify-center">
      <h4 class="mt-12">Hello 👋 My name is</h4>
      <h1 class="title text-center">Prikesh Savla</h1>
      <div class="mt-6 text-justify" style="max-width: 500px">
        Looking for Open Source Contributions and Side Project ideas. Making mobile first high quality websites with
        Bootstrap 4, Vuejs.
        <br />
        Highly scalable apps with Google backed Flutter Framework and High performance Web Apps and Prototypes with Ruby
        on Rails. <br /><br />
        <div class="text-center">
          <a target="_blank" rel="noopener" href="https://github.com/prikeshsavla">
            github
          </a>
          |
          <a target="_blank" rel="noopener" href="https://twitter.com/prikeshdexter">
            twitter
          </a>
          |
          <a target="_blank" rel="noopener" href="https://www.linkedin.com/in/prikeshsavla">
            linkedin
          </a>
          |
          <a target="_blank" rel="noopener" href="https://www.instagram.com/prikeshdexter/">
            instagram
          </a>
        </div>
      </div>

      <nav class="scrim-bg z-40 top-0 inset-x-0 pt-3 px-3" aria-label="Main Menu">
        <ul class="flex">
          <li class="flex-2 ml-2">
            <nuxt-link class="btn block" to="/blog">📝Blog</nuxt-link>
          </li>
          <li class="flex-2 ml-2">
            <nuxt-link class="btn block" to="/projects">💻 Projects</nuxt-link>
          </li>
          <li class="flex-2 ml-2">
            <a target="_blank" rel="noopener" class="btn block" href="https://prikeshsavla.com/newsletter">
              📩 Newsletter
            </a>
          </li>
        </ul>
      </nav>
    </section>

    <section class="mt-12">
      <h3 class="text-primary-600 dark:text-primary-400 max-w-5xl mx-auto">Latest blog posts</h3>
      <posts post-type="blog" :amount="5" />
    </section>
    <section class="mt-8 ">
      <iframe
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
