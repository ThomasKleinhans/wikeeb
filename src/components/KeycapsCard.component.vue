<template>
    <q-card class="keycaps-card">
        <q-card-section class="flex items-center justify-between q-py-sm q-px-md">
            <span @click="sendToDetails" class="title">{{item.name}}</span>
            <q-btn flat round :color="isFavorite ? 'negative' : 'favorite'" :style="isFavorite ? '' : 'opacity:.3'" icon="favorite" @click="favorite()"/>
        </q-card-section>
        
        <q-img :src="item.image" class="card-image"  @click="sendToDetails">
            <div class="absolute-bottom">
                <q-chip size="12px" color="primary">
                    {{item.material}}
                </q-chip>
                <q-chip size="12px" color="secondary">
                    {{item.profile}}
                </q-chip>
                
                <q-space />

                <q-chip size="12px" :color="availabilityColor">
                    {{item.availability}}
                </q-chip>
            </div>
        </q-img>
    </q-card>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'

    export default {
        props: {
            item: {
                type: Object,
            },
        },
        methods: {
            ...mapActions([
                "addKeycapsToFavorties"
            ]),
            favorite(){
                if(this.getAuthStatus){
                    this.addKeycapsToFavorties({keycapsUID: this.item.id, userUID: this.getUserUID})
                }
                else{
                    this.$router.push({name: 'login'})
                }
            },
            sendToDetails(){
                this.$router.push({ name: "keycaps-details", params: {id: this.item.id }})
            }
        },
        computed: { 
            ...mapGetters([
                "getAuthStatus",
                "getUserUID",
                "getFavoritesKeycaps"
            ]),
            availabilityColor() {
                switch (this.item.availability) {
                    case 'GB-Ended':
                    return "negative";

                    case 'GB-Live':
                    return "positive";

                    case 'In-stock':
                    return "positive";

                    case 'Sold out':
                    return "negative";

                    case 'Interest Check':
                    return "info";

                    default :
                    return "dark";
                }
            },
            isFavorite(){
                return this.getFavoritesKeycaps.includes(this.item.id)
            }
        }
    }
</script>

<style lang="scss" scoped>

.keycaps-card{
    &:hover{
        .title{
            
                text-decoration: underline;
        }
    }
    .q-card__section{
        background: #1B1B1B;
    }

    .title{
        &:hover{
            cursor: pointer;
            text-decoration: underline;
        }
    }
    .q-img--menu{
            cursor: pointer;
            height: 250px;
        }
    .absolute-bottom{
        display: flex;
        background: none;
    }
}

</style>