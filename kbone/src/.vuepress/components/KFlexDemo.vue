<template>
     <KView class="page flex js_show">
        <KView class="page__hd">
            <h1 class="page__title">Flex</h1>
            <p class="page__desc">Flex布局</p>
        </KView>
        <KView class="page__bd page__bd_spacing">
            <KFlex>
                <KFlexItem><KView class="placeholder">weui</KView></KFlexItem>
            </KFlex>
            <KFlex>
                <KFlexItem><KView class="placeholder">weui</KView></KFlexItem>
                <KFlexItem><KView class="placeholder">weui</KView></KFlexItem>
            </KFlex>
            <KFlex>
                <KFlexItem><KView class="placeholder">weui</KView></KFlexItem>
                <KFlexItem><KView class="placeholder">weui</KView></KFlexItem>
                <KFlexItem><KView class="placeholder">weui</KView></KFlexItem>
            </KFlex>
            <KFlex>
                <KFlexItem><KView class="placeholder">weui</KView></KFlexItem>
                <KFlexItem><KView class="placeholder">weui</KView></KFlexItem>
                <KFlexItem><KView class="placeholder">weui</KView></KFlexItem>
                <KFlexItem><KView class="placeholder">weui</KView></KFlexItem>
            </KFlex>
        </KView>
    </KView>
</template>


<script>
export default {
    name:"KFlexDemo"
}
</script>

<style lang="less">
@import "./base.less";

.page.flex {
    .placeholder {
        margin: 5px;
        padding: 0 10px;
        background-color: #F7F7F7;
        height: 2.3em;
        line-height: 2.3em;
        text-align: center;
        color: rgba(0,0,0,.3);
    }
}


</style>