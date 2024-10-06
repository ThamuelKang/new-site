<template>
    <nav>
        <div class="social-links">
            <a target="_blank"
                href="https://gem-stitch-684.notion.site/Case-studies-coming-soon-8d8a72fd1edb44bab2c6a942cf03cace?pvs=4">
                <p class="nav">Case Studies ↗</p>
            </a>

            <a target="_blank" href="https://www.linkedin.com/in/samuel-kang-830970139/">
                <p class="nav">LinkedIn ↗</p>
            </a>

            <a target="_blank" href="https://www.instagram.com/th0muel/">
                <p class="nav">Instagram ↗</p>
            </a>
        </div>


        <p class="contact-details">Doodle me a duck and email it at samuel.kang.ducks [at] gmail.com</p>
    </nav>
</template>

<script>
export default {
    name: 'Nav'
}
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";

nav {
    display: flex;
    flex-direction: column;
    height: auto;
    margin: 48px 0 0 0;
}


a {
    text-decoration: underline;
    color: $black;
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
}

a:hover {
    font-weight: bold;
    font-style: italic;
}

.contact-details {
    margin: 48px 0 0 0;
    font-family: "Comic Neue", cursive;
    font-weight: 700;
    transform: rotate(-5deg);
    text-align: center;
    font-style: italic;
}

@media only screen and (max-width: 1000px) {

    nav {
        margin: 0;
    }

    .social-links {
        display: flex;
        flex-direction: row;
        gap: 24px;
    }

    .contact-details {
        margin: 0;
        font-family: 'IBM Plex Mono', monospace;
        transform: rotate(0);
        font-weight: 400;
        text-align: left;
    }
}

@media only screen and (max-width: 650px) {
    nav {
        padding: 0 24px 0 24px;
        width: 100%;
    }

    nav>p {
        display: none;
    }

}
</style>