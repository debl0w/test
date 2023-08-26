const app = new Vue({
    data: ()=>{
        return{
            menu: true,
            hasProvider: true,
            hasSort: true,
            menuItem: [{
                title: 'Слоты',
                icon: 'slot.svg'
            },{
                title:'Партнерам',
                icon: 'partner.svg'
            },{
                title:'Бонусы',
                icon: 'cash.svg'
            },{
                title:'Турниры',
                icon: 'winner.svg'
            }]
        }
    }
}).$mount('#app');
