<template>

    <el-tabs class="content">
        <el-tab-pane class="content" label="认证前"><Interface-front></Interface-front></el-tab-pane>
        <el-tab-pane class="content" label="认证">配置管理</el-tab-pane>
        <el-tab-pane class="content" label="认证后">角色管理</el-tab-pane>
    </el-tabs>

</template>

<script>
    import  InterfaceFront from  "@/components/FrontInterface.vue"
    export default {
        data() {
            return {
                
            }
        },
        methods: {
            
        },
        components:{
            InterfaceFront
        }

    }

</script>
<style>
    .config {
        margin-top: 60px;
        overflow: scroll;
    }
</style>