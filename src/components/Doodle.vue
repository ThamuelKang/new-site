<template>
    <section :style="{ left: posX + 'px', top: posY + 'px' }" class="doodle">

        <div @mousedown="startDrag" class="name">
            <div class="line"> </div>
            <div class="line"> </div>
            <div class="line"> </div>
            <h1 class="name"> Doodle a duck</h1>
            <div class="line"> </div>
            <div class="line"> </div>
            <div class="line"> </div>
        </div>

        <div class="doodle-ui" id="canvasContainer">
            <div class="colors">
                <div v-for="(color, index) in colorSwatches" :key="index" :id="color.id"
                    :class="{ 'color-swatch': true, active: color.isActive }" @click="selectColor(color.id)"></div>
            </div>
            <div class="p5-sketch">
                <div id="p5Sketch"></div>
                <div class="controls">
                    <div class="brush-controls">

                        <button v-for="(size, index) in brushThickness" :key="index" :id="size.id"
                            :class="{ 'brush-thickness': true, active: size.isActive }"
                            @click="selectSize(size.id)">●</button>
                    </div>
                    <div class="canvas-controls">
                        <button id="clearButton"><img class="button-icons" src="@/assets/icons/clear.svg"
                                alt="clear canvas">
                            Clear </button>
                        <button id="saveButton"><img class="button-icons" src="@/assets/icons/save.svg"
                                alt="download canvas">Download</button>
                    </div>

                </div>
            </div>
        </div>

    </section>
</template>

<script>

export default {
    name: 'Doodle',
    data() {
        return {
            posX: 0,
            posY: 0,
            dragging: false,
            offsetX: 0,
            offsetY: 0,
            colorSwatches: [
                { id: 'red', isActive: false },
                { id: 'orange', isActive: false },
                { id: 'yellow', isActive: false },
                { id: 'black', isActive: true },
                { id: 'white', isActive: false },
                { id: 'green', isActive: false },
                { id: 'blue', isActive: false },
                { id: 'purple', isActive: false },
            ],
            brushThickness: [
                { id: 'small', isActive: false },
                { id: 'medium', isActive: true },
                { id: 'big', isActive: false },
            ]
        }
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
        selectColor(selectedId) {
            this.colorSwatches.forEach((color) => {
                color.isActive = color.id === selectedId;
            });
        },
        selectSize(selectedId) {
            this.brushThickness.forEach((size) => {
                size.isActive = size.id === selectedId;
            })
        }
    },
}
</script>


<style lang="scss" scoped>
@import "../assets/variables.scss";



section.doodle {
    position: relative;
    border: 1px solid $black;
    width: auto;
    background-color: $white;
    box-shadow: -4px 4px 0px 0px $black;
}

div.doodle-ui {
    display: flex;
    align-items: center;
    width: auto;
    height: 100%;
    background-color: $darkerGrey;
    overflow: auto;
    padding: 0 24px 64px 24px;
}

.p5-sketch {
    display: flex;
    flex-direction: column;
    height: auto;
    width: auto;
    flex: 1;
}

.colors {
    display: flex;
    flex-direction: column;
}

.color-swatch {
    width: 40px;
    height: 40px;
    margin: 8px 24px 8px 0;
    border: 1px solid #000;
    cursor: pointer;
    opacity: .48;
    box-shadow: 0px 0px 8px 4px rgba(0, 0, 0, 0.24) inset;

}

.color-swatch.active {
    opacity: 1;
    transform: scale(1.15);
    box-shadow: none;

}

.color-swatch:hover {
    opacity: .9;
    transform: scale(1.15);
    box-shadow: none;

}

.controls {
    display: flex;
    width: 100%;
    margin: 16px 0;
    justify-content: space-between;
}

.brush-controls {
    display: flex;
    gap: 16px;
}

.brush-thickness {
    width: 40px;
    padding: 0;
    display: flex;
    justify-content: center;
    align-content: center;
    opacity: .48;
    border: 1px solid black;

    box-shadow: 0px 0px 8px 4px rgba(0, 0, 0, 0.24) inset;

}

.brush-thickness.active {
    opacity: 1;
    transform: scale(1.15);
    box-shadow: none;
}

.canvas-controls {
    display: flex;
    gap: 16px;
}

button {
    font-family: 'IBM Plex Mono', monospace;
    font-weight: bold;
    background-color: $white;
    border-top: 1px solid #000;
    border-right: 1px solid #000;
    border-bottom: 2px solid #000;
    border-left: 2px solid #000;
    padding: 12px 16px;
    height: 40px;
    cursor: pointer;
    display: flex;
    align-items: center;
}

.canvas-controls button:active {
    transform: translateY(2px);
}

.canvas-controls button:hover {
    background-color: $lightGrey;
}

.button-icons {
    width: 24px;
    border: 4px;
    stroke: 4px;
    margin: 0 8px 0 0;
}

#red {
    background-color: #E64E4E;
}

#orange {
    background-color: #FF9922;
}

#yellow {
    background-color: #FFD12E;
}

#green {
    background-color: #72F170;
}

#blue {
    background-color: #2E75FF;
}

#purple {
    background-color: #C92EFF;
}

#white {
    background-color: white;
}

#black {
    background-color: black;
}

#small {
    font-size: 8px;
}

#medium {
    font-size: 16px;

}

#big {
    font-size: 32px;
    padding-bottom: 5px;
}
</style>