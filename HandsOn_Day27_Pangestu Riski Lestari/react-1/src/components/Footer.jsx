function Footer () {
    const footerStyle = {
        textAlign: 'center',  // Menyusun teks ke tengah
        fontSize: '18px',     // Ukuran font
        color: '#f1f1f1',        // Warna teks
        marginTop: '20px',     // Jarak atas
        backgroundColor: '#ff6347',  // Warna latar belakang
        padding: '10px',        // Menambahkan padding untuk jarak di dalam footer
        fontWeight: 'bold'
      }

    return (
        <div style={footerStyle}>
            <p>&copyright 2025| Build by Lestari</p>
        </div>
    )
}

export default Footer