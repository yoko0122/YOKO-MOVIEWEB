export const TeamId = ({ directors, writers, stars }) => {
  return (
    <div className="flex flex-col gap-4 border-t border-gray-700 pt-4 space-y-2">
      <div className="flex gap-12">
        <p className=" text-[20px]">Director</p>
        {directors?.slice(0, 1).map((director, idx) => (
          <p key={`${director.id || director.name}-${idx}`}>{director?.name} ·</p>
        ))}
      </div>
      <div className=" flex gap-13 border-t  border-gray-700">
        <p className=" text-[20px]">Writers</p>
        {writers?.slice(0, 3).map((writer, idx) => (
          <p key={`${writer.id || writer.name}-${idx}`}>{writer?.name} ·</p>
        ))}
      </div>
      <div className="flex gap-17 border-t  border-gray-700">
        <p className=" text-[20px]">Stars</p>
        {stars?.slice(0, 4).map((star, idx) => (
          <p key={`${star.id || star.name}-${idx}`}>{star?.name} ·</p>
        ))}
      </div>
    </div>
  );
};

export default TeamId;
