import React from 'react';
import { X, Plus, Minus, Trash2, ArrowRight, ShieldCheck, Check } from 'lucide-react';
import { CartItem, LampFinish } from '../types';
import { FINISH_OPTIONS } from '../data/lampData';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onUpdateFinish: (id: string, finish: LampFinish) => void;
  onProceedToCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onUpdateFinish,
  onProceedToCheckout,
}) => {
  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 0; // Free global shipping
  const estimatedTax = Math.round(subtotal * 0.075);
  const total = subtotal + estimatedTax;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-neutral-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between">
          
          {/* Header */}
          <div className="p-6 border-b border-neutral-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-bold text-neutral-900">Your Cart</h2>
              <span className="text-xs font-mono text-neutral-500">
                ({items.reduce((acc, i) => acc + i.quantity, 0)} {items.reduce((acc, i) => acc + i.quantity, 0) === 1 ? 'item' : 'items'})
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-neutral-400 hover:text-neutral-900 rounded-lg hover:bg-neutral-100 transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Notice */}
          <div className="px-6 py-2.5 bg-neutral-50 border-b border-neutral-200/80 text-xs text-neutral-600 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-emerald-600" />
              <span>Complimentary worldwide carbon-neutral delivery unlocked</span>
            </div>
            <span className="font-semibold text-emerald-700 font-mono">$0.00</span>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {items.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-12 h-12 rounded-full bg-neutral-100 text-neutral-400 mx-auto flex items-center justify-center">
                  <X className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-neutral-900">Your bag is empty</h3>
                <p className="text-xs text-neutral-500 max-w-xs mx-auto">
                  Explore our 3 calibrated configurations to transform your workspace focus.
                </p>
                <button
                  onClick={onClose}
                  className="px-4 py-2 bg-neutral-900 text-white text-xs font-semibold rounded-lg hover:bg-neutral-800"
                >
                  Browse Hardware
                </button>
              </div>
            ) : (
              items.map((item) => {
                const finishObj = FINISH_OPTIONS.find((f) => f.id === item.finish) || FINISH_OPTIONS[0];
                return (
                  <div
                    key={item.id}
                    className="p-4 rounded-2xl border border-neutral-200/90 bg-neutral-50/50 space-y-3"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h4 className="font-bold text-neutral-900 text-sm">{item.name}</h4>
                        <div className="text-xs text-neutral-500 font-mono mt-0.5">
                          ${item.price} each
                        </div>
                      </div>
                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="p-1.5 text-neutral-400 hover:text-neutral-900 transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Finish Selector in Cart */}
                    <div className="flex items-center justify-between text-xs pt-1">
                      <span className="text-neutral-500 font-medium">Finish:</span>
                      <div className="flex items-center gap-1.5">
                        {FINISH_OPTIONS.map((f) => (
                          <button
                            key={f.id}
                            onClick={() => onUpdateFinish(item.id, f.id)}
                            className={`px-2 py-0.5 rounded text-[11px] font-medium border flex items-center gap-1 transition-all ${
                              item.finish === f.id
                                ? 'bg-white text-neutral-900 border-neutral-900 shadow-xs'
                                : 'bg-transparent text-neutral-500 border-transparent hover:border-neutral-300'
                            }`}
                          >
                            <span
                              className="w-2 h-2 rounded-full border border-black/10"
                              style={{ backgroundColor: f.hex }}
                            />
                            <span>{f.name.split(' ')[0]}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Quantity Stepper & Item Subtotal */}
                    <div className="flex items-center justify-between pt-2 border-t border-neutral-200/60">
                      <div className="flex items-center gap-2 bg-white rounded-lg border border-neutral-200 p-0.5">
                        <button
                          onClick={() => onUpdateQuantity(item.id, -1)}
                          className="p-1 text-neutral-500 hover:text-neutral-900 rounded"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="w-6 text-center font-mono text-xs font-semibold text-neutral-900">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, 1)}
                          className="p-1 text-neutral-500 hover:text-neutral-900 rounded"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="font-mono font-bold text-neutral-900 text-sm tabular-nums">
                        ${item.price * item.quantity}
                      </div>
                    </div>

                  </div>
                );
              })
            )}
          </div>

          {/* Footer Summary & Checkout Button */}
          {items.length > 0 && (
            <div className="p-6 border-t border-neutral-200 bg-white space-y-4">
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-neutral-600">
                  <span>Subtotal</span>
                  <span className="font-mono tabular-nums font-semibold text-neutral-900">${subtotal}</span>
                </div>
                <div className="flex justify-between text-neutral-600">
                  <span>Carbon-Neutral Global Shipping</span>
                  <span className="text-emerald-600 font-mono font-medium">Free</span>
                </div>
                <div className="flex justify-between text-neutral-600">
                  <span>Estimated Sales Tax (7.5%)</span>
                  <span className="font-mono tabular-nums text-neutral-900">${estimatedTax}</span>
                </div>
                <div className="flex justify-between text-sm font-bold text-neutral-900 pt-2 border-t border-neutral-200">
                  <span>Estimated Total</span>
                  <span className="font-mono tabular-nums text-base">${total} USD</span>
                </div>
              </div>

              <button
                onClick={onProceedToCheckout}
                className="w-full py-3.5 px-4 bg-neutral-900 hover:bg-neutral-800 text-white rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-colors shadow-sm"
              >
                <span>Proceed to Secure Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-neutral-500">
                <ShieldCheck className="w-3.5 h-3.5 text-neutral-700" />
                <span>30-Day Risk-Free Trial · 3-Year Hardware Guarantee</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
