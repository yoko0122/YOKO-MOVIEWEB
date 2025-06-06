export const TeamId = ({ directors, writers, stars }) => {
  return (
    <div className="flex flex-col gap-4 border-t border-gray-700 pt-4 space-y-2">
      <div className="flex gap-12">
        <p className=" text-[20px]">Director</p>
        {directors?.slice(0, 1).map((director) => (
          <p key={director}>{director?.name} ·</p>
        ))}
      </div>
      <div className=" flex gap-13 border-t  border-gray-700">
        <p className=" text-[20px]">Writers</p>
        {writers?.slice(0, 3).map((writers) => (
          <p key={writers}>{writers?.name} ·</p>
        ))}
      </div>
      <div className="flex gap-17 border-t  border-gray-700">
        <p className=" text-[20px]">Stars</p>
        {stars?.slice(0, 4).map((stars) => (
          <p key={stars}>{stars?.name} ·</p>
        ))}
      </div>
    </div>
  );
};

export default TeamId;
