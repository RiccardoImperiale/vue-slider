const { createApp } = Vue

createApp({
    data() {
        return {
            isActive: 0,
            autoPlayInterval: null,
            slides: [
                {
                    image: './assets/img/01.webp',
                    title: 'Marvel\'s Spiderman Miles Morale',
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                },
                {
                    image: './assets/img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                },
                {
                    image: './assets/img/03.webp',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                },
                {
                    image: './assets/img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                },
                {
                    image: './assets/img/05.webp',
                    title: "Marvel's Avengers",
                    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                }
            ]
        }
    },
    methods: {
        next() {
            this.isActive++;
            (this.isActive === this.slides.length) && (this.isActive = 0);
        },
        prev() {
            this.isActive--;
            (this.isActive < 0) && (this.isActive = this.slides.length - 1);
        },
        changeImage(index) {
            this.isActive = index;
        },
        autoPlaying(isPlay) {
            isPlay ? this.autoPlayInterval = setInterval(this.next, 3000) : clearInterval(this.autoPlayInterval);
        }
    },
    created() {
        this.autoPlaying(true);
    }
}).mount('#app')