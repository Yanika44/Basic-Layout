const app = {
    data() {
        return {
            image1: './images/3.png',
            image2: './images/1.png',
            firstname: 'Yanika Putorn' ,
            page: 'https://www.instagram.com/xzawakezx/',
            city: 'Los Angles',
            text1: 'Posts',
            text2: 'Followers',
            text3: 'Following',
            total1: 30,
            total2: 699,
            total3: 293,
            shown : true,
            url: 'https://v3.vuejs.org/guide/computed.html#computed-vs-watched-property'
        }
    },

}

var mountedApp = Vue.createApp(app).mount('#app')