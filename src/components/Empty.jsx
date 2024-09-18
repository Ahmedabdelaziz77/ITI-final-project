// Empty component
function Empty({ resource }) {
  return (
    <div className="text-center my-5 py-5 bg-gray-100 rounded-lg border border-gray-300 text-gray-700">
      <div className="text-5xl text-gray-400 mb-3">🚫</div>
      <p className="text-lg">No {resource} could be found.</p>
    </div>
  );
}

export default Empty;
