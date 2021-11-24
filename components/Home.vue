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
            { lang: 'fr-fr' }
        )
        this.document = documents.results[0]?.data?.body[0]?.primary
    }
}
/* export default {
    async asyncData({app}) {
        const documents = await app.$prismic.api.query(
            app.$prismic.predicates.at('my.slices_page.uid', 'index-pix-site'),
            { lang: 'fr-fr' }
        )
        console.log(documents)
        return {
            document: documents.results[0]?.data?.body[0]?.primary
        }
    }
} */
</script>
