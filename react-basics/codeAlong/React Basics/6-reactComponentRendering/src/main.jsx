import { createRoot } from 'react-dom/client';
import { StrictMode, useState } from 'react';

const Header = (props) => {
    console.log(props);
    return (
        <header>
            <h1>{props.title}</h1>
            <span className='total-items'>Items: {props.itemTotal}</span>
        </header>
    );
};

const Counter = () => {
    const [quantity, setQuantity] = useState(0);

    const incrementQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1)
    }

    const decrementQuantity = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    }

    return (
        <div className='quantity'>
            <span className='qty-label'>QTY</span>
            <button className='increment' onClick={incrementQuantity}>+</button>
            <button className='decrement' onClick={decrementQuantity}>-</button>
            <span className='quantity-amount'>{quantity}</span>
        </div>
    );
};

const Item = (props) => {
    return (
        <div className='item'>
            <button className='remove-item' onClick={() => props.removeItem(props.id)}></button>
            <span className='item-name'>{props.name}</span>
            <Counter />
        </div>
    );
};

const App = () => {
    const [items, setItems] = useState([
        {
            name: "Apples",
            id: 1
        },
        {
            name: "Mangoes",
            id: 2
        },
        {
            name: "Avocados",
            id: 3
        },
        {
            name: "Rambutan",
            id: 4
        },
        {
            name: "Oranges",
            id: 5
        },
        {
            name: "Watermelons",
            id: 6
        }
    ]);

    const handleRemoveItem = (id) => {
        setItems(prevItems => prevItems.filter(item => item.id !== id));
    }

    return (
        <div className='grocery-list'>
            <Header
                title='My Grocery List'
                itemTotal={items.length}
            />
            {items.map((item) =>
                <Item
                    name={item.name}
                    id={item.id}
                    key={item.id}
                    removeItem={handleRemoveItem}
                />
            )}
        </div>
    );
};

const root = createRoot(document.getElementById('root'));

root.render(
    <StrictMode>
        <App />
    </StrictMode>
);
