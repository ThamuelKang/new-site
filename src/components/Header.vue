<template>
    <header :style="{ left: posX + 'px', top: posY + 'px' }" id="introduction" class="introduction">
        <div @mousedown="startDrag" class="name">
            <div class="line"> </div>
            <div class="line"> </div>
            <div class="line"> </div>
            <h1 class="name"> Samuel Kang </h1>
            <div class="line"> </div>
            <div class="line"> </div>
            <div class="line"> </div>
        </div>

        <div class="info">
            <lottie-player src="https://lottie.host/f7548d04-67e4-47c6-a9e6-514072d122d2/qOTYGCmLLW.json"
                background="transparent" speed="1" class="logo" loop autoplay></lottie-player>

            <p>is <del>a duck</del> definitely h00man currently working at <a class="link" href="https://slack.com/"
                    target="blank"><b>Slack</b></a> as a Lead Produckt
                Designer.</p>
        </div>
    </header>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
            posX: 12,
            posY: -100,
            dragging: false,
            offsetX: 0,
            offsetY: 0,
        };
    },
    methods: {
        startDrag(event) {
            this.dragging = true;
            this.offsetX = event.clientX - this.posX;
            this.offsetY = event.clientY - this.posY;

            brushThickness = 0

            document.addEventListener('mousemove', this.drag);
            document.addEventListener('mouseup', this.stopDrag);
        },
        drag(event) {
            if (this.dragging) {
                this.posX = event.clientX - this.offsetX;
                this.posY = event.clientY - this.offsetY;

            }
        },
        stopDrag() {
            this.dragging = false;

            brushThickness = 8

            document.removeEventListener('mousemove', this.drag);
            document.removeEventListener('mouseup', this.stopDrag);

        },
    },
};
</script>


<style lang="scss" scoped>
@import "../assets/variables.scss";


.introduction {
    width: 300px;
    height: 100% !important;
    border: solid 1px $black;
    position: relative;
    background-color: $white;
    box-shadow: -4px 4px 0px 0px $black;
    z-index: 1;
}

.info {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
}

.logo {
    width: 100%;
    max-width: 150px;
    margin-bottom: 16px;
}

p {
    text-align: center;
}

@media only screen and (max-width: 800px) {
    .introduction {
        position: static;
    }
}


@media only screen and (max-width: 650px) {
    .introduction {
        width: 100%;
    }

    p {
        max-width: 400px;
    }
}
</style>