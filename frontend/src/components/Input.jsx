export default function Input({setName, name, handleSubmit}) {
  return (
    <form className="form" onSubmit={handleSubmit}>
      <button>
        <span className="circle"></span>
      </button>
      <input
        type="text"
        value={name}
        placeholder="Create a new todo..."
        onChange={e => setName(e.target.value)}
      />
    </form>
  );
}
