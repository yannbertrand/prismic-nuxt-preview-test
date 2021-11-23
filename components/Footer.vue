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
            this.$prismic.predicates.at('document.type', 'main_ooter'),
            { lang: 'en-us' }
        )
        this.document = documents.results[0]?.data?.body[0]?.primary
    }
}
</script>
