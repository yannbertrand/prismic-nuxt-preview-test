<template>
    <footer>
        <h1>Footer</h1>
        <p>{{ document.text[0].text }}</p>
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
        console.log(documents.results[0])
        this.document = documents.results[0]?.data?.body[0]?.primary
    }
}
</script>
