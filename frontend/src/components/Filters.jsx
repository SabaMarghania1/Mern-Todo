export default function Filters({setFilter, filter}) {
  return (
    <section className="filters">
      <div>
        <p
          className={`filter ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          All
        </p>
        <p
          className={`filter ${filter === 'active' ? 'active' : ''}`}
          onClick={() => setFilter('active')}
        >
          Active
        </p>
        <p
          className={`filter ${filter === 'completed' ? 'active' : ''}`}
          onClick={() => setFilter('completed')}
        >
          Completed
        </p>
      </div>
    </section>
  );
}
