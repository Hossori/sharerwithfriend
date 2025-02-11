<script>
export default {
    data: () => ({
        video_tab: null,
    }),
}
</script>

<template>
    <main>
        <h1 class="mb-5">見たい動画</h1>

        <!-- タブメニュー -->
        <v-tabs v-model="video_tab">
            <v-tab class="text-h5" value="videos_game">ゲーム</v-tab>
            <v-tab class="text-h5" value="videos_music">音楽</v-tab>
            <v-tab class="text-h5" value="videos_other">その他</v-tab>
            <v-tab class="text-h5 text-blue" value="add_video">動画を追加</v-tab>
        </v-tabs>

        <!-- タブコンテンツ -->
        <v-tabs-window v-model="video_tab" class="pt-5 pl-1">
            <v-tabs-window-item value="videos_game">
                <v-sheet tile>
                    <h2>videos_game</h2>
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