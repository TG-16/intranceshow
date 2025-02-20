// Sample data
const listingsData = [
    {
        title: 'JavaScript Textbook',
        price: 30,
        category: 'textbooks',
        description: 'A great resource for learning JavaScript.',
        image: 'images/sample-item1.jpg'
    },
    {
        title: 'Laptop',
        price: 500,
        category: 'electronics',
        description: 'A lightly used laptop in great condition.',
        image: 'images/sample-item2.jpg'
    },
    {
        title: 'Dorm Chair',
        price: 15,
        category: 'supplies',
        description: 'Comfortable chair for dorms.',
        image: 'images/sample-item3.jpg'
    }
];

// Function to display listings
function displayListings(listings) {
    const listingsContainer = document.getElementById('listings');
    listingsContainer.innerHTML = ''; // Clear existing listings

    listings.forEach(listing => {
        const listingElement = document.createElement('div');
        listingElement.classList.add('listing');
        
        listingElement.innerHTML = `
            <img src="${listing.image}" alt="${listing.title}">
            <h3>${listing.title}</h3>
            <p>${listing.description}</p>
            <p class="price">$${listing.price}</p>
        `;
        
        listingsContainer.appendChild(listingElement);
    });
}

// Filter listings by category
function filterByCategory(category) {
    if (category === 'all') {
        displayListings(listingsData);
    } else {
        const filteredListings = listingsData.filter(listing => listing.category === category);
        displayListings(filteredListings);
    }
}

// Handle adding a new listing
document.getElementById('listingForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const price = document.getElementById('price').value;
    const category = document.getElementById('category').value;
    const description = document.getElementById('description').value;
    const image = document.getElementById('image').files[0];

    // Create a new listing object
    const newListing = {
        title,
        price,
        category,
        description,
        image: URL.createObjectURL(image) // Using a URL to display the image
    };

    // Add the new listing to the listings data
    listingsData.push(newListing);

    // Display the updated listings
    displayListings(listingsData);

    // Clear the form
    document.getElementById('listingForm').reset();
});

// Initial display of all listings
displayListings(listingsData);

// Toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    const addListingSection = document.querySelector('.add-listing');
    
    // Toggle dark mode on the header and footer
    header.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');
    addListingSection.classList.toggle('dark-mode');

    // Change button text depending on mode
    const button = document.querySelector('.dark-mode-toggle');
    const circle = document.querySelector('.dark-mode-toggle .circle');
    if (document.body.classList.contains('dark-mode')) {
        button.textContent = 'Switch to Light Mode';
        circle.style.transform = 'translateY(-50%) translateX(12px)';
    } else {
        button.textContent = 'Switch to Dark Mode';
        circle.style.transform = 'translateY(-50%) translateX(5px)';
    }
}


