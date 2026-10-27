/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { InteractiveVisualizer } from './components/InteractiveVisualizer';
import { Features } from './components/Features';
import { TechSpecs } from './components/TechSpecs';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { Faq } from './components/Faq';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { LampFinish, CartItem, PricingPlan } from './types';
import { PRICING_PLANS } from './data/lampData';

export default function App() {
  const [selectedFinish, setSelectedFinish] = useState<LampFinish>('graphite');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  // Initial cart with Studio Pro
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 'init-1',
      planId: 'studio-pro',
      name: 'Lumen Studio Pro',
      finish: 'graphite',
      price: 349,
      quantity: 1,
    },
  ]);

  const handleFinishChange = (finish: LampFinish) => {
    setSelectedFinish(finish);
  };

  const handleAddToCart = (plan: PricingPlan, finish: LampFinish) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.planId === plan.id && item.finish === finish);
      if (existing) {
        return prev.map((item) =>
          item.id === existing.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [
        ...prev,
        {
          id: `item-${Date.now()}`,
          planId: plan.id,
          name: plan.name,
          finish: finish,
          price: plan.price,
          quantity: 1,
        },
      ];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleUpdateItemFinish = (id: string, finish: LampFinish) => {
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, finish } : item))
    );
  };

  const handleScrollToPricing = () => {
    const el = document.getElementById('pricing');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-neutral-900 selection:bg-neutral-900 selection:text-white flex flex-col font-sans">
      
      {/* 1. Navbar adhering to 3-zone contract */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOrderClick={handleScrollToPricing}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero
          selectedFinish={selectedFinish}
          onFinishChange={handleFinishChange}
          onPreorderClick={handleScrollToPricing}
        />

        {/* 3. Interactive Lighting Experience Studio */}
        <InteractiveVisualizer
          selectedFinish={selectedFinish}
          onFinishChange={handleFinishChange}
          onSelectTierClick={handleScrollToPricing}
        />

        {/* 4. Features Bento Grid (6 deep features) */}
        <Features />

        {/* 5. Technical Specifications */}
        <TechSpecs />

        {/* 6. Pricing Section (3 calibrated plans) */}
        <Pricing
          selectedFinish={selectedFinish}
          onFinishChange={handleFinishChange}
          onAddToCart={handleAddToCart}
        />

        {/* 7. Testimonials & Press Validation */}
        <Testimonials />

        {/* 8. Interactive FAQ Accordion */}
        <Faq />

        {/* 9. Final Call-to-Action */}
        <FinalCta onPreorderClick={handleScrollToPricing} />
      </main>

      {/* 10. Quiet Footer */}
      <Footer />

      {/* Slide-over Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onUpdateFinish={handleUpdateItemFinish}
        onProceedToCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
      />

      {/* Complete Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cartItems}
        onOrderCompleted={() => {
          setCartItems([]);
        }}
      />

    </div>
  );
}
