// تسجيل الفلاح
document.getElementById("farmerForm")?.addEventListener("submit", function(e){
    e.preventDefault();
    let farmers = JSON.parse(localStorage.getItem("farmers") || "[]");
    let farmer = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    };
    farmers.push(farmer);
    localStorage.setItem("farmers", JSON.stringify(farmers));
    alert("تم التسجيل بنجاح!");
});

// تقديم الطلب
document.getElementById("requestForm")?.addEventListener("submit", function(e){
    e.preventDefault();
    let requests = JSON.parse(localStorage.getItem("requests") || "[]");
    let request = {
        farmer: "اسم الفلاح", // لاحقاً يمكن ربط تسجيل الدخول
        type: document.getElementById("requestType").value,
        status: "قيد الدراسة"
    };
    requests.push(request);
    localStorage.setItem("requests", JSON.stringify(requests));
    alert("تم إرسال الطلب!");
});

// لوحة تحكم البلدية
let tbody = document.querySelector("#requestsTable tbody");
let requests = JSON.parse(localStorage.getItem("requests") || "[]");
requests.forEach((r, i) => {
    let tr = document.createElement("tr");
    tr.innerHTML = `
        <td>${r.farmer}</td>
        <td>${r.type}</td>
        <td>${r.status}</td>
        <td>
            <button onclick="changeStatus(${i}, 'مقبول')">مقبول</button>
            <button onclick="changeStatus(${i}, 'مرفوض')">مرفوض</butto
        </td>
    `;
    tbody.appendChild(tr);
});

function changeStatus(index, status){
    let requests = JSON.parse(localStorage.getItem("requests") || "[]");
    requests[index].status = status;
    localStorage.setItem("requests", JSON.stringify(requests));
    location.relo
}
