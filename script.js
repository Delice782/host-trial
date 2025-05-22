const locationData = {
    kigali: {
        gasabo: ['Bumbogo', 'Gatsata', 'Gikomero', 'Gisozi', 'Jabana', 'Jali', 'Kacyiru', 'Kimihurura', 'Kimiromko', 'Kinyinya', 'Ndera', 'Nduba', 'Remera', 'Rusororo', 'Rutunga'],
        kicukiro: ['Gahanga', 'Gatenga', 'Gikondo', 'Kagarama', 'Kanombe', 'Kicukiro', 'Kigarama', 'Masaka', 'Niboye', 'Nyarugunga'],
        nyarugenge: ['Gitega', 'Kanyinya', 'Kigali', 'Kimisagara', 'Mageragere', 'Muhima', 'Nyakabanda', 'Nyamirambo', 'Nyarugenge', 'Rwezamenyo']
    },
    north: {
        burera: ['Bungwe', 'Butaro', 'Cyanika', 'Cyeru', 'Gahunga', 'Gatebe', 'Gitovu', 'Kagogo', 'Kinoni', 'Kinyababa', 'Kivuye', 'Nemba', 'Rugarama', 'Rugengabari', 'Ruhunde', 'Rusarabuye', 'Rwerere'],
        gakenke: ['Busengo', 'Coko', 'Cyabingo', 'Gakenke', 'Gashenyi', 'Janja', 'Kamubuga', 'Karambo', 'Kivuruga', 'Mataba', 'Minazi', 'Mugunga', 'Muhondo', 'Muyongwe', 'Muzo', 'Nemba', 'Ruli', 'Rusasa', 'Rushashi'],
        gicumbi: ['Bukure', 'Bwisige', 'Byumba', 'Cyumba', 'Giti', 'Kageyo', 'Kaniga', 'Manyagiro', 'Miyove', 'Mukarange', 'Muko', 'Mutete', 'Nyamiyaga', 'Nyankenke', 'Rubaya', 'Rukomo', 'Rushaki', 'Rutare', 'Ruvune', 'Rwamiko', 'Shangasha'],
        musanze: ['Busogo', 'Cyuve', 'Gacaca', 'Gashaki', 'Gataraga', 'Kimonyi', 'Kinigi', 'Muhoza', 'Muko', 'Musanze', 'Nkotsi', 'Nyange', 'Remera', 'Rwaza', 'Shingiro'],
        rulindo: ['Base', 'Burega', 'Bushoki', 'Buyoga', 'Cyinzuzi', 'Cyungo', 'Kinihira', 'Kisaro', 'Masoro', 'Mbogo', 'Murambi', 'Ngoma', 'Ntarabana', 'Rukozo', 'Rusiga', 'Shyorongi', 'Tumba']
    },
    south: {
        gisagara: ['Gikonko', 'Gishubi', 'Kansi', 'Kibirizi', 'Kigembe', 'Mamba', 'Muganza', 'Mugombwa', 'Mukingo', 'Musha', 'Ndora', 'Nyanza', 'Save'],
        huye: ['Gishamvu', 'Huye', 'Karama', 'Kigoma', 'Kinazi', 'Maraba', 'Mbazi', 'Mukura', 'Ngoma', 'Ruhashya', 'Rusatira', 'Rwaniro', 'Simbi', 'Tumba'],
        kamonyi: ['Gacurabwenge', 'Karama', 'Kayenzi', 'Kayumbu', 'Mugina', 'Musambira', 'Ngamba', 'Nyamiyaga', 'Nyarubaka', 'Rugarika', 'Rukoma', 'Runda'],
        muhanga: ['Cyeza', 'Kabacuzi', 'Kibangu', 'Kiyumba', 'Muhanga', 'Mushishiro', 'Nyabinoni', 'Nyamabuye', 'Nyarusange', 'Rongi', 'Rugendabari', 'Shyogwe'],
        nyamagabe: ['Buruhukiro', 'Cyanika', 'Gasaka', 'Gatare', 'Kaduha', 'Kamegeri', 'Kibirizi', 'Kibumbwe', 'Kitabi', 'Mbazi', 'Mugano', 'Musange', 'Musebeya', 'Mushubi', 'Nkomane', 'Tare', 'Uwinkingi'],
        nyanza: ['Busasamana', 'Busoro', 'Cyabakamyi', 'Kibirizi', 'Kigoma', 'Mukingo', 'Muyira', 'Ntyazo', 'Nyagisozi', 'Rwabicuma'],
        nyaruguru: ['Busanze', 'Cyahinda', 'Kibeho', 'Kivu', 'Mata', 'Muganza', 'Munini', 'Ngera', 'Ngoma', 'Nyabimata', 'Nyagisozi', 'Ruheru', 'Ruramba', 'Rusenge'],
        ruhango: ['Bweramana', 'Byimana', 'Kabagali', 'Kinazi', 'Kinihira', 'Mbuye', 'Mwendo', 'Ntongwe', 'Ruhango']
    },
    east: {
        bugesera: ['Gashora', 'Juru', 'Kamabuye', 'Mareba', 'Mayange', 'Musenyi', 'Mwogo', 'Ngeruka', 'Ntarama', 'Nyamata', 'Nyarugenge', 'Rilima', 'Ruhuha', 'Rweru', 'Shyara'],
        gatsibo: ['Gasange', 'Gatsibo', 'Gitoki', 'Kabarore', 'Kageyo', 'Kiramuruzi', 'Kiziguro', 'Muhura', 'Murambi', 'Ngarama', 'Nyagihanga', 'Remera', 'Rugarama', 'Rwimbogo'],
        kayonza: ['Gahini', 'Kabare', 'Kabarondo', 'Mukarange', 'Murama', 'Murundi', 'Mwiri', 'Ndego', 'Nyamirama', 'Rukara', 'Ruramira', 'Rwinkwavu'],
        kirehe: ['Gahara', 'Gatore', 'Kigarama', 'Kigina', 'Kirehe', 'Mahama', 'Mpanga', 'Musaza', 'Mushikiri', 'Nasho', 'Nyamugari', 'Nyarubuye'],
        ngoma: ['Gashanda', 'Jarama', 'Karembo', 'Kazo', 'Kibungo', 'Mugesera', 'Murama', 'Mutenderi', 'Remera', 'Rukira', 'Rukumberi', 'Rurenge', 'Sake', 'Zaza'],
        nyagatare: ['Gatunda', 'Karama', 'Karangazi', 'Katabagemu', 'Kiyombe', 'Matimba', 'Mimuri', 'Mukama', 'Musheri', 'Nyagatare', 'Rukomo', 'Rwempasha', 'Rwimiyaga', 'Tabagwe'],
        rwamagana: ['Fumbwe', 'Gahengeri', 'Gishali', 'Karenge', 'Kigabiro', 'Muhazi', 'Munyaga', 'Munyiginya', 'Musha', 'Muyumbu', 'Mwulire', 'Nyakaliro', 'Nzige', 'Rubona']
    },
    west: {
        karongi: ['Bwishyura', 'Gishari', 'Gishyita', 'Gitesi', 'Mubuga', 'Murambi', 'Murundi', 'Mutuntu', 'Rubengera', 'Rugabano', 'Ruganda', 'Rwankuba', 'Twumba'],
        ngororero: ['Bwira', 'Gatumba', 'Hindiro', 'Kabaya', 'Kageyo', 'Kavumu', 'Matyazo', 'Muhanda', 'Muhororo', 'Ndaro', 'Ngororero', 'Nyange', 'Sovu'],
        nyabihu: ['Bigogwe', 'Jenda', 'Jomba', 'Kabatwa', 'Karago', 'Kintobo', 'Mukamira', 'Muringa', 'Rambura', 'Rugera', 'Rurembo', 'Shyira'],
        nyamasheke: ['Bushekeri', 'Bushenge', 'Cyato', 'Gihombo', 'Kagano', 'Kanjongo', 'Karambi', 'Karengera', 'Kirimbi', 'Macuba', 'Mahembe', 'Nyabitekeri', 'Rangiro', 'Ruharambuga', 'Shangi'],
        rubavu: ['Bugeshi', 'Busasamana', 'Cyanzarwe', 'Gisenyi', 'Kanama', 'Kanzenze', 'Mudende', 'Nyakiriba', 'Nyamyumba', 'Nyundo', 'Rubavu', 'Rugerero'],
        rusizi: ['Bugarama', 'Butare', 'Bweyeye', 'Gashonga', 'Giheke', 'Gihundwe', 'Gikundamvura', 'Gitambi', 'Kamembe', 'Muganza', 'Mururu', 'Nkanka', 'Nkombo', 'Nkungu', 'Nyakabuye', 'Nyakarenzo', 'Nzahaha', 'Rwimbogo'],
        rutsiro: ['Boneza', 'Gihango', 'Kigeyo', 'Kivumu', 'Manihira', 'Mukura', 'Murunda', 'Musasa', 'Mushonyi', 'Mushubati', 'Nyabirasi', 'Ruhango', 'Rusebeya']
    }
};

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    // Setup location dropdowns
    setupLocationDropdowns('location');
    setupLocationDropdowns('search');

    // Handle contribute form submission
    setupContributeForm();

    // Handle search form submission
    setupSearchForm();

    // Display sample data if no resources exist
    initializeinitialData();
});

