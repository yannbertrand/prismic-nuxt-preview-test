<template>
    <footer>
        <h1>Footer</h1>
        <prismic-rich-text :field="document.text"></prismic-rich-text>
    </footer>
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
            this.$prismic.predicates.at('document.type', 'main_footer'),
            { lang: 'fr-fr' }
        )
        const result = documents.results.find(r => r?.data?.footer_for === 'pix-site')
        this.document = result.data?.body.find(b => b.slice_type === 'text')?.primary
    }
}
</script>
