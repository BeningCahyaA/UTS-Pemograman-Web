
function submitOrder() {
    const name = document.getElementById("name").value;
    const product = document.getElementById("product").value;
    const quantity = document.getElementById("quantity").value;
  
    if (name && product && quantity) {
      alert(`Terima kasih, ${name}! Pesanan Anda untuk ${quantity} unit ${product} telah diterima.`);
    } else {
      alert("Mohon lengkapi semua data pemesanan.");
    }
  }
  
