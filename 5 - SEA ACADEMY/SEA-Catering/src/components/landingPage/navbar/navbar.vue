<template>
    <nav class="navbar">
        <!-- Brand Logo -->
        <div class="navbar-brand">
            <p>SEA Catering</p>
        </div>

        <div class="navbar-group">
            <a href="/" class="navbar-item active" aria-current="page"><i class="fa-solid fa-house"></i> Home</a>
            <a href="/menu" class="navbar-item"><i class="fa-solid fa-table-list"></i> Menu</a>
            <a href="/subscription" class="navbar-item">Subscription</a>
            <a href="/contact" class="navbar-item"><i class="fa-solid fa-circle-info"></i> Contact Us</a>

            <a href="/signIn" class="btn-login active"><i class="fa-solid fa-user"></i> Log In</a>
        </div>

        <div class="hamburger-menu">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
        </div>
    </nav>
</template>
<style scoped>
/* @import url("./style.css"); */
@import url("https://fonts.googleapis.com/css2?family=Radio+Canada+Big:ital,wght@0,400..700;1,400..700&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap");


    /* General Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Arial', sans-serif;
    line-height: 1.6;
    color: #333;
    background-color: #f9f9f9;
}

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;
    background-color: #fff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.navbar-brand p {
    font-size: 1.5rem;
    font-weight: bold;
    color: #333;
}

.navbar-brand span {
    color: orange;
}

.navbar-group {
    display: flex;
    gap: 20px;
}

.navbar-item {
    text-decoration: none;
    color: #333;
    font-size: 1rem;
    padding: 8px 12px;
    transition: color 0.3s ease, background-color 0.3s ease;
    border-radius: 5px;
}

.navbar-item:hover {
    color: #fff;
    background-color: orange;
}

.navbar-item.active {
    color: #fff;
    background-color: orange;
}

.btn-login.active{
    color: #fff;
    background-color: orange;   

    text-decoration: none;
    color: white;
    font-size: 1rem;
    padding: 8px 12px;
    transition: color 0.3s ease, background-color 0.3s ease;
    border-radius: 5px;
}

.hamburger-menu {
    display: none;
    flex-direction: column;
    gap: 5px;
    cursor: pointer;
}

.bar {
    width: 25px;
    height: 3px;
    background-color: #333;
    transition: background-color 0.3s ease;
}

@media (max-width: 768px) {
    .navbar-list {
        display: none;
        flex-direction: column;
        gap: 10px;
        background-color: #fff;
        position: absolute;
        top: 60px;
        right: 0;
        width: 200px;
        padding: 15px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    }

    .navbar-list.active {
        display: flex;
    }

    .hamburger-menu {
        display: flex;
    }
}

    .btn-login{
    /* rounded-full bg-blue-800 px-9 py-2 text-sm font-medium text-gray-300 duration-200 hover:bg-gray-700 hover:text-white */
    }

@import url("https://fonts.googleapis.com/css2?family=Radio+Canada+Big:ital,wght@0,400..700;1,400..700&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap");
</style>

<script setup>
</script>
