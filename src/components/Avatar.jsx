import clsx from "clsx";

export default function Avatar({ className }) {
  return (
    <div className={clsx(className)}>
      <img
        src="/profile_picture.jpg"
        alt="Abel Emmanuel's profile picture."
        className={clsx("rounded-full object-cover", className)}
        loading="lazy"
      />
    </div>
  );
}
