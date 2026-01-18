const books = [
    {
        id: 1,
        category: 'classics',
        title: "Pride and Prejudice",
        author: "Jane Austen",
        price: "12.50",
        image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 2,
        category: 'fiction',
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        price: "15.00",
        image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 3,
        category: 'non-fiction',
        title: "Sapiens",
        author: "Yuval Noah Harari",
        price: "22.99",
        image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 4,
        category: 'fiction',
        title: "1984",
        author: "George Orwell",
        price: "14.99",
        image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 5,
        category: 'classics',
        title: "Moby Dick",
        author: "Herman Melville",
        price: "18.50",
        image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 6,
        category: 'non-fiction',
        title: "Educated",
        author: "Tara Westover",
        price: "19.99",
        image: "data:image/jpeg;base64,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"
    },
    {
        id: 7,
        category: 'fiction',
        title: "The Alchemist",
        author: "Paulo Coelho",
        price: "16.00",
        image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 8,
        category: 'classics',
        title: "Little Women",
        author: "Louisa May Alcott",
        price: "13.50",
        image: "https://images.unsplash.com/photo-1629196914375-f7e48f477b6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
];

function createBookCard(book) {
    return `
        <div class="col-6 col-md-4 col-lg-3 book-item" data-category="${book.category}">
            <div class="card h-100 mb-4 position-relative">
                <div class="position-relative overflow-hidden">
                    <img src="${book.image}" class="book-img rounded-1" alt="${book.title}">
                    <div class="position-absolute bottom-0 start-0 w-100 p-3 btn-add-cart">
                         <button class="btn btn-brown w-100 text-white rounded-0 shadow-sm text-uppercase small ls-1 fw-bold order-btn" data-book="${book.title}">Add to Cart</button>
                    </div>
                </div>
                <div class="card-body px-0 pt-3">
                    <h6 class="playfair fw-bold mb-1 fs-5 text-truncate">${book.title}</h6>
                    <p class="text-secondary lora small mb-2 fst-italic">${book.author}</p>
                    <span class="text-brown fw-bold playfair">$${book.price}</span>
                </div>
            </div>
        </div>
    `;
}

function renderBooks(filter = 'all') {
    const container = document.getElementById('book-grid');
    const filtered = filter === 'all'
        ? books
        : books.filter(b => b.category === filter);

    container.innerHTML = filtered.map(createBookCard).join('');
}

// Order Form Logic
const orderModal = new bootstrap.Modal(document.getElementById('orderModal'));
const modalBookTitle = document.getElementById('modalBookTitle');
const orderForm = document.getElementById('orderForm');

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('order-btn')) {
        const bookTitle = e.target.getAttribute('data-book');
        modalBookTitle.textContent = bookTitle;
        orderModal.show();
    }
});

orderForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('customerName').value;
    const phone = document.getElementById('customerPhone').value;
    const address = document.getElementById('customerAddress').value;
    const book = modalBookTitle.textContent;

    alert(`Shukriya ${name}! \n\nApka order "${book}" ke liye receive ho gaya hai.\nHam jald hi apse is number ${phone} par rabta kren gy.\n\nDelivery Address: ${address}`);

    orderForm.reset();
    orderModal.hide();
});

// Filter Tabs
document.querySelectorAll('#book-tabs .nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelectorAll('#book-tabs .nav-link').forEach(l => {
            l.classList.remove('active', 'text-dark');
            l.classList.add('text-secondary');
        });
        e.target.classList.add('active', 'text-dark');
        e.target.classList.remove('text-secondary');

        renderBooks(e.target.dataset.filter);
    });
});

document.addEventListener('DOMContentLoaded', () => renderBooks());
