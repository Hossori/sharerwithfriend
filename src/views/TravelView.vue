<script>
import { defineComponent, ref } from 'vue';
import SlideUpDown from 'vue-slide-up-down';

export default defineComponent({
    components: {
        SlideUpDown,
    },
    setup() {
        let isActive1 = ref(false);
        let isActive2 = ref(false);
        let isActive3 = ref(false);
        let isActive4 = ref(false);
        let duration = ref(100);
        let toggle1 = () => {
            isActive1.value = !isActive1.value;
        };
        let toggle2 = () => {
            isActive2.value = !isActive2.value;
        };
        let toggle3 = () => {
            isActive3.value = !isActive3.value;
        };
        let toggle4 = () => {
            isActive4.value = !isActive4.value;
        };
        return {
            isActive1,
            isActive2,
            isActive3,
            isActive4,
            duration,
            toggle1,
            toggle2,
            toggle3,
            toggle4
        };
    }
});
</script>

<template>
    <main>
        <div class="point">
            <v-btn block class="text-h6 text-md-h4" height="7vh" @click="toggle1" color="#00796B">マクセル アクアパーク 品川</v-btn>
            <SlideUpDown :active="isActive1" :tag="div">
                <iframe class="rounded"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3242.9773898710973!2d139.7352393!3d35.62828390000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188a576499560b%3A0xe79fce7420fcb518!2z44Oe44Kv44K744OrIOOCouOCr-OCouODkeODvOOCryDlk4Hlt50!5e0!3m2!1sja!2sjp!4v1734783266634!5m2!1sja!2sjp"
                    allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </SlideUpDown>
            <v-btn block height="5vh" class="text-subtitle-1 text-md-h6"
                href="https://www.jorudan.co.jp/norikae/route/%E6%B1%A0%E8%A2%8B_%E5%93%81%E5%B7%9D.html"
                target="_blank" rel="noopener noreferrer">
                ジョルダン 池袋 → 品川</v-btn>
        </div>
        <div class="point">
            <v-btn block class="text-h6 text-md-h4" height="7vh" @click="toggle2" color="#00796B">
                八芳園 日本庭園</v-btn>
            <SlideUpDown :active="isActive2" :tag="div">
                <iframe class="rounded"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3242.5594232293306!2d139.7298284!3d35.6385864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b3427df502d%3A0x87000c185dc2736!2z5YWr6Iqz5ZySIOaXpeacrOW6reWckg!5e0!3m2!1sja!2sjp!4v1734784019162!5m2!1sja!2sjp"
                    allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </SlideUpDown>
            <v-btn block height="5vh" class="text-subtitle-1 text-md-h6"
                href="https://www.jorudan.co.jp/norikae/route/%E5%93%81%E5%B7%9D_%E7%99%BD%E9%87%91%E5%8F%B0.html"
                target="_blank" rel="noopener noreferrer">
                ジョルダン 品川 → 白金台</v-btn>
            <v-btn block height="5vh" class="text-subtitle-1 text-md-h6"
                href="https://www.jorudan.co.jp/norikae/route/%E7%99%BD%E9%87%91%E5%8F%B0_%E5%93%81%E5%B7%9D.html"
                target="_blank" rel="noopener noreferrer">
                ジョルダン 白金台 → 池袋</v-btn>
        </div>
        <div class="point">
            <v-btn block class="text-h6 text-md-h4" height="7vh" @click="toggle3" color="#00796B">横浜中華街</v-btn>
            <SlideUpDown :active="isActive3" :tag="div">
                <iframe class="rounded"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3250.4583349410555!2d139.6460909!3d35.4434459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60185cef7b8bffff%3A0x90abf0214d828f35!2z5qiq5rWc5Lit6I-v6KGX!5e0!3m2!1sja!2sjp!4v1734784156983!5m2!1sja!2sjp"
                    allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </SlideUpDown>
            <v-btn block height="5vh" class="text-subtitle-1 text-md-h6"
                href="https://www.jorudan.co.jp/norikae/route/%E6%B1%A0%E8%A2%8B_%E5%85%83%E7%94%BA%E3%83%BB%E4%B8%AD%E8%8F%AF%E8%A1%97.html"
                target="_blank" rel="noopener noreferrer">
                ジョルダン 池袋 → 元町・中華街</v-btn>
            <v-btn block height="5vh" class="text-subtitle-1 text-md-h6"
                href="https://www.jorudan.co.jp/norikae/route/%E5%85%83%E7%94%BA%E3%83%BB%E4%B8%AD%E8%8F%AF%E8%A1%97_%E6%B1%A0%E8%A2%8B.html"
                target="_blank" rel="noopener noreferrer">
                ジョルダン 元町・中華街 → 池袋</v-btn>
        </div>
        <div class="point">
            <v-btn block class="text-h6 text-md-h4" height="7vh" @click="toggle4" color="#00796B">古城の国のアリス</v-btn>
            <SlideUpDown :active="isActive4" :tag="div">
                <iframe class="rounded"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.956651700623!2d139.71257409999998!3d35.7272846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d6839c6fea9%3A0x44d7a69221c4f39!2z5Y-k5Z-O44Gu5Zu944Gu44Ki44Oq44K5!5e0!3m2!1sja!2sjp!4v1734779127922!5m2!1sja!2sjp"
                    allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </SlideUpDown>
        </div>
    </main>
</template>

<style scoped>
iframe {
    width: 100%;
    height: 75vh;
    border: #00796B solid 0.5px;
}

div.point {
    margin: 12px 0px;
}
</style>