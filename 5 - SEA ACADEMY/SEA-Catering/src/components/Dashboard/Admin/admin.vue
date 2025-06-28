<template>
<section>
    <div>
        <h1>Admin Dashboard</h1>
        <p>Tinjau Kinerja Bisnis SEA Catering</p>
    </div>

    <div class="date-group">
        <div class="card-date">
            <label for="start-date">Dari tanggal</label>
            <input type="date" id="start-date">
        </div>
        <div class="card-date">
            <label for="end-date">Sampai tanggal</label>
            <input type="date" id="end-date">
        </div>
    </div>

    <div class="subscription-group">
        <div class="card-subscription">
            <p class="subscription-title">Langganan Baru</p>
        </div>
        <div class="card-subscription">
            <p class="subscription-title">Pendapatan Bulanan</p>
        </div>
        <div class="card-subscription">
            <p class="subscription-title">Pengaktifan kembali</p>
        </div>
        <div class="card-subscription">
            <p class="subscription-title">Pertumbuhan Langganan</p>
        </div>
    </div>

    <div class="stat-group">
        <div class="stat-card">
            <p>Pertumbuhan Langganan</p>
        </div>
        <div class="stat-card">
            <p>Pendapatan Bulanan</p>
        </div>
    </div>

 
    <div class="activites-group">
        <div class="card-activites">Aktivitas Terkini</div>
    </div>
</section>

</template>
<style scoped>
    body {
            font-family: Arial, sans-serif;
            margin: 2rem;
            background-color: #f9f9f9;
            color: #333;
        }

        h1 {
            font-weight: 700;
        }

        p {
            font-weight: 500;
            color: #555;
        }
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f8fafc;
            margin: 0;
            padding: 2rem;
            color: #1e293b;
        }

        /* Header Section */
        body > div:first-child {
            margin-bottom: 2rem;
        }

        h1 {
            font-size: 1.75rem;
            font-weight: 700;
            margin-bottom: 0.5rem;
            color: #1e293b;
        }

        p {
            color: #64748b;
            margin: 0;
        }

        .date-group {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 1rem;
            margin-bottom: 1.5rem;
        }

        .card-date {
            border-radius: 0.5rem;
            background: white;
            padding: 1.5rem;
            transition: box-shadow 0.3s ease;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }

        .card-date:hover {
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }

        label {
            display: block;
            font-size: 0.875rem;
            font-weight: 500;
            margin-bottom: 0.5rem;
            color: #64748b;
        }

        input[type="date"] {
            width: 100%;
            padding: 0.5rem;
            border: 1px solid #e2e8f0;
            border-radius: 0.25rem;
            font-family: inherit;
        }

        .subscription-group {
            display: grid;
            grid-template-columns: repeat(4, minmax(0, 1fr));
            gap: 1rem;
            margin-bottom: 1.5rem;
        }

        .card-subscription {
            border-radius: 0.5rem;
            background: white;
            padding: 1.5rem;
            transition: box-shadow 0.3s ease;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            min-height: 120px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        .card-subscription:hover {
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }

        .subscription-title {
            font-size: 1rem;
            font-weight: 600;
            color: #1e293b;
            margin: 0 0 1rem 0;
        }

        body > div:nth-child(4) {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 1rem;
            margin: 1.5rem 0;
        }

        .activites-group {
            margin: 1.5rem 0;
        }

        .card-activities {
            border-radius: 0.5rem;
            background: white;
            padding: 1.5rem;
            transition: box-shadow 0.3s ease;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            min-height: 300px;
        }

        .card-activities:hover {
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }

        @media (max-width: 1024px) {
            .subscription-group {
                grid-template-columns: repeat(2, minmax(0, 1fr));
            }
        }

        @media (max-width: 768px) {
            .date-group,
            .subscription-group,
            body > div:nth-child(4) {
                grid-template-columns: 1fr;
            }
            
            body {
                padding: 1rem;
            }
        }
</style>
<script setup></script>