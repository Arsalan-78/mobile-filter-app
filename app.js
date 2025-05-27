const mobileData = {
    Samsung: ["Galaxy S22", "Galaxy S21", "Galaxy S20"],
    Apple: ["iPhone 13", "iPhone 14", "iPhone 15"],
    Xiaomi: ["Redmi Note 12", "Redmi Note 11", "Redmi 10 C"],
    OnePlus: ["OnePlus 10", "OnePlus Nord", "OnePlus 11R"]
  };
  
  function populateModels() {
    const brandSelect = document.getElementById("brand");
    const modelSelect = document.getElementById("model");
    const selectedBrand = brandSelect.value;
  
    modelSelect.innerHTML = '<option value="">-- Select Model --</option>';
  
    if (selectedBrand && mobileData[selectedBrand]) {
      mobileData[selectedBrand].forEach(model => {
        const option = document.createElement("option");
        option.value = model;
        option.textContent = model;
        modelSelect.appendChild(option);
      });
    }
  }
  
  function showSelection() {
    const brand = document.getElementById("brand").value;
    const model = document.getElementById("model").value;
    const resultDiv = document.getElementById("result");
  
    if (brand && model) {
      resultDiv.innerHTML = `<p>You selected: <span style="color: #ffd700;">${brand}</span> - <span style="color: #7bed9f;">${model}</span></p>`;
    } else {
      resultDiv.innerHTML = `<p style="color: #ff6b6b;">Please select both brand and model.</p>`;
    }
  }
  