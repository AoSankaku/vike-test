import { Counter } from "./Counter.js";
import { useTranslation } from "react-i18next";

export default function Page() {

  const { t } = useTranslation()
  /*
  const c = usePageContext()
  const { data } = c

  useEffect(() => {
    data === "" ? changeLanguage("ja") : changeLanguage(data as string)
  }, [data])
  */

  return (
    <>
      <h1>My Vike app</h1>
      <h2>{t("head.title")}</h2>
      <h3>{"a"}</h3>
      This page is:
      <ul>
        <li>Rendered to HTML.</li>
        <li>
          Interactive. <Counter />
        </li>
      </ul>
      <a href="/">日語</a><br />
      <a href="/en">English</a><br />
    </>
  );
}
