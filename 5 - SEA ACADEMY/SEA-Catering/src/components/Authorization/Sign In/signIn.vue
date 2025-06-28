<template>
    <section class="form-sea" style="max-width: 400px; margin: 0 auto; padding: 0 1rem;">
        <div class="headline">
            <h1 class="headline-title">Masuk ke Akun Anda</h1>
            <p class="headline-subtitle">Kelola langganan SEA Catering Anda</p>
        </div>
        <!-- EMAIL -->
        <div class="email">
            <label for="email">Email</label>
            <input type="email" id="email" required placeholder="contoh@email.com">
        </div>
        <!-- KATA SANDI -->
        <div class="password">
            <label for="password">Kata Sandi</label>
            <input type="password" id="password" required placeholder="Masukkan kata sandi">
            <button type="button" style="position: absolute; right: 10px; top: 35px; background: none; border: none; cursor: pointer;">👁️</button>
        </div>

        <div style="text-align: end; margin-bottom: 1.5rem;"> 
            <a href="#" style="color: blue; text-decoration: none; font-size: 0.875rem;">Lupa kata sandi?</a>
        </div>

        <div>
            <button type="submit" class="btn-login">Masuk</button>
        </div>

        <div style="text-align: center; margin: 1rem 0 0 0; font-size: 0.875rem;">
            Belum punya akun? 
            <a href="#" style="color: blue; text-decoration: underline;">Daftar disini</a>
        </div>
    </section>
</template>
<style scoped>
        body {
            font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            background-color: #f8fafc;
            margin: 0;
            padding: 2rem 0;
        }
        .headline {
            text-align: center;
            color: white;
            background-color: yellowgreen; 
            padding: 2rem;
            margin-bottom: 2rem;
            border-radius: 0.5rem 0.5rem 0 0;
        }
        .headline-title {
            font-weight: 700;
            font-size: 1.5rem; 
            margin-bottom: 0.5rem;
            margin-top: 0;
        }
        .headline-subtitle {
            font-weight: 500;
            opacity: 0.9;
            margin-bottom: 0;
        }

        input {
            width: 100%; 
            padding: 0.75rem; 
            border: 1px solid #d1d5db; 
            border-radius: 0.375rem;
            box-sizing: border-box;
            font-family: inherit;
        }
        
        label {
            display: block; 
            margin-bottom: 0.5rem;
            font-weight: 500;
            color: #374151;
        }
        
        .btn-login {
            width: 100%; 
            background-color: yellowgreen; 
            padding: 0.75rem; 
            color: white; 
            font-weight: 600; 
            border: none; 
            border-radius: 0.375rem; 
            cursor: pointer; 
            transition: background-color 0.2s;
            font-size: 1rem;
            margin-bottom: 1rem;
        }

        .email {
            margin: 0 0 1.5rem 0;
        }
        
        .password {
            margin: 0 0 1.5rem 0;
            position: relative;
        }

        .btn-login:hover {
            background-color: #1d4ed8;
        }
        
        input:focus {
            outline: none;
            border-color: yellowgreen;
            box-shadow: 0 0 0 2px #bfdbfe;
        }
        
        .form-sea {
            background-color: white;
            border-radius: 0.5rem;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }
        
        .form-sea > div:not(.headline) {
            padding: 0 1.5rem;
        }
</style>
<script setup>
        document.querySelector('.password button').addEventListener('click', function() {
            const passwordInput = document.getElementById('password');
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                this.innerHTML = '🙈';
            } else {
                passwordInput.type = 'password';
                this.innerHTML = '👁️';
            }
        });
</script>