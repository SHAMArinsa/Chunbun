// frontend/src/api/contactAPI.ts
const API_BASE = "http://localhost:8000/api/v1";

export const generateOTP = async (email: string, phone: string) => {
  const res = await fetch(`${API_BASE}/otp/generate-otp`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, phone }),
  });

  if (!res.ok) throw new Error("OTP generation failed");
  return res.json();
};

export const verifyOTP = async (
  token: string,
  email_otp: string,
  phone_otp: string
) => {
  const res = await fetch(`${API_BASE}/otp/verify-otp`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token, email_otp, phone_otp }),
  });

  if (!res.ok) throw new Error("OTP verification failed");
  return res.json();
};

export const submitContact = async (data: any) => {
  const res = await fetch(`${API_BASE}/contact/submit-contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error("Contact submission failed");
  return res.json();
};
