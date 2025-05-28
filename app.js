const mobiles = {
  iphone: {
    iphone7: {
      processor: "A10 Fusion",
      memory: {
        ram: "2GB",
        storage: "32GB"
      },
      camera: {
        rear: "12MP",
        front: "7MP"
      },
      brand: "iPhone",
      battery: "1960mAh",
      display: {
        size: 4.7,
        resolution: "1334 x 750",
        type: "IPS LCD"
      },
      operatingSystem: "iOS 15"
    },
    iphone8: {
      processor: "A11 Bionic",
      memory: {
        ram: "2GB",
        storage: "64GB"
      },
      camera: {
        rear: "12MP",
        front: "7MP"
      },
      brand: "iPhone",
      battery: "1821mAh",
      display: {
        size: 4.7,
        resolution: "1334 x 750",
        type: "IPS LCD"
      },
      operatingSystem: "iOS 15"
    },
    iphoneX: {
      processor: "A11 Bionic",
      memory: {
        ram: "3GB",
        storage: "64GB"
      },
      camera: {
        rear: "Dual 12MP",
        front: "7MP TrueDepth"
      },
      brand: "iPhone",
      battery: "2716mAh",
      display: {
        size: 5.8,
        resolution: "2436 x 1125",
        type: "Super Retina OLED"
      },
      operatingSystem: "iOS 15"
    }
  },
  xiomi: {
    redmiA2: {
      processor: "Snapdragon 625",
      memory: {
        ram: "2GB",
        storage: "64GB"
      },
      camera: {
        rear: "8MP",
        front: "5MP"
      },
      brand: "Xiaomi",
      battery: "3000mAh",
      display: {
        size: 5.5,
        resolution: "1440 x 720",
        type: "IPS LCD"
      },
      operatingSystem: "Android 10"
    },
    redmiNote10: {
      processor: "Snapdragon 678",
      memory: {
        ram: "4GB",
        storage: "128GB"
      },
      camera: {
        rear: "48MP",
        front: "13MP"
      },
      brand: "Xiaomi",
      battery: "5000mAh",
      display: {
        size: 6.43,
        resolution: "2400 x 1080",
        type: "Super AMOLED"
      },
      operatingSystem: "Android 11"
    },
    redmiNote11: {
      processor: "Snapdragon 680",
      memory: {
        ram: "6GB",
        storage: "128GB"
      },
      camera: {
        rear: "50MP",
        front: "13MP"
      },
      brand: "Xiaomi",
      battery: "5000mAh",
      display: {
        size: 6.43,
        resolution: "2400 x 1080",
        type: "AMOLED"
      },
      operatingSystem: "Android 11"
    }
  },
  realme: {
    realmeC11: {
      processor: "MediaTek Helio G35",
      memory: {
        ram: "2GB",
        storage: "32GB"
      },
      camera: {
        rear: "8MP",
        front: "5MP"
      },
      brand: "Realme",
      battery: "5000mAh",
      display: {
        size: 6.5,
        resolution: "1600 x 720",
        type: "IPS LCD"
      },
      operatingSystem: "Android 10"
    },
    realmeC21: {
      processor: "MediaTek Helio G35",
      memory: {
        ram: "4GB",
        storage: "64GB"
      },
      camera: {
        rear: "13MP",
        front: "5MP"
      },
      brand: "Realme",
      battery: "5000mAh",
      display: {
        size: 6.5,
        resolution: "1600 x 720",
        type: "IPS LCD"
      },
      operatingSystem: "Android 10"
    },
    realmeC25: {
      processor: "MediaTek Helio G70",
      memory: {
        ram: "4GB",
        storage: "128GB"
      },
      camera: {
        rear: "48MP",
        front: "8MP"
      },
      brand: "Realme",
      battery: "6000mAh",
      display: {
        size: 6.5,
        resolution: "1600 x 720",
        type: "IPS LCD"
      },
      operatingSystem: "Android 11"
    }
  },
  infinix: {
    infinixHot10: {
      processor: "MediaTek Helio G70",
      memory: {
        ram: "4GB",
        storage: "64GB"
      },
      camera: {
        rear: "16MP",
        front: "8MP"
      },
      brand: "Infinix",
      battery: "5200mAh",
      display: {
        size: 6.78,
        resolution: "1640 x 720",
        type: "IPS LCD"
      },
      operatingSystem: "Android 10"
    },
    infinixNote7: {
      processor: "MediaTek Helio G70",
      memory: {
        ram: "6GB",
        storage: "128GB"
      },
      camera: {
        rear: "48MP",
        front: "16MP"
      },
      brand: "Infinix",
      battery: "5000mAh",
      display: {
        size: 6.95,
        resolution: "1640 x 720",
        type: "IPS LCD"
      },
      operatingSystem: "Android 10"
    },
    infinixZero8: {
      processor: "MediaTek Helio G90T",
      memory: {
        ram: "8GB",
        storage: "128GB"
      },
      camera: {
        rear: "64MP",
        front: "44MP"
      },
      brand: "Infinix",
      battery: "4500mAh",
      display: {
        size: 6.85,
        resolution: "2460 x 1080",
        type: "IPS LCD"
      },
      operatingSystem: "Android 10"
    }
  }
};

// Populate brand dropdown on page load
window.onload = function () {
  const brandSelect = document.getElementById("brand");
  brandSelect.innerHTML = '<option value="">-- Select Brand --</option>';

  Object.keys(mobiles).forEach(brand => {
    const option = document.createElement("option");
    option.value = brand;
    option.textContent = brand.charAt(0).toUpperCase() + brand.slice(1);
    brandSelect.appendChild(option);
  });
};

function populateModels() {
  const brandSelect = document.getElementById("brand");
  const modelSelect = document.getElementById("model");
  const selectedBrand = brandSelect.value;

  modelSelect.innerHTML = '<option value="">-- Select Model --</option>';

  if (selectedBrand && mobiles[selectedBrand]) {
    Object.keys(mobiles[selectedBrand]).forEach(model => {
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

  if (brand && model && mobiles[brand][model]) {
    const phone = mobiles[brand][model];
    resultDiv.innerHTML = `
      <p>You selected:</p>
      <ul>
        <li><strong>Brand:</strong> ${phone.brand}</li>
        <li><strong>Model:</strong> ${model}</li>
        <li><strong>Processor:</strong> ${phone.processor}</li>
        <li><strong>Memory:</strong>
          <ul>
            <li><strong>RAM:</strong> ${phone.memory.ram}</li>
            <li><strong>Storage:</strong> ${phone.memory.storage}</li>
          </ul>
        </li>
        <li><strong>Camera:</strong>
          <ul>
            <li><strong>Rear:</strong> ${phone.camera.rear}</li>
            <li><strong>Front:</strong> ${phone.camera.front}</li>
          </ul>
        </li>
        <li><strong>Display:</strong>
          <ul>
            <li><strong>Size:</strong> ${phone.display.size} inches</li>
            <li><strong>Resolution:</strong> ${phone.display.resolution}</li>
            <li><strong>Type:</strong> ${phone.display.type}</li>
          </ul>
        </li>
        <li><strong>Battery:</strong> ${phone.battery}</li>
        <li><strong>Operating System:</strong> ${phone.operatingSystem}</li>
      </ul>
    `;
  } else {
    resultDiv.innerHTML = `<p style="color: #ff6b6b;">Please select both brand and model.</p>`;
  }
}