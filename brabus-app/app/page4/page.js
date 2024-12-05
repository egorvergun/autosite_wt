"use client";

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    email: "",
    birthYear: "",
    phone: "",
    country: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    password: "",
    email: "",
    birthYear: "",
    phone: "",
    country: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let formErrors = { ...errors };
    let isValid = true;

    if (!formData.name.match(/^[A-Za-z ]+$/)) {
      formErrors.name = "Meno môže obsahovať iba písmená.";
      isValid = false;
    } else {
      formErrors.name = "";
    }

    if (!formData.password) {
      formErrors.password = "Heslo je povinné.";
      isValid = false;
    } else {
      formErrors.password = "";
    }

    if (!formData.email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)) {
      formErrors.email = "Zadajte platný email.";
      isValid = false;
    } else {
      formErrors.email = "";
    }

    if (!formData.birthYear) {
      formErrors.birthYear = "Rok narodenia je povinný.";
      isValid = false;
    } else {
      formErrors.birthYear = "";
    }

    if (!formData.country) {
      formErrors.country = "Krajina pôvodu je povinná.";
      isValid = false;
    } else {
      formErrors.country = "";
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Údaje formulára:", formData);
    }
  };

  return (
    <div
      className="container-fluid"
      style={{
        backgroundImage: "url('BLK.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem",
      }}
    >
      <div
        className="col-12 col-md-8 col-lg-6 p-4"
        style={{
          backgroundColor: "white",
          borderRadius: "10px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2 className="text-center mb-4">Registrácia</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Meno
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <div className="text-danger">{errors.name}</div>}
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Heslo
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <div className="text-danger">{errors.password}</div>}
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <div className="text-danger">{errors.email}</div>}
          </div>
          <div className="mb-3">
            <label htmlFor="birthYear" className="form-label">
              Rok narodenia
            </label>
            <input
              type="date"
              className="form-control"
              id="birthYear"
              name="birthYear"
              value={formData.birthYear}
              onChange={handleChange}
            />
            {errors.birthYear && <div className="text-danger">{errors.birthYear}</div>}
          </div>
          <div className="mb-3">
            <label htmlFor="country" className="form-label">
              Krajina pôvodu
            </label>
            <select
              className="form-select"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
            >
              <option value="">Vyberte krajinu</option>
              <option value="SK">Slovensko</option>
              <option value="CZ">Česká republika</option>
                <option value="DE">Nemecko</option>
                <option value="AT">Rakúsko</option>
                <option value="HU">Maďarsko</option>
                <option value="FR">Francúzsko</option>
                <option value="IT">Taliansko</option>
                <option value="ES">Španielsko</option>
                <option value="PL">Poľsko</option>
                <option value="RO">Rumunsko</option>
                <option value="BG">Bulharsko</option>
                <option value="SE">Švédsko</option>
                <option value="DK">Dánsko</option>
                <option value="FI">Fínsko</option>
                <option value="BE">Belgicko</option>
                <option value="NL">Holandsko</option>
                <option value="IE">Írsko</option>
                <option value="LU">Luxembursko</option>
                <option value="SK">Slovensko</option>
                <option value="JP">Japonsko</option>
                <option value="USA">USA</option>
              {/* Ostatné krajiny */}
            </select>
            {errors.country && <div className="text-danger">{errors.country}</div>}
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Odoslať
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
