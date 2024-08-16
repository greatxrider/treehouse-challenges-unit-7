import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';

const Header = (props) => {
    console.log(props);
    return (
        <header>
            <h1>{props.title}</h1>
            <span className='total-items'>Items: {props.itemTotal(5)}</span>
        </header>
    );
};

const Counter = (props) => {
    return (
        <div className='quantity'>
            <span className='qty-label'>QTY</span>
            <button className='increment'>+</button>
            <button className='decrement'>-</button>
            <span className='quantity-amount'>{props.quantity}</span>
        </div>
    );
};

const Item = (props) => {
    return (
        <div className='item'>
            <button className='remove-item'></button>
            <span className='item-name'>{props.itemName}</span>
            <Counter quantity={props.itemQuantity} />
        </div>
    );
};

const App = () => {
    return (
        <div className='grocery-list'>
            <Header
                title='My Grocery List'
                itemTotal={n => n + 1}
            />
            <Item
                itemName='Apples'
                itemQuantity={25}
            />
            <Item
                itemName='Mangoes'
                itemQuantity={12}
            />
            <Item
                itemName='Avocado'
                itemQuantity={14}
            />
            <Item
                itemName='Orange'
                itemQuantity={15}
            />
        </div>
    );
};

const root = createRoot(document.getElementById('root'));

root.render(
    <StrictMode>
        <App />
    </StrictMode>
);