// Populate cascading dropdowns
function setupLocationDropdowns(prefix) {
    const provinceSelect = document.getElementById(`${prefix}-province`);
    const districtSelect = document.getElementById(`${prefix}-district`);
    const sectorSelect = document.getElementById(`${prefix}-sector`);

    if (!provinceSelect || !districtSelect || !sectorSelect) return;

    provinceSelect.addEventListener('change', () => {
        const province = provinceSelect.value;
        districtSelect.innerHTML = '<option value="">-- Select District --</option>';
        sectorSelect.innerHTML = '<option value="">-- Select Sector --</option>';

        if (province && locationData[province]) {
            for (const district in locationData[province]) {
                const option = document.createElement('option');
                option.value = district;
                option.textContent = capitalizeFirstLetter(district);
                districtSelect.appendChild(option);
            }
        }
    });

    districtSelect.addEventListener('change', () => {
        const province = provinceSelect.value;
        const district = districtSelect.value;
        sectorSelect.innerHTML = '<option value="">-- Select Sector --</option>';

        if (province && district && locationData[province] && locationData[province][district]) {
            locationData[province][district].forEach(sector => {
                const option = document.createElement('option');
                option.value = sector;
                option.textContent = sector;
                sectorSelect.appendChild(option);
            });
        }
    });
}

