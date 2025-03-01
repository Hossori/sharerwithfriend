<script setup>
import SavedVideo from '@/components/video/SavedVideo.vue';
import { reactive, ref } from 'vue';
import { addDoc, collection } from 'firebase/firestore';
import { firestore } from '@/main';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

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

const email = ref('');
const password = ref('');
function login() {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log('sign in ' + user);
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode + " : " + errorMessage);
        });
}
function signup() {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            console.log('sign up ' + user);
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode + " : " + errorMessage);
            // ..
        });
}

const videoTab = ref(null);

const addInfo = ref('');
async function add() {
    if (addInfo.value === '') {
        return;
    }
    const addInfoSplit = addInfo.value.split('\t');
    let i = 0;
    const addInfoObj = {
        videoId: addInfoSplit[i++],
        title: addInfoSplit[i++],
        channelTitle: addInfoSplit[i++],
        description: addInfoSplit[i++],
        thumbnailUrl: addInfoSplit[i++],
        publishedAt: getDatetime(addInfoSplit[i++]),
        liveBroadcastContent: addInfoSplit[i++],
        duration: addInfoSplit[i++],
        categoryId: addInfoSplit[i++],
        owner: addInfoSplit[i++],
        registeredAt: getDatetime('2025/02/24T0:0:' + addInfoSplit[i++])
    };
    console.log(addInfoObj);
    await addDoc(collection(firestore, "video"), addInfoObj);
}
function getDatetime(datetimeString) {
    const matches = datetimeString.match(/\d+/g);
    return new Date(matches[0], matches[1] - 1, matches[2], matches[3], matches[4], matches[5]);
}

</script>

<template>
    <main>
        <h1 class="mb-5">見たい動画</h1>

        <v-text-field label="email" v-model="email" type="text"></v-text-field>
        <v-text-field label="password " v-model="password" type="password"></v-text-field>
        <v-btn @click="login">login</v-btn>
        <v-btn @click="signup">signup</v-btn>

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
                    <input v-model="addInfo" type="text" />
                    <v-btn @click="add">add</v-btn>
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