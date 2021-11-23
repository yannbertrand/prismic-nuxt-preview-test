<template>
    <section>
        <h1>Home</h1>
        <h2>{{ document.banner_title[0].text }}</h2>
        <p>{{ document.banner_content[0].text }}</p>
    </section>
</template>

<script>
export default {
    data() {
        return {
            document: null
        }
    },
    async fetch() {
        const documents = await this.$prismic.api.query(
            this.$prismic.predicates.at('my.slices_page.uid', 'index-pix-site'),
            { lang: 'en-us' }
        )
        this.document = documents.results[0]?.data?.body[0]?.primary
    }
}
</script>
