
   import {
    initializeApp
   } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
   import {
    getDatabase,
    ref,
    set,
    get,
    child,
    remove
   } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-database.js";
   const firebaseConfig = {
    apiKey: "AIzaSyBRA6iq8p_2NI4JzpCK2f4vkMWsRMhDin4",
    authDomain: "text-share-31553.firebaseapp.com",
    databaseURL: "https://text-share-31553-default-rtdb.firebaseio.com",
    projectId: "text-share-31553",
    storageBucket: "text-share-31553.appspot.com",
    messagingSenderId: "813153545432",
    appId: "1:813153545432:web:4f40e2e3b5cdd8436dbbad"
   };
   const app = initializeApp(firebaseConfig);
   const db = getDatabase(app);
   const shareButton = document.getElementById("shareButton");
   const retrieveButton = document.getElementById("retrieveButton");
   const textInput = document.getElementById("textInput");
   const retrieveInput = document.getElementById("retrieveInput");
   const shareCode = document.getElementById("shareCode");
   const codeText = document.getElementById("codeText");
   const copyButton = document.getElementById("copyButton");
   const retrievedText = document.getElementById("retrievedText");
   const expiryStatus = document.getElementById("expiry-status");
   const expirySelect = document.getElementById("expirySelect");
   const pasteButton = document.getElementById("pasteButton");
   const copyRetrieved = document.getElementById("copyRetrieved");
   const ding = new Audio("https://me-niyas-ali.github.io/getfile/notify.mp3");

   function generateCode() {
    return Math.floor(1000 + Math.random() * 9000).toString();
   }
   async function generateUniqueCode() {
    let code,
     exists;
    do {
     code = generateCode();
     const snapshot = await get(child(ref(db), "texts/" + code));
     exists = snapshot.exists();
    } while (exists);
    return code;
   }
   async function saveText(code, text, expiry) {
    const timestamp = Date.now();
    await set(ref(db, "texts/" + code), {
     text,
     timestamp,
     expiry
    });
   }
   async function getText(code) {
    const snapshot = await get(child(ref(db), "texts/" + code));
    if (snapshot.exists()) {
     const data = snapshot.val();
     const now = Date.now();
     if (now - data.timestamp > data.expiry) {
      await remove(ref(db, "texts/" + code));
      return {
       expired: true
      };
     }
     return {
      text: data.text,
      timeLeft: data.expiry - (now - data.timestamp)
     };
    }
    return null;
   }
   shareButton.addEventListener("click", async () => {
    const text = textInput.value.trim();
    if (!text) {
     codeText.textContent = "Please enter some text.";
     shareCode.style.display = "block";
     return;
    }
    const expiry = parseInt(expirySelect.value);
    const code = await generateUniqueCode();
    await saveText(code, text, expiry);
    codeText.innerHTML = `✅ 
				<strong>Share code:</strong> ${code}`;
    shareCode.style.display = "block";
    copyButton.setAttribute("data-code", code);
    ding.play();
   });
   retrieveButton.addEventListener("click", async () => {
  const code = retrieveInput.value.trim();
  if (!code) {
    retrievedText.value = "Please enter a code.";
    expiryStatus.textContent = "";
    return;
  }
  const result = await getText(code);
  if (!result) {
    retrievedText.value = "No text found.";
    expiryStatus.textContent = "";
  } else if (result.expired) {
    retrievedText.value = "Code expired.";
    expiryStatus.textContent = "";
  } else {
    const mins = Math.ceil(result.timeLeft / 60000);
    // ✅ show expiry separately
    expiryStatus.textContent = `Expires in ${mins} min${mins > 1 ? "s" : ""}`;
    // ✅ show only text here
    retrievedText.value = result.text;
    ding.play().catch(() => {});
  }
});
   copyButton.addEventListener("click", () => {
    const code = copyButton.getAttribute("data-code");
    navigator.clipboard.writeText(code).then(() => {
     copyButton.textContent = "✅";
     ding.play();
     setTimeout(() => copyButton.textContent = "Copy", 2000);
    });
   });
   let pasteState = "paste"; // initial state
   pasteButton.addEventListener("click", async () => {
    if (pasteState === "paste") {
     try {
      const text = await navigator.clipboard.readText();
      textInput.value = text;
      textInput.focus();
      pasteButton.textContent = "✅";
      ding.play();
      pasteState = "pasted";
      // After short delay, change to ❌
      setTimeout(() => {
       if (pasteState === "pasted") {
        pasteButton.textContent = "❌";
        pasteState = "clear";
       }
      }, 1000);
     } catch {
      alert("Clipboard access denied.");
     }
    } else if (pasteState === "clear") {
     textInput.value = "";
     pasteButton.textContent = "📋";
     pasteState = "paste";
    }
   });
   copyRetrieved.addEventListener("click", async () => {
    try {
     await navigator.clipboard.writeText(retrievedText.value);
     ding.play();
     copyRetrieved.textContent = "✅";
     setTimeout(() => (copyRetrieved.textContent = "📄"), 2000);
    } catch {
     alert("Failed to copy.");
    }
   });
