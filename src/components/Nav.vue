<template>
    <nav>
        <div class="social-links">
            <a target="_blank" href="https://gem-stitch-684.notion.site/Case-studies-coming-soon-8d8a72fd1edb44bab2c6a942cf03cace?pvs=4">
                <p class="nav">Case Studies ↗</p>
            </a>

            <a target="_blank" href="https://www.linkedin.com/in/samuel-kang-830970139/">
                <p class="nav">LinkedIn ↗</p>
            </a>

            <a target="_blank" href="https://www.instagram.com/th0muel/">
                <p class="nav">Instagram ↗</p>
            </a>
        </div>

       
        <p class="contact-details">Doodle me a duck and email it at hello[at]samuelkang.com</p>
    </nav>
</template>

<script>
export default {
    name: 'Nav'
}
</script>

<style lang="scss" scoped>
@import "../assets/variables.scss";

nav {
    display: flex;
    flex-direction: column;
    height: auto;
    margin: 48px 0 0 0 ;
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
}
</style>
   