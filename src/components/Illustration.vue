<template>
    <div>
        <div class="work" v-for="illustration in illustrations" :key="illustration.id">
            <button class="work" @click="selectIllustration(illustration)">
                <img loading="lazy" decoding="async" :src="illustration.image" alt="Project image"
                    class="project-image">
                <div class="project">
                    <h3>{{ illustration.title }}</h3>
                    <p>{{ illustration.medium }}</p>
                </div>
            </button>
        </div>

        <teleport to="#modal">
            <div v-if="modal" class="modal">
                <div class="modal-container">
                    <button class="close-button" @click="closeModal"><img src="@/assets/icons/close.svg"
                            alt="close modal"></button>
                    <img :src="selectedIllustration.image" alt="Project image" class="project-image">
                    <div class="description">
                        <h3>{{ selectedIllustration.title }}</h3>
                        <p>{{ selectedIllustration.medium }}</p>
                    </div>
                </div>
                <div class="modal-background" @click="closeModal"></div>
            </div>
        </teleport>

    </div>
</template>

<script>
import illustrationData from '@/illustrations.json';
export default {
    data() {
        return {
            illustrations: illustrationData,
            modal: false,
            selectedIllustration: null,
        };
    },

    methods: {
        selectIllustration(illustration) {
            this.selectedIllustration = illustration;
            this.modal = true;
            // Add event listeners when the modal is opened
            document.addEventListener('keydown', this.handleKeyDown);
            document.addEventListener('click', this.handleOutsideClick);
        },
        closeModal() {
            this.modal = false;
            // Remove event listeners when the modal is closed
            document.removeEventListener('keydown', this.handleKeyDown);
            document.removeEventListener('click', this.handleOutsideClick);
        },
        handleKeyDown(event) {
            if (event.key === 'Escape') {
                this.closeModal();
            }
        },
        handleOutsideClick(event) {
            const modalContainer = this.$el.querySelector('.modal-container');
            if (modalContainer && !modalContainer.contains(event.target)) {
                this.closeModal();
            }
        },
    },
};
</script>

<style lang="scss" scoped>
@import "../assets/variables.scss";

.modal-container {
    z-index: 999;
    position: absolute;
    top: 50%;
    left: 50%;
    max-width: 95vw;
    transform: translate(-50%, -50%);
    max-height: 95vh;
    width: auto;
    background-color: $white;
    border: 1px solid $black;
    box-shadow: -4px 4px 0px 0px $black;
    padding: 16px;
    overflow: visible;
}

.modal-background {
    width: 100vw;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.64);
    position: absolute;
    z-index: 998;
}

.modal-container>img {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: auto;
    max-width: 90vw;
    max-height: 80vh;
}

.modal-container>.description {
    display: flex;
    width: auto;
    justify-content: space-between;
    align-content: center;
    margin: 16px 0 0 0;
}

.modal-container>.description>h3 {
    margin: 0;
}

.work {
    width: 100%;
    background-color: $white;
    box-shadow: none;
    border: none;
    font-family: inherit;
    text-align: left;
    padding: 0;

}

.work p {
    text-align: right;
}

.work:hover {
    text-decoration: underline;
    font-style: italic;
    cursor: pointer;
    opacity: .9;
}


.project {
    display: flex;
    justify-content: space-between;
    margin: 4px 0 20px 0;

}

.project h3 {
    font-size: 14px;
    margin: 0;
}

.close-button {
    position: absolute;
    right: -1px;
    top: -1px;
    padding: 8px;
    height: 34px;
    border-radius: 0;
    border: 1px solid $black;
    background-color: $white;
}

.close-button:hover {
    background-color: $lightGrey;
    cursor: pointer;
}

.close-button img {
    height: 16px;
    width: 16px;
}

@media only screen and (max-width: 1000px) {

    .work {
        width: auto;
    }

    .work img {
        height: 400px;
        width: auto;
    }

    .project {
        flex-direction: column;
        margin: 0;
    }

    .project p {
        text-align: left;
    }
}
</style>