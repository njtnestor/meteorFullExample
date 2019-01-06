
<template>
    <div>
        <div>Esta es la home</div>
        <button v-on:click="createLicense">Add License</button>
        <router-link :to="{name:'Blog'}">Blog</router-link>
        {{Licenses}}
    </div>
</template>

<script>
import LicensesMongo from '../../../db/licenses/licenses';
export default {
    name: 'Home',
    data(){
        return {
            license:{
                name:"licencia",

            }
        }
    },
    meteor:{
        $subscribe:{
            'licenses-list': []
        },
        Licenses(){
            return LicensesMongo.find({},{
                sort: {name: -1}
            })
        }
    
    },
    methods:{
        createLicense(){
            Meteor.call('createLicense', this.license);
        }
    }
}
</script>

<style>

</style>