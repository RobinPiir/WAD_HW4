<template>
    <footer class="footer">
        <p>
            Authors: Robin Piir, Karolin Kerro, Roland-Carlis Vares<br>
            <br>
        </p>
        <b class="b">
            <router-link to="/ContactUs">Contact Us</router-link>
        </b>
    </footer>
</template>

<script>
export default {
    name: 'FooterCompo',
}
</script>


<style scoped>
.footer {
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    padding-top: .5em;
    padding-bottom: .5em;
    border: 1px solid #646174;
    background-color: #BED6B8;
    text-align: center;
    border-radius: 5px;
}

.b {
    color: blue;
}

</style>