import Link from "next/link";

const Header = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          {" "}
          <Link href="/cars">
            <a>Cars</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
