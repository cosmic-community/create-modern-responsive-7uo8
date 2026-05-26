'use client';

import { useState } from 'react';

export default function JoinForm() {
  const [formData, setFormData] = useState({
    full_name: '',
    phone: '',
    email: '',
    skill_level: 'Beginner',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    try {
      const res = await fetch('/api/join', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Submit failed');

      setStatus('success');
      setFormData({ full_name: '', phone: '', email: '', skill_level: 'Beginner', message: '' });
    } catch (err) {
      setStatus('error');
      setErrorMsg('Đã có lỗi xảy ra. Vui lòng thử lại.');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-primary-50 border-2 border-primary-200 rounded-xl p-8 text-center">
        <div className="text-5xl mb-4">🎉</div>
        <h3 className="text-2xl font-bold text-primary-700 mb-2">Đăng ký thành công!</h3>
        <p className="text-gray-700 mb-4">
          Cảm ơn bạn đã quan tâm đến câu lạc bộ. Chúng tôi sẽ liên hệ với bạn sớm nhất.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="text-primary-600 font-medium hover:underline"
        >
          Gửi yêu cầu khác
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Họ và tên <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          required
          value={formData.full_name}
          onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition"
          placeholder="Nguyễn Văn A"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Số điện thoại <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition"
            placeholder="0901234567"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition"
            placeholder="email@example.com"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Trình độ
        </label>
        <select
          value={formData.skill_level}
          onChange={(e) => setFormData({ ...formData, skill_level: e.target.value })}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition bg-white"
        >
          <option value="Beginner">Người mới (Beginner)</option>
          <option value="Intermediate">Trung cấp (Intermediate)</option>
          <option value="Advanced">Nâng cao (Advanced)</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Lời nhắn
        </label>
        <textarea
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition resize-none"
          placeholder="Chia sẻ với chúng tôi về bạn..."
        />
      </div>

      {errorMsg && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
          {errorMsg}
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full bg-primary-500 hover:bg-primary-600 disabled:bg-gray-400 text-white font-bold py-3 px-6 rounded-lg transition-colors shadow-md"
      >
        {status === 'submitting' ? 'Đang gửi...' : 'Đăng Ký Tham Gia 🏸'}
      </button>
    </form>
  );
}