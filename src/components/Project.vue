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
            <a target="_blank" href="https://slack.com/help/articles/4402059015315-Use-huddles-in-Slack"
                class="projects">
                <div class="project-title">
                    <p class="project-name"> <b> Slack Huddles IA4 </b> (A/V)</p>

                </div>
                <p>New features like Jukebox (elevator music), Troubleshooting panel, new entrypoint, etc.</p>
            </a>

            <a target="_blank" href="https://slack.com/help/articles/27452748828179-Use-lists-in-Slack  "
                class="projects">
                <div class="project-title">
                    <p class="project-name"> <b>Slack Lists</b> (Structured Data)</p>

                </div>
                <p>I designed the icon/logo! Also... hover states, animations, interaction design, color design, lots of quality of life stuff</p>
            </a>

            <a target="_blank" href="https://www.figma.com/proto/NiSorsReIXJ4f6vTLCWRzy/Remind-Me-Later?page-id=0%3A1&node-id=223-1152&viewport=541%2C401%2C0.02&scaling=scale-down&starting-point-node-id=223%3A1152"
                class="projects">
                <div class="project-title">
                    <p class="project-name"> <b>Indiegogo checkout experience</b> (e-commerce)</p>
                    
                </div>
                <p>Increase conversion rate through optimization, reducing friction, introducing remind me later, etc.
                </p>
            </a>

            <a target="_blank" class="link"
                href="https://gem-stitch-684.notion.site/Case-studies-coming-soon-8d8a72fd1edb44bab2c6a942cf03cace?pvs=4">view
                more ↗</a>
        </div>


    </div>
</template>

<script>
export default {
    name: 'Project',
    data() {
        return {
            posX: 40,
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
    font-weight: normal;
    margin-right: 8px;
}

a:hover .project-name {
    text-decoration: underline;
    font-style: italic;
}

.link:hover {
    text-decoration: underline;
    font-style: italic;
}

@media only screen and (max-width: 800px) {
    .recent-projects {
        position: static;
    }
}


@media only screen and (max-width: 650px) {
    .recent-projects {
        width: 100%;
    }
}
</style>