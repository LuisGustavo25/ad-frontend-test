//Shopping-Cart Page, this show the User´s Cart
"use client";
import React, {useEffect, useState} from 'react';
import {shoppingCartPageTemplate} from "@/app/cart/shoppingCartTemplate.render";

export interface Game {
    id: string;
    genre: string;
    image: string;
    name: string;
    description: string;
    price: number;
    isNew: boolean;
}

export default function Page():React.ReactElement {
    // Shopping Cart State
    const [ShoppingCart, setShoppingCart] = useState<Game[]>([]);
    // Check local storage for the cart on initial load
    useEffect(() => {
        const storedCart = localStorage.getItem('cart');
        if(storedCart){
            setShoppingCart(JSON.parse(storedCart));
        }
    }, []);

    // Update localStorage
    const handleRemoveFromCart = (game: Game) => {
        const updatedCart = ShoppingCart.filter(item => item.id !== game.id); // Filter out the item
        setShoppingCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    return (shoppingCartPageTemplate({ShoppingCart, onRemove: handleRemoveFromCart}));
};