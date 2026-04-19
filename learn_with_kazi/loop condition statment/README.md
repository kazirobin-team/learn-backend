Here's a comprehensive JavaScript Loops and Conditional Statements tutorial in Bangla:

## **জাভাস্ক্রিপ্ট লুপ এবং কন্ডিশনাল স্টেটমেন্ট (Bangla Tutorial)**

### **১. কন্ডিশনাল স্টেটমেন্ট (Conditional Statements)**

#### **if স্টেটমেন্ট**
```javascript
let age = 18;

if (age >= 18) {
    console.log("আপনি ভোট দেওয়ার যোগ্য");
}
```

#### **if-else স্টেটমেন্ট**
```javascript
let marks = 75;

if (marks >= 80) {
    console.log("গ্রেড: A+");
} else {
    console.log("গ্রেড: A");
}
```

#### **else-if ল্যাডার**
```javascript
let score = 85;

if (score >= 80) {
    console.log("গ্রেড: A+");
} else if (score >= 70) {
    console.log("গ্রেড: A");
} else if (score >= 60) {
    console.log("গ্রেড: A-");
} else {
    console.log("গ্রেড: B");
}
```

#### **switch স্টেটমেন্ট**
```javascript
let day = 3;
let dayName;

switch(day) {
    case 1:
        dayName = "শনিবার";
        break;
    case 2:
        dayName = "রবিবার";
        break;
    case 3:
        dayName = "সোমবার";
        break;
    default:
        dayName = "অবৈধ দিন";
}

console.log(dayName); // আউটপুট: সোমবার
```

### **২. লুপ (Loops)**

#### **for লুপ**
```javascript
// 1 থেকে 5 পর্যন্ত সংখ্যা প্রিন্ট
for(let i = 1; i <= 5; i++) {
    console.log("সংখ্যা: " + i);
}

// ৫ এর নামতা
for(let i = 1; i <= 10; i++) {
    console.log(`৫ x ${i} = ${5 * i}`);
}
```

#### **while লুপ**
```javascript
let i = 1;
while(i <= 5) {
    console.log("while লুপ: " + i);
    i++;
}

// ইউজার ইনপুট পর্যন্ত সংখ্যা যোগ করুন
let sum = 0;
let number = 1;
while(number <= 10) {
    sum += number;
    number++;
}
console.log("যোগফল: " + sum); // 55
```

#### **do-while লুপ**
```javascript
let x = 1;
do {
    console.log("do-while: " + x);
    x++;
} while(x <= 5);

// কমপক্ষে একবার এক্সিকিউট হবে
let y = 10;
do {
    console.log("একবার এক্সিকিউট হবে: " + y);
    y++;
} while(y <= 5);
```

### **৩. ব্রেক এবং কন্টিনিউ (Break & Continue)**

#### **break স্টেটমেন্ট**
```javascript
// লুপ থেকে বের হয়ে যাবে
for(let i = 1; i <= 10; i++) {
    if(i === 5) {
        break; // i যখন 5 হবে তখন লুপ থেমে যাবে
    }
    console.log(i); // 1,2,3,4 প্রিন্ট হবে
}
```

#### **continue স্টেটমেন্ট**
```javascript
// নির্দিষ্ট ইটারেশন স্কিপ করবে
for(let i = 1; i <= 10; i++) {
    if(i === 5) {
        continue; // i=5 স্কিপ করবে
    }
    console.log(i); // 5 বাদে সব প্রিন্ট হবে
}
```

### **৪. বাস্তব উদাহরণ (Real-life Examples)**

#### **গ্রেড ক্যালকুলেটর**
```javascript
let marks = prompt("আপনার নম্বর দিন:");
marks = Number(marks);

if(marks >= 80 && marks <= 100) {
    console.log("গ্রেড: A+ (উত্তম)");
} else if(marks >= 70 && marks < 80) {
    console.log("গ্রেড: A (ভালো)");
} else if(marks >= 60 && marks < 70) {
    console.log("গ্রেড: A- (মোটামুটি)");
} else if(marks >= 50 && marks < 60) {
    console.log("গ্রেড: B (সাধারণ)");
} else if(marks >= 40 && marks < 50) {
    console.log("গ্রেড: C (কম)");
} else if(marks >= 33 && marks < 40) {
    console.log("গ্রেড: D (সঙ্গতিপূর্ণ)");
} else if(marks < 33 && marks >= 0) {
    console.log("গ্রেড: F (ফেল)");
} else {
    console.log("অবৈধ নম্বর!");
}
```

