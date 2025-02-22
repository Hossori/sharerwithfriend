<script setup>
const props = defineProps({
    videoId: String,
    title: String,
    channelTitle: String,
    description: String,
    thumbnailUrl: String,
    publishedAt: String,
    liveBroadcastContent: String,
    duration: String,
    categoryId: String,
    owner: String,
});
</script>

<template>
    <div class="my-5">
        <v-btn>videoId: {{ videoId }}</v-btn>
        <h3>title: {{ title }}</h3>
        <h4>channelTitle: {{ channelTitle }}</h4>
        <p>description: {{ description }}</p>
        <p>thumbnailUrl: {{ thumbnailUrl }}</p>
        <p>publishedAt: {{ publishedAt }}</p>
        <p>liveBroadcastContent: {{ liveBroadcastContent }}</p>
        <p>duration: {{ duration }}</p>
        <p>categoryId: {{ categoryId }}</p>
        <p>owner: {{ owner }}</p>
    </div>
</template>