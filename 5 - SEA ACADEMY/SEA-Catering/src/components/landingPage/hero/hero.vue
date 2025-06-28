<template>
    <section class="hero-section">
        <div class="container">
            <!-- Header and Slogan -->
            <h1 class="hero-title">SEA Catering</h1>
            <p class="hero-subtitle">Makanan Sehat, Kapan Saja, Di Mana Saja</p>

            <p class="hero-description">
                Selamat datang di SEA Catering! Kami adalah layanan makanan sehat yang dapat disesuaikan dengan kebutuhan Anda. Dengan pengiriman ke seluruh Indonesia, kami menyediakan makanan berkualitas tinggi dengan informasi nutrisi terperinci untuk mendukung gaya hidup sehat Anda.
            </p>

            <ul class="hero-features">
                <li><strong>Kustomisasi Makanan:</strong> Sesuaikan menu sesuai preferensi dan kebutuhan diet Anda.</li>
                <li><strong>Pengantaran Cepat:</strong> Kirim ke kota-kota besar di seluruh Indonesia.</li>
                <li><strong>Informasi Nutrisi:</strong> Setiap makanan dilengkapi dengan detail nutrisi yang transparan.</li>
                <li><strong>Bahan Berkualitas:</strong> Hanya menggunakan bahan segar dan alami.</li>
            </ul>

            <div class="hero-button-group">
                <a href="#" class="hero-button-item">Beli Sekarang</a>
                <a href="#" class="hero-button-item" style="background-color: transparent; color: white; border: 2px solid white;">Pelajari Lebih Lanjut</a>
            </div>

            <div class="contact-info">
                <p><strong>Hubungi Kami:</strong></p>
                <p>Manajer Brian</p>
                <p>Nomor Telepon: <a href="tel:08123456789">08123456789</a></p>
            </div>
        </div>
    </section>
</template>

<script setup></script>
<style scoped>
/* @import url("./style.css"); */
@import url("https://fonts.googleapis.com/css2?family=Radio+Canada+Big:ital,wght@0,400..700;1,400..700&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap");


        :root {
            --primary: #2e7d32;
            --primary-light: #4caf50;
            --primary-dark: #1b5e20;
            --text: #333333;
            --text-light: #666666;
            --white: #ffffff;
            --gray-light: #f5f5f5;
            --shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            --transition: all 0.3s ease;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: var(--text);
        }

        /* Hero Section */
        .hero-section {
            background: linear-gradient(135deg, rgba(46, 125, 50, 0.9), rgba(76, 175, 80, 0.8)), 
                        url('https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80') no-repeat center center/cover;
            color: var(--white);
            padding: 4rem 1rem;
            min-height: 100vh;
            display: flex;
            align-items: center;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2rem;
            text-align: start;
        }

        .hero-title {
            font-size: clamp(2.5rem, 5vw, 4rem);
            font-weight: 800;
            margin-bottom: 1rem;
            line-height: 1.2;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }

        .hero-subtitle {
            font-size: clamp(1.25rem, 3vw, 1.75rem);
            font-weight: 500;
            margin-bottom: 2rem;
            opacity: 0.9;
        }

        .hero-description {
            font-size: 1.1rem;
            max-width: 700px;
            margin-bottom: 2.5rem;
            line-height: 1.7;
        }

        .hero-features {
            max-width: 600px;
            margin-bottom: 3rem;
            list-style-type: none;
        }

        .hero-features li {
            position: relative;
            padding-left: 2rem;
            margin-bottom: 1rem;
            font-size: 1rem;
        }

        .hero-features li:before {
            content: "✓";
            position: absolute;
            left: 0;
            color: var(--primary-light);
            font-weight: bold;
        }

        .hero-features strong {
            color: var(--white);
            font-weight: 600;
        }

        .hero-button-group {
            display: flex;
            gap: 1rem;
            margin-bottom: 3rem;
            flex-wrap: wrap;
        }

        .hero-button-item {
            display: inline-block;
            background-color: var(--white);
            color: var(--primary-dark);
            padding: 0.8rem 2rem;
            border-radius: 50px;
            font-weight: 600;
            text-decoration: none;
            transition: var(--transition);
            box-shadow: var(--shadow);
            text-align: center;
        }

        .hero-button-item:hover {
            background-color: var(--primary-light);
            color: var(--white);
            transform: translateY(-3px);
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
        }

        .contact-info {
            background-color: rgba(255, 255, 255, 0.15);
            backdrop-filter: blur(5px);
            padding: 1.5rem;
            border-radius: 10px;
            max-width: 400px;
            border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .contact-info p {
            margin-bottom: 0.5rem;
        }

        .contact-info strong {
            font-weight: 600;
        }

        .contact-info a {
            color: var(--white);
            text-decoration: none;
            transition: var(--transition);
        }

        .contact-info a:hover {
            color: var(--gray-light);
            text-decoration: underline;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
            .hero-section {
                padding: 2rem 1rem;
                text-align: center;
            }

            .hero-description,
            .hero-features {
                margin-left: auto;
                margin-right: auto;
            }

            .hero-features li {
                text-align: left;
            }

            .hero-button-group {
                justify-content: center;
            }

            .contact-info {
                margin: 0 auto;
            }
        }

        @media (max-width: 480px) {
            .hero-section {
                min-height: auto;
                padding: 3rem 1rem;
            }

            .hero-title {
                font-size: 2.2rem;
            }

            .hero-subtitle {
                font-size: 1.2rem;
            }

            .hero-features li {
                font-size: 0.9rem;
            }

            .hero-button-item {
                width: 100%;
            }
        }
</style>