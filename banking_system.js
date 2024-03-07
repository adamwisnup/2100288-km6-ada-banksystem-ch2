class BankAccount {
  constructor(initialBalance = 0) {
    this.balance = initialBalance;
    this.updateBalanceDisplay();
  }

  deposit(amount) {
    setTimeout(() => {
      amount = parseInt(amount);
      if (amount > 0) {
        this.balance += amount;
        alert(`Berhasil deposit. Saldo sekarang: Rp. ${this.balance}`);
      } else {
        alert("Masukkan jumlah deposit berupa angka dan tidak boleh kurang dari 0.");
      }
      this.updateBalanceDisplay();
    }, 2000);
  }

  withdraw(amount) {
    setTimeout(() => {
      amount = parseInt(amount);
      if (amount > 0) {
        if (amount <= this.balance) {
          this.balance -= amount;
          alert(`Berhasil withdraw. Saldo sekarang: Rp. ${this.balance}`);
        } else {
          alert("Saldo tidak mencukupi.");
        }
      } else {
        alert("Masukkan jumlah withdraw berupa angka dan tidak boleh kurang dari 0.");
      }
      this.updateBalanceDisplay();
    }, 2000);
  }

  updateBalanceDisplay() {
    document.getElementById("saldo").innerText = "Saldo di rekening: Rp. " + this.balance;
  }
}

let account = new BankAccount();