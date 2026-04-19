Here's a complete explanation of **JavaScript OOP (Object-Oriented Programming)** with **all 4 pillars** in **one single, practical example**.

### The 4 Pillars of OOP:
1. **Encapsulation**
2. **Abstraction**
3. **Inheritance**
4. **Polymorphism**

---

### Real-World Example: **Bank Account System**

We'll create a banking system that demonstrates all four pillars beautifully.

```javascript
// ==================== 1. ENCAPSULATION ====================
// Hiding internal data and exposing only necessary methods

class BankAccount {
    // Private fields (using # for true privacy - ES2022+)
    #balance;
    #accountNumber;
    #transactionHistory = [];

    constructor(accountNumber, initialBalance = 0) {
        this.#accountNumber = accountNumber;
        this.#balance = Math.max(0, initialBalance);
    }

    // Public methods (Interface)
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            this.#addTransaction('Deposit', amount);
            console.log(`Deposited $${amount}. New balance: $${this.#balance}`);
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            this.#addTransaction('Withdraw', amount);
            console.log(`Withdrawn $${amount}. New balance: $${this.#balance}`);
            return true;
        } else {
            console.log("Insufficient funds or invalid amount!");
            return false;
        }
    }

    // Getter (controlled access)
    getBalance() {
        return this.#balance;
    }

    getAccountNumber() {
        return this.#accountNumber;
    }

    // Private method
    #addTransaction(type, amount) {
        this.#transactionHistory.push({
            type,
            amount,
            date: new Date().toLocaleString()
        });
    }
}

// ==================== 2. ABSTRACTION ====================
// Hiding complex implementation, showing only essential features

class SavingsAccount extends BankAccount {
    #interestRate;

    constructor(accountNumber, initialBalance, interestRate) {
        super(accountNumber, initialBalance);
        this.#interestRate = interestRate;
    }

    // Abstracted method - user doesn't need to know calculation logic
    applyInterest() {
        const interest = this.getBalance() * (this.#interestRate / 100);
        this.deposit(interest); // Reuse parent's method
        console.log(`Interest applied: $${interest.toFixed(2)} at ${this.#interestRate}%`);
    }
}

// ==================== 3. INHERITANCE ====================
// Child class inherits properties and methods from parent

class CheckingAccount extends BankAccount {
    #overdraftLimit = 500;

    constructor(accountNumber, initialBalance) {
        super(accountNumber, initialBalance);
    }

    withdraw(amount) {
        const currentBalance = this.getBalance();
        
        // Enhanced behavior (method overriding)
        if (amount > currentBalance + this.#overdraftLimit) {
            console.log("Transaction denied! Exceeds overdraft limit.");
            return false;
        }

        // Call parent method if within limit
        return super.withdraw(amount);
    }
}

// ==================== 4. POLYMORPHISM ====================
// Same method name, different behavior in different classes

class PremiumSavingsAccount extends SavingsAccount {
    constructor(accountNumber, initialBalance) {
        super(accountNumber, initialBalance, 5.5); // Higher interest
    }

    // Polymorphism: Same method name, different implementation
    applyInterest() {
        const bonus = 10; // Extra bonus for premium customers
        const interest = this.getBalance() * (this.#interestRate / 100) + bonus;
        this.deposit(interest);
        console.log(`Premium Interest + Bonus applied: $${interest.toFixed(2)}`);
    }
}

// ==================== USAGE - All Pillars in Action ====================

console.log("=== Banking System Demo ===\n");

// Create different types of accounts
const regularSavings = new SavingsAccount("SAV001", 1000, 3.5);
const checking = new CheckingAccount("CHK001", 500);
const premium = new PremiumSavingsAccount("PRE001", 5000);

// Encapsulation: Can't directly access #balance
// console.log(regularSavings.#balance); // Error - private!

regularSavings.deposit(500);
regularSavings.applyInterest();           // Abstraction + Inheritance

checking.withdraw(800);                   // Polymorphism (different withdraw behavior)

premium.deposit(1000);
premium.applyInterest();                  // Polymorphism (different interest logic)

// Get balance (controlled access)
console.log(`\nFinal Balances:`);
console.log(`Savings: $${regularSavings.getBalance()}`);
console.log(`Checking: $${checking.getBalance()}`);
console.log(`Premium: $${premium.getBalance()}`);
```

---

### Summary: How Each Pillar is Demonstrated

| Pillar           | How it's shown in the example                          |
|------------------|---------------------------------------------------------|
| **Encapsulation**    | `#balance`, `#accountNumber` are private + public methods only |
| **Abstraction**      | `applyInterest()` hides complex calculation logic       |
| **Inheritance**      | `SavingsAccount` and `CheckingAccount` extend `BankAccount` |
| **Polymorphism**     | `applyInterest()` and `withdraw()` behave differently in child classes |

---

**Key JavaScript OOP Features Used:**
- `class` syntax
- `extends` and `super()`
- Private fields (`#`)
- Method overriding
- Getters

Would you like me to also show the **same example using constructor functions + prototypes** (old way) for comparison?