export default function FilterElements() {
  return (
    <div className=" flex gap-2 flex-wrap justify-center items-center p-4">
      {/* Search elements */}
      <div className="flex items-center">
        <input
          className="px-2 mr-2 rounded-md border-4 border-teal-500 text-[#0d253f] font-semibold focus:outline-none"
          type="text"
          placeholder="Search"
        />
        <button className="text-[#0d253f] font-bold rounded-md bg-white px-4 border-4 border-teal-500 hover:bg-sky-950 hover:text-white transition-all duration-300">
          Search
        </button>
        <button></button>
      </div>
      {/* Select genre element */}
      <div>
        <select className="text-[#0d253f] font-bold rounded-md bg-white px-2 border-4 border-teal-500 hover:bg-sky-950 hover:text-white focus:outline-none transition-all duration-300">
          <option value="all">All genres</option>
          <option value="action">Action</option>
          <option value="adventure">Adventure</option>
          <option value="animation">Animation</option>
          <option value="comedy">Comedy</option>
          <option value="documentary">Documentary</option>
          <option value="drama">Drama</option>
          <option value="horror">Horror</option>
          <option value="war">War</option>
        </select>
      </div>
      {/* Sort elements */}
      <div>
        <select className="text-[#0d253f] font-bold rounded-md bg-white px-2 border-4 border-teal-500 hover:bg-sky-950 hover:text-white focus:outline-none transition-all duration-300">
          <option value="popular-desc">Most Popular</option>
          <option value="popular-asc">Least Popular</option>
          <option value="rating-asc">Rating Ascending</option>
          <option value="rating-desc">Rating Descending</option>
          <option value="release-asc">Release Date Ascending</option>
          <option value="release-desc">Release Date Descending</option>
          <option value="title-asc">Title (A-Z)</option>
          <option value="title-desc">Title (Z-A)</option>
        </select>
      </div>
    </div>
  );
}
