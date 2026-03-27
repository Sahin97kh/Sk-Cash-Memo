const noteSequence = [1000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
let pendingDeleteName = "";

// --- দেনা পাওনা বিশেষ ফাংশন সমূহ ---
function saveLedger() {
    const type = document.getElementById('l_type').value;
    const name = document.getElementById('l_name').value.trim();
    const mobile = document.getElementById('l_mobile').value.trim();
    const date = document.getElementById('l_date').value;
    const amount = parseFloat(document.getElementById('l_amount').value) || 0;
    const desc = document.getElementById('l_desc').value.trim() || "লেনদেন";

    if(!name || !date || amount <= 0) {
        showAlert("সঠিকভাবে নাম, তারিখ ও টাকার পরিমাণ দিন।");
        return;
    }

    let data = JSON.parse(localStorage.getItem('ledger_data') || '[]');
    data.unshift({ id: Date.now(), type, name, mobile, date, amount, desc });
    localStorage.setItem('ledger_data', JSON.stringify(data));
    showAlert("হিসাব সেভ হয়েছে।", "সফল");
    document.getElementById('l_amount').value = '';
    document.getElementById('l_desc').value = '';
    renderLedgerMaster();
}

// [Include all other original functions: renderLedgerMaster, fillLedgerForm, printReceipt, calculateAll, loadSavedData, etc.]
// আপনার প্রদান করা সব JS কোড হুবহু এখানে থাকবে।
