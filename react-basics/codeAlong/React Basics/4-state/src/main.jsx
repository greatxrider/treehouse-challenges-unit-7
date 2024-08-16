import { createRoot } from 'react-dom/client';
import { StrictMode, useState } from 'react';

const items = [
    {
        name: "Apples",
        quantity: 6,
        id: 1
    },
    {
        name: "Mangoes",
        quantity: 9,
        id: 2
    },
    {
        name: "Avocados",
        quantity: 10,
        id: 3
    },
    {
        name: "Rambutan",
        quantity: 13,
        id: 4
    },
    {
        name: "Oranges",
        quantity: 15,
        id: 5
    },
    {
        name: "Watermelons",
        quantity: 5,
        id: 6
    },
]

const Header = (props) => {
    console.log(props);
    return (
        <header>
            <h1>{props.title}</h1>
            <span className='total-items'>Items: {props.itemTotal}</span>
        </header>
    );
};

const Counter = (props) => {
    const [quantity, setQuantity] = useState(0);

    const incrementQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1)
        if (props.name == "Apples") {
            setQuantity(prevQuantity => prevQuantity + 1);
        }
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
            <button className='remove-item'></button>
            <span className='item-name'>{props.name}</span>
            <Counter name={props.name} />
        </div>
    );
};

const App = (props) => {
    return (
        <div className='grocery-list'>
            <Header
                title='My Grocery List'
                itemTotal={props.initialList.length}
            />
            {props.initialList.map((item) =>
                <Item
                    name={item.name}
                    key={item.id}
                />
            )}
        </div>
    );
};

const root = createRoot(document.getElementById('root'));

root.render(
    <StrictMode>
        <App initialList={items} />
    </StrictMode>
);
