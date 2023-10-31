function calculateIVA() {
  const amount = parseFloat(document.getElementById("amount").value);
  const ivaPercentage = parseFloat(document.getElementById("percentage").value);

  if (amount < 0 || ivaPercentage < 0 || ivaPercentage > 22) {
    document.getElementById("iva-output").innerHTML = `Valores no válidos`;
    return;
  }

  const ivaAmount = amount * (ivaPercentage / 100);
  const totalAmount = amount + ivaAmount;

  document.getElementById("iva-output").innerHTML = `IVA: ${ivaAmount.toFixed(
    2
  )}<br>Total: ${totalAmount.toFixed(2)}`;
}
