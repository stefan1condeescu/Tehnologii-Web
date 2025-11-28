async function cauta() {
    let id = document.getElementById("idInput").value;
    let resultDiv = document.getElementById("result");

    try {
        let res = await axios.get("http://localhost:8000/api/getList/" + id);
        let item = res.data;

        resultDiv.innerHTML = `
            <p>${item.name} - ${item.age} ani</p>
        `;
    }
    catch (e) {
        resultDiv.innerHTML = "<p style='color:red;'>Id invalid sau inexistent</p>";
    }
}
