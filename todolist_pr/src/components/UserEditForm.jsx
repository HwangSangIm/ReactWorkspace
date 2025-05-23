import { useState, useEffect } from "react";

function UserEditForm({ selectedUser, onUpdate, onCancel }) {
  const [form, setForm] = useState({ name: "", email: "" });

  // selectedUser가 바뀔 때마다 폼 초기화
  useEffect(() => {
    if (selectedUser) {
      setForm({ name: selectedUser.name, email: selectedUser.email });
    }
  }, [selectedUser]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!form.name || !form.email) {
      alert("이름과 이메일을 모두 입력해주세요.");
      return;
    }
    onUpdate({ ...selectedUser, name: form.name, email: form.email });
  };

  if (!selectedUser) return null; // 선택된 사용자 없으면 폼 숨기기

  return (
    <div>
      <h3>사용자 수정</h3>
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>저장</button>
      <button onClick={onCancel} style={{ marginLeft: "10px" }}>
        취소
      </button>
    </div>
  );
}

export default UserEditForm;
