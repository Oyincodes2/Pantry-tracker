let pantry = {}; function addItem() { const itemInput = document.getElementById('itemInput'); const itemList = document.getElementById('itemList'); const itemName = itemInput.value.trim().toLowerCase(); if (itemName !== '') { if (pantry[itemName]) { pantry[itemName]++; updateItem(itemName); } else { pantry[itemName] = 1; createNewItem(itemName); } itemInput.value = ''; } } function createNewItem(itemName) { const itemList = document.getElementById('itemList'); const li = document.createElement('li'); li.id = itemName; const span = document.createElement('span'); span.textContent = `${itemName.charAt(0).toUpperCase() + itemName.slice(1)} (1)`; const removeButton = document.createElement('button'); removeButton.textContent = 'Remove'; removeButton.onclick = function() { removeItem(itemName); }; li.appendChild(span); li.appendChild(removeButton); itemList.appendChild(li); } function updateItem(itemName) { const li = document.getElementById(itemName); const span = li.querySelector('span'); span.textContent = `${itemName.charAt(0).toUpperCase() + itemName.slice(1)} (${pantry[itemName]})`; } function removeItem(itemName) { const itemList = document.getElementById('itemList'); const li = document.getElementById(itemName); if (pantry[itemName] > 1) { pantry[itemName]--; updateItem(itemName); } else { delete pantry[itemName]; itemList.removeChild(li); } }
