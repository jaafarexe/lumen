import React, { useState } from 'react';
import { X, Check, ShieldCheck, Lock, CreditCard, ArrowLeft } from 'lucide-react';
import { CartItem } from '../types';
import { FINISH_OPTIONS } from '../data/lampData';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onOrderCompleted: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  onOrderCompleted,
}) => {
  const [formData, setFormData] = useState({
    name: 'Elena Rostova',
    email: 'elena@studioform.se',
    address: '42 Karlavägen, Suite 5B',
    city: 'Stockholm',
    country: 'Sweden',
    postalCode: '114 49',
    cardNumber: '•••• •••• •••• 4829',
    expDate: '09/28',
    cvv: '849',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const estimatedTax = Math.round(subtotal * 0.075);
  const total = subtotal + estimatedTax;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setOrderConfirmed(true);
      setOrderNumber(`LMN-${Math.floor(100000 + Math.random() * 900000)}`);
    }, 900);
  };

  const handleFinish = () => {
    setOrderConfirmed(false);
    onOrderCompleted();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-neutral-900/70 backdrop-blur-sm transition-opacity"
        onClick={!isSubmitting ? onClose : undefined}
      />

      <div className="relative bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl z-10 border border-neutral-200">
        
        {/* Close Button */}
        {!orderConfirmed && (
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 text-neutral-400 hover:text-neutral-900 rounded-lg hover:bg-neutral-100 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        )}

        {orderConfirmed ? (
          /* Confirmation Success State */
          <div className="text-center py-6 space-y-5">
            <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
              <Check className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs font-mono text-emerald-600 font-semibold uppercase tracking-wider">
                Preorder Confirmed
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight mt-1">
                Thank you for your order.
              </h3>
              <p className="text-sm text-neutral-600 mt-2 max-w-sm mx-auto">
                Your order number is <span className="font-mono font-bold text-neutral-900">{orderNumber}</span>. A detailed confirmation receipt has been dispatched to {formData.email}.
              </p>
            </div>

            {/* Receipt Summary Box */}
            <div className="p-4 bg-neutral-50 rounded-2xl border border-neutral-200 text-left text-xs space-y-2">
              <div className="flex justify-between font-semibold text-neutral-900 pb-2 border-b border-neutral-200">
                <span>Shipping Address</span>
                <span>Payment</span>
              </div>
              <div className="flex justify-between text-neutral-600">
                <div>
                  <div className="font-medium text-neutral-800">{formData.name}</div>
                  <div>{formData.address}</div>
                  <div>{formData.city}, {formData.country} {formData.postalCode}</div>
                </div>
                <div className="text-right">
                  <div>Visa ending in 4829</div>
                  <div className="text-neutral-500 font-mono mt-1">Total: ${total} USD</div>
                  <div className="text-emerald-600 font-medium mt-1">Dispatches in 48h</div>
                </div>
              </div>
            </div>

            <button
              onClick={handleFinish}
              className="w-full py-3.5 px-4 bg-neutral-900 hover:bg-neutral-800 text-white font-semibold rounded-xl text-sm transition-colors"
            >
              Back to Studio Homepage
            </button>
          </div>
        ) : (
          /* Checkout Form */
          <div>
            <div className="mb-6">
              <div className="flex items-center gap-1.5 text-xs text-neutral-500 mb-1">
                <Lock className="w-3.5 h-3.5 text-emerald-600" />
                <span>256-Bit SSL Encrypted Preorder</span>
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 tracking-tight">
                Complete Your Preorder
              </h3>
              <p className="text-xs text-neutral-500 mt-1">
                Order Total: <span className="font-mono font-bold text-neutral-900">${total} USD</span> · Includes 30-Day Risk-Free Trial
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Shipping Information */}
              <div className="space-y-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-700 block">
                  1. Shipping Information
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-medium text-neutral-600 mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-neutral-50 border border-neutral-300 rounded-lg text-neutral-900 focus:bg-white focus:outline-none focus:ring-1 focus:ring-neutral-900"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-medium text-neutral-600 mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-neutral-50 border border-neutral-300 rounded-lg text-neutral-900 focus:bg-white focus:outline-none focus:ring-1 focus:ring-neutral-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-medium text-neutral-600 mb-1">Street Address</label>
                  <input
                    type="text"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-neutral-50 border border-neutral-300 rounded-lg text-neutral-900 focus:bg-white focus:outline-none focus:ring-1 focus:ring-neutral-900"
                  />
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="block text-[11px] font-medium text-neutral-600 mb-1">City</label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-neutral-50 border border-neutral-300 rounded-lg text-neutral-900 focus:bg-white focus:outline-none focus:ring-1 focus:ring-neutral-900"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-medium text-neutral-600 mb-1">Country</label>
                    <input
                      type="text"
                      required
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-neutral-50 border border-neutral-300 rounded-lg text-neutral-900 focus:bg-white focus:outline-none focus:ring-1 focus:ring-neutral-900"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-medium text-neutral-600 mb-1">Postal Code</label>
                    <input
                      type="text"
                      required
                      value={formData.postalCode}
                      onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-neutral-50 border border-neutral-300 rounded-lg text-neutral-900 focus:bg-white focus:outline-none focus:ring-1 focus:ring-neutral-900"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Details */}
              <div className="space-y-3 pt-3 border-t border-neutral-200">
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-700 block">
                  2. Payment Method
                </span>
                
                <div>
                  <label className="block text-[11px] font-medium text-neutral-600 mb-1">Card Number</label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      value={formData.cardNumber}
                      onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-xs bg-neutral-50 border border-neutral-300 rounded-lg text-neutral-900 font-mono focus:bg-white focus:outline-none focus:ring-1 focus:ring-neutral-900"
                    />
                    <CreditCard className="w-4 h-4 text-neutral-400 absolute left-3 top-2.5" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-medium text-neutral-600 mb-1">Expires (MM/YY)</label>
                    <input
                      type="text"
                      required
                      value={formData.expDate}
                      onChange={(e) => setFormData({ ...formData, expDate: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-neutral-50 border border-neutral-300 rounded-lg text-neutral-900 font-mono focus:bg-white focus:outline-none focus:ring-1 focus:ring-neutral-900"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-medium text-neutral-600 mb-1">Security CVV</label>
                    <input
                      type="text"
                      required
                      value={formData.cvv}
                      onChange={(e) => setFormData({ ...formData, cvv: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-neutral-50 border border-neutral-300 rounded-lg text-neutral-900 font-mono focus:bg-white focus:outline-none focus:ring-1 focus:ring-neutral-900"
                    />
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 space-y-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-4 bg-neutral-900 hover:bg-neutral-800 disabled:opacity-50 text-white rounded-xl text-sm font-semibold transition-all shadow-sm flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>Securing Preorder...</span>
                  ) : (
                    <span>Authorize ${total} USD Preorder</span>
                  )}
                </button>

                <div className="flex items-center justify-center gap-2 text-[11px] text-neutral-500">
                  <ShieldCheck className="w-3.5 h-3.5 text-neutral-700" />
                  <span>Card will only be billed when your batch ships. Free cancellations anytime.</span>
                </div>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
