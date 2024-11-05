function renderTextArea(label) {
    return (
        <div className="mb-4">
        <label className="block text-gray-700">{label}</label>
        <textarea className="border border-gray-300 p-2 rounded w-full"></textarea>
      </div>
    )
  }

  export default renderTextArea