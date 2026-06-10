import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import ScrollToPlugin from 'gsap/ScrollToPlugin'
import Section from '../components/Section'
import Quiz from '../components/Quiz'
import CodeBlock from '../components/CodeBlock'

gsap.registerPlugin(ScrollToPlugin)

function Week1() {
  const [activeTab, setActiveTab] = useState('concept')
  const [quizPassed, setQuizPassed] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    gsap.from(containerRef.current, {
      duration: 0.8,
      opacity: 0,
      y: 20,
      ease: 'power2.out',
    })
  }, [])

  return (
    <div className="pt-20 min-h-screen bg-surface">
      <div className="section-container py-3xl" ref={containerRef}>
        {/* Header */}
        <div className="mb-3xl">
          <h1 className="text-5xl font-bold mb-md text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Week 1: JavaScript Engine Fundamentals
          </h1>
          <p className="text-lg text-gray-300 mb-xl">Master the Call Stack, Memory Heap, and Closures</p>
          <div className="flex flex-wrap gap-md mb-2xl">
            <span className="px-md py-sm bg-primary bg-opacity-20 text-primary rounded-md text-sm font-bold">Foundational</span>
            <span className="px-md py-sm bg-secondary bg-opacity-20 text-secondary rounded-md text-sm font-bold">5-7 hours</span>
            <span className="px-md py-sm bg-warning bg-opacity-20 text-warning rounded-md text-sm font-bold">Beginner</span>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex gap-md border-b border-white border-opacity-10 mb-3xl overflow-x-auto">
          {['concept', 'code', 'bestpractices', 'resources', 'quiz'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-xl py-md font-bold transition-all duration-200 whitespace-nowrap ${
                activeTab === tab
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-gray-400 hover:text-gray-300'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Content Sections */}
        {activeTab === 'concept' && (
          <div className="space-y-3xl">
            <Section 
              title="1. Understanding the Call Stack"
              emoji="📚"
            >
              <div className="space-y-xl">
                <div>
                  <h4 className="text-xl font-bold mb-md text-primary">What is the Call Stack?</h4>
                  <p className="text-gray-300 leading-relaxed">
                    The call stack is a data structure that JavaScript uses to keep track of function execution. Every time a function is called, JavaScript adds it to the top of the call stack. When the function returns, it's removed from the stack. Think of it like a stack of plates in a cafeteria—you add plates to the top and remove them from the top (LIFO: Last In, First Out).
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-bold mb-md text-secondary">How It Works Under the Hood</h4>
                  <p className="text-gray-300 mb-md">
                    When JavaScript executes code:
                  </p>
                  <ol className="list-decimal list-inside space-y-md text-gray-300 ml-md">
                    <li>The global execution context is created and pushed to the stack</li>
                    <li>When a function is called, a new execution context is created for that function and pushed to the stack</li>
                    <li>The function executes line by line</li>
                    <li>When the function completes, its context is popped off the stack</li>
                    <li>Control returns to the previous execution context</li>
                  </ol>
                </div>

                <div className="bg-primary bg-opacity-10 border border-primary border-opacity-30 rounded-md p-xl">
                  <h5 className="font-bold text-primary mb-md">💡 Real-World Example</h5>
                  <p className="text-gray-300">
                    When you call a restaurant and ask them a question, they put you on hold while they find an answer. That wait time with your call on the stack is like JavaScript's call stack—your call is waiting while other operations happen.
                  </p>
                </div>
              </div>
            </Section>

            <Section 
              title="2. Memory Heap Explained"
              emoji="💾"
            >
              <div className="space-y-xl">
                <div>
                  <h4 className="text-xl font-bold mb-md text-primary">What is the Memory Heap?</h4>
                  <p className="text-gray-300 leading-relaxed">
                    The heap is an unstructured region of memory used to store objects and arrays in JavaScript. Unlike the call stack which stores primitive values and function calls, the heap stores reference types. The heap is much larger than the stack, but accessing data from the heap is slower than from the stack.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-bold mb-md text-secondary">Stack vs Heap</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm text-gray-300">
                      <thead className="border-b border-white border-opacity-10">
                        <tr>
                          <th className="text-left py-md px-md text-primary">Aspect</th>
                          <th className="text-left py-md px-md text-primary">Stack</th>
                          <th className="text-left py-md px-md text-primary">Heap</th>
                        </tr>
                      </thead>
                      <tbody className="space-y-md">
                        <tr className="border-b border-white border-opacity-10">
                          <td className="py-md px-md">Stores</td>
                          <td className="py-md px-md">Primitive values, function calls</td>
                          <td className="py-md px-md">Objects, arrays, functions</td>
                        </tr>
                        <tr className="border-b border-white border-opacity-10">
                          <td className="py-md px-md">Size</td>
                          <td className="py-md px-md">Smaller, fixed size</td>
                          <td className="py-md px-md">Larger, dynamic size</td>
                        </tr>
                        <tr className="border-b border-white border-opacity-10">
                          <td className="py-md px-md">Speed</td>
                          <td className="py-md px-md">Faster access</td>
                          <td className="py-md px-md">Slower access</td>
                        </tr>
                        <tr>
                          <td className="py-md px-md">Cleanup</td>
                          <td className="py-md px-md">Automatic (scope)</td>
                          <td className="py-md px-md">Garbage collection</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-bold mb-md text-secondary">Primitives vs Reference Types</h4>
                  <p className="text-gray-300 mb-md">
                    <strong>Primitives</strong> (stored in Stack): numbers, strings, booleans, undefined, null, symbols
                  </p>
                  <p className="text-gray-300">
                    <strong>Reference Types</strong> (stored in Heap): objects, arrays, functions, dates, regex
                  </p>
                </div>
              </div>
            </Section>

            <Section 
              title="3. Closures: The Foundation of Advanced JavaScript"
              emoji="🔐"
            >
              <div className="space-y-xl">
                <div>
                  <h4 className="text-xl font-bold mb-md text-primary">What is a Closure?</h4>
                  <p className="text-gray-300 leading-relaxed">
                    A closure is a function that has access to variables from its outer (enclosing) function's scope, even after that function has returned. In JavaScript, closures are created every time a function is created. They allow you to maintain state and create private variables.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-bold mb-md text-secondary">Lexical Scope: How Closures Work</h4>
                  <p className="text-gray-300 mb-md">
                    Closures work because of <strong>lexical scoping</strong>, which means a function's scope is determined by where it's defined in the code, not where it's called from. Each function creates its own scope, and inner functions have access to outer function variables.
                  </p>
                  <p className="text-gray-300">
                    JavaScript has three types of scope:
                  </p>
                  <ul className="list-disc list-inside space-y-md text-gray-300 ml-md mt-md">
                    <li><strong>Global Scope:</strong> Variables available everywhere</li>
                    <li><strong>Function Scope:</strong> Variables available only inside a function</li>
                    <li><strong>Block Scope:</strong> Variables available only inside a block (if, for, while)</li>
                  </ul>
                </div>

                <div className="bg-secondary bg-opacity-10 border border-secondary border-opacity-30 rounded-md p-xl">
                  <h5 className="font-bold text-secondary mb-md">💡 Real-World Use Case</h5>
                  <p className="text-gray-300">
                    Closures are used everywhere in modern JavaScript: event handlers that remember state, data encapsulation in modules, and the factory pattern. Without closures, you couldn't create private variables or maintain state elegantly.
                  </p>
                </div>
              </div>
            </Section>

            <Section 
              title="Technical Terms Glossary"
              emoji="📖"
            >
              <div className="space-y-md">
                <div className="card p-md">
                  <div className="flex gap-md">
                    <span className="text-primary font-bold min-w-fit">Call Stack:</span>
                    <p className="text-gray-300">A memory structure that keeps track of function calls and executions in order (LIFO - Last In, First Out)</p>
                  </div>
                </div>

                <div className="card p-md">
                  <div className="flex gap-md">
                    <span className="text-primary font-bold min-w-fit">Heap:</span>
                    <p className="text-gray-300">A large memory area used to store objects and complex data structures that don't have a fixed size</p>
                  </div>
                </div>

                <div className="card p-md">
                  <div className="flex gap-md">
                    <span className="text-primary font-bold min-w-fit">Closure:</span>
                    <p className="text-gray-300">A function that retains access to variables from its enclosing scope even after that scope has finished executing</p>
                  </div>
                </div>

                <div className="card p-md">
                  <div className="flex gap-md">
                    <span className="text-primary font-bold min-w-fit">Lexical Scope:</span>
                    <p className="text-gray-300">A scoping mechanism where a variable's scope is determined by its position in the source code, not where the function is called</p>
                  </div>
                </div>

                <div className="card p-md">
                  <div className="flex gap-md">
                    <span className="text-primary font-bold min-w-fit">Execution Context:</span>
                    <p className="text-gray-300">An environment where JavaScript code is executed, containing variable declarations, function declarations, and scope information</p>
                  </div>
                </div>

                <div className="card p-md">
                  <div className="flex gap-md">
                    <span className="text-primary font-bold min-w-fit">Garbage Collection:</span>
                    <p className="text-gray-300">An automatic process that identifies and frees memory that's no longer being used by the program</p>
                  </div>
                </div>
              </div>
            </Section>
          </div>
        )}

        {activeTab === 'code' && (
          <div className="space-y-3xl">
            <Section title="Call Stack in Action" emoji="🔍">
              <CodeBlock 
                language="javascript"
                code={`function first() {
  console.log('First function');
  second();
  console.log('Back to first');
}

function second() {
  console.log('Second function');
  third();
  console.log('Back to second');
}

function third() {
  console.log('Third function');
}

first();

/* Call Stack Trace:
1. first() called - pushed to stack
2. console.log('First function')
3. second() called - pushed to stack (now on top)
4. console.log('Second function')
5. third() called - pushed to stack (now on top)
6. console.log('Third function')
7. third() returns - popped off stack
8. console.log('Back to second')
9. second() returns - popped off stack
10. console.log('Back to first')
11. first() returns - popped off stack
*/`}
              />
            </Section>

            <Section title="Stack vs Heap: Primitives vs Objects" emoji="📊">
              <CodeBlock 
                language="javascript"
                code={`// PRIMITIVES (stored in Stack)
let a = 5;        // 5 stored directly in stack
let b = a;        // Copy of 5 stored in stack
b = 10;           // a is still 5, b is now 10

console.log(a, b); // 5 10 (separate values)

// OBJECTS (stored in Heap, reference in Stack)
let obj1 = { name: 'John' }; // obj1 points to heap address
let obj2 = obj1;             // obj2 points to SAME heap address
obj2.name = 'Jane';

console.log(obj1.name); // 'Jane' (same object!)
console.log(obj1 === obj2); // true (same reference)

// Memory visualization:
// STACK          HEAP
// a: 5           
// b: 10          
// obj1: ---->  { name: 'Jane' }
// obj2: ---->  (same address)
`}
              />
            </Section>

            <Section title="Closures: Creating Private Variables" emoji="🔐">
              <CodeBlock 
                language="javascript"
                code={`// BAD: Without closures (no privacy)
let count = 0;

function increment() {
  count++;
  return count;
}

increment(); // 1
increment(); // 2
count = 100; // DANGER: someone can modify count directly!

// GOOD: With closures (privacy)
function createCounter() {
  let count = 0; // Private variable
  
  return {
    increment: function() {
      count++;
      return count;
    },
    decrement: function() {
      count--;
      return count;
    },
    getCount: function() {
      return count;
    }
  };
}

const counter = createCounter();
counter.increment(); // 1
counter.increment(); // 2
counter.decrement(); // 1
console.log(counter.getCount()); // 1
counter.count = 100; // This doesn't work! count is private
`}
              />
            </Section>

            <Section title="Common Closure Mistakes" emoji="⚠️">
              <div className="space-y-xl">
                <div>
                  <h4 className="text-lg font-bold mb-md text-danger">❌ Mistake 1: Loop Closure Bug</h4>
                  <CodeBlock 
                    language="javascript"
                    code={`// BAD: All callbacks reference the same 'i'
for (var i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i); // Prints 3, 3, 3 (i is already 3 by the time callbacks run)
  }, 1000);
}

// GOOD: Use let (block scope) or create a new scope
for (let i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i); // Prints 0, 1, 2 (each iteration gets its own 'i')
  }, 1000);
}

// GOOD: Use an IIFE (Immediately Invoked Function Expression)
for (var i = 0; i < 3; i++) {
  (function(j) {
    setTimeout(function() {
      console.log(j); // Prints 0, 1, 2
    }, 1000);
  })(i); // Pass current 'i' as 'j'
}`}
                  />
                </div>

                <div>
                  <h4 className="text-lg font-bold mb-md text-danger">❌ Mistake 2: Unintended Global Scope Pollution</h4>
                  <CodeBlock 
                    language="javascript"
                    code={`// BAD: No proper scope, pollutes global
function processData() {
  data = 'processed'; // Missing 'let/const' - becomes global!
}

processData();
console.log(window.data); // 'processed' - LEAKED TO GLOBAL!

// GOOD: Always declare variables properly
function processData() {
  const data = 'processed'; // Properly scoped
}

processData();
console.log(window.data); // undefined - No leak!
`}
                  />
                </div>
              </div>
            </Section>

            <Section title="Real-World Pattern: Module Pattern" emoji="🏗️">
              <CodeBlock 
                language="javascript"
                code={`// Module Pattern using closures
const userModule = (function() {
  // Private variables
  const users = [];
  const apiKey = 'secret-key-123';
  
  // Private function
  function validateUser(user) {
    return user.name && user.email;
  }
  
  // Public API (what gets returned)
  return {
    addUser(user) {
      if (validateUser(user)) {
        users.push(user);
        return { success: true, message: 'User added' };
      }
      return { success: false, message: 'Invalid user' };
    },
    
    getUsers() {
      return [...users]; // Return copy, not original array
    },
    
    getUserCount() {
      return users.length;
    }
  };
})();

// Usage
userModule.addUser({ name: 'John', email: 'john@example.com' });
userModule.addUser({ name: 'Jane', email: 'jane@example.com' });

console.log(userModule.getUsers()); // Returns users
console.log(userModule.getUserCount()); // 2
console.log(userModule.apiKey); // undefined - PRIVATE!
userModule.users = []; // Doesn't work - users is private!
`}
              />
            </Section>
          </div>
        )}

        {activeTab === 'bestpractices' && (
          <div className="space-y-3xl">
            <Section title="Best Practices for Call Stack Optimization" emoji="⚡">
              <div className="space-y-xl">
                <div>
                  <h4 className="text-lg font-bold mb-md text-success">✅ Practice 1: Avoid Stack Overflow</h4>
                  <CodeBlock 
                    language="javascript"
                    code={`// BAD: Deep recursion causes stack overflow
function recursiveBad(n) {
  if (n === 0) return 0;
  return n + recursiveBad(n - 1); // Each call adds to stack
}

recursiveBad(100000); // Error: Maximum call stack size exceeded

// GOOD: Use iteration instead
function iterativeGood(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i; // No stack growth
  }
  return sum;
}

iterativeGood(100000); // Works fine

// GOOD: Use tail call optimization (requires functional approach)
function recursiveOptimized(n, acc = 0) {
  if (n === 0) return acc;
  return recursiveOptimized(n - 1, acc + n); // Tail call
}

recursiveOptimized(100000); // Works in strict mode with TCO
`}
                  />
                </div>

                <div>
                  <h4 className="text-lg font-bold mb-md text-success">✅ Practice 2: Understand Function Scope</h4>
                  <CodeBlock 
                    language="javascript"
                    code={`// GOOD: Clear scope management
const userService = {
  users: [],
  
  // Method has access to 'this' and its own scope
  addUser(user) {
    if (this.validateUser(user)) {
      this.users.push(user);
    }
  },
  
  validateUser(user) {
    return user.id && user.name;
  },
  
  // Arrow function maintains 'this' from parent scope
  getUsersAsync() {
    return fetch('/api/users')
      .then(res => res.json())
      .then(data => {
        this.users = data; // 'this' refers to userService
        return this.users;
      });
  }
};

// Usage
userService.addUser({ id: 1, name: 'John' });
userService.getUsersAsync();
`}
                  />
                </div>
              </div>
            </Section>

            <Section title="Closure Best Practices" emoji="🎯">
              <div className="space-y-xl">
                <div>
                  <h4 className="text-lg font-bold mb-md text-success">✅ Practice 1: Use Closures for Data Privacy</h4>
                  <CodeBlock 
                    language="javascript"
                    code={`// GOOD: Encapsulation with closures
class BankAccount {
  constructor(initialBalance) {
    let balance = initialBalance; // Private variable using closure
    
    this.deposit = (amount) => {
      if (amount > 0) {
        balance += amount;
        return { success: true, newBalance: balance };
      }
      return { success: false, message: 'Invalid amount' };
    };
    
    this.withdraw = (amount) => {
      if (amount > 0 && amount <= balance) {
        balance -= amount;
        return { success: true, newBalance: balance };
      }
      return { success: false, message: 'Insufficient funds' };
    };
    
    this.getBalance = () => balance; // Read-only access
  }
}

const account = new BankAccount(1000);
account.deposit(500); // { success: true, newBalance: 1500 }
console.log(account.getBalance()); // 1500
account.balance = 9999; // Doesn't work! balance is private
`}
                  />
                </div>

                <div>
                  <h4 className="text-lg font-bold mb-md text-success">✅ Practice 2: Factory Functions for Object Creation</h4>
                  <CodeBlock 
                    language="javascript"
                    code={`// GOOD: Factory function pattern
function createUser(name, email) {
  let isActive = true; // Private state
  const createdAt = new Date();
  
  return {
    getName() { return name; },
    getEmail() { return email; },
    isActive() { return isActive; },
    deactivate() { isActive = false; },
    activate() { isActive = true; },
    getInfo() {
      return \`User: \${name} (\${email}) - Active: \${isActive}\`;
    }
  };
}

const user1 = createUser('John', 'john@example.com');
const user2 = createUser('Jane', 'jane@example.com');

console.log(user1.getInfo()); // User: John (john@example.com) - Active: true
user1.deactivate();
console.log(user1.getInfo()); // User: John (john@example.com) - Active: false
`}
                  />
                </div>

                <div>
                  <h4 className="text-lg font-bold mb-md text-success">✅ Practice 3: Debouncing and Throttling with Closures</h4>
                  <CodeBlock 
                    language="javascript"
                    code={`// GOOD: Debounce function (waits for pause)
function debounce(func, wait) {
  let timeoutId; // Closure variable
  
  return function(...args) {
    clearTimeout(timeoutId); // Clear previous timeout
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
}

// GOOD: Throttle function (max once per interval)
function throttle(func, limit) {
  let inThrottle; // Closure variable
  
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
}

// Usage in React
const handleSearch = debounce((query) => {
  console.log('Searching for:', query);
}, 500);

const handleScroll = throttle(() => {
  console.log('Scroll event');
}, 1000);

// These patterns prevent excessive function calls
`}
                  />
                </div>
              </div>
            </Section>

            <Section title="Memory Management Best Practices" emoji="🧹">
              <div className="space-y-xl">
                <div>
                  <h4 className="text-lg font-bold mb-md text-success">✅ Practice: Prevent Memory Leaks</h4>
                  <CodeBlock 
                    language="javascript"
                    code={`// BAD: Memory leak - event listener not removed
class DataFetcher {
  constructor() {
    this.data = new Array(1000000); // Large data
    
    // Event listener holds reference to 'this'
    window.addEventListener('resize', () => {
      this.data = [];
    });
    // No cleanup! Object stays in memory even when not needed
  }
}

// GOOD: Clean up properly
class DataFetcher {
  constructor() {
    this.data = new Array(1000000);
    
    // Save reference to handler
    this.handleResize = () => {
      this.data = [];
    };
    
    window.addEventListener('resize', this.handleResize);
  }
  
  // Cleanup method
  destroy() {
    window.removeEventListener('resize', this.handleResize);
    this.data = null; // Release reference
  }
}

const fetcher = new DataFetcher();
// When done:
fetcher.destroy(); // Properly cleaned up
`}
                  />
                </div>
              </div>
            </Section>
          </div>
        )}

        {activeTab === 'resources' && (
          <div className="space-y-3xl">
            <Section title="Learning Resources" emoji="📚">
              <div className="space-y-xl">
                <div className="card p-xl">
                  <h4 className="text-lg font-bold text-primary mb-md">📖 JavaScript.info - Call Stack & Execution Context</h4>
                  <p className="text-gray-300 mb-md">Comprehensive guide to how JavaScript executes code, with visual explanations.</p>
                  <a href="https://javascript.info/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary transition-colors font-bold">
                    Visit Resource →
                  </a>
                </div>

                <div className="card p-xl">
                  <h4 className="text-lg font-bold text-primary mb-md">📖 MDN Web Docs - Closures</h4>
                  <p className="text-gray-300 mb-md">Official Mozilla documentation on closures with practical examples.</p>
                  <a href="https://developer.mozilla.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary transition-colors font-bold">
                    Visit Resource →
                  </a>
                </div>

                <div className="card p-xl">
                  <h4 className="text-lg font-bold text-secondary mb-md">🎥 FreeCodeCamp - JavaScript Fundamentals</h4>
                  <p className="text-gray-300 mb-md">Complete video course covering the JavaScript engine, memory, and closures.</p>
                  <a href="https://freecodecamp.org/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary transition-colors font-bold">
                    Visit Resource →
                  </a>
                </div>

                <div className="card p-xl">
                  <h4 className="text-lg font-bold text-success mb-md">📚 You Don't Know JS - Scope & Closures</h4>
                  <p className="text-gray-300 mb-md">Deep dive book series on JavaScript fundamentals, completely free online.</p>
                  <a href="https://github.com/getify/You-Dont-Know-JS" target="_blank" rel="noopener noreferrer" className="text-success hover:text-primary transition-colors font-bold">
                    Visit Resource →
                  </a>
                </div>
              </div>
            </Section>
          </div>
        )}

        {activeTab === 'quiz' && (
          <div>
            {!quizPassed ? (
              <Quiz onPass={() => setQuizPassed(true)} />
            ) : (
              <div className="card p-3xl text-center bg-success bg-opacity-10 border-success">
                <h2 className="text-3xl font-bold text-success mb-md">🎉 Quiz Passed!</h2>
                <p className="text-gray-300 mb-2xl">Great job! You've demonstrated understanding of Week 1 concepts. You're ready to move to Week 2.</p>
                <button className="btn-primary">
                  Move to Week 2 →
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default Week1
