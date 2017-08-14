<template>
    <el-row style="height:100%">
        <el-col :span="12">
            <!-- <el-phone v-bind:banders='banders' v-bind:grids="grids" v-bind:strips="strips"></el-phone> -->
        </el-col>
        <el-col :span="12">
            <el-form label-width="80px">
                <el-form-item label="图片1">
                    <el-upload class="upload-demo" ref="upload" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview"
                        :on-remove="handleRemove" :file-list="fileList" :auto-upload="false">
                        <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                        <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
                    </el-upload>
                </el-form-item>
                <el-form-item label="链接1">
                    <el-input></el-input>
                </el-form-item>

                <el-form-item label="图片2">
                    <el-upload class="upload-demo" ref="upload" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview"
                        :on-remove="handleRemove" :file-list="fileList" :auto-upload="false">
                        <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                        <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
                    </el-upload>
                </el-form-item>
                <el-form-item label="链接2">
                    <el-input></el-input>
                </el-form-item>

                <el-form-item label="图片3">
                    <el-upload class="upload-demo" ref="upload" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview"
                        :on-remove="handleRemove" :file-list="fileList" :auto-upload="false">
                        <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                        <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
                    </el-upload>
                </el-form-item>
                <el-form-item label="链接3">
                    <el-input></el-input>
                </el-form-item>
            </el-form>

        </el-col>
    </el-row>

</template>

<script>
    export default {
        data() {
            return {
                banders: [
                    'http://www.btdjy.cn/Public/Uploads/image/slide/9.jpg',
                    'http://www.btdjy.cn/Public/Uploads/image/slide/10.jpg',
                    'http://www.btdjy.cn/Public/Uploads/image/slide/12.jpg',
                ],
                grids: [
                    'http://www.btdjy.cn/Public/Uploads/image/20170731/20170731100022_10052_small.jpg',
                    'http://www.btdjy.cn/Public/Uploads/image/20170609/20170609112835_32357_small.jpg',
                    'http://www.btdjy.cn/Public/Uploads/image/20170711/20170711092439_58010_small.jpg',
                    'http://www.btdjy.cn/Public/Uploads/image/20170602/20170602152502_69468_small.jpg',
                    'http://www.btdjy.cn/Public/Uploads/image/20170726/20170726162120_26462_small.jpg'
                ],
                strips: [],
                fileList: [],
            }
        },
        methods: {
            submitUpload() {
                this.$refs.upload.submit();
            },
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePreview(file) {
                console.log(file);
            }
        }

    }

</script>
<style>

</style>