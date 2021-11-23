<template>
    <section>
        <h1>Home</h1>
        <prismic-rich-text :field="document.banner_title"></prismic-rich-text>
        <prismic-rich-text :field="document.banner_content"></prismic-rich-text>
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
