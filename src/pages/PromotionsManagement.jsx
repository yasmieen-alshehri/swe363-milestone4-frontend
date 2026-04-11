import { useState } from "react";
import AdminSidebar from "../components/AdminSidebar";
import "../styles/promotionsManagement.css";

function PromotionsManagement() {
  const [form, setForm] = useState({
    code: "",
    expiry: "",
    type: "",
    value: "",
  });

  const [saved, setSaved] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
    setSaved(false);
  };

  const handleCreate = () => {
    const numericValue = parseFloat(form.value);

    // 1. Validation Logic: Check if empty or negative
    const isInvalid = !form.code.trim() || !form.expiry || !form.type || !form.value.trim() || numericValue < 0;

    if (isInvalid) {
      setShowErrorModal(true);
      setSaved(false);
      return;
    }

    // 2. If valid: Show inline success only
    setSaved(true);
    setShowErrorModal(false);
  };

  return (
    <div className="purple-page promo-page">
      {/* Error Pop-up Only */}
      {showErrorModal && (
        <div className="custom-modal-overlay">
          <div className="custom-modal-card">
            <h3 className="msg-red">Invalid Input</h3>
            <p>Please make sure all fields are filled and the discount value is not a negative number.</p>
            <div className="modal-actions">
              <button className="confirm-btn" onClick={() => setShowErrorModal(false)}>
                Got it
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="promo-layout">
        <AdminSidebar activePage="promotions" />

        <div className="promo-main">
          <div className="promo-panel">
            <h2>Create Promo Code</h2>

            <div className="promo-form-grid">
              <div className="promo-field">
                <label>Promo Code</label>
                <input
                  type="text"
                  name="code"
                  placeholder="Enter promo code"
                  value={form.code}
                  onChange={handleChange}
                />
              </div>

              <div className="promo-field">
                <label>Expiry Date</label>
                <input
                  type="date"
                  name="expiry"
                  value={form.expiry}
                  onChange={handleChange}
                />
              </div>

              <div className="promo-field">
                <label>Discount Type</label>
                <select name="type" value={form.type} onChange={handleChange}>
                  <option value="" disabled>Select Type</option>
                  <option value="All Products">All Products</option>
                  <option value="Specific Product">Specific Product</option>
                  <option value="Category">Category</option>
                  <option value="Minimum Order">Minimum Order</option>
                </select>
              </div>

              <div className="promo-field">
                <label>Discount Value</label>
                <input
                  type="number"
                  name="value"
                  min="0"
                  placeholder="e.g. 25"
                  value={form.value}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="promo-actions">
              <button className="promo-create-btn" onClick={handleCreate}>
                Create
              </button>
              {/* Inline Success Message */}
              {saved && (
                <span className="promo-saved-text msg-green">
                  Promo code created successfully!
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PromotionsManagement;