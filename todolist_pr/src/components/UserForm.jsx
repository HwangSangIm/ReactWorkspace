import { useState } from "react";

function UserForm({ addr }) {
  const [form, setForm] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!form.name || !form.email) {
      alert("이름과 이메일을 모두 입력해주세요.");
      return;
    }
    addr(form);
    setForm({ name: "", email: "" }); // 입력값 초기화
  };

  return (
    <div>
      <h3>사용자 추가</h3>
      <input
        type="text"
        name="name"
        placeholder="이름"
        value={form.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="이메일"
        value={form.email}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>추가</button>
    </div>
  );
}

export default UserForm;
