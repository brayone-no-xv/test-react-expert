<template>
<section>
        <div class="header-content">
            <h1 class="header-title">Dashboard Langganan Saya</h1>
            <p class="header-subtitle">Kelola langganan SEA Catering Anda dengan mudah</p>
        </div>

        <!-- ACTIVE SUBSCRIPTION -->
        <div class="subscription-section">
            <h3>Langganan Aktif</h3>
            <div id="activeSubscription" class="subscription-group">
                <div class="loading">Memuat data langganan...</div>
            </div>
        </div>

        <!-- PAUSE/CANCEL SECTION -->
        <div class="grid">
            <div class="pause-group">
                <h2><i class="fas fa-pause"></i> Jeda Langganan</h2>
                <p>Anda dapat menjeda langganan sementara. Tidak ada biaya selama periode jeda</p>
                <div class="form-group">
                    <label for="start-date">Mulai Jeda</label>
                    <input type="date" id="start-date" min="">
                </div>
                <div class="form-group">                
                    <label for="end-date">Akhir Jeda</label>
                    <input type="date" id="end-date" min="">
                </div>
                <button id="pauseBtn" type="button" class="action-btn">
                    <i class="fas fa-pause"></i> Ajukan Jeda
                </button>
                <div id="pauseMessage" class="message"></div>
            </div>

            <div class="cancel-group">
                <h3><i class="fas fa-times-circle"></i> Batalkan Langganan</h3>
                <p>Pembatalan bersifat permanen. Anda dapat berlangganan kembali kapan saja.</p>
                <button id="cancelBtn" type="button" class="action-btn cancel">
                    <i class="fas fa-times-circle"></i> Batalkan Langganan
                </button>
                <div id="cancelMessage" class="message"></div>
            </div>
        </div>

        <!-- SUBSCRIPTION HISTORY -->
        <div class="history-group">
            <h3><i class="fas fa-history"></i> Riwayat Langganan</h3>
            <div class="table-container">
                <table class="card-table">
                    <thead>
                        <tr>
                            <th>PERIODE</th>
                            <th>PAKET</th>
                            <th>STATUS</th>
                            <th>TOTAL</th>
                            <th>AKSI</th>
                        </tr>
                    </thead>
                    <tbody id="historyTableBody">
                        <tr>
                            <td colspan="5" class="loading">Memuat riwayat langganan...</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div id="confirmationModal" class="modal">
            <div class="modal-content">
                <span class="close-modal">&times;</span>
                <h3 id="modalTitle">Konfirmasi</h3>
                <p id="modalMessage">Apakah Anda yakin ingin melakukan tindakan ini?</p>
                <div class="modal-actions">
                    <button id="confirmAction" class="action-btn">Ya, Lanjutkan</button>
                    <button id="cancelAction" class="action-btn cancel">Batal</button>
                </div>
            </div>
        </div>
</section>
</template>

