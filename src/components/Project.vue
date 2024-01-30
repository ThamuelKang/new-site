<template>
    <div :style="{ left: posX + 'px', top: posY + 'px' }" class="recent-projects">

        <div @mousedown="startDrag" class="name">
            <div class="line"> </div>
            <div class="line"> </div>
            <div class="line"> </div>
            <h1 class="name"> Recent projects</h1>
            <div class="line"> </div>
            <div class="line"> </div>
            <div class="line"> </div>
        </div>


        <div class="project-container">
            <a href="" class="projects">
                <div class="project-title">
                    <p class="project-name"> Slack Huddles IA4</p>
                    <p class="project-category"> (A/V)</p>
                </div>
                <p>Make huddles cute with the new IA4 design</p>
            </a>

            <a href="" class="projects">
                <div class="project-title">
                    <p class="project-name"> Slack Lists Micro-interations</p>
                    <p class="project-category"> (Structured Data)</p>
                </div>
                <p>Hover states, animations, interaction design, everything</p>
            </a>

            <a href="" class="projects">
                <div class="project-title">
                    <p class="project-name"> Indiegogo checkout experience</p>
                    <p class="project-category"> (e-commerce)</p>
                </div>
                <p>Increase conversion rate through optimization, reducing friction, introducing remind me later, etc.</p>
            </a>

            <a class="link" href="">view more ↗</a>
        </div>


    </div>
</template>

<script>
export default {
    name: 'Project',
    data() {
        return {
            posX: -4,
            posY: -40, 
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
            document.removeEventListener('mousemove', this.drag);
            document.removeEventListener('mouseup', this.stopDrag);
        },
    },
}
</script>


<style lang="scss" scoped>
@import "../assets/variables.scss";

.recent-projects {
    position: relative;
    height: 300px;
    overflow: auto;

    display: flex;
    flex-direction: column;
    width: 480px;
    padding: 0;
    background-color: $white;

    border: 1px solid $black;
    box-shadow: -4px 4px 0px 0px $black;
}

.project-container {
    padding: 24px;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
}

.projects {
    margin: 0 0 16px 0;
}

h3 {
    font-size: 14px;
    font-weight: normal;
    margin: 20px 0;
}

a {
    text-decoration: none;
    color: $black;
}

.project-title {
    display: flex;
}

.project-name {
    font-weight: bold;
    margin-right: 8px;
}

a:hover .project-name {
    text-decoration: underline;
    font-style: italic;
}
</style>