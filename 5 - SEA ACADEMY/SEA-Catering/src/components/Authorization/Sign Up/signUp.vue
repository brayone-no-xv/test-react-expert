<template>
    <section class="form-sea" id="signUp" aria-labelledby="form-title">
            <div class="headline">
                <h1 id="form-title" class="headline-title">Daftar Akun SEA Catering</h1>
                <p class="headline-subtitle">Mulai langganan makanan sehat anda</p>
            </div>
            
            <form id="registrationForm" class="form" novalidate>
                <!-- NAMA LENGKAP -->
                <div class="form-group">
                    <label for="nama" class="form-label">Nama Lengkap</label>
                    <input type="text" id="nama" class="form-input" placeholder="Masukkan nama lengkap" required aria-describedby="nama-error" />
                    <div id="nama-error" class="error-message" role="alert"></div>
                </div>
                
                <!-- EMAIL -->
                <div class="form-group">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" id="email" class="form-input" placeholder="contoh@email.com" required aria-describedby="email-error" />
                    <div id="email-error" class="error-message" role="alert"></div>
                </div>
                
                <!-- PASSWORD -->
                <div class="form-group">
                    <label for="password" class="form-label">Kata Sandi</label>
                    <input type="password" id="password" class="form-input" placeholder="Minimal 8 karakter" required minlength="8" aria-describedby="password-error password-strength" />
                    <button type="button" class="password-toggle" aria-label="Toggle password visibility" aria-controls="password">
                        <i class="far fa-eye" id="eye-icon"></i>
                    </button>
                    <div id="password-strength" class="password-strength"></div>
                    <div id="password-error" class="error-message" role="alert"></div>
                </div>
                
                <div class="terms">
                    Dengan mendaftar, Anda menyetujui <a href="#" class="link">Syarat & Ketentuan</a> kami.
                    </div>
                
                <button type="submit" class="btn btn-primary" id="submitBtn">
                    Daftar Sekarang
                </button>
                
                <div class="text-center" style="margin-top: 1rem;">
                    <span style="font-size: 0.875rem;">Sudah punya akun? </span>
                    <a href="#" class="link" style="font-size: 0.875rem;">Masuk disini</a>
                </div>
            </form>
    </section>
</template>

<style scoped>
        :root {
            --success-color: yellowgreen;
            --success-hover: yellowgreen;
            --gray-light: #d1d5db;
            --gray-medium: #6b7280;
            --focus-ring: #bfdbfe;
        }
        
        body {
            font-family: 'Segoe UI', system-ui, sans-serif;
            line-height: 1.5;
            color: #333;
            margin: 0;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
        }
        
        .form-sea {
            max-width: 28rem;
            margin: 2rem auto;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
            border-radius: 0.5rem;
            overflow: hidden;
        }
        
        .headline {
            text-align: center;
            color: white;
            background-color: var(--success-color);
            padding: 2rem;
        }
        
        .headline-title {
            font-weight: 700;
            font-size: 1.5rem;
            margin-bottom: 0.5rem;
        }
        
        .headline-subtitle {
            font-weight: 500;
            opacity: 0.9;
            margin: 0;
        }
        
        .form {
            padding: 2rem;
            background: white;
        }
        
        .form-group {
            margin-bottom: 1.5rem;
            position: relative;
        }
        
        .form-label {
            display: block;
            margin-bottom: 0.5rem;
            font-weight: 500;
        }
        
        .form-input {
            width: 100%;
            padding: 0.75rem;
            border: 1px solid var(--gray-light);
            border-radius: 0.375rem;
            font-size: 1rem;
        }
        
        .form-input:focus {
            outline: none;
            border-color: var(--success-color);
            box-shadow: 0 0 0 2px var(--focus-ring);
        }
        
        .password-toggle {
            position: absolute;
            right: 0.75rem;
            top: 2.25rem;
            background: none;
            border: none;
            cursor: pointer;
            color: var(--gray-medium);
        }
        
        .password-strength {
            margin-top: 0.25rem;
            font-size: 0.875rem;
            color: var(--gray-medium);
        }
        
        .terms {
            margin: 1.5rem 0;
            font-size: 0.875rem;
            color: var(--gray-medium);
        }
        
        .btn {
            width: 100%;
            padding: 0.75rem;
            color: white;
            font-weight: 600;
            border: none;
            border-radius: 0.375rem;
            cursor: pointer;
            transition: background-color 0.2s;
            font-size: 1rem;
        }
        
        .btn-primary {
            background-color: var(--success-color);
        }
        
        .btn-primary:hover {
            background-color: var(--success-hover);
        }
        
        .btn-loading {
            position: relative;
            pointer-events: none;
        }
        
        .btn-loading::after {
            content: "";
            position: absolute;
            width: 1rem;
            height: 1rem;
            top: 50%;
            left: 50%;
            margin-left: -0.5rem;
            margin-top: -0.5rem;
            border: 2px solid rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            border-top-color: white;
            animation: spin 1s linear infinite;
        }
        
        .text-center {
            text-align: center;
        }
        
        .link {
            color: blue;
            text-decoration: underline;
            cursor: pointer;
        }
        
        .error-message {
            color: #dc2626;
            font-size: 0.875rem;
            margin-top: 0.25rem;
            display: none;
        }
        
        @keyframes spin {
            to { transform: rotate(360deg); }
        }
        
        @media (max-width: 640px) {
            .form-sea {
                margin: 0;
                border-radius: 0;
            }
        }
</style>
<script setup></script>
