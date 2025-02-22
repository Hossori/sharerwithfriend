<script setup>
import SavedVideo from '@/components/video/SavedVideo.vue';
import { reactive, ref } from 'vue';

const gameVideos = reactive([]);
for (let i = 0; i < 10; i++) {
    gameVideos.push({
        videoId: 'id' + i,
        title: 'title' + i,
        channelTitle: 'channelTitle' + i,
        description: 'description' + i,
        thumbnailUrl: 'thumbnailUrl' + i,
        publishedAt: 'publishedAt' + i,
        liveBroadcastContent: 'liveBroadcastContent' + i,
        duration: 'duration' + i,
        categoryId: 'categoryId' + i,
        owner: 'owner' + i,
    })
}

const videoTab = ref(null);
</script>

<template>
    <main>
        <h1 class="mb-5">見たい動画</h1>

        <!-- タブメニュー -->
        <v-tabs v-model="videoTab">
            <v-tab class="text-h5" value="videos_game">ゲーム</v-tab>
            <v-tab class="text-h5" value="videos_music">音楽</v-tab>
            <v-tab class="text-h5" value="videos_other">その他</v-tab>
            <v-tab class="text-h5 text-blue" value="add_video">動画を追加</v-tab>
        </v-tabs>

        <!-- タブコンテンツ -->
        <v-tabs-window v-model="videoTab" class="pt-5 pl-1">
            <v-tabs-window-item value="videos_game">
                <v-sheet tile>
                    <h2>videos_game</h2>
                    <SavedVideo v-for="video in gameVideos" :video-id="video.videoId" :title="video.title"
                        :channel-title="video.channelTitle" :description="video.description"
                        :thumbnail-url="video.thumbnailUrl" :published-at="video.publishedAt"
                        :live-broadcast-content="video.liveBroadcastContent" :duration="video.duration"
                        :category-id="video.categoryId" :owner="video.owner" />
                </v-sheet>
            </v-tabs-window-item>
            <v-tabs-window-item value="videos_music">
                <v-sheet tile>
                    <h2>videos_music</h2>
                </v-sheet>
            </v-tabs-window-item>
            <v-tabs-window-item value="videos_other">
                <v-sheet tile>
                    <h2>videos_other</h2>
                </v-sheet>
            </v-tabs-window-item>
            <v-tabs-window-item value="add_video">
                <v-sheet tile>
                    <h2>add_video</h2>
                </v-sheet>
            </v-tabs-window-item>
        </v-tabs-window>
    </main>
</template>

<style scoped>
h1 {
    color: #00796B;
}
</style>