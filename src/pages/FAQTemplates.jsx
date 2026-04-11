import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/bubble-logo.png";
import "../styles/faqTemplates.css";

function FAQTemplates() {
  const navigate = useNavigate();

  // Initial state for the list of FAQs
  const [faqs, setFaqs] = useState([
    { id: 1, question: "How to get a refund?", answer: "Contact us" },
    { id: 2, question: "My order is wrong, what to do?", answer: "Contact us" },
  ]);

  // States for managing forms and UI feedback
  const [selectedFaqId, setSelectedFaqId] = useState(null);
  const [form, setForm] = useState({ question: "", answer: "" });
  const [showAddForm, setShowAddForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [message, setMessage] = useState("");

  // --- Modal States ---
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [idToDelete, setIdToDelete] = useState(null);

  // Logic: Check if the current form inputs are valid
  const isFormInvalid = !form.question.trim() || !form.answer.trim();

  const handleEdit = (faq) => {
    setSelectedFaqId(faq.id);
    setForm({ question: faq.question, answer: faq.answer });
    setShowEditForm(true);
    setShowAddForm(false);
    setMessage("");
  };

  // Logic: Trigger the custom modal instead of window.confirm
  const triggerDeleteConfirm = (id) => {
    setIdToDelete(id);
    setShowConfirmModal(true);
  };

  const confirmDelete = () => {
    const updatedFaqs = faqs.filter((faq) => faq.id !== idToDelete);
    setFaqs(updatedFaqs);

    if (selectedFaqId === idToDelete) {
      setSelectedFaqId(null);
      setForm({ question: "", answer: "" });
      setShowEditForm(false);
    }

    setShowConfirmModal(false);
    setMessage("Deleted!");
    setTimeout(() => setMessage(""), 1200);
  };

  const handleAddNew = () => {
    setSelectedFaqId(null);
    setForm({ question: "", answer: "" });
    setShowAddForm(true);
    setShowEditForm(false);
    setMessage("");
  };

  const handleSaveEdit = () => {
    if (isFormInvalid || !selectedFaqId) return;

    const updatedFaqs = faqs.map((faq) =>
      faq.id === selectedFaqId
        ? { ...faq, question: form.question, answer: form.answer }
        : faq
    );

    setFaqs(updatedFaqs);
    setMessage("Saved!");

    setTimeout(() => {
      setShowEditForm(false);
      setSelectedFaqId(null);
      setForm({ question: "", answer: "" });
      setMessage("");
    }, 800);
  };

  const handleAdd = () => {
    if (isFormInvalid) return;

    const newFaq = {
      id: Date.now(),
      question: form.question,
      answer: form.answer,
    };

    setFaqs([...faqs, newFaq]);
    setMessage("Added!");

    setTimeout(() => {
      setShowAddForm(false);
      setForm({ question: "", answer: "" });
      setMessage("");
    }, 800);
  };

  return (
    <div className="purple-page faq-page">
      {/* Beautiful Custom Pop-up Modal */}
      {showConfirmModal && (
        <div className="custom-modal-overlay">
          <div className="custom-modal-card">
            <h3>Are you sure?</h3>
            <p>Do you really want to delete this FAQ template?</p>
            <div className="modal-actions">
              <button className="cancel-btn" onClick={() => setShowConfirmModal(false)}>
                Cancel
              </button>
              <button className="confirm-btn" onClick={confirmDelete}>
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="faq-layout">
        <div className="cs-sidebar">
          <div className="cs-logo-card">
            <img src={logo} alt="Bubble Logo" />
          </div>
          <button onClick={() => navigate("/customer-service/tickets")}>
            Ticket Management
          </button>
          <button className="active">FAQ Templates</button>
          <div className="cs-spacer" />

          <button
            onClick={() => {
              localStorage.removeItem("currentUser");
              navigate("/login");
            }}
          >
            Logout
          </button>
        </div>

        <div className="faq-main">
          <div className="faq-list-panel">
            <h2>FAQs</h2>
            <div className="faq-list">
              {faqs.map((faq) => (
                <div key={faq.id} className="faq-list-item">
                  <div className="faq-list-text">
                    <p className="faq-question">{faq.question}</p>
                    <p className="faq-answer-preview">{faq.answer}</p>
                  </div>
                  <div className="faq-item-actions">
                    <button className="faq-edit-btn" onClick={() => handleEdit(faq)}>
                      Edit
                    </button>
                    <button className="faq-delete-btn" onClick={() => triggerDeleteConfirm(faq.id)}>
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="faq-add-row">
              <button className="faq-add-btn" onClick={handleAddNew}>
                + Add FAQ Template
              </button>
            </div>
            {message === "Deleted!" && (
              <div className="faq-inline-message msg-red">{message}</div>
            )}
          </div>

          {(showEditForm || showAddForm) && (
            <div className="faq-form-panel">
              <h3>{showEditForm ? "Edit FAQ" : "Add FAQ"}</h3>
              <div className="faq-field">
                <label>Question</label>
                <input
                  type="text"
                  value={form.question}
                  onChange={(e) => setForm({ ...form, question: e.target.value })}
                />
              </div>
              <div className="faq-field">
                <label>Answer</label>
                <input
                  type="text"
                  value={form.answer}
                  onChange={(e) => setForm({ ...form, answer: e.target.value })}
                />
              </div>
              <div className="faq-save-row">
                <button
                  className="faq-save-btn"
                  onClick={showEditForm ? handleSaveEdit : handleAdd}
                  disabled={isFormInvalid}
                >
                  {showEditForm ? "Save Changes" : "Add"}
                </button>
                {(message === "Saved!" || message === "Added!") && (
                  <span className="faq-message msg-green">{message}</span>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default FAQTemplates;