// Set up contribute form submission
function setupContributeForm() {
    const form = document.getElementById('resource-form');
    if (!form) return;

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Collect form data
        const data = {
            name: document.getElementById('resource-name').value.trim(),
            category: document.getElementById('category').value,
            province: document.getElementById('location-province').value,
            provinceName: getSelectedText('location-province'),
            district: document.getElementById('location-district').value,
            districtName: getSelectedText('location-district'),
            sector: document.getElementById('location-sector').value,
            description: document.getElementById('description').value.trim(),
            timestamp: new Date().toISOString()
        };

        // Validate required fields
        if (!data.name || !data.category || !data.province || !data.district || !data.sector) {
            alert('Please fill out all required fields.');
            return;
        }

        // Store in local storage
        let resources = JSON.parse(localStorage.getItem('community-resources')) || [];
        resources.push(data);
        localStorage.setItem('community-resources', JSON.stringify(resources));

        // Success message and reset form
        alert('Thank you for contributing! Your resource has been added to the directory.');
        form.reset();
    });
}

// Set up search form submission
function setupSearchForm() {
    const searchForm = document.getElementById('search-form');
    const searchResults = document.getElementById('search-results');

    if (!searchForm || !searchResults) return;

    searchForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Collect search criteria
        const criteria = {
            category: document.getElementById('search-category').value,
            province: document.getElementById('search-province').value,
            district: document.getElementById('search-district').value,
            sector: document.getElementById('search-sector').value
        };

        // Get resources from local storage
        const resources = JSON.parse(localStorage.getItem('community-resources')) || [];

        // Filter resources based on criteria
        const filtered = resources.filter(resource => {
            return (!criteria.category || resource.category === criteria.category) &&
                (!criteria.province || resource.province === criteria.province) &&
                (!criteria.district || resource.district === criteria.district) &&
                (!criteria.sector || resource.sector === criteria.sector);
        });

        // Display results
        displaySearchResults(filtered, searchResults);
    });
}

// Display search results
function displaySearchResults(results, container) {
    container.innerHTML = '';

    if (results.length === 0) {
        container.innerHTML = `
      <div class="no-results">
        <p>No resources found matching your criteria. Try broadening your search or contribute a new resource.</p>
      </div>
    `;
        return;
    }

    results.forEach(resource => {
        const card = document.createElement('div');
        card.className = 'card';

        let categoryIcon = getCategoryIcon(resource.category);

        card.innerHTML = `
      <h4>${resource.name} ${categoryIcon}</h4>
      <p><strong>Category:</strong> ${resource.category}</p>
      <p><strong>Location:</strong> ${resource.sector}, ${capitalizeFirstLetter(resource.district)}, ${getProvinceName(resource.province)}</p>
      <p>${resource.description}</p>
    `;

        container.appendChild(card);
    });
}

// Initialize sample data if no resources exist
function initializeinitialData() {
    const resources = JSON.parse(localStorage.getItem('community-resources')) || [];

    if (resources.length === 0) {
        const initialData = [];
        localStorage.setItem('community-resources', JSON.stringify(initialData));
    }
}

// Helper functions
function capitalizeFirstLetter(string) {
    if (!string) return '';
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getSelectedText(elementId) {
    const select = document.getElementById(elementId);
    if (!select) return '';

    const selectedIndex = select.selectedIndex;
    if (selectedIndex === -1) return '';

    return select.options[selectedIndex].text;
}

function getProvinceName(provinceKey) {
    const provinceNames = {
        'kigali': 'Kigali City',
        'north': 'Northern Province',
        'south': 'Southern Province',
        'east': 'Eastern Province',
        'west': 'Western Province'
    };

    return provinceNames[provinceKey] || provinceKey;
}

function getCategoryIcon(category) {
    const icons = {
        'Clinic / Hospital': '🏥',
        'School / Library': '📚',
        'Bank / Mobile Money': '🏦',
        'Market / Food Supply': '🛒',
        'Water Access': '💧',
        'Community Center': '🏛️',
        'Public Transport': '🚌',
        'Government Office': '🏢'
    };

    return icons[category] || '';
}
