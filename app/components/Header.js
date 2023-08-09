import Link from "next/link";

export default function Header(props) {
  return (
    <>
      <div className="userPhoto">
        <img src={props.imageUrl} alt="photo médaillon user" />
      </div>

      {props.title && <h2>{props.title}</h2>}
      <Link href={props.url || "/"}>
        <img
          className={props.classIcone}
          src={props.iconeSrc}
          alt={props.alt}
        />
      </Link>
    </>
  );
}
