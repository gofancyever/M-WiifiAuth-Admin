<template>
    <div id="simulator-wrapper" style="height: 1112px;">
        <div id="simulator" style="overflow: visible; padding: 14px 30px 107px; width: 435px; height: 888px; left: 584px; top: 25px;"
            class="iphone_6 portrait iphone x100">
            <div class="splash" style="background-color: rgb(240, 240, 242); display: none;">
                <div class="loading">
                    <div class="spinner"></div>
                </div>
            </div>
            <div id="ui-layers" class="ui-layers ">
                <!-- react-empty: 312 -->
            </div>
            <div id="app" class="screens" style="display: block; touch-action: auto; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); background-color: rgb(240, 240, 242);">
                <el-row>
                    <div class="block">
                        <el-carousel height="250px">
                            <el-carousel-item v-for="bander in banders">
                                <img v-bind:src='bander'>
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                </el-row>
                
                <el-row class="sudoku">
                    <el-col v-for='grid in grids' :span="8"><img v-bind:src='grid'></el-col>
                </el-row>

                <el-row class="flow">
                    <img src='http://www.btdjy.cn/Public/Uploads/image/20161227/20161227155309_94619_small.jpg'>
                </el-row>
                <el-row class="flow">
                    <img src='http://www.btdjy.cn/Public/Uploads/image/links/221.jpg'>
                </el-row>
                <el-row class="flow">
                    <el-button v-on:click='login'>免费上网</el-button>
                </el-row>
            </div>
            <div id="sticky-container" style="top: 114px; left: 30px; margin-top: 0px;">
                <div id="stickies"></div>
                <div id="ui-comment-marker-panel">
                    <!-- react-empty: 320 -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            banders: Array,
            grids:Array,
            strips: Array,
            fileList: Array,
        },
        data() {
            return {
            }
        },
        methods: {
            login(even) {
                console.log('login');
                this.$router.push('login');
            }
        }
    }

</script>

<style>
    .screens {
        overflow: scroll;
    }

    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 150px;
        margin: 0;
    }

    .sudoku .el-col {
        height: 10vw;
    }

    .sudoku img {
        width: 100%;
        height: 100%;
    }

    .flow {
        height: 200px;
    }

    .flow img {
        height: 100%;
        width: 100%;
    }

    img {
        width: 100%;
        height: 100%;
    }
</style>