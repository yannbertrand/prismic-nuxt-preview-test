<template>
    <footer>
        <h1>Footer</h1>
        <prismic-rich-text :field="document.text"></prismic-rich-text>
        <nuxt-img
            v-if="document.image"
            :src="document.image.url"
            :width="document.image.dimensions.width / 4"
            :height="document.image.dimensions.height / 4"
        />
        <nuxt-img
            src="/images/certif-illustration.png"
            width="300"
            height="400"
        />
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
