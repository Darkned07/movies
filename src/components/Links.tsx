import Link from "next/link";

type hrefLinksINterface = {
  hrefLink: string;
  linkName: string;
  cls: string;
};

function Links({ hrefLink, linkName, cls }: hrefLinksINterface) {
  return (
    <>
      <Link className={`${cls}`} href={hrefLink}>
        {linkName}
      </Link>
    </>
  );
}

export default Links;
