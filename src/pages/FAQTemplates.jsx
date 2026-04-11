import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/bubble-logo.png";
import "../styles/faqTemplates.css";

function FAQTemplates() {
  const navigate = useNavigate();

  const [faqs, setFaqs] = useState([
    {
      id: 1,
      question: "How to get a refund?",
      answer: "Contact us",
    },
    {
      id: 2,
      question: "My order is wrong, what to do?",
      answer: "Contact us",
    },
  ]);

  const [selectedFaqId, setSelectedFaqId] = useState(null);
  const [form, setForm] = useState({
    question: "",
    answer: "",
  });

  const [showAddForm, setShowAddForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [message, setMessage] = useState("");

  const handleEdit = (faq) => {
    setSelectedFaqId(faq.id);
    setForm({
      question: faq.question,
      answer: faq.answer,
    });
    setShowEditForm(true);
    setShowAddForm(false);
    setMessage("");
  };

  const handleDelete = (id) => {
    const updatedFaqs = faqs.filter((faq) => faq.id !== id);
    setFaqs(updatedFaqs);

    if (selectedFaqId === id) {
      setSelectedFaqId(null);
      setForm({ question: "", answer: "" });
      setShowEditForm(false);
      setShowAddForm(false);
    }

    setMessage("Deleted!");

    setTimeout(() => {
      setMessage("");
    }, 800);
  };

  const handleAddNew = () => {
    setSelectedFaqId(null);
    setForm({
      question: "",
      answer: "",
    });
    setShowAddForm(true);
    setShowEditForm(false);
    setMessage("");
  };

  const handleSaveEdit = () => {
    if (!form.question.trim() || !form.answer.trim() || !selectedFaqId) return;

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
    if (!form.question.trim() || !form.answer.trim()) return;

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
                    <button
                      className="faq-edit-btn"
                      onClick={() => handleEdit(faq)}
                    >
                      Edit
                    </button>

                    <button
                      className="faq-delete-btn"
                      onClick={() => handleDelete(faq.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="faq-add-row">
              <button className="faq-add-btn" onClick={handleAddNew}>
                Add FAQ
              </button>
            </div>

            {message === "Deleted!" && (
              <div className="faq-inline-message">{message}</div>
            )}
          </div>

          {showEditForm && (
            <div className="faq-form-panel">
              <h3>Edit FAQ</h3>

              <div className="faq-field">
                <label>Question</label>
                <input
                  type="text"
                  placeholder="Question"
                  value={form.question}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, question: e.target.value }))
                  }
                />
              </div>

              <div className="faq-field">
                <label>Answer</label>
                <input
                  type="text"
                  placeholder="Answer"
                  value={form.answer}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, answer: e.target.value }))
                  }
                />
              </div>

              <div className="faq-save-row">
                <button className="faq-save-btn" onClick={handleSaveEdit}>
                  Save Changes
                </button>

                {message === "Saved!" && (
                  <span className="faq-message">{message}</span>
                )}
              </div>
            </div>
          )}

          {showAddForm && (
            <div className="faq-form-panel">
              <h3>Add FAQ</h3>

              <div className="faq-field">
                <label>Question</label>
                <input
                  type="text"
                  placeholder="Question"
                  value={form.question}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, question: e.target.value }))
                  }
                />
              </div>

              <div className="faq-field">
                <label>Answer</label>
                <input
                  type="text"
                  placeholder="Answer"
                  value={form.answer}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, answer: e.target.value }))
                  }
                />
              </div>

              <div className="faq-save-row">
                <button className="faq-save-btn" onClick={handleAdd}>
                  Add
                </button>

                {message === "Added!" && (
                  <span className="faq-message">{message}</span>
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