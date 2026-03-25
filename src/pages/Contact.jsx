import { useState } from "react";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import Input from "../components/Input";

function Contact() {
  const [form, setForm] = useState({
    fullName: "",
    orderId: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const isLoggedIn = false; 
  const isMobile = window.innerWidth <= 768;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
      login: "",
    }));

    setSuccessMessage("");
  };

  const validateForm = () => {
    const newErrors = {};

    if (!isLoggedIn) {
      newErrors.login = "Please log in to submit a ticket";
    }

    // Full Name: required + no numbers
    if (!form.fullName.trim()) {
      newErrors.fullName = "Name is required";
    } else if (/\d/.test(form.fullName)) {
      newErrors.fullName = "Name cannot contain numbers";
    }

    // Email
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = "Invalid email format";
    }

    // Phone: numbers only
    if (form.phone && !/^\d+$/.test(form.phone)) {
      newErrors.phone = "Phone must contain only numbers";
    }

    // Order ID: numbers only
    if (form.orderId && !/^\d+$/.test(form.orderId)) {
      newErrors.orderId = "Order ID must be numbers only";
    }

    // Subject
    if (!form.subject.trim()) {
      newErrors.subject = "Subject cannot be empty";
    }

    // Message
    if (!form.message.trim()) {
      newErrors.message = "Message cannot be empty";
    }

    return newErrors;
  };

  const handleSubmit = () => {
    const newErrors = validateForm();
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      setSuccessMessage("");
      return;
    }

    setSuccessMessage("Support ticket submitted successfully");

    setForm({
      fullName: "",
      orderId: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="purple-page" style={{ minHeight: "100vh" }}>
      <div
        style={{
          position: "relative",
          zIndex: 2,
          paddingTop: isMobile ? "90px" : "95px",
          width: isMobile ? "94%" : "92%",
          maxWidth: "1200px",
          margin: "0 auto",
          paddingBottom: "40px",
        }}
      >
        <Navbar />

        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: "16px",
            marginTop: "30px",
          }}
        >
          <div
            style={{
              width: isMobile ? "100%" : "32%",
              minHeight: isMobile ? "auto" : "500px",
              background: "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,0.25)",
              borderRadius: "28px",
              padding: isMobile ? "20px 16px" : "24px 20px",
              backdropFilter: "blur(14px)",
              boxSizing: "border-box",
            }}
          >
            <h2
              style={{
                marginTop: 0,
                marginBottom: isMobile ? "18px" : "24px",
                fontSize: isMobile ? "26px" : "32px",
                fontWeight: "600",
                color: "#2f2f2f",
              }}
            >
              FAQs
            </h2>

            <div style={{ marginBottom: "20px" }}>
              <p
                style={{
                  margin: 0,
                  fontSize: isMobile ? "16px" : "18px",
                  fontWeight: "500",
                  color: "#2f2f2f",
                  lineHeight: 1.35,
                }}
              >
                How to get a refund?
              </p>
              <p
                style={{
                  marginTop: "6px",
                  marginBottom: 0,
                  fontSize: isMobile ? "14px" : "16px",
                  color: "#666",
                }}
              >
                Contact us
              </p>
            </div>

            <div>
              <p
                style={{
                  margin: 0,
                  fontSize: isMobile ? "16px" : "18px",
                  fontWeight: "500",
                  color: "#2f2f2f",
                  lineHeight: 1.35,
                }}
              >
                My Order is wrong, what to do?
              </p>
              <p
                style={{
                  marginTop: "6px",
                  marginBottom: 0,
                  fontSize: isMobile ? "14px" : "16px",
                  color: "#666",
                }}
              >
                Contact us
              </p>
            </div>
          </div>

          <div
            style={{
              flex: 1,
              width: "100%",
              minHeight: "500px",
              background: "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,0.25)",
              borderRadius: "28px",
              padding: isMobile ? "20px 16px" : "22px 20px",
              backdropFilter: "blur(14px)",
              boxSizing: "border-box",
            }}
          >
            <h1
              style={{
                marginTop: 0,
                marginBottom: "12px",
                fontSize: isMobile ? "28px" : "32px",
                fontWeight: "600",
                color: "#2f2f2f",
              }}
            >
              Contact Us
            </h1>

            {errors.login && (
              <p
                style={{
                  color: "#ff5a45",
                  fontSize: isMobile ? "14px" : "16px",
                  textAlign: isMobile ? "left" : "center",
                  marginTop: 0,
                  marginBottom: "18px",
                  fontWeight: "500",
                }}
              >
                {errors.login}
              </p>
            )}

            <div
              style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                gap: isMobile ? "12px" : "12px 10px",
                marginBottom: "14px",
              }}
            >
              <Input
                label="Full Name"
                name="fullName"
                placeholder="Username"
                value={form.fullName}
                onChange={handleChange}
                error={errors.fullName}
              />

              <Input
                label="Order Number"
                name="orderId"
                placeholder="No Order"
                value={form.orderId}
                onChange={handleChange}
                error={errors.orderId}
              />

              <Input
                label="Email"
                type="email"
                name="email"
                placeholder="username123@gmail.com"
                value={form.email}
                onChange={handleChange}
                error={errors.email}
              />

              <Input
                label="Phone Number"
                name="phone"
                placeholder="12312312312"
                value={form.phone}
                onChange={handleChange}
                error={errors.phone}
              />
            </div>

            <div style={{ marginBottom: "14px" }}>
              <Input
                label="Subject"
                name="subject"
                placeholder="Refund"
                value={form.subject}
                onChange={handleChange}
                error={errors.subject}
              />
            </div>

            <div style={{ marginBottom: "16px" }}>
              <Input
                label="Message"
                name="message"
                placeholder="I want a refund"
                value={form.message}
                onChange={handleChange}
                error={errors.message}
                textarea
                rows={isMobile ? 5 : 7}
              />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                justifyContent: "flex-end",
                alignItems: isMobile ? "stretch" : "center",
                gap: "12px",
              }}
            >
              <Button
                text="Submit"
                variant="purple"
                style={{
                  width: isMobile ? "100%" : "110px",
                }}
                onClick={handleSubmit}
              />

              {successMessage && (
                <p
                  style={{
                    margin: 0,
                    color: "#39a86f",
                    fontSize: isMobile ? "14px" : "15px",
                    fontWeight: "500",
                    textAlign: isMobile ? "center" : "left",
                  }}
                >
                  {successMessage}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;