#### **প্রাইম নাম্বার চেকার**
```javascript
let num = 17;
let isPrime = true;

if(num <= 1) {
    isPrime = false;
} else {
    for(let i = 2; i < num; i++) {
        if(num % i === 0) {
            isPrime = false;
            break;
        }
    }
}

if(isPrime) {
    console.log(`${num} একটি মৌলিক সংখ্যা`);
} else {
    console.log(`${num} মৌলিক সংখ্যা নয়`);
}
```

#### **জোড়-বিজোড় সংখ্যা প্রিন্ট**
```javascript
// 1 থেকে 20 পর্যন্ত জোড় ও বিজোড় সংখ্যা আলাদা করা
for(let i = 1; i <= 20; i++) {
    if(i % 2 === 0) {
        console.log(`${i} - জোড় সংখ্যা`);
    } else {
        console.log(`${i} - বিজোড় সংখ্যা`);
    }
}
```

#### **অ্যারেতে মান খোঁজা**
```javascript
let fruits = ["আম", "জাম", "কাঁঠাল", "লিচু", "কলা"];
let searchFruit = "কাঁঠাল";
let found = false;

for(let i = 0; i < fruits.length; i++) {
    if(fruits[i] === searchFruit) {
        console.log(`${searchFruit} পাওয়া গেছে ইনডেক্স ${i} এ`);
        found = true;
        break;
    }
}

if(!found) {
    console.log(`${searchFruit} পাওয়া যায়নি`);
}
```

### **৫. নেস্টেড লুপ (Nested Loops)**

```javascript
// গুণনীয়ক টেবিল
for(let i = 1; i <= 5; i++) {
    for(let j = 1; j <= 5; j++) {
        process.stdout.write((i * j) + "\t");
    }
    console.log(); // নতুন লাইন
}
```

### **৬. লুপ এবং কন্ডিশনের সমন্বয়**

```javascript
// ছাত্রদের রেজাল্ট সিস্টেম
let students = [
    { name: "রহিম", marks: 85 },
    { name: "করিম", marks: 65 },
    { name: "ফাতেমা", marks: 92 },
    { name: "সুমন", marks: 45 },
    { name: "নাজমা", marks: 78 }
];

for(let i = 0; i < students.length; i++) {
    let student = students[i];
    let grade;
    
    if(student.marks >= 80) {
        grade = "A+";
    } else if(student.marks >= 70) {
        grade = "A";
    } else if(student.marks >= 60) {
        grade = "A-";
    } else if(student.marks >= 50) {
        grade = "B";
    } else if(student.marks >= 40) {
        grade = "C";
    } else if(student.marks >= 33) {
        grade = "D";
    } else {
        grade = "F";
    }
    
    console.log(`${student.name}: ${student.marks} নম্বর - গ্রেড ${grade}`);
}
```

### **প্র্যাকটিস সমস্যা (Practice Problems):**

1. ১ থেকে ১০০ পর্যন্ত ৩ ও ৫ এর গুণিতক বের করুন
2. একটি সংখ্যা প্যালিনড্রোম কিনা চেক করুন
3. ১ থেকে N পর্যন্ত সকল মৌলিক সংখ্যা প্রিন্ট করুন
4. ফিবোনাচ্চি সিরিজের প্রথম ২০টি সংখ্যা প্রিন্ট করুন
5. একটি অ্যারের সর্বোচ্চ ও সর্বনিম্ন মান বের করুন

এই ক্লাসটি অনুশীলন করলে জাভাস্ক্রিপ্টের লুপ এবং কন্ডিশনাল স্টেটমেন্টের উপর ভালো কমান্ড আসবে।