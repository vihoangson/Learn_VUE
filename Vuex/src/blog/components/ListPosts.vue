<template>
    <div>
        <h2 v-for="post in posts">
            {{ post.title }} (ID: {{ post.id }})
        </h2>
    </div>
</template>

<script>
    export default {
        computed: {
            posts() {
                return this.$store.state.blog.posts;
            }
        }
    }
</script>