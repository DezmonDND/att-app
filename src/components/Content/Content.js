import Form from "../Form/Form";
import TopMenu from "../TopMenu/TopMenu";
import "./Content.css";

function Content() {
  return (
    <section className="content">
      <TopMenu></TopMenu>
      <Form></Form>
    </section>
  );
}

export default Content;
