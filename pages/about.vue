<template>
  <main>
    <section class="self-center flex flex-col flex-1 items-center justify-center">
      <h1 class="title text-center">Curated Office and Gaming Accessories</h1>
      <h2 class="subtitle text-center mb-12">by Prikesh Savla</h2>
      <div class="max-w-4xl">
        <strong>Affiliate Disclosure</strong>
        <br />
        This Shop receives compensation through affiliate relationships with merchants listed on this site. Please know
        that this in no way affects reviews, benchmarks, content, or this site's opinions of products, services,
        manufacturers, partners, or merchants. Our mission is to provide the best functionality for this site's users,
        regardless of any potential affiliate commissions.
        <br />
        This Shop is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program
        designed to provide a means for sites to earn advertising fees by advertising and linking to amazon.com.
      </div>
    </section>

    <section class="mt-8">
      <h3 class="text-primary-600 dark:text-primary-400 max-w-5xl mx-auto">Latest Product</h3>
      <posts post-type="blog" :amount="1" />
    </section>
  </main>
</template>