<style scoped>
     :root {
            --primary: #2e7d32;
            --primary-light: #4caf50;
            --primary-dark: #1b5e20;
            --danger: #ef4444;
            --danger-dark: #dc2626;
            --warning: #f59e0b;
            --warning-dark: #d97706;
            --text: #333333;
            --text-light: #666666;
            --white: #ffffff;
            --gray-light: #f5f5f5;
            --gray-medium: #e5e7eb;
            --gray-dark: #6b7280;
            --border: #e0e0e0;
            --shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            --radius: 0.5rem;
            --transition: all 0.3s ease;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Roboto', sans-serif;
            background-color: #f9fafb;
            color: var(--text);
            line-height: 1.6;
            padding: 1rem;
        }

        section {
            max-width: 1200px;
            margin: 0 auto;
            padding: 1rem;
        }

        .header-content {
            text-align: center;
            margin-bottom: 2.5rem;
            padding: 0 1rem;
        }

        .header-title {
            margin: 0 0 0.5rem 0;
            font-size: 2rem;
            font-weight: 700;
            color: var(--primary-dark);
        }

        .header-subtitle {
            font-size: 1.125rem;
            font-weight: 400;
            color: var(--gray-dark);
            max-width: 42rem;
            margin: 0 auto;
        }

        h3 {
            font-size: 1.5rem;
            margin-bottom: 1rem;
            color: var(--primary-dark);
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        /* Subscription Cards */
        .subscription-group {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1rem;
            background: var(--white);
            border-radius: var(--radius);
            padding: 1.5rem;
            box-shadow: var(--shadow);
            margin-bottom: 2rem;
        }

        .card-subscription {
            padding: 1.25rem;
            border: 1px solid var(--gray-medium);
            border-radius: var(--radius);
            background-color: var(--gray-light);
            transition: var(--transition);
        }

        .card-subscription:hover {
            transform: translateY(-3px);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .card-subscription h3 {
            font-size: 0.875rem;
            color: var(--gray-dark);
            margin-bottom: 0.5rem;
            font-weight: 500;
        }

        .card-subscription p {
            font-size: 1.1rem;
            font-weight: 600;
            color: var(--text);
            margin: 0;
        }

        .card-subscription .status {
            display: inline-block;
            padding: 0.25rem 0.5rem;
            border-radius: 1rem;
            font-size: 0.75rem;
            font-weight: 600;
            text-transform: uppercase;
        }

        .status-active {
            background-color: rgba(46, 125, 50, 0.1);
            color: var(--primary);
        }

        .status-paused {
            background-color: rgba(245, 158, 11, 0.1);
            color: var(--warning);
        }

        .status-cancelled {
            background-color: rgba(239, 68, 68, 0.1);
            color: var(--danger);
        }

        /* Grid Layout */
        .grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 1.5rem;
            margin-bottom: 2rem;
        }

        /* Pause and Cancel Groups */
        .pause-group,
        .cancel-group {
            background: var(--white);
            border-radius: var(--radius);
            padding: 1.5rem;
            box-shadow: var(--shadow);
            display: flex;
            flex-direction: column;
        }

        .pause-group h2,
        .cancel-group h3 {
            margin-top: 0;
            margin-bottom: 1rem;
            font-size: 1.25rem;
            font-weight: 600;
            color: var(--text);
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .pause-group p,
        .cancel-group p {
            font-size: 0.95rem;
            color: var(--gray-dark);
            margin-bottom: 1.5rem;
        }

        .form-group {
            margin-bottom: 1rem;
        }

        label {
            display: block;
            margin-bottom: 0.5rem;
            font-weight: 500;
            color: var(--text);
        }

        input[type="date"] {
            padding: 0.75rem;
            border: 1px solid var(--gray-medium);
            border-radius: var(--radius);
            width: 100%;
            font-family: inherit;
            font-size: 1rem;
        }

        input[type="date"]:focus {
            outline: none;
            border-color: var(--primary);
            box-shadow: 0 0 0 2px rgba(46, 125, 50, 0.2);
        }

        /* Buttons */
        .action-btn {
            align-self: flex-start;
            background-color: var(--primary);
            color: var(--white);
            border: none;
            padding: 0.75rem 1.5rem;
            border-radius: var(--radius);
            cursor: pointer;
            font-weight: 500;
            font-size: 1rem;
            transition: var(--transition);
            display: flex;
            align-items: center;
            gap: 0.5rem;
            margin-top: 0.5rem;
        }

        .action-btn:hover {
            background-color: var(--primary-dark);
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .action-btn.cancel {
            background-color: var(--danger);
        }

        .action-btn.cancel:hover {
            background-color: var(--danger-dark);
        }

        .action-btn:disabled {
            background-color: var(--gray-medium);
            cursor: not-allowed;
            transform: none;
            box-shadow: none;
        }

        /* History Table */
        .history-group {
            background: var(--white);
            border-radius: var(--radius);
            padding: 1.5rem;
            box-shadow: var(--shadow);
            margin-bottom: 2rem;
        }

        .table-container {
            overflow-x: auto;
        }

        .card-table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 1rem;
        }

        .card-table thead th {
            text-align: left;
            font-size: 0.875rem;
            font-weight: 600;
            color: var(--gray-dark);
            padding: 0.75rem 1rem;
            background-color: var(--gray-light);
            position: sticky;
            top: 0;
        }

        .card-table tbody td {
            padding: 0.75rem 1rem;
            border-bottom: 1px solid var(--gray-medium);
            font-size: 0.95rem;
            color: var(--text);
        }

        .card-table tbody tr:hover {
            background-color: rgba(46, 125, 50, 0.05);
        }

        .action-link {
            color: var(--primary);
            text-decoration: none;
            font-weight: 500;
            cursor: pointer;
        }

        .action-link:hover {
            text-decoration: underline;
        }

        .action-link.danger {
            color: var(--danger);
        }

        /* Messages */
        .message {
            margin-top: 1rem;
            padding: 0.75rem;
            border-radius: var(--radius);
            font-size: 0.9rem;
        }

        .message.success {
            background-color: rgba(46, 125, 50, 0.1);
            color: var(--primary);
            border: 1px solid rgba(46, 125, 50, 0.2);
        }

        .message.error {
            background-color: rgba(239, 68, 68, 0.1);
            color: var(--danger);
            border: 1px solid rgba(239, 68, 68, 0.2);
        }

        .message.warning {
            background-color: rgba(245, 158, 11, 0.1);
            color: var(--warning);
            border: 1px solid rgba(245, 158, 11, 0.2);
        }

        /* Loading State */
        .loading {
            padding: 2rem;
            text-align: center;
            color: var(--gray-dark);
        }

        /* Modal */
        .modal {
            display: none;
            position: fixed;
            z-index: 1000;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            justify-content: center;
            align-items: center;
        }

        .modal-content {
            background-color: var(--white);
            border-radius: var(--radius);
            padding: 2rem;
            width: 90%;
            max-width: 500px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
            position: relative;
        }

        .close-modal {
            position: absolute;
            top: 1rem;
            right: 1rem;
            font-size: 1.5rem;
            cursor: pointer;
            color: var(--gray-dark);
        }

        .close-modal:hover {
            color: var(--text);
        }

        .modal-actions {
            display: flex;
            gap: 1rem;
            margin-top: 1.5rem;
            justify-content: flex-end;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
            .subscription-group {
                grid-template-columns: 1fr 1fr;
            }

            .header-title {
                font-size: 1.75rem;
            }
        }

        @media (max-width: 480px) {
            .subscription-group {
                grid-template-columns: 1fr;
            }

            .header-title {
                font-size: 1.5rem;
            }

            .action-btn {
                width: 100%;
                justify-content: center;
            }

            .modal-actions {
                flex-direction: column;
            }

            .modal-actions button {
                width: 100%;
            }
        }
</style>

<script setup></script>
