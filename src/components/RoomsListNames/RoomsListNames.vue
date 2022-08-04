<template src="./template.html"/>

<script>

    import ListNameElement from '@/components/RoomsListNames/ListNameElement/ListNameElement';
    export default {
        name:"RoomsListNames",
        components:{
            ListNameElement
        },
        props: ['boards'],
        data(){
                return{
                }
        },
        methods:{
            /**
             * отправляет родителю номер элемента по которому нажали
             * @param {* namber} id номер элемента в массиве
             */
            clickNameElement(id){
                this.$emit('clickNameElement', id);
            },

            /**
             * отправляет родителю номер элемента который надо удалить
             * @param {* namber } id номер элемента в массиве
             */
            deleteElemetn(id){
                this.$emit('deleteElemetn', id);
            }
        },
    }
</script>

<style scoped lang="scss" src="./style.scss"/>


